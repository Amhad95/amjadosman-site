import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

class MockIntersectionObserver {
  constructor(_: IntersectionObserverCallback, __?: IntersectionObserverInit) {}

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

class MockResizeObserver {
  constructor(_: ResizeObserverCallback) {}

  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: MockResizeObserver,
});

Object.defineProperty(globalThis, "ResizeObserver", {
  writable: true,
  value: MockResizeObserver,
});

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: () => ({
    clearRect: () => {},
    fillRect: () => {},
    fillText: () => {},
    setTransform: () => {},
    globalCompositeOperation: "source-over",
    fillStyle: "",
    font: "",
  }),
});
