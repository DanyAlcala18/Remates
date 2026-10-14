/* =========================================================
   Remates iSTORE — lógica de la tienda
   ========================================================= */

const CONFIG = {
  brandName: "Remates iSTORE",

  /* ====== AQUÍ LLEGAN TUS PEDIDOS ======
     Número de WhatsApp con lada de país, solo números.
     México = 52. Ejemplo: 52 + 33 1234 5678 -> "523312345678" */
  whatsapp: "", // PENDIENTE: escribe aquí el número de la tienda

  /* súbelo cada vez que cambies fotos para que el navegador no muestre las viejas */
  imgVersion: 5,

  orderPrefix: "RI",
  storageKey: "remates-istore-cart-v1",
};

/* ---------------------------------------------------------
   Iconos (trazos estilo Lucide, sin emojis)
   --------------------------------------------------------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  menu: '<line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  bank: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  cardStack: '<rect width="16" height="11" x="6" y="9" rx="2"/><path d="M18 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/><line x1="6" x2="22" y1="13" y2="13"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  star: '<path d="M11.5 2.3a.6.6 0 0 1 1 0l2.6 5.4 5.9.8a.6.6 0 0 1 .3 1l-4.3 4.2 1 5.9a.6.6 0 0 1-.8.6L12 17.4l-5.3 2.8a.6.6 0 0 1-.8-.6l1-5.9-4.3-4.2a.6.6 0 0 1 .3-1l5.9-.8Z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  battery: '<rect width="16" height="10" x="2" y="7" rx="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="10" y2="14"/><line x1="10" x2="10" y1="10" y2="14"/>',
  sparkle: '<path d="M9.94 14.06 4 12l5.94-2.06L12 4l2.06 5.94L20 12l-5.94 2.06L12 20Z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  phone: '<rect width="12" height="20" x="6" y="2" rx="3"/><path d="M11 18h2"/>',
  airpods: '<path d="M7 3a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.8V19a1.5 1.5 0 0 0 3 0V6a3 3 0 0 0-2-3Z"/><path d="M17 3a3 3 0 0 1 3 3v1a3 3 0 0 1-2 2.8V19a1.5 1.5 0 0 1-3 0V6a3 3 0 0 1 2-3Z"/>',
  plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  cable: '<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  doc: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pin: '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.79a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  verified: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  whatsapp: "WA",
};
const WA_PATH =
  '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/>';

const ic = (name) =>
  name === "whatsapp"
    ? `<svg class="ic" viewBox="0 0 24 24" style="fill:currentColor;stroke:none" aria-hidden="true">${WA_PATH}</svg>`
    : `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
const hydrateIcons = (root = document) =>
  root.querySelectorAll("[data-ic]").forEach((el) => {
    if (!el.dataset.icDone) {
      el.insertAdjacentHTML("afterbegin", ic(el.dataset.ic));
      el.dataset.icDone = "1";
    }
  });

/* ---------------------------------------------------------
   Utilidades
   --------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0, maximumFractionDigits: 2 });
const money = (n) => fmt.format(n);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const catOf = (id) => CATEGORIES.find((c) => c.id === id);

/* ---------------------------------------------------------
   Ilustraciones automáticas (cuando aún no hay foto)
   --------------------------------------------------------- */
