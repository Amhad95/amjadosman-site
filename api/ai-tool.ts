const SYSTEM_PROMPTS: Record<string, string> = {
  "page-critique": `You are a senior conversion strategist producing a board-ready landing-page teardown. Do not give generic chatbot advice.

Return this artifact:
1. Conversion scorecard with score, confidence, likely conversion leak, and what evidence is missing.
2. Above-the-fold diagnosis: headline, subheadline, proof, CTA, friction.
3. Message-market fit table: Claim | Reader objection | Evidence needed | Rewrite.
4. CTA system: primary CTA rewrite, secondary CTA rewrite, placement plan, repetition rule.
5. Priority backlog table: Priority | Fix | Why it matters | Effort | Exact implementation.
6. Copy replacements: provide 3 stronger headline/subheadline/CTA sets.
7. 7-day implementation plan.

Use GFM Markdown tables. Be specific to the supplied URL/copy. If information is missing, state the assumption and still produce a useful artifact.`,

  "sop-builder": `You are an operations architect producing an implementation-ready SOP, not a generic policy document.

Return this artifact:
1. SOP control sheet: process name, owner, trigger, success definition, review rhythm.
2. Scope and boundaries: included, excluded, escalation conditions.
3. Role matrix table: Role | Owns | Inputs needed | Handoff | Backup.
4. Procedure table: Step | Action | Owner | System/template | Quality check | Exception.
5. Decision tree in text form using if/then branches.
6. Failure modes table: Risk | Early signal | Prevention | Recovery.
7. Required templates/checklists.
8. 14-day rollout plan with training, adoption, and review.

Write for the person doing the work. Use active voice and concrete instructions.`,

  "brand-audit": `You are a brand systems director auditing consistency for a real business. Do not give a generic brand lecture.

Return this artifact:
1. Brand consistency scorecard: score, strongest asset, highest-risk inconsistency, fastest visible fix.
2. Visual system audit table: Asset/channel | Current issue | Business impact | Fix | Standard to create.
3. Voice/message audit table: Message pattern | Problem | Better rule | Example rewrite.
4. Priority repair roadmap: this week, this month, strategic rebuild.
5. Minimum viable brand system checklist with status and owner.
6. Before/after examples for colors, typography, layout, and language where possible.
7. Governance rules so the brand does not drift again.

Reference the assets and channels the user described. Be concrete and commercially useful.`,

  "process-mapper": `You are a process improvement consultant creating an operational map a team can actually implement.

Return this artifact:
1. Process snapshot: trigger, customer/internal requester, desired outcome, failure definition.
2. Stakeholder and decision-rights table.
3. Current-state flow table: Step | Owner | Input | Action | Output | Tool/system | Wait/risk.
4. Decision points with if/then paths.
5. Bottleneck map table: Bottleneck | Cause | Symptom | Cost | Fix.
6. Future-state flow with fewer handoffs.
7. Automation/documentation opportunities ranked by impact.
8. Implementation backlog table and first-week operating rhythm.

Focus on what breaks in real workflows, not idealized diagrams.`,

  "dashboard-builder": `You are a BI product lead writing a dashboard build specification that can be handed to an implementer.

Return this artifact:
1. Dashboard brief: audience, decisions supported, refresh rhythm, grain, filters.
2. Executive layout wireframe in text: top cards, charts, tables, drilldowns.
3. KPI dictionary table: Metric | Definition | Formula | Grain | Source | Owner | Target | Caveat.
4. Data source map table: Source | Fields needed | Join key | Data quality risk | Access owner.
5. Visualization plan table: View | Chart type | Question answered | Interaction | Alert threshold.
6. Alert and review rules.
7. MVP vs phase-two scope.
8. Build backlog and acceptance criteria.

If inputs are vague, infer a sensible SMB setup and label assumptions.`,

  "kpi-audit": `You are a KPI architect. The output must beat a generic chatbot by becoming a measurement operating system.

Return this artifact:
1. KPI health scorecard: score, biggest measurement risk, one metric to stop, one metric to add first.
2. Metric triage table: Current metric | Keep/change/stop | Reason | Replacement | Owner/action.
3. Missing metrics table: Metric | Why it matters | Formula | Source | Review cadence.
4. North Star recommendation with rationale and anti-gaming guardrails.
5. KPI architecture grouped by financial health, pipeline/customer, operations, team capacity.
6. Dashboard layout recommendation for these KPIs.
7. 30-day implementation plan with weekly actions and meeting rhythm.

Challenge weak metrics, but give replacements and formulas. Use GFM Markdown tables.`,
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

interface ApiRequest {
  method?: string;
  body?: {
    tool?: string;
    input?: unknown;
    locale?: string;
  };
}

interface ApiResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (body: { error: string }) => void;
  };
  write: (chunk: string) => void;
  end: () => void;
}

