#!/usr/bin/env node
/**
 * Post-build: copies dist/index.html into each route subdirectory
 * so GitHub Pages serves the SPA for direct URL visits.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const INDEX = join(DIST, "index.html");

const ROUTES = [
  "contact",
  "portfolio",
  "services",
  "services/real-estate",
  "services/baby-faceless",
  "services/bespoke-events",
  "services/product-commerce",
  "studio",
  "privacy",
  "terms",
  "testimonials",
];

if (!existsSync(INDEX)) {
  console.error("ERROR: dist/index.html not found. Run 'npm run build' first.");
  process.exit(1);
}

const indexContent = readFileSync(INDEX, "utf8");
let count = 0;

for (const route of ROUTES) {
  const dir = join(DIST, route);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const target = join(dir, "index.html");
  const oldContent = existsSync(target) ? readFileSync(target, "utf8") : "";
  if (oldContent !== indexContent) {
    writeFileSync(target, indexContent);
    count++;
  }
}

console.log(`Generated ${count} GitHub Pages SPA fallback files.`);