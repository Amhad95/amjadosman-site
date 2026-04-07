import { afterEach, describe, expect, it, vi } from "vitest";
import { streamTool } from "@/lib/streamTool";

describe("streamTool", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("includes locale in the AI tool payload", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("data: [DONE]\n", {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      })
    );

    await streamTool({
      tool: "page-critique",
      input: { "Page URL": "https://example.com" },
      locale: "ar",
      onDelta: vi.fn(),
      onDone: vi.fn(),
      onError: vi.fn(),
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [, init] = fetchSpy.mock.calls[0];
    expect(init?.body).toBe(
      JSON.stringify({
        tool: "page-critique",
        input: { "Page URL": "https://example.com" },
        locale: "ar",
      })
    );
  });
});
