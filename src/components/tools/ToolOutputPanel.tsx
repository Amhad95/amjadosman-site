import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check, Clock, FileText, ListChecks, Table2, Target, Workflow } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useLocale, getIntlLocale } from '@/lib/locale';

const outputCopy = {
  en: { output: 'Output', words: 'words', minRead: 'min read', sections: 'sections', generating: 'Generating...', actions: 'Actions', tables: 'Tables', resultMap: 'Result map', mapEmpty: 'The map will fill in as the response forms.', copied: 'Copied', copy: 'Copy' },
  ar: { output: 'المخرجات', words: 'كلمة', minRead: 'دقيقة قراءة', sections: 'أقسام', generating: 'جارٍ التوليد...', actions: 'إجراءات', tables: 'جداول', resultMap: 'مخطط النتيجة', mapEmpty: 'سيظهر المخطط عند اكتمال التوليد.', copied: 'تم النسخ', copy: 'نسخ' },
  de: { output: 'Ergebnis', words: 'Wörter', minRead: 'Min. Lesezeit', sections: 'Abschnitte', generating: 'Wird erstellt...', actions: 'Maßnahmen', tables: 'Tabellen', resultMap: 'Ergebnisübersicht', mapEmpty: 'Die Übersicht füllt sich, sobald das Ergebnis entsteht.', copied: 'Kopiert', copy: 'Kopieren' },
  fr: { output: 'Résultat', words: 'mots', minRead: 'min de lecture', sections: 'sections', generating: 'Génération...', actions: 'Actions', tables: 'Tableaux', resultMap: 'Plan du résultat', mapEmpty: 'Le plan se remplira pendant la génération.', copied: 'Copié', copy: 'Copier' },
  bg: { output: 'Резултат', words: 'думи', minRead: 'мин. четене', sections: 'раздела', generating: 'Генериране...', actions: 'Действия', tables: 'Таблици', resultMap: 'Карта на резултата', mapEmpty: 'Картата ще се попълни с оформянето на резултата.', copied: 'Копирано', copy: 'Копирай' },
} as const;

type MarkdownElement = React.ReactElement<{ children?: React.ReactNode }>;

const elementChildren = (element: MarkdownElement | null) =>
  element ? React.Children.toArray(element.props.children).filter(React.isValidElement) as MarkdownElement[] : [];