let artSeq = 0;
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map((v) => v.toString(16).padStart(2, "0")).join("");
}
function art(p, hex) {
  const id = "a" + ++artSeq;
  if (p.cat === "iphone") {
    const body = hex || (p.options?.[2]?.values?.[0]?.hex ?? "#2b2b2e");
    const edge = shade(body, -0.18);
    const hi = shade(body, 0.12);
    return `<svg class="art" viewBox="0 0 220 220" role="img" aria-label="${esc(p.name)}">
      <defs>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${hi}"/><stop offset="1" stop-color="${body}"/></linearGradient>
        <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d2433"/><stop offset=".55" stop-color="#0d0f16"/><stop offset="1" stop-color="#29334a"/></linearGradient>
        <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-opacity=".18"/></filter>
      </defs>
      <g filter="url(#${id}f)">
        <rect x="36" y="22" width="84" height="176" rx="17" fill="url(#${id}b)" stroke="${edge}" stroke-width="2"/>
        <rect x="45" y="31" width="38" height="38" rx="10" fill="${shade(body, 0.05)}" stroke="${edge}" stroke-opacity=".5"/>
        <circle cx="55" cy="41" r="7.5" fill="#15161a" stroke="${edge}" stroke-width="2"/><circle cx="55" cy="41" r="3" fill="#2d3550"/>
        <circle cx="73" cy="59" r="7.5" fill="#15161a" stroke="${edge}" stroke-width="2"/><circle cx="73" cy="59" r="3" fill="#2d3550"/>
        <circle cx="74" cy="40" r="3" fill="#f3efe1"/>
        <rect x="104" y="26" width="84" height="176" rx="17" fill="#d9d9dc" stroke="${edge}" stroke-width="2"/>
        <rect x="108" y="30" width="76" height="168" rx="13" fill="url(#${id}s)"/>
        <path d="M108 140c30-40 50-20 76-60v70c-20 30-50 30-76 30Z" fill="${body}" opacity=".55"/>
        <path d="M108 168c34-30 56-10 76-40v57a13 13 0 0 1-13 13h-50a13 13 0 0 1-13-13Z" fill="${hi}" opacity=".45"/>
        <rect x="130" y="34" width="32" height="8" rx="4" fill="#000"/>
      </g></svg>`;
  }
  if (p.cat === "airpods") {
    return `<svg class="art" viewBox="0 0 220 220" role="img" aria-label="${esc(p.name)}">
      <defs>
        <linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e6e6e8"/></linearGradient>
        <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-opacity=".16"/></filter>
      </defs>
      <g filter="url(#${id}f)">
        <rect x="48" y="80" width="112" height="96" rx="34" fill="url(#${id}c)" stroke="#d4d4d8" stroke-width="1.5"/>
        <path d="M49 108h110" stroke="#d4d4d8" stroke-width="1.5"/>
        <circle cx="104" cy="140" r="3" fill="#c7c7cc"/>
        <rect x="96" y="168" width="16" height="4" rx="2" fill="#c7c7cc"/>
        <g transform="translate(150 38) rotate(14)"><ellipse cx="0" cy="0" rx="14" ry="16" fill="url(#${id}c)" stroke="#d4d4d8"/><rect x="-5" y="8" width="10" height="44" rx="5" fill="url(#${id}c)" stroke="#d4d4d8"/><circle cx="-4" cy="-3" r="4" fill="#2b2b2e"/></g>
        <g transform="translate(176 52) rotate(24)"><ellipse cx="0" cy="0" rx="13" ry="15" fill="url(#${id}c)" stroke="#d4d4d8"/><rect x="-5" y="8" width="10" height="40" rx="5" fill="url(#${id}c)" stroke="#d4d4d8"/></g>
      </g></svg>`;
  }
  if (p.cat === "cargadores") {
    const mag = /magsafe/i.test(p.name);
    if (mag)
      return `<svg class="art" viewBox="0 0 220 220" role="img" aria-label="${esc(p.name)}">
        <defs><radialGradient id="${id}m" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dedee2"/></radialGradient>
        <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-opacity=".16"/></filter></defs>
        <path d="M110 150 C110 185, 60 180, 46 205" stroke="#e4e4e7" stroke-width="7" fill="none" stroke-linecap="round"/>
        <g filter="url(#${id}f)"><circle cx="110" cy="96" r="62" fill="#c9cbd0"/><circle cx="110" cy="96" r="56" fill="url(#${id}m)"/>
        <circle cx="110" cy="96" r="30" fill="none" stroke="#d1d1d6" stroke-width="1.5"/><circle cx="110" cy="96" r="4" fill="#d1d1d6"/></g></svg>`;
    const dual = /doble|35/i.test(p.name);
    return `<svg class="art" viewBox="0 0 220 220" role="img" aria-label="${esc(p.name)}">
      <defs><linearGradient id="${id}c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e2e6"/></linearGradient>
      <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="8" flood-opacity=".16"/></filter></defs>
      <g filter="url(#${id}f)">
        <rect x="62" y="62" width="96" height="104" rx="22" fill="url(#${id}c)" stroke="#d4d4d8" stroke-width="1.5"/>
        <rect x="88" y="38" width="9" height="28" rx="3" fill="#b8b8be"/><rect x="123" y="38" width="9" height="28" rx="3" fill="#b8b8be"/>
        ${dual
          ? `<rect x="80" y="108" width="24" height="9" rx="4.5" fill="#3a3a3f"/><rect x="116" y="108" width="24" height="9" rx="4.5" fill="#3a3a3f"/>`
          : `<rect x="96" y="108" width="28" height="10" rx="5" fill="#3a3a3f"/>`}
      </g>
      ${/kit/i.test(p.id) ? `<path d="M110 166 C110 200, 170 196, 186 170" stroke="#ececef" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="178" y="146" width="16" height="30" rx="5" fill="#f4f4f6" stroke="#d4d4d8"/>` : ""}
      </svg>`;
  }
  /* cables */
  const usbA = /usb-a/i.test(p.name);
  return `<svg class="art" viewBox="0 0 220 220" role="img" aria-label="${esc(p.name)}">
    <defs><filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity=".14"/></filter></defs>
    <g filter="url(#${id}f)" fill="none" stroke-linecap="round">
      <path d="M58 52 C40 90, 70 110, 110 110 C160 110, 182 132, 168 166" stroke="#d9d9de" stroke-width="9"/>
      <path d="M110 110 C80 110, 60 130, 76 160 C90 186, 150 186, 150 150 C150 126, 120 120, 110 110" stroke="#e8e8ec" stroke-width="9"/>
      <path d="M58 52 C40 90, 70 110, 110 110 C160 110, 182 132, 168 166" stroke="#ffffff" stroke-width="5"/>
    </g>
    <g filter="url(#${id}f)">
      <rect x="${usbA ? 44 : 48}" y="18" width="${usbA ? 28 : 20}" height="40" rx="${usbA ? 3 : 6}" fill="#f6f6f8" stroke="#d1d1d6" transform="rotate(-12 58 38)"/>
      <rect x="${usbA ? 48 : 52}" y="${usbA ? 4 : 6}" width="${usbA ? 20 : 12}" height="${usbA ? 16 : 14}" rx="${usbA ? 1 : 5}" fill="#c8c8ce" transform="rotate(-12 58 38)"/>
      <rect x="158" y="160" width="20" height="40" rx="6" fill="#f6f6f8" stroke="#d1d1d6" transform="rotate(14 168 180)"/>
      <rect x="${/lightning/i.test(p.name) ? 164 : 162}" y="196" width="${/lightning/i.test(p.name) ? 8 : 12}" height="16" rx="${/lightning/i.test(p.name) ? 2 : 5}" fill="#c8c8ce" transform="rotate(14 168 180)"/>
    </g></svg>`;
}

const imgSrc = (u) => `${u}?v=${CONFIG.imgVersion}`;

/* Imagen del producto o su ilustración */
function visual(p, sel, alt = p.name) {
  const r = resolve(p, sel || defaultSel(p));
  if (r.img) return `<img src="${imgSrc(r.img)}" alt="${esc(alt)}" loading="lazy" decoding="async" />`;
  return art(p, r.hex);
}

/* ---------------------------------------------------------
   Variantes y precios
   --------------------------------------------------------- */
function defaultSel(p) {
  const sel = {};
  (p.options || []).forEach((o) => {
    const v = o.values.find((x) => x.available !== false) || o.values[0];
    sel[o.key] = v.label;
  });
  return sel;
}
function resolve(p, sel = {}) {
  let price = p.price, old = p.old, img = p.img, hex = null, available = !p.soldOut;
  const parts = [];
  (p.options || []).forEach((o) => {
    const v = o.values.find((x) => x.label === sel[o.key]);
    if (!v) return;
    parts.push(v.label);
    if (v.price != null) { price = v.price; old = v.old; }
    if (v.img) img = v.img;
    if (v.hex) { hex = v.hex; if (!v.img && o.type === "swatch") img = null; }
    if (v.available === false) available = false;
  });
  return { price, old, img, hex, available, label: parts.join(" · ") };
}
const minPrice = (p) => Math.min(p.price, ...(p.options || []).flatMap((o) => o.values.map((v) => v.price ?? Infinity)));
const hasRange = (p) => (p.options || []).some((o) => o.values.some((v) => v.price != null && v.price !== p.price));
const needsChoice = (p) => (p.options || []).some((o) => o.values.length > 1);
const offPct = (price, old) => (old && old > price ? Math.round((1 - price / old) * 100) : 0);

/* ---------------------------------------------------------
   Carrito (se guarda en el navegador)
   --------------------------------------------------------- */
