import React from "react";
import { renderToString } from "react-dom/server";
import { LocaleProvider } from "@/lib/locale";
import App from "./App";

export const render = (url: string) => renderToString(
  <LocaleProvider>
    <App ssrPath={url} />
  </LocaleProvider>
);
