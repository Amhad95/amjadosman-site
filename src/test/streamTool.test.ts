import { afterEach, describe, expect, it, vi } from "vitest";
import { streamTool } from "@/lib/streamTool";

describe("streamTool", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("streams a local response without calling a remote service", async () => {
    const onDelta = vi.fn();
    const onDone = vi.fn();
    const onError = vi.fn();
    const fetchSpy = vi.spyOn(globalThis, "fetch");
  
    await streamTool({
      tool: "page-critique",
      input: { "Page URL": "https://example.com" },
      locale: "ar",
      onDelta,
      onDone,
      onError,
    });

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(onDelta).toHaveBeenCalled();
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });
});
