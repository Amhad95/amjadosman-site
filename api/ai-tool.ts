const SYSTEM_PROMPTS: Record<string, string> = {
  "page-critique": `You are a conversion rate optimisation expert and UX copywriter. Return a practical landing-page audit with a score, hierarchy critique, CTA audit, friction points, priority fixes, quick wins, and concrete before/after copy examples. Use Markdown tables for priorities.`,
  "sop-builder": `You are an operations consultant. Generate a complete SOP with purpose, scope, roles, prerequisites, procedure steps, quality checks, exceptions, and related documents. Write for the person doing the work, not for compliance.`,
  "brand-audit": `You are a brand strategist and identity designer. Return a brand consistency report with a score, visual consistency analysis, tone analysis, priority issues, quick fixes, strategic recommendations, and a minimum viable brand system checklist.`,
  "process-mapper": `You are a business analyst. Turn the workflow into a process map with overview, inputs, stakeholders, process steps, decision points, bottlenecks, improvement opportunities, and implementation notes. Use tables where useful.`,
  "dashboard-builder": `You are a BI consultant. Produce a dashboard specification with purpose, KPI definitions, recommended visualisations, dashboard layout, data source mapping, alerts, complexity rating, and build sequence.`,
  "kpi-audit": `You are a business performance consultant. Audit the metrics, identify vanity metrics, missing metrics, retained metrics, leading vs lagging balance, KPI architecture, and a 30-day action plan.`,
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

Always return well-structured Markdown. Prefer tables for comparisons, metrics, priorities, owners, or next steps. Be specific and practical.`;

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
