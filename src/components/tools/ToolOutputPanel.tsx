import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Check, Clock, FileText, ListChecks, Table2, Target, Workflow } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useLocale, getIntlLocale } from '@/lib/locale';

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

  const wordCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));
  const headings = output
    .split('\n')
    .map((line) => line.match(/^#{2,3}\s+(.+)/)?.[1]?.trim())
    .filter(Boolean) as string[];
  const actionItems = output
    .split('\n')
    .filter((line) => /^\s*(?:[-*]|\d+\.)\s+/.test(line))
    .filter((line) => /(fix|build|create|add|remove|track|define|review|connect|update|map|measure|audit|implement|уточ|добав|създа|измер|راجع|أضف|حدد|أنشئ)/i.test(line))
    .slice(0, 7);
  const tableCount = (output.match(/\n\|.+\|\n\|[-:\s|]+\|/g) ?? []).length;

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
            {locale === 'ar' ? 'المخرجات' : 'Output'}
          </span>
          {!isStreaming && wordCount > 0 && (
            <>
              <span>
                {wordCount.toLocaleString(getIntlLocale(locale))}{" "}
                {locale === 'ar' ? 'كلمة' : 'words'}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {readMinutes.toLocaleString(getIntlLocale(locale))}{" "}
                  {locale === 'ar' ? 'دقيقة قراءة' : 'min read'}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <Workflow className="w-3.5 h-3.5" />
                <span>
                  {headings.length.toLocaleString(getIntlLocale(locale))}{" "}
                  {locale === 'ar' ? 'أقسام' : 'sections'}
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
              {locale === 'ar' ? 'جارٍ التوليد...' : 'Generating...'}
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
            <><Check className="w-3.5 h-3.5" /> {locale === 'ar' ? 'تم النسخ' : 'Copied'}</>
          ) : (
            <><Copy className="w-3.5 h-3.5" /> {locale === 'ar' ? 'نسخ' : 'Copy'}</>
          )}
        </button>
      </div>

      {/* Content */}
      {output && (
        <div className="grid gap-3 border-b border-border bg-background px-5 py-4 sm:grid-cols-3 md:px-6">
          <div className={cn('flex items-center gap-3 rounded-xl border border-border bg-muted/25 p-3', isRTL && 'flex-row-reverse')}>
            <Target className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {locale === 'ar' ? 'إجراءات' : 'Actions'}
              </div>
              <div className="text-lg font-semibold text-foreground">{actionItems.length}</div>
            </div>
          </div>
          <div className={cn('flex items-center gap-3 rounded-xl border border-border bg-muted/25 p-3', isRTL && 'flex-row-reverse')}>
            <Table2 className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {locale === 'ar' ? 'جداول' : 'Tables'}
              </div>
              <div className="text-lg font-semibold text-foreground">{tableCount}</div>
            </div>
          </div>
          <div className={cn('flex items-center gap-3 rounded-xl border border-border bg-muted/25 p-3', isRTL && 'flex-row-reverse')}>
            <ListChecks className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {locale === 'ar' ? 'أقسام' : 'Sections'}
              </div>
              <div className="text-lg font-semibold text-foreground">{headings.length}</div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
        {output && (
          <aside className="border-b border-border bg-muted/20 p-5 lg:border-b-0 lg:border-r">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {locale === 'ar' ? 'مخطط النتيجة' : 'Result map'}
            </div>
            <div className="mt-3 space-y-2">
              {headings.slice(0, 8).map((heading) => (
                <div key={heading} className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground">
                  {heading}
                </div>
              ))}
              {headings.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  {locale === 'ar' ? 'سيظهر المخطط عند اكتمال التوليد.' : 'The map will fill in as the response forms.'}
                </p>
              )}
            </div>
          </aside>
        )}

      <div className="p-6 md:p-8">
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
          <div className="prose prose-sm max-w-none
            prose-headings:font-serif prose-headings:text-foreground
            prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-6 prose-h3:text-base
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:leading-relaxed
            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-foreground prose-code:text-xs
            prose-pre:bg-muted prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:text-muted-foreground
            prose-hr:border-border
            prose-table:text-sm">
            <ReactMarkdown>{output}</ReactMarkdown>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ToolOutputPanel;
