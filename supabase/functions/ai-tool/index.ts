import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPTS: Record<string, string> = {
  "page-critique": `You are a conversion rate optimisation expert and UX copywriter. Your job is to critique landing pages and marketing copy.

When given a URL or pasted copy, deliver a structured audit covering:

## Snapshot
Give a 1-10 conversion readiness score, the strongest asset, and the biggest leak.

## Hierarchy Analysis
- Headline clarity and value proposition strength
- Subheadline support
- Visual reading order and F-pattern compliance

## CTA Audit
- CTA placement, specificity, and verb strength
- Above-fold CTA presence
- CTA repetition strategy

## Friction Points
- Trust signals, social proof, form friction, and page-speed concerns if a URL is given

## Priority Fixes
Table format: Priority | Issue | Impact | Effort | Exact fix.

## Quick Wins
Changes that take under 2 hours to implement.

Be direct. Use concrete before/after examples. No marketing fluff.`,

  "sop-builder": `You are an operations consultant specialising in Standard Operating Procedures for small and mid-sized teams.

When given a process description, generate a complete, professional SOP document in this exact structure:

# [Process Name] - Standard Operating Procedure

**Version:** 1.0
**Owner:** [Suggest appropriate role]
**Review cycle:** [Suggest: quarterly / bi-annual / annual]
**Last updated:** [Use today's date if provided in the request context]

## 1. Purpose
One clear sentence explaining why this procedure exists.

## 2. Scope
Who this procedure applies to and what triggers it.

## 3. Roles and Responsibilities
Table format: Role | Responsibility | Handoff.

## 4. Prerequisites
What must be in place before starting.

## 5. Procedure Steps
Numbered steps. Active voice. One action per step. Include decision points with "If X, then Y" format where relevant.

## 6. Quality Checks
How the operator knows the work is complete and correct.

## 7. Notes and Exceptions
Edge cases, exceptions, and important warnings.

## 8. Related Documents
Suggest relevant documents this SOP should link to.

Write for the person doing the work, not for compliance. A new hire should understand this on day one.`,

  "brand-audit": `You are a brand strategist and identity designer with 15 years of experience auditing brand consistency for SMBs and scale-ups.

When given a brand description and asset descriptions, deliver a structured consistency report:

## Snapshot
Rate brand consistency 1-10, identify the highest-risk inconsistency, and name the fastest visible improvement.

## Visual Consistency Analysis
- Logo usage consistency
- Colour palette adherence
- Typography consistency
- Imagery and icon style alignment

## Tone and Voice Analysis
- Copy tone consistency across channels
- Brand language alignment
- Messaging clarity and uniqueness

## Priority Issues
Table format: Rank | Inconsistency | Business impact | Fix | Owner.

## Quick Fixes This Week
Changes implementable without a designer.

## Strategic Recommendations
Longer-term fixes requiring design investment.

## Minimum Viable Brand System Checklist
What they need vs. what they have.

Be specific. Reference the assets described. Give concrete before/after examples where possible.`,

  "process-mapper": `You are a business analyst and process improvement consultant. You turn messy workflow descriptions into clear, structured process maps.

When given a workflow description, output:

## Process Overview
Name, purpose, trigger, and outcome in 3-4 sentences.

## Process Inputs
What enters this process: data, documents, requests, approvals.

## Stakeholders
Table format: Role | Responsibility | Decision rights.

## Process Steps
Table format: Step | Action | Owner | Input | Output | System.

## Decision Points
Key if/then branches with each path described.

## Bottlenecks and Risks
Likely failure points in this workflow.

## Improvement Opportunities
3-5 specific ways to reduce steps, handoffs, or wait time.

## Implementation Notes
What tooling, automation, and documentation would support this process.

Be practical. Focus on what actually happens, not the ideal. Highlight where things typically break.`,

  "dashboard-builder": `You are a business intelligence consultant who designs operational dashboards for SMB leaders and their teams.

When given a description of reporting needs, output a complete dashboard specification:

## Dashboard Purpose
Audience, decision-making context, and update frequency.

## KPI Definitions
Table format: Metric | Definition | Data source | Frequency | Owner | Target or threshold.

## Recommended Visualisations
Match each KPI to its ideal chart type with justification.

## Dashboard Layout
Describe placement: top-row summary cards, secondary charts, detail tables, filters.

## Data Source Mapping
What systems need to be connected and how.

## Alerts and Thresholds
What should trigger a notification and to whom.

## Implementation Complexity Rating
Simple / Medium / Complex with rationale.

## Build Sequence
Prioritised list of what to build first.

Be opinionated. Recommend specific tools where appropriate. Flag where data is likely dirty.`,

  "kpi-audit": `You are a business performance consultant who specialises in KPI architecture for growing teams.

When given a list of metrics a team is tracking, deliver a structured audit:

## KPI Health Score
Overall rating 1-10 with brief rationale.

## Vanity Metrics
Table format: Metric | Why it is weak | Better replacement | How to calculate.

## Missing Metrics
Metrics this business should be tracking but is not. Include why each matters and the likely data source.

## Retained Metrics
Metrics worth keeping with any suggested improvements.

## Leading vs. Lagging Balance
Analysis of whether they are over-indexed on lagging indicators.

## KPI Architecture Recommendation
Suggest a North Star metric and 3-5 supporting metrics organised by financial health, customer/pipeline, operational efficiency, and team performance.

## 30-Day Action Plan
Concrete steps to implement the recommended changes.

Be direct. Challenge assumptions. Most businesses track too many metrics and act on too few.`,
};

