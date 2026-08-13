import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'temporary screenshots');

const [, , url, label] = process.argv;
if (!url) {
  console.error('Usage: node scripts/screenshot.mjs <url> [label]');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = fs.readdirSync(OUT_DIR).filter(f => /^screenshot-\d+/.test(f));
const nextN = existing.length
  ? Math.max(...existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1], 10))) + 1
  : 1;
const filename = label ? `screenshot-${nextN}-${label}.png` : `screenshot-${nextN}.png`;
const outPath = path.join(OUT_DIR, filename);

const CHROME = process.env.CHROME_PATH || await puppeteer.executablePath();

const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved:', outPath);
} finally {
  await browser.close();
}
