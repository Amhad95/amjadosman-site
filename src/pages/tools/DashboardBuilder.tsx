import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CompactPageHeader } from '@/components/shared/CompactPageHeader';
import { ToolInputForm } from '@/components/tools/ToolInputForm';
import { ToolOutputPanel } from '@/components/tools/ToolOutputPanel';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { ToolHeaderAnimation } from '@/components/tools/ToolHeaderAnimation';

const DashboardBuilder = () => {
  const [audience, setAudience] = useState('');
  const [needs, setNeeds] = useState('');
  const [dataSources, setDataSources] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Dashboard Requirements Builder — Free Dashboard Spec Tool | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Generate a complete dashboard specification from your reporting needs. KPIs, data sources, layout recommendations. Free AI tool from ADSI.');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!needs.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'dashboard-builder',
      input: {
        ...(audience.trim() ? { 'Dashboard audience': audience } : {}),
        'Reporting needs': needs,
        ...(dataSources.trim() ? { 'Current data sources': dataSources } : {}),
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
      <CompactPageHeader
        eyebrow="AI tool"
        title="Dashboard Requirements Builder"
        description="Describe what you need to see and why. Get a complete dashboard specification with KPIs, data sources, and layout recommendations."
        plate="astral"
        rightElement={<ToolHeaderAnimation slug="dashboard-builder" />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Build Spec">
            <div>
              <Label htmlFor="audience" className="text-sm font-semibold mb-2 block">
                Who is the dashboard for? <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="audience"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="e.g. CEO and senior leadership team, weekly review"
              />
            </div>
            <div>
              <Label htmlFor="needs" className="text-sm font-semibold mb-2 block">
                What do you need to track and why?
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Describe the questions you need the dashboard to answer. What decisions will it support?
              </p>
              <Textarea
                id="needs"
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                placeholder="e.g. We need to track sales pipeline health, MRR growth, customer churn, and support ticket volume. Currently we pull this manually from three different spreadsheets each Monday..."
                rows={6}
                required
              />
            </div>
            <div>
              <Label htmlFor="sources" className="text-sm font-semibold mb-2 block">
                Current data sources <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="sources"
                value={dataSources}
                onChange={(e) => setDataSources(e.target.value)}
                placeholder="e.g. HubSpot CRM, QuickBooks, Zendesk, plus manual spreadsheets in Google Sheets..."
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
        headline="Want us to build this dashboard?"
        description="We design and deploy operational dashboards connected to your real data sources. No spreadsheet chaos."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default DashboardBuilder;
