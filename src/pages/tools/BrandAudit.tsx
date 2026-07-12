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

const BrandAudit = () => {
  const [brand, setBrand] = useState('');
  const [assets, setAssets] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { locale, isRTL } = useLocale();
  const copy = getToolPageContent(locale, 'brand-audit');

  usePageMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand.trim()) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setOutput('');
    setIsStreaming(true);

    streamTool({
      tool: 'brand-audit',
      input: {
        'Brand description': brand,
        ...(assets.trim() ? { 'Assets and channels': assets } : {}),
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
    <Layout>
      <ToolWorkbench
        tool="brand-audit"
        title={copy.title}
        description={copy.description}
        eyebrow={copy.eyebrow}
        plate="burgundy"
        submitLabel={copy.submitLabel}
        isLoading={isStreaming}
        output={output}
        onSubmit={handleSubmit}
        inputsSummary={[
          { label: 'Brand', value: brand },
          { label: 'Assets', value: assets },
        ]}
        brief={[
          'Include logo, colors, fonts, and channel examples.',
          'Name inconsistent assets or campaigns.',
          'Describe the brand feeling you want customers to remember.',
        ]}
      >
            <div>
              <Label htmlFor="brand" className="text-sm font-semibold mb-2 block">
                {copy.fields.brandLabel}
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.brandHelp}
              </p>
              <Textarea
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder={copy.fields.brandPlaceholder}
                rows={6}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <Label htmlFor="assets" className="text-sm font-semibold mb-2 block">
                {copy.fields.assetsLabel} <span className="font-normal text-muted-foreground">{copy.fields.optional}</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.fields.assetsHelp}
              </p>
              <Textarea
                id="assets"
                value={assets}
                onChange={(e) => setAssets(e.target.value)}
                placeholder={copy.fields.assetsPlaceholder}
                rows={5}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
      </ToolWorkbench>

      <CTABand
        headline={copy.buildCtaHeadline}
        description={copy.buildCtaDescription}
        primaryCta={{ label: copy.primaryCtaLabel, href: '/book' }}
        secondaryCta={{ label: copy.secondaryCtaLabel, href: '/pricing' }}
        visualKey="palette-halo"
        variant="dark"
      />
    </Layout>
  );
};

export default BrandAudit;
