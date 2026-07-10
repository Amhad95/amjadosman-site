import type { Locale } from "@/lib/locale";

export interface StreamOptions {
  tool: string;
  input: Record<string, string> | string;
  locale?: Locale;
  onDelta: (chunk: string) => void;
  onDone: () => void;
  onError: (message: string) => void;
  signal?: AbortSignal;
}

const getToolApiUrl = () => {
  return "/api/ai-tool";
};

const parseSsePayload = (payload: string) => {
  if (!payload || payload === "[DONE]") return { done: payload === "[DONE]", content: "" };

  try {
    const json = JSON.parse(payload);
    const content =
      json?.choices?.[0]?.delta?.content ??
      json?.choices?.[0]?.message?.content ??
      json?.content ??
      "";

    return { done: false, content: typeof content === "string" ? content : "" };
  } catch {
    return { done: false, content: payload };
  }
};

const readError = async (response: Response) => {
  try {
    const data = await response.json();
    if (typeof data?.error === "string") return data.error;
  } catch {
    const text = await response.text().catch(() => "");
    if (text.trim()) return text.trim();
  }

  return `AI service returned ${response.status}`;
};

export async function streamTool(opts: StreamOptions): Promise<void> {
  const { tool, input, locale = "en", onDelta, onDone, onError, signal } = opts;
  const functionUrl = getToolApiUrl();

  try {
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tool, input, locale }),
      signal,
    });

    if (!response.ok) {
      onError(await readError(response));
      return;
    }

    if (!response.body) {
      onError(locale === "ar" ? "لم يتم إرجاع أي محتوى." : "No response body was returned.");
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split("\n\n");
      buffer = events.pop() ?? "";

      for (const event of events) {
        const dataLines = event
          .split("\n")
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trim());

        for (const line of dataLines) {
          const parsed = parseSsePayload(line);
          if (parsed.done) {
            onDone();
            return;
          }
          if (parsed.content) onDelta(parsed.content);
        }
      }
    }

    onDone();
  } catch (error) {
    if (signal?.aborted) return;
    onError(error instanceof Error ? error.message : "The AI tool could not run.");
  }
}
