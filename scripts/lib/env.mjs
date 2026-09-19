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

// Picks the env file from a --prod flag (.env.production) or the default
// (.env, the demo site). Returns the argv with that flag removed so callers can
// keep reading positional args from it.
export function loadTargetEnv(root, argv = process.argv.slice(2)) {
  const isProd = argv.includes("--prod");
  const file = isProd ? ".env.production" : ".env";
  if (isProd && !existsSync(path.join(root, file))) {
    console.error(`--prod needs ${file}. Copy .env.example to ${file} and fill in the production values.`);
    process.exit(1);
  }
  loadEnv(path.join(root, file));
  console.log(`Target: ${isProd ? "PRODUCTION" : "demo"} (${file})`);
  return argv.filter((arg) => arg !== "--prod");
}
