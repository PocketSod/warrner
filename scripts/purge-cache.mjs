// Purges LiteSpeed Cache on the remote WP install via the REST endpoint
// registered by wp-content/mu-plugins/warrner-cache-purge.php. That
// mu-plugin must be deployed first: node scripts/deploy.mjs mu-plugins
// Usage: node scripts/purge-cache.mjs [--prod]
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadTargetEnv } from "./lib/env.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
loadTargetEnv(root);

const { WP_API_BASE_URL, WP_API_USER, WP_API_APP_PASSWORD } = process.env;
if (!WP_API_BASE_URL || !WP_API_USER || !WP_API_APP_PASSWORD) {
  console.error("Missing WP_API_BASE_URL / WP_API_USER / WP_API_APP_PASSWORD. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const auth = "Basic " + Buffer.from(`${WP_API_USER}:${WP_API_APP_PASSWORD.replace(/\s+/g, "")}`).toString("base64");
const base = WP_API_BASE_URL.replace(/\/+$/, "");

const res = await fetch(`${base}/wp-json/warrner/v1/purge-cache`, {
  method: "POST",
  headers: { Authorization: auth },
});

if (!res.ok) {
  console.error("Purge failed:", res.status, await res.text());
  process.exit(1);
}
const body = await res.json();
console.log(body.message);