let cart = [];
const lineKey = (id, sel) => id + "|" + JSON.stringify(sel || {});
function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    cart = raw.filter((l) => byId[l.id] && l.qty > 0);
  } catch { cart = []; }
}
function saveCart() {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart)); } catch {}
}
function addToCart(id, sel, qty = 1) {
  const key = lineKey(id, sel);
  const found = cart.find((l) => lineKey(l.id, l.sel) === key);
  if (found) found.qty = Math.min(99, found.qty + qty);
  else cart.push({ id, sel: { ...sel }, qty });
  saveCart();
  renderCart();
  const badge = $("#cartCount");
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
}
function totalsFor(lines) {
  let units = 0, total = 0, before = 0;
  lines.forEach((l) => {
    const r = resolve(byId[l.id], l.sel);
    units += l.qty;
    total += r.price * l.qty;
    before += (r.old && r.old > r.price ? r.old : r.price) * l.qty;
  });
  return { units, total: Math.round(total * 100) / 100, savings: Math.round((before - total) * 100) / 100 };
}

/* ---------------------------------------------------------
   WhatsApp
   --------------------------------------------------------- */
const waNumber = String(CONFIG.whatsapp || "").replace(/\D/g, "");
/* Sin número, WhatsApp abre con el mensaje listo y deja elegir el contacto */
const waUrl = (text) => `https://wa.me/${waNumber}` + (text ? `?text=${encodeURIComponent(text)}` : "");
if (!waNumber) console.warn("[Remates iSTORE] Falta el número en CONFIG.whatsapp (app.js) para recibir los pedidos.");
function openWa(text) {
  const url = waUrl(text);
  const w = window.open(url, "_blank", "noopener");
  if (!w) location.href = url;
}

/* ---------------------------------------------------------
   Render: topbar, marquee, categorías, reseñas
   --------------------------------------------------------- */
function renderStatic() {
  const notes = [
    ["truck", "Envíos asegurados a todo México"],
    ["bank", "Paga por transferencia SPEI"],
    ["card", "Tarjeta de débito y crédito"],
    ["shield", "Equipos revisados con garantía"],
    ["whatsapp", "Atención personal por WhatsApp"],
  ];
  const tb = notes.map(([i, t]) => `<span>${ic(i)}${t}</span>`).join("");
  $("#topbarTrack").innerHTML = tb + tb;

  const words = ["iPhone 12 Pro Max", "AirPods Pro", "iPhone 11", "Carga rápida 20 W", "iPhone 12 mini", "MagSafe", "iPhone 11 Pro", "AirPods Max", "iPhone 12", "Lightning"];
  const mq = words.map((w) => `<span>${w}</span>`).join("");
  $("#marquee").innerHTML = mq + mq;
  const words2 = ["Envío a todo México", "Pago SPEI", "Tarjeta de débito y crédito", "Equipos revisados", "Garantía", "Atención por WhatsApp"];
  const mq2 = words2.map((w) => `<span>${w}</span>`).join("");
  $("#marquee2").innerHTML = mq2 + mq2 + mq2;

  /* bento: el mosaico de iPhone muestra tres modelos en abanico */
  const fan = [["iphone-11", 0], ["iphone-12-pro-max", 0], ["iphone-12", 5]]
    .map(([id, k]) => byId[id]?.options[2].values[k]?.img)
    .filter(Boolean);
  $("#cats").innerHTML = CATEGORIES.map((c, i) => {
    const items = PRODUCTS.filter((p) => p.cat === c.id);
    const sample = items.find((p) => p.featured) || items[0];
    const media = c.id === "iphone" && fan.length === 3
      ? `<div class="cat__fan">${fan.map((src) => `<div><img src="${imgSrc(src)}" alt="" loading="lazy" /></div>`).join("")}</div>`
      : `<div class="cat__plate">${sample ? visual(sample) : ""}</div>`;
    return `<button class="cat spot reveal" style="--d:${i * 0.08}s" data-filter="${c.id}">
      <h3>${c.label}</h3>
      <p>${c.blurb}</p>
      <span class="cat__count">${items.length} productos ${ic("arrowRight")}</span>
      <div class="cat__art">${media}</div>
    </button>`;
  }).join("");

  renderReviews();
  renderPolicies();

  $("#year").textContent = new Date().getFullYear();
  const from = Math.min(...PRODUCTS.filter((p) => p.cat === "iphone").map(minPrice));
  $("#heroFrom").textContent = money(from);
}

/* ---------------------------------------------------------
   Opiniones: dos carruseles en sentidos opuestos
   --------------------------------------------------------- */
function renderReviews() {
  const stars = (n) => Array.from({ length: 5 }, (_, k) => `<i class="${k < n ? "on" : ""}" style="--k:${k}">${ic("star")}</i>`).join("");
  const variants = ["glass", "grad", "lime", "glass", "grad", "glass"];
  const card = (r, i) => {
    const p = byId[r.pid];
    const thumb = p ? `<span class="rv__pimg">${visual(p)}</span>` : "";
    return `<article class="rv rv--${variants[i % variants.length]}" style="--f:${(i % 4) * -1.3}s">
      <div class="rv__card">
        <span class="rv__quote" aria-hidden="true">“</span>
        <div class="rv__top"><div class="rv__stars" aria-label="${r.stars ?? 5} de 5 estrellas">${stars(r.stars ?? 5)}</div><span class="rv__ok">${ic("verified")}Compra verificada</span></div>
        <p class="rv__text">${esc(r.text)}</p>
        <div class="rv__foot">
          <span class="rv__av">${esc(r.name[0])}</span>
          <div class="rv__who"><b>${esc(r.name)}</b><small>${esc(r.city)}</small></div>
          <button class="rv__prod" ${p ? `data-open="${p.id}"` : ""}>${thumb}<span>${esc(r.product)}</span></button>
        </div>
      </div>
    </article>`;
  };
  const a = REVIEWS.map(card).join("");
  const b = [...REVIEWS].reverse().map((r, i) => card(r, i + 2)).join("");
  $("#reviews").innerHTML = a + a;
  $("#reviews2").innerHTML = b + b;
}

/* ---------------------------------------------------------
   Políticas (footer + ventana)
   --------------------------------------------------------- */
