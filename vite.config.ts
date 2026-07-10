import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { IncomingMessage, ServerResponse } from "node:http";

const readRequestBody = async (req: import("node:http").IncomingMessage) => {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  if (!chunks.length) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return {}; }
};

type LocalRequest = IncomingMessage & { method?: string };
type LocalHandler = (req: LocalRequest, res: ServerResponse) => Promise<void>;

const localApiFunctions = () => ({
  name: "local-api-functions",
  configureServer(server: import("vite").ViteDevServer) {
    const mount = (route: string, handler: LocalHandler) => {
      server.middlewares.use(route, async (req, res, next) => {
        if (req.method !== "POST") return next();
        try { await handler(req, res); } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: error instanceof Error ? error.message : "Local API request failed" }));
        }
      });
    };

    const proxyToProduction = async (route: string, req: LocalRequest, res: ServerResponse) => {
      const body = await readRequestBody(req);
      const upstream = await fetch(`${process.env.AI_PROXY_URL ?? "https://amjadosman.vercel.app"}${route}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      res.statusCode = upstream.status;
      upstream.headers.forEach((value, key) => res.setHeader(key, value));
      res.end(await upstream.text());
    };

    mount("/api/ai-tool", async (req, res) => {
      if (!process.env.HF_TOKEN && !process.env.HUGGINGFACE_API_KEY) {
        await proxyToProduction("/api/ai-tool", req, res);
        return;
      }
      const { default: handler } = await import("./api/ai-tool");
      const body = await readRequestBody(req);
      await handler({ method: req.method, body }, {
        setHeader: (name: string, value: string) => res.setHeader(name, value),
        status: (code: number) => ({ json: (payload: unknown) => { res.statusCode = code; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(payload)); } }),
        write: (chunk: string) => res.write(chunk),
        end: () => res.end(),
      });
    });

    mount("/api/create-checkout", async (req, res) => {
      if (!process.env.STRIPE_SECRET_KEY) {
        await proxyToProduction("/api/create-checkout", req, res);
        return;
      }
      const { default: handler } = await import("./api/create-checkout");
      const body = await readRequestBody(req);
      await handler({ method: req.method, body, headers: req.headers as Record<string, string | string[] | undefined> }, {
        setHeader: (name: string, value: string) => res.setHeader(name, value),
        status: (code: number) => ({ json: (payload: unknown) => { res.statusCode = code; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(payload)); } }),
      });
    });

    mount("/api/email-capture", async (req, res) => {
      const { default: handler } = await import("./api/email-capture");
      const body = await readRequestBody(req);
      await handler({ method: req.method, body }, {
        setHeader: (name: string, value: string) => res.setHeader(name, value),
        status: (code: number) => ({ json: (payload: unknown) => { res.statusCode = code; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(payload)); } }),
      });
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && localApiFunctions()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
