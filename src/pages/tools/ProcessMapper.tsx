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

const ProcessMapper = () => {
  const [workflow, setWorkflow] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const copy = getToolPageContent(locale, 'process-mapper');

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workflow.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'process-mapper',
      input: { 'Workflow description': workflow },
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
        tool="process-mapper"
        title={copy.title}
        description={copy.description}
        eyebrow={copy.eyebrow}
        plate="emerald"
        submitLabel={copy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'Workflow', value: workflow },
        ]}
        brief={[
          'Describe the real workflow, including messy handoffs.',
          'Name each role, tool, and approval point.',
          'Add what usually delays or breaks the process.',
        ]}
      >
            <div>
              <Label htmlFor="workflow" className="text-sm font-semibold mb-2 block">
                {copy.fields.workflowLabel}
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.workflowHelp}
              </p>
              <Textarea
                id="workflow"
                value={workflow}
                onChange={(e) => setWorkflow(e.target.value)}
                placeholder={copy.fields.workflowPlaceholder}
                rows={8}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
      </ToolWorkbench>

      <CTABand
        headline={copy.buildCtaHeadline}
        description={copy.buildCtaDescription}
        primaryCta={{ label: copy.primaryCtaLabel, href: '/book' }}
        secondaryCta={{ label: copy.secondaryCtaLabel, href: '/pricing' }}
        visualKey="route-prism"
        variant="dark"
      />
    </Layout>
  );
};

export default ProcessMapper;
