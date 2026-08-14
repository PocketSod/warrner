// Deploys theme (and other targets, as added) to the Hostinger demo site over FTP.
// Usage: node scripts/deploy.mjs [target]   (default target: theme)
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { Client } from "basic-ftp";
import { loadEnv } from "./lib/env.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

loadEnv(path.join(root, ".env"));

const {
  FTP_HOST,
  FTP_USER,
  FTP_PASSWORD,
  FTP_PORT = "21",
  FTP_SECURE = "false",
  FTP_REMOTE_ROOT = "public_html",
} = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
  console.error("Missing FTP_HOST / FTP_USER / FTP_PASSWORD. Copy .env.example to .env and fill it in.");
  process.exit(1);
}

function joinRemote(...parts) {
  return parts.filter(Boolean).join("/");
}

const targets = {
  theme: {
    local: path.join(root, "wp-content", "themes", "warrner"),
    remote: joinRemote(FTP_REMOTE_ROOT, "wp-content/themes/warrner"),
  },
};

const targetName = process.argv[2] || "theme";
const target = targets[targetName];
if (!target) {
  console.error(`Unknown deploy target "${targetName}". Available: ${Object.keys(targets).join(", ")}`);
  process.exit(1);
}
if (!existsSync(target.local)) {
  console.error(`Local path does not exist: ${target.local}`);
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = false;

try {
  await client.access({
    host: FTP_HOST.replace(/^ftps?:\/\//, ""),
    user: FTP_USER,
    password: FTP_PASSWORD,
    port: Number(FTP_PORT),
    secure: FTP_SECURE === "true",
  });
  console.log(`Connected to ${FTP_HOST}. Uploading ${target.local} -> ${target.remote}`);
  await client.ensureDir(target.remote);
  await client.uploadFromDir(target.local);
  console.log("Deploy complete.");
} catch (err) {
  console.error("Deploy failed:", err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