function renderPolicies() {
  $("#footerPolicies").insertAdjacentHTML("beforeend", POLICIES.map((p) => `<button data-policy="${p.id}">${esc(p.title)}</button>`).join(""));
  $("#polNav").innerHTML = `<span class="pill">Políticas</span>` + POLICIES.map((p) => `<button class="pol__link" data-policy="${p.id}">${ic(p.icon)}<span>${esc(p.title)}</span></button>`).join("");
  $("#storeHours").textContent = STORE.hours;
  $("#storeCoverage").textContent = STORE.coverage;
  $("#trustWarranty").textContent = `${STORE.warrantyDays} días en todos los equipos`;
  $("#trustReturns").textContent = `${STORE.returnDays} días para cambios`;
}
function openPolicy(id) {
  const p = POLICIES.find((x) => x.id === id) || POLICIES[0];
  $$(".pol__link").forEach((b) => b.classList.toggle("on", b.dataset.policy === p.id));
  const body = $("#polBody");
  body.innerHTML = `<span class="pol__ic">${ic(p.icon)}</span><h3>${esc(p.title)}</h3>${p.body}<p class="pol__upd">Última actualización: ${STORE.updated}</p>`;
  body.classList.remove("swap");
  void body.offsetWidth;
  body.classList.add("swap");
  body.scrollTop = 0;
  if (!openLayers.has("#policyModal")) openLayer("#policyModal");
}

/* ---------------------------------------------------------
   Animación de escritura en el inicio
   --------------------------------------------------------- */
function initTyping() {
  const el = $("#typed");
  const phrases = ["a precio de remate.", "con garantía real.", "listos para estrenar.", "revisados uno a uno."];
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  /* escribe la frase, espera, la borra y pasa a la siguiente */
  let i = 0, j = 0, deleting = false;
  const tick = () => {
    const word = phrases[i];
    j += deleting ? -1 : 1;
    el.textContent = word.slice(0, j) || "​";
    let wait = deleting ? 38 : 70 + Math.random() * 55;
    if (!deleting && j === word.length) { deleting = true; wait = 2400; }
    else if (deleting && j === 0) { deleting = false; i = (i + 1) % phrases.length; wait = 380; }
    setTimeout(tick, wait);
  };
  el.textContent = "​";
  setTimeout(tick, 1300);
}

/* ---------------------------------------------------------
   Tarjeta de producto
   --------------------------------------------------------- */
function cardHTML(p, i = 0) {
  const sel = defaultSel(p);
  const r = resolve(p, sel);
  const off = offPct(r.price, r.old);
  const colors = (p.options || []).find((o) => o.type === "swatch");
  const badgeCls = /oferta/i.test(p.badge || "") ? "card__badge--sale" : /nuevo|kit/i.test(p.badge || "") ? "card__badge--gold" : "";
  const range = hasRange(p);
  return `<article class="card ${p.soldOut ? "card--soldout" : ""}" style="--i:${i}" data-id="${p.id}">
    <div class="card__media" data-open="${p.id}">
      ${p.soldOut ? `<span class="card__badge">Agotado</span>` : p.badge ? `<span class="card__badge ${badgeCls}">${esc(p.badge)}</span>` : ""}
      ${off && !p.soldOut ? `<span class="card__off">-${off}%</span>` : ""}
      ${visual(p, sel)}
      <button class="btn btn--glass btn--sm card__quick" data-open="${p.id}">${ic("eye")}<span>Vista rápida</span></button>
    </div>
    <div class="card__body">
      <span class="card__cat">${catOf(p.cat).label}</span>
      <h3 class="card__name" data-open="${p.id}">${esc(p.name)}</h3>
      <p class="card__tag">${esc(p.tag || "")}</p>
      ${colors ? `<div class="card__swatches">${colors.values.slice(0, 5).map((v) => `<i style="background:${v.hex}" title="${esc(v.label)}"></i>`).join("")}${colors.values.length > 5 ? `<small>+${colors.values.length - 5}</small>` : ""}</div>` : ""}
      <div class="card__foot">
        <div class="price">${range ? "<small>Desde</small>" : ""}<strong>${money(range ? minPrice(p) : r.price)}</strong>${r.old && !range ? `<s>${money(r.old)}</s>` : range && r.old ? `<s>${money(r.old)}</s>` : ""}</div>
        <button class="add-btn" data-add="${p.id}" aria-label="Agregar ${esc(p.name)}">${ic(p.soldOut ? "whatsapp" : "plus")}</button>
      </div>
    </div>
  </article>`;
}

/* ---------------------------------------------------------
   Catálogo: filtros, búsqueda y orden
   --------------------------------------------------------- */
const state = { filter: "all", q: "", sort: "default" };
function renderTabs() {
  const tabs = [{ id: "all", label: "Todo", n: PRODUCTS.length }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label, n: PRODUCTS.filter((p) => p.cat === c.id).length }))];
  $("#tabs").insertAdjacentHTML("beforeend", tabs.map((t) => `<button class="tab" role="tab" data-tab="${t.id}">${t.label}<small>${t.n}</small></button>`).join(""));
}
function movePill() {
  const active = $(`.tab[data-tab="${state.filter}"]`);
  const pill = $("#tabsPill");
  $$(".tab").forEach((t) => t.classList.toggle("is-active", t === active));
  if (!active) return;
  pill.style.width = active.offsetWidth + "px";
  pill.style.transform = `translateX(${active.offsetLeft}px)`;
}
function renderGrid() {
  const q = norm(state.q.trim());
  let list = PRODUCTS.filter((p) => (state.filter === "all" || p.cat === state.filter) && (!q || norm(`${p.name} ${p.tag} ${catOf(p.cat).label}`).includes(q)));
  if (state.sort === "asc") list = [...list].sort((a, b) => minPrice(a) - minPrice(b));
  if (state.sort === "desc") list = [...list].sort((a, b) => minPrice(b) - minPrice(a));
  if (state.sort === "save") list = [...list].sort((a, b) => offPct(b.price, b.old) - offPct(a.price, a.old));
  $("#grid").innerHTML = list.length
    ? list.map((p, i) => cardHTML(p, Math.min(i, 12))).join("")
    : `<div class="empty"><b>Sin resultados</b>Prueba con otro modelo o escríbenos por WhatsApp, lo conseguimos.</div>`;
  $("#results").textContent = `${list.length} ${list.length === 1 ? "producto" : "productos"}`;
  movePill();
}
function setFilter(f, scroll) {
  state.filter = f;
  renderGrid();
  if (scroll) $("#catalogo").scrollIntoView({ behavior: "smooth" });
}