const HF_MODELS = [
  "Qwen/Qwen2.5-Coder-7B-Instruct",
  "microsoft/Phi-3.5-mini-instruct",
  "Qwen/Qwen2.5-Coder-1.5B-Instruct",
  "ibm-granite/granite-3.1-2b-instruct",
  "mistralai/Mistral-7B-Instruct-v0.3",
  "HuggingFaceH4/zephyr-7b-beta",
  "google/gemma-2-2b-it",
  "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
];

const getSystemPrompt = (tool: string, locale: string | undefined) => {
  const basePrompt = SYSTEM_PROMPTS[tool];
  if (!basePrompt) return null;

  const outputRules =
    locale === "ar"
      ? `Additional output rules:
- Write the full response in Arabic.
- Use Arabic section headings and bullet points.
- Keep proper nouns, product names, metric names, and URLs in their original form when needed.
- Keep the tone clear, practical, and concise.`
      : locale === "bg"
        ? `Additional output rules:
- Write the full response in Bulgarian.
- Keep proper nouns, product names, metric names, and URLs in their original form when needed.
- Keep the tone clear, practical, and concise.`
        : locale === "de"
          ? `Additional output rules:
- Write the full response in German.
- Keep proper nouns, product names, metric names, and URLs in their original form when needed.
- Keep the tone clear, practical, and concise.`
          : locale === "fr"
            ? `Additional output rules:
- Write the full response in French.
- Keep proper nouns, product names, metric names, and URLs in their original form when needed.
- Keep the tone clear, practical, and concise.`
            : "Additional output rules:\n- Write the full response in English.\n- Keep the tone clear, practical, and concise.";

  return `${basePrompt}

${outputRules}

Always return well-structured Markdown. Prefer tables when comparing issues, metrics, owners, or priorities.`;
};

const inputToMessage = (input: unknown) => {
  if (typeof input === "string") return input.trim();
  if (!input || typeof input !== "object") return "";

  return Object.entries(input as Record<string, unknown>)
    .filter(([, value]) => String(value ?? "").trim().length > 0)
    .map(([key, value]) => `## ${key}\n${String(value).trim()}`)
    .join("\n\n");
};

const escapeSse = (value: unknown) => JSON.stringify(value).replace(/\n/g, "\\n");

const toSseStream = (text: string, model: string) => {
  const encoder = new TextEncoder();
  const chunks = text.match(/[\s\S]{1,90}/g) ?? [text];

  return new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode(`event: meta\ndata: ${escapeSse({ model })}\n\n`));

      for (const content of chunks) {
        controller.enqueue(
          encoder.encode(`data: ${escapeSse({ choices: [{ delta: { content } }] })}\n\n`),
        );
        await new Promise((resolve) => setTimeout(resolve, 8));
      }

      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });
};

const getHuggingFaceCompletion = async (
  token: string,
  systemPrompt: string,
  userMessage: string,
) => {
  const errors: string[] = [];

  for (const model of HF_MODELS) {
    try {
      const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage },
          ],
          max_tokens: 1800,
          temperature: 0.25,
          top_p: 0.9,
          stream: false,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        errors.push(`${model}: ${response.status} ${body.slice(0, 220)}`);
        continue;
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      if (typeof content === "string" && content.trim()) {
        return { model, content: content.trim() };
      }

      errors.push(`${model}: empty completion`);
    } catch (error) {
      errors.push(`${model}: ${error instanceof Error ? error.message : "request failed"}`);
    }
  }

  throw new Error(`All Hugging Face fallback models failed. ${errors.join(" | ")}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { tool, input, locale } = await req.json();
    const systemPrompt = getSystemPrompt(tool, locale);

    if (!tool || !systemPrompt) {
      return new Response(JSON.stringify({ error: "Invalid tool specified" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const hfToken = Deno.env.get("HF_TOKEN") ?? Deno.env.get("HUGGINGFACE_API_KEY");
    if (!hfToken) {
      return new Response(JSON.stringify({ error: "Hugging Face API token is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userMessage = inputToMessage(input);
    if (!userMessage) {
      return new Response(JSON.stringify({ error: "No input provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = await getHuggingFaceCompletion(hfToken, systemPrompt, userMessage);

    return new Response(toSseStream(result.content, result.model), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("ai-tool error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown AI service error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
