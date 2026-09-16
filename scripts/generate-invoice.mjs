// Generates a PocketSod invoice PDF from a JSON data file.
// Usage: node scripts/generate-invoice.mjs invoices/data/<name>.json [output-filename.pdf]
//
// invoices/data/defaults.json holds the fields that don't change month to
// month (company info, standing client bill-to, payment/closing copy). A
// per-invoice JSON only needs to specify what's different: invoiceNo, date,
// due, lineItems, total, and (optionally) addons. See invoices/data/README.md.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { renderInvoiceHTML } from "./lib/invoice-template.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const dataArg = process.argv[2];
if (!dataArg) {
  console.error("Usage: node scripts/generate-invoice.mjs <data.json> [output-filename.pdf]");
  process.exit(1);
}

const dataPath = path.resolve(root, dataArg);
if (!existsSync(dataPath)) {
  console.error(`Data file not found: ${dataPath}`);
  process.exit(1);
}

const defaultsPath = path.join(root, "invoices", "data", "defaults.json");
const defaults = existsSync(defaultsPath) ? JSON.parse(readFileSync(defaultsPath, "utf8")) : {};
const invoiceData = JSON.parse(readFileSync(dataPath, "utf8"));
const data = { ...defaults, ...invoiceData };

if (!data.company || !data.billTo) {
  console.error(
    "Missing `company` or `billTo`. Add invoices/data/defaults.json (gitignored, see invoices/data/README.md) or include them directly in this file."
  );
  process.exit(1);
}

const outName = process.argv[3] || `PocketSod-Invoice-${data.invoiceNo}.pdf`;
const outPath = path.join(root, "invoices", outName);

const html = renderInvoiceHTML(data);

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });
  console.log(`Wrote ${outPath}`);
} finally {
  await browser.close();
}
