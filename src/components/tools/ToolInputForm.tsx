import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useLocale } from '@/lib/locale';
import { CheckCircle2, ClipboardList, Loader2, Sparkles, Target } from 'lucide-react';

interface ToolInputFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  submitLabel?: string;
  className?: string;
  guidance?: string[];
  examples?: string[];
}

export const ToolInputForm: React.FC<ToolInputFormProps> = ({
  children,
  onSubmit,
  isLoading,
  submitLabel = 'Generate',
  className,
  guidance = [],
  examples = [],
}) => {
  const { locale, isRTL } = useLocale();
  const defaultGuidance =
    locale === 'ar'
      ? ['أضف السياق', 'اذكر الأنظمة أو الأدوات', 'حدد النتيجة المطلوبة']
      : locale === 'bg'
        ? ['Добавете контекст', 'Посочете системи или инструменти', 'Опишете желания резултат']
        : locale === 'de'
          ? ['Kontext ergänzen', 'Systeme oder Tools nennen', 'Gewünschtes Ergebnis definieren']
          : locale === 'fr'
            ? ['Ajouter le contexte', 'Nommer les systèmes ou outils', 'Définir le résultat attendu']
            : ['Add context', 'Name systems or tools', 'Define the desired outcome'];
  const localizedGuidance = locale === 'en' ? guidance : [];
  const localizedExamples = locale === 'en' ? examples : [];

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'bg-card border border-border rounded-2xl overflow-hidden shadow-sm',
        isRTL && 'text-right',
        className
      )}
    >
      <div className={cn('border-b border-border bg-muted/35 px-5 py-4 md:px-6', isRTL && 'text-right')}>
        <div className={cn('flex flex-col gap-4 md:flex-row md:items-start md:justify-between', isRTL && 'md:flex-row-reverse')}>
          <div>
            <div className={cn('flex items-center gap-2 text-sm font-semibold text-foreground', isRTL && 'flex-row-reverse')}>
              <ClipboardList className="h-4 w-4 text-primary" />
              {locale === 'ar' ? 'موجز العمل' : 'Working brief'}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {locale === 'ar'
                ? 'كلما كانت التفاصيل أوضح، أصبحت المخرجات أكثر قابلية للتنفيذ.'
                : locale === 'bg'
                  ? 'Колкото по-конкретни са входните данни, толкова по-приложим става резултатът.'
                  : locale === 'de'
                    ? 'Je konkreter die Eingaben sind, desto umsetzbarer wird das Ergebnis.'
                    : locale === 'fr'
                      ? "Plus l'entree est concrete, plus le resultat devient exploitable."
                      : 'The more concrete the input, the more operational the output becomes.'}
            </p>
          </div>
          <div className={cn('flex flex-wrap gap-2', isRTL && 'justify-end')}>
            {(localizedGuidance.length ? localizedGuidance : defaultGuidance).slice(0, 4).map((item) => (
              <span
                key={item}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground',
                  isRTL && 'flex-row-reverse'
                )}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="space-y-5 p-5 md:p-6">
          {children}
        </div>

        <aside className="border-t border-border bg-muted/20 p-5 lg:border-l lg:border-t-0">
          <div className={cn('flex items-center gap-2 text-sm font-semibold text-foreground', isRTL && 'flex-row-reverse')}>
            <Target className="h-4 w-4 text-primary" />
              {locale === 'ar'
                ? 'لتحسين النتيجة'
                : locale === 'bg'
                  ? 'За по-силен резултат'
                  : locale === 'de'
                    ? 'Für ein besseres Ergebnis'
                    : locale === 'fr'
                      ? 'Pour un meilleur resultat'
                      : 'For a stronger result'}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {(localizedExamples.length ? localizedExamples : [
              locale === 'ar'
                ? 'اذكر صاحب القرار والهدف.'
                : locale === 'bg'
                  ? 'Посочете вземащия решение и целта.'
                  : locale === 'de'
                    ? 'Nennen Sie Entscheider und Ziel.'
                    : locale === 'fr'
                      ? 'Indiquez le decideur et l objectif.'
                      : 'Name the decision-maker and goal.',
              locale === 'ar'
                ? 'أضف القيود أو الاستثناءات.'
                : locale === 'bg'
                  ? 'Добавете ограничения или изключения.'
                  : locale === 'de'
                    ? 'Ergaenzen Sie Einschraenkungen oder Ausnahmen.'
                    : locale === 'fr'
                      ? 'Ajoutez les contraintes ou exceptions.'
                      : 'Add constraints or exceptions.',
              locale === 'ar'
                ? 'الصق أمثلة حقيقية عند توفرها.'
                : locale === 'bg'
                  ? 'Поставете реални примери, ако имате.'
                  : locale === 'de'
                    ? 'Fuegen Sie echte Beispiele ein, wenn vorhanden.'
                    : locale === 'fr'
                      ? 'Collez des exemples reels si disponibles.'
                      : 'Paste real examples when available.',
            ]).slice(0, 4).map((example) => (
              <li key={example} className={cn('flex gap-2 leading-relaxed', isRTL && 'flex-row-reverse')}>
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className={cn('border-t border-border bg-background px-5 py-4 md:px-6', isRTL && 'text-right')}>
        <PrimaryButton
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? (locale === 'ar' ? 'جارٍ التحليل...' : 'Analyzing...') : submitLabel}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ToolInputForm;