const MarkdownTable: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const groups = React.Children.toArray(children).filter(React.isValidElement) as MarkdownElement[];
  const headerGroup = groups[0] ?? null;
  const bodyGroup = groups[1] ?? null;
  const headerRow = elementChildren(headerGroup)[0] ?? null;
  const headers = elementChildren(headerRow).map((cell) => cell.props.children);
  const rows = elementChildren(bodyGroup)
    .map((row) => elementChildren(row));

  return (
    <>
      <div className="mb-6 hidden min-w-0 max-w-full overflow-x-auto rounded-xl border border-border sm:block">
        <table className="w-full max-w-full table-fixed border-collapse text-left text-[11px] sm:text-sm">{children}</table>
      </div>
      <div className="mb-6 space-y-3 sm:hidden">
        {rows.map((row, rowIndex) => (
          <article key={rowIndex} className="rounded-xl border border-border bg-background p-3">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={cn(
                  'grid grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-3 border-b border-border py-2.5 text-xs last:border-b-0',
                  cellIndex === 0 && 'pt-0'
                )}
              >
                <div className="min-w-0 break-words font-semibold text-foreground">
                  {headers[cellIndex] ?? `Field ${cellIndex + 1}`}
                </div>
                <div className="min-w-0 break-words [overflow-wrap:anywhere] text-muted-foreground">
                  {cell.props.children}
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  );
};

interface ToolOutputPanelProps {
  output: string;
  isStreaming: boolean;
  className?: string;
}

export const ToolOutputPanel: React.FC<ToolOutputPanelProps> = ({
  output,
  isStreaming,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const { locale, isRTL } = useLocale();
  const copy = outputCopy[locale] ?? outputCopy.en;

  const wordCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));
  const headings = output
    .split('\n')
    .map((line) => line.match(/^#{2,3}\s+(.+)/)?.[1]?.trim())
    .filter(Boolean) as string[];
  const actionItems = output
    .split('\n')
    .filter((line) => /^\s*(?:[-*]|\d+\.)\s+/.test(line))
    .filter((line) => /(fix|build|create|add|remove|track|define|review|connect|update|map|measure|audit|implement|define|plan|fixer|créer|ajouter|supprimer|suivre|définir|réviser|connecter|mesurer|auditer|umsetzen|prüfen|erstellen|hinzufügen|entfernen|messen|definieren|добав|създа|измер|опред|пров|راجع|أضف|حدد|أنشئ)/i.test(line))
    .slice(0, 7);
  const tableDivider = new RegExp("(?:^|\\n)\\|.+\\|\\n\\|[" + "-:" + "\\s|]+\\|", "g");
  const tableCount = (output.match(tableDivider) ?? []).length;

  const handleCopy = useCallback(() => {
    if (!output) return;
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [output]);

  if (!output && !isStreaming) return null;

  return (
    <div className={cn('bg-card border border-border rounded-2xl overflow-hidden shadow-sm', isRTL && 'text-right', className)}>
      {/* Header bar */}
      <div className={cn('flex items-center justify-between px-6 py-4 border-b border-border bg-muted/50', isRTL && 'flex-row-reverse')}>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <FileText className="w-4 h-4" />
            {copy.output}
          </span>
          {!isStreaming && wordCount > 0 && (
            <>
              <span>
                {wordCount.toLocaleString(getIntlLocale(locale))}{" "}
                {copy.words}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {readMinutes.toLocaleString(getIntlLocale(locale))}{" "}
                  {copy.minRead}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <Workflow className="w-3.5 h-3.5" />
                <span>
                  {headings.length.toLocaleString(getIntlLocale(locale))}{" "}
                  {copy.sections}
                </span>
              </span>
            </>
          )}
          {isStreaming && (
            <span className="flex items-center gap-2">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:300ms]" />
              </span>
              {copy.generating}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          disabled={!output || isStreaming}
          className={cn(
            'flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all border border-border',
            output && !isStreaming
              ? 'hover:bg-accent text-foreground cursor-pointer'
              : 'text-muted-foreground cursor-not-allowed opacity-50'
          )}
        >
          {copied ? (
            <><Check className="w-3.5 h-3.5" /> {copy.copied}</>
          ) : (
            <><Copy className="w-3.5 h-3.5" /> {copy.copy}</>
          )}
        </button>
      </div>

      {/* Content */}
      {output && (
        <div className="grid gap-3 border-b border-border bg-background px-5 py-4 sm:grid-cols-3 md:px-6">
          <div className={cn('flex items-center gap-3 rounded-xl border tool-accent-border tool-accent-soft p-3', isRTL && 'flex-row-reverse')}>
            <Target className="h-4 w-4 tool-accent-text" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {copy.actions}
              </div>
              <div className="text-lg font-semibold text-foreground">{actionItems.length}</div>
            </div>
          </div>
          <div className={cn('flex items-center gap-3 rounded-xl border tool-accent-border tool-accent-soft p-3', isRTL && 'flex-row-reverse')}>
            <Table2 className="h-4 w-4 tool-accent-text" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {copy.tables}
              </div>
              <div className="text-lg font-semibold text-foreground">{tableCount}</div>
            </div>
          </div>
          <div className={cn('flex items-center gap-3 rounded-xl border tool-accent-border tool-accent-soft p-3', isRTL && 'flex-row-reverse')}>
            <ListChecks className="h-4 w-4 tool-accent-text" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {copy.sections}
              </div>
              <div className="text-lg font-semibold text-foreground">{headings.length}</div>
            </div>
          </div>
        </div>
      )}

      <div className="grid min-w-0 gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
        {output && (
          <aside className="border-b border-border bg-muted/20 p-5 lg:border-b-0 lg:border-r">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {copy.resultMap}
            </div>
            <div className="mt-3 space-y-2">
              {headings.slice(0, 8).map((heading) => (
                <div key={heading} className="rounded-lg border tool-accent-border bg-background px-3 py-2 text-sm text-foreground">
                  {heading}
                </div>
              ))}
              {headings.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  {copy.mapEmpty}
                </p>
              )}
            </div>
          </aside>
        )}

      <div className="min-w-0 p-6 md:p-8">
        {isStreaming && !output && (
          <div className="space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-5 w-1/2 mt-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {output && (
          <div className="max-w-none text-sm leading-relaxed text-foreground">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="mb-4 mt-0 font-serif text-2xl text-foreground">{children}</h1>,
                h2: ({ children }) => <h2 className="mb-3 mt-8 border-b border-border pb-2 font-serif text-xl text-foreground first:mt-0">{children}</h2>,
                h3: ({ children }) => <h3 className="mb-2 mt-6 text-base font-semibold text-foreground">{children}</h3>,
                p: ({ children }) => <p className="mb-4 text-muted-foreground">{children}</p>,
                ul: ({ children }) => <ul className="mb-5 list-disc space-y-2 pl-5 text-muted-foreground">{children}</ul>,
                ol: ({ children }) => <ol className="mb-5 list-decimal space-y-2 pl-5 text-muted-foreground">{children}</ol>,
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                code: ({ children }) => <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">{children}</code>,
                pre: ({ children }) => <pre className="mb-5 overflow-x-auto rounded-xl border border-border bg-muted p-4 text-sm">{children}</pre>,
                table: ({ children }) => <MarkdownTable>{children}</MarkdownTable>,
                thead: ({ children }) => <thead className="tool-accent-soft text-foreground">{children}</thead>,
                th: ({ children }) => <th className="break-words border-b border-border px-2 py-2 font-semibold sm:px-4 sm:py-3">{children}</th>,
                td: ({ children }) => <td className="break-words [overflow-wrap:anywhere] border-b border-border px-2 py-2 align-top text-muted-foreground last:border-b-0 sm:px-4 sm:py-3">{children}</td>,
                blockquote: ({ children }) => <blockquote className="mb-5 border-l-4 tool-accent-border bg-muted/40 px-4 py-3 text-muted-foreground">{children}</blockquote>,
              }}
            >
              {output}
            </ReactMarkdown>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ToolOutputPanel;
