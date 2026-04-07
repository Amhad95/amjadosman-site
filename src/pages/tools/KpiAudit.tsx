import React, { useState, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CompactPageHeader } from '@/components/shared/CompactPageHeader';
import { ToolInputForm } from '@/components/tools/ToolInputForm';
import { ToolOutputPanel } from '@/components/tools/ToolOutputPanel';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { ToolHeaderAnimation } from '@/components/tools/ToolHeaderAnimation';
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
    <Layout motionLevel="subtle">
      <CompactPageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        plate="navy"
        rightElement={<ToolHeaderAnimation slug="kpi-audit" />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel={copy.submitLabel}>
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
          </ToolInputForm>

          {(output || isStreaming) && (
            <div className="mt-6">
              <ToolOutputPanel output={output} isStreaming={isStreaming} />
            </div>
          )}
        </div>
      </section>

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
