import React, { useState, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ToolWorkbench } from '@/components/tools/ToolWorkbench';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { getToolPageContent } from '@/lib/toolPageContent';

const DashboardBuilder = () => {
  const [audience, setAudience] = useState('');
  const [needs, setNeeds] = useState('');
  const [dataSources, setDataSources] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const copy = getToolPageContent(locale, 'dashboard-builder');

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

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
        tool="dashboard-builder"
        title={copy.title}
        description={copy.description}
        eyebrow={copy.eyebrow}
        plate="astral"
        submitLabel={copy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'Audience', value: audience },
          { label: 'Needs', value: needs },
          { label: 'Sources', value: dataSources },
        ]}
        brief={[
          'Name the meeting or decision this dashboard supports.',
          'List current tools, spreadsheets, and data owners.',
          'Mention targets, thresholds, or alerts you already use.',
        ]}
      >
            <div>
              <Label htmlFor="audience" className="text-sm font-semibold mb-2 block">
                {copy.fields.audienceLabel} <span className="font-normal text-muted-foreground">{copy.fields.optional}</span>
              </Label>
              <Input
                id="audience"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder={copy.fields.audiencePlaceholder}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="needs" className="text-sm font-semibold mb-2 block">
                {copy.fields.needsLabel}
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.needsHelp}
              </p>
              <Textarea
                id="needs"
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                placeholder={copy.fields.needsPlaceholder}
                rows={6}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="sources" className="text-sm font-semibold mb-2 block">
                {copy.fields.sourcesLabel} <span className="font-normal text-muted-foreground">{copy.fields.optional}</span>
              </Label>
              <Textarea
                id="sources"
                value={dataSources}
                onChange={(e) => setDataSources(e.target.value)}
                placeholder={copy.fields.sourcesPlaceholder}
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
        visualKey="metric-spine"
        variant="dark"
      />
    </Layout>
  );
};

export default DashboardBuilder;
