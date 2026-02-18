import React, { useState, useRef, useEffect } from 'react';
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

const BrandAudit = () => {
  const [brand, setBrand] = useState('');
  const [assets, setAssets] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Brand Consistency Audit — Free Brand Audit Tool | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get a free AI-powered brand consistency audit. Identify visual inconsistencies, tone issues, and priority fixes for your brand. Free tool from ADSI.');
  }, []);

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
        title="Brand Consistency Audit"
        description="Describe your brand and your assets. Get a consistency report with visual, tone, and priority fixes."
        plate="burgundy"
        rightElement={<ToolHeaderAnimation slug="brand-audit" />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Audit Brand">
            <div>
              <Label htmlFor="brand" className="text-sm font-semibold mb-2 block">
                Describe your brand
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Include your industry, target audience, brand values, colours, fonts, and any brand guidelines you have.
              </p>
              <Textarea
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. We're a B2B SaaS company targeting HR managers. Our brand colours are navy and gold. We have a logo but no formal guidelines. We use Helvetica in some places and Arial in others..."
                rows={6}
                required
              />
            </div>
            <div>
              <Label htmlFor="assets" className="text-sm font-semibold mb-2 block">
                Describe your current assets and channels <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                List your website, social media, email templates, pitch decks, and any other branded materials.
              </p>
              <Textarea
                id="assets"
                value={assets}
                onChange={(e) => setAssets(e.target.value)}
                placeholder="e.g. Website (built in Webflow, uses our brand colours but inconsistent fonts), LinkedIn page (uses different logo version), email templates (plain text, no branding), pitch deck (uses old logo)..."
                rows={5}
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
        headline="Want a proper brand system?"
        description="We build complete brand systems — logo, guidelines, templates, and collateral. Fixed scope, clean handover."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default BrandAudit;
