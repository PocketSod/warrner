import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// Minimal .env loader (no external dependency). Does not override variables
// already present in process.env.
export function loadEnv(file) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

// Picks the env file from a --prod or --dev flag, or the default (.env,
// demo.toolsandtable.com — kept as a general PocketSod demo asset, no
// longer this project's Dev site as of 2026-09-22, see INFRASTRUCTURE.md).
// Returns argv with the flag removed so callers can keep reading their own
// positional args from it.
export function loadTargetEnv(root, argv = process.argv.slice(2)) {
  const isProd = argv.includes("--prod");
  const isDev = argv.includes("--dev");
  const file = isProd ? ".env.production" : isDev ? ".env.dev" : ".env";
  const label = isProd ? "PRODUCTION" : isDev ? "DEV (dev.erinwlegal.com)" : "demo.toolsandtable.com";
  if ((isProd || isDev) && !existsSync(path.join(root, file))) {
    console.error(`--${isProd ? "prod" : "dev"} needs ${file}. Copy .env.example to ${file} and fill in the values.`);
    process.exit(1);
  }
  loadEnv(path.join(root, file));
  console.log(`Target: ${label} (${file})`);
  return argv.filter((arg) => arg !== "--prod" && arg !== "--dev");
}
