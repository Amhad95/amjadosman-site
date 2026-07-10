import React, { useState, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ToolWorkbench } from '@/components/tools/ToolWorkbench';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { getToolPageContent } from '@/lib/toolPageContent';

const KpiAudit = () => {
  const [metrics, setMetrics] = useState('');
  const [context, setContext] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const copy = getToolPageContent(locale, 'kpi-audit');

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!metrics.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'kpi-audit',
      input: {
        'Current metrics list': metrics,
        ...(context.trim() ? { 'Business context': context } : {}),
      },
      locale,
      signal: abortRef.current.signal,
      onDelta: (chunk) => setOutput((prev) => prev + chunk),
      onDone: () => setIsStreaming(false),
      onError: (message) => {
        setIsStreaming(false);
        toast({ title: copy.errorTitle, description: message, variant: 'destructive' });
      },
    });
  };

  return (
    <Layout motionLevel="none">
      <ToolWorkbench
        tool="kpi-audit"
        title={copy.title}
        description={copy.description}
        eyebrow={copy.eyebrow}
        plate="navy"
        submitLabel={copy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'Metrics', value: metrics },
          { label: 'Context', value: context },
        ]}
        brief={[
          'Put one metric per line when possible.',
          'Add the business model and current growth goal.',
          'Mention which numbers are discussed but never acted on.',
        ]}
      >
            <div>
              <Label htmlFor="metrics" className="text-sm font-semibold mb-2 block">
                {copy.fields.metricsLabel}
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.metricsHelp}
              </p>
              <Textarea
                id="metrics"
                value={metrics}
                onChange={(e) => setMetrics(e.target.value)}
                placeholder={copy.fields.metricsPlaceholder}
                rows={8}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="context" className="text-sm font-semibold mb-2 block">
                {copy.fields.contextLabel} <span className="font-normal text-muted-foreground">{copy.fields.optional}</span>
              </Label>
              <Textarea
                id="context"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder={copy.fields.contextPlaceholder}
                rows={3}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
      </ToolWorkbench>

      <CTABand
        headline={copy.buildCtaHeadline}
        description={copy.buildCtaDescription}
        primaryCta={{ label: copy.primaryCtaLabel, href: '/book' }}
        secondaryCta={{ label: copy.secondaryCtaLabel, href: '/pricing' }}
        visualKey="signal-needle"
        variant="dark"
      />
    </Layout>
  );
};

export default KpiAudit;
