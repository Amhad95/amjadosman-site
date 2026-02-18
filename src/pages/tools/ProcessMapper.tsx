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

const ProcessMapper = () => {
  const [workflow, setWorkflow] = useState('');
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Process Flow Mapper — Free Workflow Analysis Tool | ADSI';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Turn a workflow description into a structured process map with steps, decision points, and improvement opportunities. Free AI tool from ADSI.');
  }, []);

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
        title="Process Flow Mapper"
        description="Describe how a workflow actually runs. Get a structured map with steps, decision points, and bottleneck analysis."
        plate="emerald"
        rightElement={<ToolHeaderAnimation slug="process-mapper" />}
      />

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ToolInputForm onSubmit={handleSubmit} isLoading={isStreaming} submitLabel="Map Process">
            <div>
              <Label htmlFor="workflow" className="text-sm font-semibold mb-2 block">
                Describe your workflow
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                Describe how the process actually works — who does what, in what order, what decisions get made, what tools are used. Be as specific as possible.
              </p>
              <Textarea
                id="workflow"
                value={workflow}
                onChange={(e) => setWorkflow(e.target.value)}
                placeholder="e.g. A client submits a support request via email. Our support team reads it and either handles it directly or escalates to the technical team. If escalated, the technical team investigates and sends a response within 24 hours. If the client isn't satisfied, the case goes to a senior..."
                rows={8}
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
        headline="Want to implement this properly?"
        description="We turn process maps into documented SOPs, SharePoint workflows, and operational software. Fixed scope, clean handover."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
        variant="dark"
      />
    </Layout>
  );
};

export default ProcessMapper;