function renderRail() {
  $("#rail").innerHTML = PRODUCTS.filter((p) => p.featured).map((p, i) => cardHTML(p, i)).join("");
}

/* ---------------------------------------------------------
   Modal de producto
   --------------------------------------------------------- */
let pd = null;
function openProduct(id) {
  const p = byId[id];
  if (!p) return;
  pd = { p, sel: defaultSel(p), qty: 1 };
  renderProduct();
  openLayer("#productModal");
}
function renderProduct(swapOnly, swapImg) {
  const { p, sel, qty } = pd;
  const r = resolve(p, sel);
  const off = offPct(r.price, r.old);
  if (swapImg) {
    const main = $("#pdMain");
    const cur = main.firstElementChild;
    if (cur) cur.classList.add("is-swap");
    setTimeout(() => {
      main.innerHTML = visual(p, sel);
      const el = main.firstElementChild;
      el.classList.add("is-swap");
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("is-swap")));
    }, 160);
  }
  const color = (p.options || []).find((o) => o.type === "swatch");
  const thumbs = color ? color.values.filter((v) => v.img) : [];
  const media = `
    <div class="pd__main" id="pdMain">${visual(p, sel)}</div>
    ${thumbs.length > 1 ? `<div class="pd__thumbs">${thumbs.map((v) => `<button class="${sel[color.key] === v.label ? "on" : ""}" data-opt="${color.key}" data-val="${esc(v.label)}" aria-label="${esc(v.label)}"><img src="${imgSrc(v.img)}" alt="" loading="lazy" /></button>`).join("")}</div>` : ""}`;

  const opts = (p.options || []).map((o) => `
    <div class="opt">
      <div class="opt__label">${o.label}: <span>${esc(sel[o.key])}</span></div>
      <div class="opt__vals">${o.values.map((v) => {
        const on = sel[o.key] === v.label ? "on" : "";
        const off = v.available === false ? "off" : "";
        return o.type === "swatch"
          ? `<button class="swatch ${on}" data-opt="${o.key}" data-val="${esc(v.label)}" title="${esc(v.label)}" aria-label="${esc(v.label)}"><i style="background:${v.hex}"></i></button>`
          : `<button class="chipbtn ${on} ${off}" data-opt="${o.key}" data-val="${esc(v.label)}">${esc(v.label)}</button>`;
      }).join("")}</div>
    </div>`).join("");

  const info = `
    <span class="pd__cat">${catOf(p.cat).label}</span>
    <h2 class="pd__name">${esc(p.name)}</h2>
    <p class="pd__tag">${esc(p.tag || "")}</p>
    <div class="pd__price"><strong id="pdPrice">${money(r.price)}</strong>${r.old ? `<s>${money(r.old)}</s>` : ""}${off ? `<span class="save">Ahorras ${money(r.old - r.price)}</span>` : ""}</div>
    <div class="pd__opts">${opts}</div>
    <div class="pd__buy">
      ${r.available
        ? `<div class="qty"><button data-pdqty="-1" aria-label="Menos">${ic("minus")}</button><output id="pdQty">${qty}</output><button data-pdqty="1" aria-label="Más">${ic("plus")}</button></div>
           <button class="btn btn--grad btn--lg" data-pd-add>${ic("bag")}<span>Agregar al carrito</span></button>
           <button class="btn btn--wa btn--lg btn--block" data-pd-buy>${ic("whatsapp")}<span>Comprar ahora · ${money(r.price * qty)}</span></button>`
        : `<button class="btn btn--wa btn--lg btn--block" data-pd-ask>${ic("whatsapp")}<span>Preguntar disponibilidad</span></button>`}
    </div>
    <div class="pd__trust">
      <div>${ic("shield")}Garantía</div>
      <div>${ic("truck")}Envío a todo México</div>
      <div>${ic("bank")}SPEI o tarjeta</div>
    </div>
    <p class="pd__desc">${esc(p.desc)}</p>
    ${p.hl ? `<ul class="pd__hl">${p.hl.map((h) => `<li>${ic("checkCircle")}${esc(h)}</li>`).join("")}</ul>` : ""}
    ${p.specs ? `<dl class="pd__specs">${p.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}`;

  const panel = $("#productPanel");
  if (swapOnly) {
    const keepScroll = panel.scrollTop;
    $(".pd__info", panel).innerHTML = info;
    $$(".pd__thumbs button", panel).forEach((b) => b.classList.toggle("on", sel[b.dataset.opt] === b.dataset.val));
    panel.scrollTop = keepScroll;
  } else {
    panel.innerHTML = `<button class="icon-btn modal__close" data-close="product" aria-label="Cerrar">${ic("x")}</button>
      <div class="pd"><div class="pd__media">${media}</div><div class="pd__info">${info}</div></div>`;
    panel.scrollTop = 0;
  }
}
function pdSelect(key, val) {
  if (pd.sel[key] === val) return;
  const before = resolve(pd.p, pd.sel);
  pd.sel[key] = val;
  const after = resolve(pd.p, pd.sel);
  renderProduct(true, before.img !== after.img || (!after.img && before.hex !== after.hex));
}

/* ---------------------------------------------------------
   Carrito (drawer)
   --------------------------------------------------------- */
function renderCart() {
  const t = totalsFor(cart);
  const count = $("#cartCount");
  count.textContent = t.units;
  count.classList.toggle("has", t.units > 0);
  $("#cartHeadCount").textContent = t.units ? `(${t.units})` : "";

  if (!cart.length) {
    $("#cartBody").innerHTML = `<div class="cart-empty"><span>${ic("bag")}</span><b>Tu carrito está vacío</b><p>Agrega un iPhone, AirPods o accesorios.</p><button class="btn btn--grad" data-close="cart" data-goto="catalogo"><span>Ver catálogo</span>${ic("arrowRight")}</button></div>`;
    $("#cartFoot").innerHTML = "";
    $("#cartFoot").style.display = "none";
    return;
  }
  $("#cartFoot").style.display = "";
  $("#cartBody").innerHTML = cart.map((l, i) => {
    const p = byId[l.id];
    const r = resolve(p, l.sel);
    return `<div class="cline">
      <div class="line__img">${visual(p, l.sel)}</div>
      <div>
        <p class="line__name">${esc(p.name)}</p>
        <p class="line__var">${esc(r.label || catOf(p.cat).label)} · ${money(r.price)} c/u</p>
        <div class="qty qty--sm"><button data-qty="${i}" data-d="-1" aria-label="Menos">${ic("minus")}</button><output>${l.qty}</output><button data-qty="${i}" data-d="1" aria-label="Más">${ic("plus")}</button></div>
      </div>
      <div class="line__right"><span class="line__price">${money(r.price * l.qty)}</span><button class="line__rm" data-rm="${i}">Quitar</button></div>
    </div>`;
  }).join("");
  $("#cartFoot").innerHTML = `
    <div class="sum-row"><span>Subtotal (${t.units} ${t.units === 1 ? "artículo" : "artículos"})</span><span>${money(t.total)}</span></div>
    ${t.savings > 0 ? `<div class="sum-row"><span>Ahorro</span><span class="text-ok">-${money(t.savings)}</span></div>` : ""}
    <div class="sum-row"><span>Envío</span><span>Por confirmar</span></div>
    <div class="sum-row sum-row--total"><span>Total</span><span>${money(t.total)}</span></div>
    <button class="btn btn--wa btn--lg btn--block" data-checkout>${ic("whatsapp")}<span>Finalizar pedido por WhatsApp</span></button>
    <p class="drawer__note">Pago por transferencia SPEI o tarjeta de débito/crédito</p>`;
}

/* ---------------------------------------------------------
   Checkout por WhatsApp
   --------------------------------------------------------- */
const co = { lines: [], mode: "cart" };
function openCheckout(lines, mode) {
  /* une productos iguales y suma sus cantidades */
  const merged = [];
  lines.forEach((l) => {
    const f = merged.find((m) => lineKey(m.id, m.sel) === lineKey(l.id, l.sel));
    if (f) f.qty += l.qty;
    else merged.push({ id: l.id, sel: { ...l.sel }, qty: l.qty });
  });
  co.lines = merged;
  co.mode = mode;
  const t = totalsFor(co.lines);
  $("#coLines").innerHTML = co.lines.map((l) => {
    const p = byId[l.id];
    const r = resolve(p, l.sel);
    return `<div class="co__line"><div class="line__img">${visual(p, l.sel)}<i>${l.qty}</i></div><div><b>${esc(p.name)}</b><small>${esc(r.label || catOf(p.cat).label)}</small></div><span>${money(r.price * l.qty)}</span></div>`;
  }).join("");
  $("#coTotals").innerHTML = `
    <div class="sum-row"><span>Artículos</span><span>${t.units}</span></div>
    ${t.savings > 0 ? `<div class="sum-row"><span>Ahorro</span><span class="text-ok">-${money(t.savings)}</span></div>` : ""}
    <div class="sum-row"><span>Envío</span><span>Por confirmar</span></div>
    <div class="sum-row sum-row--total"><span>Total</span><span>${money(t.total)}</span></div>`;
  $("#coBtnTotal").textContent = money(t.total);
  closeLayer("#cartDrawer", true);
  closeLayer("#productModal", true);
  openLayer("#checkoutModal");
  setTimeout(() => $("#coName").focus({ preventScroll: true }), 450);
}
const makeRef = () => CONFIG.orderPrefix + "-" + Date.now().toString(36).slice(-5).toUpperCase();
function buildMessage(ref, d) {
  const t = totalsFor(co.lines);
  const sep = "------------------------------";
  const items = co.lines.map((l, i) => {
    const p = byId[l.id];
    const r = resolve(p, l.sel);
    return [`*${i + 1}. ${p.name}*`, r.label ? `   ${r.label}` : null, `   Cantidad: ${l.qty} x ${money(r.price)} = *${money(r.price * l.qty)}*`].filter(Boolean).join("\n");
  });
  return [
    `*NUEVO PEDIDO · ${CONFIG.brandName}*`,
    `Folio: ${ref}`,
    sep,
    items.join("\n\n"),
    sep,
    `Artículos: ${t.units}`,
    t.savings > 0 ? `Ahorro: -${money(t.savings)}` : null,
    `*TOTAL: ${money(t.total)} MXN*`,
    `Envío: por confirmar`,
    "",
    `*Método de pago:* ${d.pay}`,
    `*Nombre:* ${d.name}`,
    `*Ciudad:* ${d.city}${d.zip ? ` · C.P. ${d.zip}` : ""}`,
    d.notes ? `*Notas:* ${d.notes}` : null,
    "",
    d.pay.startsWith("Transferencia")
      ? "Hola, quiero confirmar este pedido. ¿Me comparten la CLABE para realizar la transferencia SPEI?"
      : "Hola, quiero confirmar este pedido. ¿Me comparten el enlace para pagar con tarjeta?",
  ].filter((x) => x !== null).join("\n");
}
function submitCheckout(e) {
  e.preventDefault();
  const f = e.target.elements;
  const d = {
    name: f.name.value.trim(),
    city: f.city.value.trim(),
    zip: f.zip.value.trim(),
    pay: f.pay.value,
    notes: f.notes.value.trim(),
  };
  let ok = true;
  [["name", d.name.length >= 3], ["city", d.city.length >= 3]].forEach(([k, valid]) => {
    const field = f[k].closest(".field");
    field.classList.toggle("is-err", !valid);
    if (!valid && ok) { f[k].focus(); ok = false; }
  });
  if (!ok) { toast({ icon: "x", title: "Faltan datos", text: "Escribe tu nombre y tu ciudad." }); return; }
  openWa(buildMessage(makeRef(), d));
  if (co.mode === "cart") { cart = []; saveCart(); renderCart(); }
  closeLayer("#checkoutModal");
  toast({ icon: "checkCircle", title: "Pedido listo", text: "Envía el mensaje en WhatsApp para confirmarlo." });
}

/* ---------------------------------------------------------
   Capas (modales, drawer, buscador)
   --------------------------------------------------------- */
const openLayers = new Set();
let lastFocus = null;
function openLayer(sel) {
  const el = $(sel);
  if (!openLayers.size) lastFocus = document.activeElement;
  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
  openLayers.add(sel);
  document.body.classList.add("lock");
}
function closeLayer(sel, keepLock) {
  const el = $(sel);
  if (!el.classList.contains("is-open")) return;
  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
  openLayers.delete(sel);
  if (!openLayers.size && !keepLock) {
    document.body.classList.remove("lock");
    lastFocus?.focus?.({ preventScroll: true });
  }
  if (!openLayers.size && keepLock) setTimeout(() => { if (!openLayers.size) document.body.classList.remove("lock"); }, 50);
}
const LAYERS = { product: "#productModal", cart: "#cartDrawer", checkout: "#checkoutModal", search: "#searchOverlay", policy: "#policyModal" };

/* ---------------------------------------------------------
   Buscador rápido
   --------------------------------------------------------- */
function renderQuick() {
  const q = norm($("#quickSearch").value.trim());
  const list = q ? PRODUCTS.filter((p) => norm(`${p.name} ${p.tag} ${catOf(p.cat).label}`).includes(q)) : PRODUCTS.filter((p) => p.featured).slice(0, 6);
  $("#quickResults").innerHTML = (q ? "" : `<div class="qr-hint">Populares</div>`) + (list.length
    ? list.map((p) => `<button class="qr" data-open="${p.id}"><span class="line__img">${visual(p)}</span><span><b>${esc(p.name)}</b><small>${catOf(p.cat).label} · ${esc(p.tag || "")}</small></span><span>${money(minPrice(p))}</span></button>`).join("")
    : `<div class="qr-empty">No encontramos "${esc($("#quickSearch").value)}". Pregúntanos por WhatsApp.</div>`);
}

