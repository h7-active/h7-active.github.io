import { Text, Link, FlexRow, Wrapper, Spacer, Switcher, MobileBar, DesktopBar } from "nodality";
import t from "./lang.js";

// ── Brand Tokens ──
export const PRIMARY    = "#104B87";
export const PRIMARY_DK = "#0A325A";
export const ACCENT     = "#E8FF00";
export const DARK_BG    = "#071e3a";
export const WHITE      = "#ffffff";
export const GRAY_50    = "#F9FAFB";
export const GRAY_100   = "#F3F4F6";
export const GRAY_200   = "#E5E7EB";
export const GRAY_500   = "#6B7280";
export const GRAY_700   = "#374151";
export const GRAY_900   = "#111827";
export const FONT       = "Inter";

// ── Nav link helper ──
function navLink(text, url) {
  return new Link().set({
    url: url, text: text,
    font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.8)",
    weight: "500", removeDecoration: true,
    hover: { color: ACCENT, animation: "0.3s ease" },
  });
}

function langToggle() {
  return new Text(t._lang === "cs" ? "EN" : "CZ").set({
    font: FONT, exact: "0.75rem", color: GRAY_900, weight: "700",
    background: ACCENT, radius: "1rem",
    pad: [{ t: 4 }, { b: 4 }, { l: 10 }, { r: 10 }],
    cursor: "pointer",
    onTap: () => t._setLang(t._lang === "cs" ? "en" : "cs"),
  });
}

// ── Shared Navigation ──
export function renderNav() {
  new Switcher().set({
    breakpoints: [
      {
        at: "0px",
        view: new MobileBar().set({
          background: PRIMARY_DK,
          hamburgerColour: WHITE,
          brand: new Link(t.nav.brand, "./index.html").set({
            font: FONT, exact: "1.5rem", color: WHITE, weight: "900",
            removeDecoration: true,
          }),
        }).add([
          navLink(t.nav.koncept, "./o-konceptu.html"),
          navLink(t.nav.aktivity, "./aktivity.html"),
          navLink(t.nav.oNas, "./o-nas.html"),
          langToggle(),
        ]),
      },
      {
        at: "768px",
        view: new DesktopBar().set({
          background: PRIMARY_DK,
          pad: [{ t: 16 }, { b: 16 }, { l: 40 }, { r: 40 }],
        }).add([
          new Link(t.nav.brand, "./index.html").set({
            font: FONT, exact: "1.5rem", color: WHITE, weight: "900",
            removeDecoration: true,
          }),
          new Spacer(true),
          navLink(t.nav.koncept, "./o-konceptu.html"),
          navLink(t.nav.aktivity, "./aktivity.html"),
          navLink(t.nav.oNas, "./o-nas.html"),
          langToggle(),
        ]),
      },
    ],
  }).render("#mount");
}

// ── Shared Footer ──
export function renderFooter() {
  function footerCol(title, links) {
    return new Wrapper().set({ width: "100%" }).add([
      new Text(title).set({ font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.5)", weight: "700", pad: [{ b: 12 }] }),
      ...links.map(l =>
        new Link(l.text, l.url).set({
          font: FONT, exact: "0.9rem", color: "rgba(255,255,255,0.7)",
          weight: "400", removeDecoration: true,
          pad: [{ b: 8 }], block: true,
          hover: { color: ACCENT, animation: "0.3s ease" },
        })
      )
    ]);
  }

  const footerBrand = new Wrapper().set({ width: "100%", pad: [{ r: 32 }] }).add([
    new Text(t.footer.brand).set({ font: FONT, exact: "1.3rem", color: WHITE, weight: "900" }),
    new Text(t.footer.tagline).set({ font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.5)", pad: [{ t: 8 }], maxWidth: "280px" }),
  ]);

  const footerGrid = new FlexRow().set({
    gap: "2rem",
    pad: [{ t: 48 }, { b: 32 }, { l: 40 }, { r: 40 }],
    maxWidth: "1100px",
    colat: "768px",
  }).items([
    footerBrand,
    footerCol(t.footer.navigace, [
      { text: t.footer.konceptH7, url: "./o-konceptu.html" },
      { text: t.footer.aktivity, url: "./aktivity.html" },
      { text: t.footer.oNas, url: "./o-nas.html" },
    ]),
    footerCol(t.footer.koncept, [
      { text: t.footer.systemUrovni, url: "./aktivity.html" },
      { text: t.footer.sedmPiliru, url: "./o-konceptu.html" },
      { text: t.footer.katalogAktivit, url: "./aktivity.html" },
    ]),
    footerCol(t.footer.kontakt, [
      { text: "info@h7active.cz", url: "mailto:info@h7active.cz" },
      { text: "h7active.cz", url: "https://h7active.cz" },
    ]),
  ]);

  const footerBottom = new Wrapper().set({
    pad: [{ t: 16 }, { b: 24 }, { l: 40 }, { r: 40 }],
    borderObj: { width: "1px 0 0 0", color: "rgba(255,255,255,0.1)" },
  }).add([
    new Text(t.footer.copyright.replace("{year}", new Date().getFullYear())).set({
      font: FONT, exact: "0.8rem", color: "rgba(255,255,255,0.4)", align: "center", pad: [{ t: 16 }],
    })
  ]);

  new Wrapper("footer").set({
    background: DARK_BG,
    width: "100%",
  }).add([footerGrid, footerBottom]).render("#mount");
}

// ── Page Header Helper ──
export function renderPageHeader(badge, title, subtitle) {
  const header = new Wrapper().set({
    background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
    pad: [{ t: 120 }, { b: 60 }, { l: 24 }, { r: 24 }],
    width: "100%",
  }).add([
    new Text(title).set({
      font: FONT, size: "S4", color: WHITE, weight: "900",
      align: "center", pad: [{ t: 16 }],
    }),
    new Text(subtitle).set({
      font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.85)",
      align: "center", maxWidth: "650px", center: true, pad: [{ t: 12 }],
    }),
  ]);
  header.render("#mount");
}

// ── Back Link Helper ──
export function renderBackLink() {
  const back = new Wrapper().set({
    background: WHITE, pad: [{ t: 16 }, { b: 16 }, { l: 24 }, { r: 24 }],
    borderObj: { width: "0 0 1px 0", color: GRAY_200 },
  }).add([
    new Link(t.back, "./index.html").set({
      font: FONT, exact: "0.9rem", color: PRIMARY, weight: "600",
      removeDecoration: true,
      hover: { color: PRIMARY_DK, animation: "0.2s ease" },
    }),
  ]);
  back.render("#mount");
}

// ── Section Spacer ──
export function sectionGap(bg = WHITE) {
  new Wrapper().set({ background: bg, pad: [{ t: 8 }] }).add([]).render("#mount");
}
