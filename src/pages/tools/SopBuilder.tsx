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

const SopBuilder = () => {
  const [process, setProcess] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const copy = getToolPageContent(locale, 'sop-builder');

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'sop-builder',
      input: { 'Process description': process },
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
        tool="sop-builder"
        title={copy.title}
        description={copy.description}
        eyebrow={copy.eyebrow}
        plate="violet"
        submitLabel={copy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'Process', value: process },
        ]}
        brief={[
          'Explain the process as a teammate would do it today.',
          'Include tools, templates, approvals, and timing.',
          'Mention edge cases a new hire would miss.',
        ]}
      >
            <div>
              <Label htmlFor="process" className="text-sm font-semibold mb-2 block">
                {copy.fields.processLabel}
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.processHelp}
              </p>
              <Textarea
                id="process"
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                placeholder={copy.fields.processPlaceholder}
                rows={7}
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
        visualKey="document-totem"
        variant="dark"
      />
    </Layout>
  );
};

export default SopBuilder;
