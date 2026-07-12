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

const PageCritique = () => {
  const [url, setUrl] = useState('');
  const [copy, setCopy] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const toolCopy = getToolPageContent(locale, 'page-critique');

  usePageMeta({
    title: toolCopy.metaTitle,
    description: toolCopy.metaDescription,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() && !copy.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'page-critique',
      input: {
        ...(url.trim() ? { 'Page URL': url } : {}),
        ...(copy.trim() ? { 'Page copy': copy } : {}),
      },
      locale,
      signal: abortRef.current.signal,
      onDelta: (chunk) => setOutput((prev) => prev + chunk),
      onDone: () => setIsStreaming(false),
      onError: (message) => {
        setIsStreaming(false);
        toast({ title: toolCopy.errorTitle, description: message, variant: 'destructive' });
      },
    });
  };

  return (
    <Layout>
      <ToolWorkbench
        tool="page-critique"
        title={toolCopy.title}
        description={toolCopy.description}
        eyebrow={toolCopy.eyebrow}
        plate="blue"
        submitLabel={toolCopy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'URL', value: url },
          { label: 'Copy', value: copy },
        ]}
        brief={[
          'Paste above-the-fold copy and all CTA labels.',
          'Include the target customer and conversion goal.',
          'Mention traffic source if the page is campaign-specific.',
        ]}
      >
            <div>
              <Label htmlFor="url" className="text-sm font-semibold mb-2 block">
                {toolCopy.fields.urlLabel} <span className="font-normal text-muted-foreground">{toolCopy.fields.optional}</span>
              </Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={toolCopy.fields.urlPlaceholder}
                dir="ltr"
              />
            </div>
            <div>
              <Label htmlFor="copy" className="text-sm font-semibold mb-2 block">
                {toolCopy.fields.copyLabel} <span className="font-normal text-muted-foreground">{toolCopy.fields.optional}</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {toolCopy.fields.copyHelp}
              </p>
              <Textarea
                id="copy"
                value={copy}
                onChange={(e) => setCopy(e.target.value)}
                placeholder={toolCopy.fields.copyPlaceholder}
                rows={8}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            <p className="text-xs text-muted-foreground">{toolCopy.fields.note}</p>
      </ToolWorkbench>

      <CTABand
        headline={toolCopy.buildCtaHeadline}
        description={toolCopy.buildCtaDescription}
        primaryCta={{ label: toolCopy.primaryCtaLabel, href: '/book' }}
        secondaryCta={{ label: toolCopy.secondaryCtaLabel, href: '/pricing' }}
        visualKey="focus-lens"
        variant="dark"
      />
    </Layout>
  );
};

export default PageCritique;
