import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ToolInputForm } from '@/components/tools/ToolInputForm';
import { ToolOutputPanel } from '@/components/tools/ToolOutputPanel';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { CyberPercentage } from '@/components/ui/cyber-percentage';

const KpiAudit = () => {
  const [metrics, setMetrics] = useState('');
  const [context, setContext] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'KPI Audit — Free Metrics Review Tool | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get a free AI-powered KPI audit. Identify vanity metrics, missing indicators, and build a healthier measurement framework. Free tool from ADSI.');
  }, []);

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
      signal: abortRef.current.signal,
      onDelta: (chunk) => setOutput((prev) => prev + chunk),
      onDone: () => setIsStreaming(false),
      onError: (message) => {
        setIsStreaming(false);
        toast({ title: 'Error', description: message, variant: 'destructive' });
      },
    });
  };

  return (
    <Layout>
      <Hero
        headline="KPI Audit"
        subheadline="List the metrics you currently track. Get a brutally honest audit — what's vanity, what's missing, and what to actually measure."
        plate="navy"
        rightElement={<CyberPercentage />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Audit KPIs">
            <div>
              <Label htmlFor="metrics" className="text-sm font-semibold mb-2 block">
                List your current metrics
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                List every metric your team tracks — in meetings, dashboards, or reports. One per line is easiest.
              </p>
              <Textarea
                id="metrics"
                value={metrics}
                onChange={(e) => setMetrics(e.target.value)}
                placeholder={`e.g.\nWebsite visitors (monthly)\nLinkedIn followers\nRevenue (monthly)\nNumber of proposals sent\nEmail open rate\nCustomer satisfaction score\nNew leads from ads`}
                rows={8}
                required
              />
            </div>
            <div>
              <Label htmlFor="context" className="text-sm font-semibold mb-2 block">
                Business context <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="context"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g. B2B services company, 12 staff, EUR 2M revenue, growth stage. Main goal is increasing qualified pipeline from inbound..."
                rows={3}
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
        headline="Want to implement a proper reporting framework?"
        description="We design and build operational dashboards connected to your real data. Stop pulling numbers from five different places."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default KpiAudit;
