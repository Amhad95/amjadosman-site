import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ToolInputForm } from '@/components/tools/ToolInputForm';
import { ToolOutputPanel } from '@/components/tools/ToolOutputPanel';
import { CTABand } from '@/components/sections/CTABand';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { streamTool } from '@/lib/streamTool';
import { useToast } from '@/hooks/use-toast';
import { CyberCircuit } from '@/components/ui/cyber-circuit';

const PageCritique = () => {
  const [url, setUrl] = useState('');
  const [copy, setCopy] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Landing Page Critique — Free Conversion Audit | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get a free AI-powered conversion audit of your landing page. Hierarchy analysis, CTA review, friction points, and priority fixes. Free tool from ADSI.');
  }, []);

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
        headline="Landing Page Critique"
        subheadline="Paste your page URL or copy. Get a conversion audit with hierarchy notes, CTA fixes, and ranked priority actions."
        plate="blue"
        rightElement={<CyberCircuit />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Critique Page">
            <div>
              <Label htmlFor="url" className="text-sm font-semibold mb-2 block">
                Page URL <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yoursite.com/landing-page"
              />
            </div>
            <div>
              <Label htmlFor="copy" className="text-sm font-semibold mb-2 block">
                Paste your page copy <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Paste the headline, subheadline, body copy, and CTA text from your page.
              </p>
              <Textarea
                id="copy"
                value={copy}
                onChange={(e) => setCopy(e.target.value)}
                placeholder="Paste your landing page copy here — headline, subheadline, benefits, social proof, CTA..."
                rows={8}
              />
            </div>
            <p className="text-xs text-muted-foreground">Provide a URL, pasted copy, or both.</p>
          </ToolInputForm>

          {(output || isStreaming) && (
            <div className="mt-6">
              <ToolOutputPanel output={output} isStreaming={isStreaming} />
            </div>
          )}
        </div>
      </section>

      <CTABand
        headline="Want us to implement these fixes?"
        description="We redesign and rebuild landing pages for conversion. Fixed scope, clear timeline, clean handover."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default PageCritique;