/* ---------------------------------------------------------
   Toasts
   --------------------------------------------------------- */
function toast({ icon = "check", title, text, product, sel, action }) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span class="toast__img">${product ? visual(product, sel) : ic(icon)}</span><div><b>${esc(title)}</b><small>${esc(text)}</small></div>${action ? `<button>${action.label}</button>` : ""}`;
  if (action) el.querySelector("button").addEventListener("click", () => { action.fn(); dismiss(); });
  $("#toasts").appendChild(el);
  const dismiss = () => { el.classList.add("out"); setTimeout(() => el.remove(), 400); };
  setTimeout(dismiss, 3200);
  while ($("#toasts").children.length > 3) $("#toasts").firstElementChild.remove();
}
function added(p, sel, qty) {
  toast({ product: p, sel, title: "Agregado al carrito", text: `${qty > 1 ? qty + " × " : ""}${p.name}`, action: { label: "Ver carrito", fn: () => openLayer("#cartDrawer") } });
}

/* ---------------------------------------------------------
   Eventos
   --------------------------------------------------------- */
document.addEventListener("click", (e) => {
  const t = e.target;
  const el = (s) => t.closest(s);
  let m;

  if ((m = el("[data-close]"))) {
    closeLayer(LAYERS[m.dataset.close]);
    if (m.dataset.goto) setTimeout(() => $("#" + m.dataset.goto).scrollIntoView({ behavior: "smooth" }), 200);
    return;
  }
  if ((m = el("[data-policy]"))) { openPolicy(m.dataset.policy); return; }
  if ((m = el("[data-wa-hello]"))) {
    e.preventDefault();
    openWa(`Hola ${CONFIG.brandName}, me interesa un producto. ¿Me pueden dar informes?`);
    return;
  }
  if ((m = el("[data-filter]"))) {
    e.preventDefault();
    $("#nav").classList.remove("is-open");
    setFilter(m.dataset.filter, true);
    return;
  }
  if ((m = el("[data-tab]"))) { setFilter(m.dataset.tab); return; }
  if ((m = el("[data-add]"))) {
    const p = byId[m.dataset.add];
    if (p.soldOut) { openWa(`Hola ${CONFIG.brandName}, ¿tendrán disponible ${p.name}?`); return; }
    if (needsChoice(p)) { openProduct(p.id); return; }
    const sel = defaultSel(p);
    addToCart(p.id, sel, 1);
    added(p, sel, 1);
    return;
  }
  if ((m = el("[data-open]"))) {
    if (openLayers.has("#searchOverlay")) closeLayer("#searchOverlay", true);
    openProduct(m.dataset.open);
    return;
  }
  if ((m = el("[data-opt]"))) { pdSelect(m.dataset.opt, m.dataset.val); return; }
  if ((m = el("[data-pdqty]"))) {
    pd.qty = Math.max(1, Math.min(99, pd.qty + Number(m.dataset.pdqty)));
    $("#pdQty").textContent = pd.qty;
    const buy = $("[data-pd-buy] span:last-child");
    if (buy) buy.textContent = `Comprar ahora · ${money(resolve(pd.p, pd.sel).price * pd.qty)}`;
    return;
  }
  if (el("[data-pd-add]")) {
    addToCart(pd.p.id, pd.sel, pd.qty);
    added(pd.p, pd.sel, pd.qty);
    closeLayer("#productModal");
    return;
  }
  if (el("[data-pd-buy]")) { openCheckout([{ id: pd.p.id, sel: pd.sel, qty: pd.qty }], "now"); return; }
  if (el("[data-pd-ask]")) {
    const r = resolve(pd.p, pd.sel);
    openWa(`Hola ${CONFIG.brandName}, ¿tendrán disponible ${pd.p.name}${r.label ? " (" + r.label + ")" : ""}?`);
    return;
  }
  if ((m = el("[data-qty]"))) {
    const l = cart[+m.dataset.qty];
    l.qty += Number(m.dataset.d);
    if (l.qty < 1) cart.splice(+m.dataset.qty, 1);
    l.qty = Math.min(99, l.qty);
    saveCart();
    renderCart();
    return;
  }
  if ((m = el("[data-rm]"))) { cart.splice(+m.dataset.rm, 1); saveCart(); renderCart(); return; }
  if (el("[data-checkout]")) { openCheckout(cart, "cart"); return; }
  if ((m = el("[data-rail]"))) {
    const rail = $("#rail");
    const card = rail.querySelector(".card");
    rail.scrollBy({ left: (card ? card.offsetWidth + 18 : 300) * Number(m.dataset.rail), behavior: "smooth" });
    return;
  }
});

$("#cartOpen").addEventListener("click", () => openLayer("#cartDrawer"));
$("#navToggle").addEventListener("click", () => $("#nav").classList.toggle("is-open"));
$("#searchOpen").addEventListener("click", () => {
  openLayer("#searchOverlay");
  renderQuick();
  setTimeout(() => $("#quickSearch").focus(), 120);
});
$("#searchOverlay").addEventListener("click", (e) => { if (e.target.id === "searchOverlay") closeLayer("#searchOverlay"); });
$("#quickSearch").addEventListener("input", renderQuick);
$("#quickSearch").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    state.q = e.target.value;
    $("#searchInput").value = state.q;
    state.filter = "all";
    closeLayer("#searchOverlay");
    renderGrid();
    $("#catalogo").scrollIntoView({ behavior: "smooth" });
  }
});
$("#searchInput").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
$("#sortSelect").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
$("#coForm").addEventListener("submit", submitCheckout);
$("#coForm").addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("is-err"));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && openLayers.size) closeLayer([...openLayers].pop());
  if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName))) {
    e.preventDefault();
    $("#searchOpen").click();
  }
});
window.addEventListener("resize", movePill);
window.addEventListener("storage", (e) => { if (e.key === CONFIG.storageKey) { loadCart(); renderCart(); } });

/* ---------------------------------------------------------
   Animaciones
   --------------------------------------------------------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
}
function initCounters() {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    io.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1600;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const v = Math.round(end * (1 - Math.pow(1 - k, 4)));
      el.textContent = v.toLocaleString("es-MX") + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  $$("[data-count]").forEach((el) => io.observe(el));
}
function initHeader() {
  const header = $("#header");
  const hero = $(".hero");
  const io = new IntersectionObserver(([en]) => header.classList.toggle("is-light", !en.isIntersecting), { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` });
  io.observe(hero);
}
function initHero() {
  /* iPhone central: modelo, color, foto recortada (img/hero) y dato destacado */
  const slides = [
    ["iphone-12-pro-max", "Azul pacífico", "i12pm-azul", "Cámara Pro", "Triple 12 MP + LiDAR"],
    ["iphone-12", "Morado", "i12-morado", "Pantalla", "OLED Super Retina 6.1\""],
    ["iphone-11-pro", "Verde noche", "i11p-verde", "Cámara Pro", "Triple 12 MP · Noche"],
    ["iphone-12-mini", "(PRODUCT)RED", "i12m-rojo", "Tamaño", "Compacto de 5.4\""],
    ["iphone-11", "Amarillo", "i11-amarillo", "Chip", "A13 Bionic"],
    ["iphone-12-pro", "Oro", "i12p-oro", "Diseño", "Acero inoxidable"],
  ].filter(([id]) => byId[id]).map(([id, color, file, label, spec]) => ({ p: byId[id], color, src: `img/hero/${file}.png`, label, spec }));

  const box = $("#heroImg"), dots = $("#heroDots");
  slides.forEach((s) => { const im = new Image(); im.src = imgSrc(s.src); });
  const show = (s) => {
    box.innerHTML = `<img src="${imgSrc(s.src)}" alt="${esc(s.p.name)} ${esc(s.color)}" />`;
    $("#heroName").textContent = s.p.name.replace(/^iPhone\s*/, "");
    $("#heroSpecLabel").textContent = s.label;
    $("#heroSpec").textContent = s.spec;
    $("#heroFrom").textContent = money(minPrice(s.p));
    const colors = s.p.options.find((o) => o.type === "swatch").values;
    $("#heroSwatches").innerHTML = colors.map((c) => `<i class="${c.label === s.color ? "on" : ""}" style="background:${c.hex}"></i>`).join("");
  };
  dots.innerHTML = slides.map((_, k) => `<button class="${k === 0 ? "on" : ""}" data-slide="${k}" aria-label="Ver ${esc(slides[k].p.name)}"></button>`).join("");
  $("#heroPods").textContent = byId["airpods-pro-3"] ? money(byId["airpods-pro-3"].price) : "";

  let i = 0, timer;
  const go = (k) => {
    i = (k + slides.length) % slides.length;
    box.classList.add("is-out");
    $$(".tag .tag__in").forEach((t) => t.classList.add("is-swap"));
    setTimeout(() => {
      show(slides[i]);
      $$("button", dots).forEach((d, n) => d.classList.toggle("on", n === i));
      box.classList.remove("is-out");
      $$(".tag .tag__in").forEach((t) => t.classList.remove("is-swap"));
    }, 420);
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => { if (!document.hidden) go(i + 1); }, 3800); };
  show(slides[0]);
  auto();
  dots.addEventListener("click", (e) => { const b = e.target.closest("[data-slide]"); if (b) { go(+b.dataset.slide); auto(); } });

  const openCurrent = () => { openProduct(slides[i].p.id); pdSelect("color", slides[i].color); };
  box.addEventListener("click", openCurrent);
  box.addEventListener("keydown", (e) => { if (e.key === "Enter") openCurrent(); });
  $(".tag--price").addEventListener("click", openCurrent);
  $$("[data-open-hero]").forEach((im) => im.addEventListener("click", () => openProduct(im.dataset.openHero)));

  /* profundidad: cada capa se mueve distinto según el mouse */
  const combo = $("#combo");
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const layers = $$(".layer", combo);
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      layers.forEach((l) => {
        const d = +l.dataset.depth || 0;
        l.style.transform = `translate3d(${cx * d * 26}px, ${cy * d * 20}px, 0)`;
      });
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(loop) : 0;
    };
    $(".hero").addEventListener("pointermove", (e) => {
      const b = combo.getBoundingClientRect();
      tx = ((e.clientX - b.left) / b.width - 0.5) * 2;
      ty = ((e.clientY - b.top) / b.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    $(".hero").addEventListener("pointerleave", () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });
  }
}

