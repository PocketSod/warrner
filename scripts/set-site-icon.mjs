// Uploads a local image to the WordPress media library and sets it as the
// Site Icon via the REST API + an Application Password. This exists because
// FTP can only write files — the site icon is a DB setting (an attachment ID
// in wp_options), which FTP has no way to touch.
// Usage: node scripts/set-site-icon.mjs <local-image-path>
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./lib/env.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
loadEnv(path.join(root, ".env"));

const { WP_API_BASE_URL, WP_API_USER, WP_API_APP_PASSWORD } = process.env;
if (!WP_API_BASE_URL || !WP_API_USER || !WP_API_APP_PASSWORD) {
  console.error("Missing WP_API_BASE_URL / WP_API_USER / WP_API_APP_PASSWORD. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

const filePath = process.argv[2];
if (!filePath || !existsSync(filePath)) {
  console.error("Usage: node scripts/set-site-icon.mjs <local-image-path>");
  process.exit(1);
}

const MIME_TYPES = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" };
const ext = path.extname(filePath).toLowerCase();
const mime = MIME_TYPES[ext];
if (!mime) {
  console.error(`Unsupported file type "${ext}". Supported: ${Object.keys(MIME_TYPES).join(", ")}`);
  process.exit(1);
}

const auth = "Basic " + Buffer.from(`${WP_API_USER}:${WP_API_APP_PASSWORD.replace(/\s+/g, "")}`).toString("base64");
const base = WP_API_BASE_URL.replace(/\/+$/, "");
const fileName = path.basename(filePath);

console.log(`Uploading ${fileName} to ${base} ...`);
const uploadRes = await fetch(`${base}/wp-json/wp/v2/media`, {
  method: "POST",
  headers: {
    Authorization: auth,
    "Content-Type": mime,
    "Content-Disposition": `attachment; filename="${fileName}"`,
  },
  body: readFileSync(filePath),
});
if (!uploadRes.ok) {
  console.error("Upload failed:", uploadRes.status, await uploadRes.text());
  process.exit(1);
}
const media = await uploadRes.json();
console.log(`Uploaded. Attachment ID: ${media.id}`);

const settingsRes = await fetch(`${base}/wp-json/wp/v2/settings`, {
  method: "POST",
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ site_icon: media.id }),
});
if (!settingsRes.ok) {
  console.error("Setting site_icon failed:", settingsRes.status, await settingsRes.text());
  process.exit(1);
}
console.log("Site icon updated.");
