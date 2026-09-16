// Shared HTML template for PocketSod invoices. Pure rendering — no client
// data lives here; everything comes in via `data` (see generate-invoice.mjs
// and invoices/data/*.json, which are gitignored because they carry EIN/PII).

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const FONTS_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">`;

const STYLE = `
  :root{
    --color-ink:#1B2531;
    --color-ink-70: rgba(27,37,49,0.7);
    --color-ink-55: rgba(27,37,49,0.55);
    --color-stone:#C9C2AC;
    --color-paper:#FAF8F3;
    --font-display:'Bitter', Georgia, serif;
    --font-sans:'Public Sans', -apple-system, sans-serif;
    --font-mono:'IBM Plex Mono', ui-monospace, monospace;
  }
  *{ box-sizing: border-box; }
  html,body{ margin:0; padding:0; }
  body{
    font-family: var(--font-sans);
    color: var(--color-ink);
    background: #fff;
    font-size: 13px;
    line-height: 1.55;
  }
  .page{ width: 8.5in; min-height: 11in; padding: 0.6in 0.85in; }

  .header{
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 14px;
    border-bottom: 2px solid var(--color-ink);
    margin-bottom: 18px;
  }
  .company-name{
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    margin: 0 0 6px 0;
  }
  .company-meta{ color: var(--color-ink-70); font-size: 12px; line-height: 1.6; }
  .doc-title{
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.02em;
    text-align: right;
    margin: 0 0 10px 0;
  }
  .doc-meta{ text-align: right; font-size: 12px; }
  .doc-meta-row{ display:flex; justify-content: flex-end; gap: 10px; margin-bottom: 3px; }
  .doc-meta-label{
    color: var(--color-ink-55);
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    padding-top: 1px;
  }
  .doc-meta-value{ font-weight: 600; }

  .label-caps{
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-ink-55);
    margin-bottom: 6px;
  }
  .bill-to{ margin-bottom: 18px; }
  .bill-to .name{ font-weight: 600; }
  .bill-to .addr{ color: var(--color-ink-70); line-height: 1.6; }

  table.items{ width: 100%; border-collapse: collapse; margin-bottom: 4px; }
  table.items thead th{
    text-align: left;
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-ink-55);
    border-bottom: 1.5px solid var(--color-ink);
    padding-bottom: 6px;
  }
  table.items thead th.amount{ text-align: right; }
  table.items td{ padding: 9px 0 3px 0; vertical-align: top; border-bottom: 1px solid var(--color-stone); }
  table.items tr:last-of-type td{ border-bottom: none; }
  .item-name{ font-weight: 600; font-size: 13.5px; }
  .item-desc{ color: var(--color-ink-70); font-size: 12px; margin-top: 2px; line-height: 1.5; }
  .amount{ text-align: right; white-space: nowrap; font-weight: 600; font-variant-numeric: tabular-nums; }

  .discount-row td{ padding-top: 9px; border-bottom: none; }
  .discount-row .amount{ color: var(--color-ink-70); font-weight: 500; }

  .total-row td{ border-top: 1.5px solid var(--color-ink); border-bottom: none; padding-top: 11px; font-weight: 700; }
  .total-row .item-name{ font-size: 14px; }
  .total-row .amount{ font-size: 16px; }

  .addons-box{
    background: var(--color-paper);
    border: 1px solid var(--color-stone);
    border-radius: 4px;
    padding: 14px 20px;
    margin: 18px 0 16px 0;
    font-size: 12.5px;
    color: var(--color-ink-70);
    line-height: 1.5;
  }
  .addons-box .kicker{ font-weight: 600; color: var(--color-ink); margin-bottom: 6px; font-size: 13px; }
  .addons-box strong{ color: var(--color-ink); }
  .addons-box .strike{ color: var(--color-ink-55); text-decoration: line-through; font-weight: 400; margin-right: 4px; }

  .plain-section{ font-size: 12px; color: var(--color-ink-70); line-height: 1.6; margin-bottom: 14px; }
  .plain-section .heading{
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-ink-55);
    margin-bottom: 8px;
    display:block;
  }

  .thanks{ text-align: center; color: var(--color-ink-55); font-style: italic; margin-top: 24px; font-size: 12.5px; }
`;

