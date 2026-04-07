// Client-side SSE streaming utility for AI tool pages
// Parses the event stream token by token and calls onDelta for each chunk.

import type { Locale } from "@/lib/locale";

const AI_TOOL_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-tool`;

export interface StreamOptions {
  tool: string;
  input: Record<string, string> | string;
  locale?: Locale;
  onDelta: (chunk: string) => void;
  onDone: () => void;
  onError: (message: string) => void;
  signal?: AbortSignal;
}

export async function streamTool(opts: StreamOptions): Promise<void> {
  const { tool, input, locale = "en", onDelta, onDone, onError, signal } = opts;

  let resp: Response;
  try {
    resp = await fetch(AI_TOOL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ tool, input, locale }),
      signal,
    });
  } catch (e) {
    if ((e as Error).name === "AbortError") return;
    onError(
      locale === "ar"
        ? "تعذر الاتصال بخدمة الذكاء الاصطناعي. حاول مرة أخرى."
        : "Failed to connect to AI service. Please try again."
    );
    return;
  }

  if (!resp.ok) {
    let message =
      locale === "ar"
        ? "حدث خطأ ما. حاول مرة أخرى."
        : "Something went wrong. Please try again.";
    try {
      const data = await resp.json();
      if (data?.error) message = data.error;
    } catch {}
    if (resp.status === 429) {
      message =
        locale === "ar"
          ? "تم الوصول إلى حد الاستخدام. انتظر قليلاً ثم حاول مرة أخرى."
          : "Rate limit reached. Please wait a moment and try again.";
    }
    if (resp.status === 402) {
      message =
        locale === "ar"
          ? "تم الوصول إلى حد استخدام الذكاء الاصطناعي. أضف رصيداً للمتابعة."
          : "AI usage limit reached. Please add credits to continue.";
    }
    onError(message);
    return;
  }

  if (!resp.body) {
    onError(locale === "ar" ? "لم يتم استلام أي استجابة." : "No response received.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    let done = false;
    let value: Uint8Array | undefined;
    try {
      ({ done, value } = await reader.read());
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
      break;
    }
    if (done) break;
    if (value) textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  // Flush remaining buffer
  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}