const localeInstruction = (locale?: string) => {
  switch (locale) {
    case "ar":
      return "Write the full response in Arabic. Keep URLs, product names, and metric names in their original form when needed.";
    case "bg":
      return "Write the full response in Bulgarian. Keep URLs, product names, and metric names in their original form when needed.";
    case "de":
      return "Write the full response in German. Keep URLs, product names, and metric names in their original form when needed.";
    case "fr":
      return "Write the full response in French. Keep URLs, product names, and metric names in their original form when needed.";
    default:
      return "Write the full response in English.";
  }
};

const inputToMessage = (input: unknown) => {
  if (typeof input === "string") return input.trim();
  if (!input || typeof input !== "object") return "";

  return Object.entries(input as Record<string, unknown>)
    .filter(([, value]) => String(value ?? "").trim().length > 0)
    .map(([key, value]) => `## ${key}\n${String(value).trim()}`)
    .join("\n\n");
};

const writeSse = (res: ApiResponse, payload: unknown) => {
  res.write(`data: ${typeof payload === "string" ? payload : JSON.stringify(payload)}\n\n`);
};

const completeWithHuggingFace = async (token: string, tool: string, locale: string | undefined, input: unknown) => {
  const basePrompt = SYSTEM_PROMPTS[tool];
  if (!basePrompt) {
    return { status: 400, error: "Invalid tool specified" };
  }

  const userMessage = inputToMessage(input);
  if (!userMessage) {
    return { status: 400, error: "No input provided" };
  }

  const systemPrompt = `${basePrompt}

${localeInstruction(locale)}

Always return well-structured GFM Markdown.
Use tables for scorecards, comparisons, metrics, priorities, owners, formulas, and next steps.
Do not write filler introductions. Do not say "it depends" without giving an assumption and a usable recommendation.
Make the output feel like a mini consulting deliverable with concrete artifacts, templates, formulas, owners, and acceptance criteria.`;

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
          max_tokens: 2600,
          temperature: 0.25,
          top_p: 0.9,
          stream: false,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        errors.push(`${model}: ${response.status} ${body.slice(0, 180)}`);
        continue;
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content;
      if (typeof content === "string" && content.trim()) {
        return { status: 200, model, content: content.trim() };
      }

      errors.push(`${model}: empty response`);
    } catch (error) {
      errors.push(`${model}: ${error instanceof Error ? error.message : "request failed"}`);
    }
  }

  return {
    status: 502,
    error: `All Hugging Face fallback models failed. ${errors.join(" | ")}`,
  };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.HF_TOKEN ?? process.env.HUGGINGFACE_API_KEY;
  if (!token) {
    res.status(500).json({ error: "Hugging Face token is not configured on Vercel" });
    return;
  }

  const { tool, input, locale } = req.body ?? {};
  const result = await completeWithHuggingFace(token, tool, locale, input);

  if (result.status !== 200) {
    res.status(result.status).json({ error: result.error });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");

  writeSse(res, { meta: { model: result.model } });

  const chunks = result.content.match(/[\s\S]{1,90}/g) ?? [result.content];
  for (const content of chunks) {
    writeSse(res, { choices: [{ delta: { content } }] });
  }

  writeSse(res, "[DONE]");
  res.end();
}
