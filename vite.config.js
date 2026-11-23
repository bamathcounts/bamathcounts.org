import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { renderAnnouncements } from "./announcements.js";

const projectFile = (path) => fileURLToPath(new URL(path, import.meta.url));
const base = process.env.PAGES_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [
    {
      name: "chapter-announcements",
      transformIndexHtml(html) {
        if (!html.includes("<!-- announcements -->")) return html;
        const entries = JSON.parse(
          readFileSync(projectFile("./content/announcements.json"), "utf8"),
        );
        return html.replace("<!-- announcements -->", () =>
          renderAnnouncements(entries, base),
        );
      },
      configureServer(server) {
        server.watcher.add(projectFile("./content/announcements.json"));
        server.watcher.on("change", (path) => {
          if (path === projectFile("./content/announcements.json")) {
            server.ws.send({ type: "full-reload" });
          }
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: projectFile("./index.html"),
        peninsula2026: projectFile("./2026/peninsula.html"),
        sanMateoFremont2026: projectFile("./2026/san-mateo-fremont.html"),
      },
    },
  },
});