function renderLineItem(item) {
  if (item.muted) {
    return `
      <tr class="discount-row">
        <td><div class="item-name" style="font-weight:500;">${escapeHtml(item.name)}</div></td>
        <td class="amount">${escapeHtml(item.amount)}</td>
      </tr>`;
  }
  return `
      <tr>
        <td>
          <div class="item-name">${escapeHtml(item.name)}</div>
          ${item.desc ? `<div class="item-desc">${escapeHtml(item.desc)}</div>` : ""}
        </td>
        <td class="amount">${escapeHtml(item.amount)}</td>
      </tr>`;
}

function renderAddons(addons) {
  if (!addons) return "";
  const rows = addons.items
    .map(
      (a) =>
        `<div>${escapeHtml(a.label)}: ${a.was ? `<span class="strike">${escapeHtml(a.was)}</span>` : ""}<strong>${escapeHtml(a.now)}</strong></div>`
    )
    .join("\n    ");
  return `
  <div class="addons-box">
    <div class="kicker">${escapeHtml(addons.heading)}</div>
    ${rows}
    ${addons.note ? `<div style="margin-top:8px;">${escapeHtml(addons.note)}</div>` : ""}
  </div>`;
}

export function renderInvoiceHTML(data) {
  const {
    docTitle = "INVOICE",
    invoiceNo,
    date,
    due,
    company,
    billTo,
    lineItems = [],
    total,
    addons,
    paymentNote,
    closingNote,
  } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(company.name)} ${escapeHtml(docTitle)}</title>
${FONTS_LINK}
<style>${STYLE}</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <p class="company-name">${escapeHtml(company.name)}</p>
      <div class="company-meta">
        ${company.addressLines.map(escapeHtml).join("<br>\n        ")}<br>
        ${escapeHtml(company.phone)}<br>
        EIN: ${escapeHtml(company.ein)}
      </div>
    </div>
    <div>
      <p class="doc-title">${escapeHtml(docTitle)}</p>
      <div class="doc-meta">
        <div class="doc-meta-row"><span class="doc-meta-label">Invoice No.</span><span class="doc-meta-value">${escapeHtml(invoiceNo)}</span></div>
        <div class="doc-meta-row"><span class="doc-meta-label">Date</span><span class="doc-meta-value">${escapeHtml(date)}</span></div>
        <div class="doc-meta-row"><span class="doc-meta-label">Due</span><span class="doc-meta-value">${escapeHtml(due)}</span></div>
      </div>
    </div>
  </div>

  <div class="bill-to">
    <div class="label-caps">Bill To</div>
    <div class="name">${escapeHtml(billTo.name)}</div>
    <div class="addr">
      ${billTo.attn ? `Attn: ${escapeHtml(billTo.attn)}<br>` : ""}
      ${billTo.addressLines.map(escapeHtml).join("<br>\n      ")}
    </div>
  </div>

  <table class="items">
    <thead>
      <tr><th>Description</th><th class="amount">Amount</th></tr>
    </thead>
    <tbody>
      ${lineItems.map(renderLineItem).join("\n")}
      <tr class="total-row">
        <td><div class="item-name">Total Due</div></td>
        <td class="amount">${escapeHtml(total)}</td>
      </tr>
    </tbody>
  </table>
  ${renderAddons(addons)}

  <div class="plain-section">
    <span class="heading">Payment</span>
    ${escapeHtml(paymentNote)}
  </div>

  <div class="thanks">${escapeHtml(closingNote)}</div>
</div>
</body>
</html>`;
}