/* luz que sigue al cursor, botones magnéticos y barra de progreso */
function initEffects() {
  const glow = $("#cursorGlow");
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  let gx = -999, gy = -999, tx = -999, ty = -999;

  document.addEventListener("pointermove", (e) => {
    tx = e.clientX; ty = e.clientY;
    const el = e.target.closest?.(".card, .spot");
    if (el) {
      const b = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - b.left}px`);
      el.style.setProperty("--my", `${e.clientY - b.top}px`);
    }
  }, { passive: true });

  if (fine) {
    const loop = () => {
      gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
      glow.style.setProperty("--cx", `${gx}px`);
      glow.style.setProperty("--cy", `${gy}px`);
      requestAnimationFrame(loop);
    };
    loop();
    $$(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const b = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.25}px, ${(e.clientY - b.top - b.height / 2) * 0.35}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  const bar = $("#progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : 0);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------
   Inicio
   --------------------------------------------------------- */
loadCart();
renderStatic();
renderTabs();
renderRail();
renderGrid();
renderCart();
hydrateIcons();
initReveal();
initCounters();
initHeader();
initHero();
initEffects();
initTyping();
if (!document.fonts || document.fonts.status === "loaded") movePill();
else document.fonts.ready.then(movePill);

const finishLoading = () => {
  $("#loader").classList.add("is-done");
  document.body.classList.add("is-loaded");
  movePill();
};
setTimeout(finishLoading, 900);
window.addEventListener("load", movePill);
