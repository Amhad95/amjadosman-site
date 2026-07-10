import { afterEach, describe, expect, it, vi } from "vitest";
import { streamTool } from "@/lib/streamTool";

describe("streamTool", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("streams the local API response", async () => {
    const onDelta = vi.fn();
    const onDone = vi.fn();
    const onError = vi.fn();
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"ok"}}]}\n\ndata: [DONE]\n\n'));
        controller.close();
      },
    });
    fetchSpy.mockResolvedValue(new Response(body, { status: 200, headers: { "Content-Type": "text/event-stream" } }));
  
    await streamTool({
      tool: "page-critique",
      input: { "Page URL": "https://example.com" },
      locale: "ar",
      onDelta,
      onDone,
      onError,
    });

    expect(fetchSpy).toHaveBeenCalledWith("/api/ai-tool", expect.objectContaining({ method: "POST" }));
    expect(onDelta).toHaveBeenCalled();
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });
});
