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

const SopBuilder = () => {
  const [process, setProcess] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'SOP Draft Builder — Free SOP Generator | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Generate a complete, structured Standard Operating Procedure from a messy process description. Free AI tool from ADSI.');
  }, []);

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
        title="SOP Draft Builder"
        description="Describe any process in plain English. Get a complete, structured SOP document in seconds."
        plate="violet"
        rightElement={<ToolHeaderAnimation slug="sop-builder" />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Build SOP">
            <div>
              <Label htmlFor="process" className="text-sm font-semibold mb-2 block">
                Describe the process
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Write as much or as little as you know. Include who does what, what tools are involved, and what the output should be.
              </p>
              <Textarea
                id="process"
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                placeholder="e.g. When a new client signs up, our sales team sends them a welcome email, then a member of the ops team schedules an onboarding call, then we create their workspace and send login details..."
                rows={7}
                required
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
        headline="Want us to implement this SOP properly?"
        description="We turn AI-generated drafts into a complete, maintained SOP library — with role mapping, version control, and a SharePoint home."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default SopBuilder;
