import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";

renderNav();

// ── HERO HEADER ──
renderPageHeader(
  t.koncept.headerBadge,
  t.koncept.headerTitle,
  t.koncept.headerDesc
);

// ════════════════════════════════════════════════════════
// CONCEPT SECTION — 4 benefits
// ════════════════════════════════════════════════════════

function benefitCard(icon, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Text(icon).set({ exact: "1.5rem", pad: [{ b: 8 }], align: "center" }),
    new Text(title).set({ font: FONT, exact: "1rem", color: GRAY_900, weight: "700", pad: [{ b: 6 }], align: "center" }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, align: "center" }),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.koncept.conceptTitle).set({
    font: FONT, size: "S4", color: PRIMARY, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.koncept.conceptDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
    maxWidth: "650px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "1100px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items([
      benefitCard("❤️", t.koncept.benefit1Title, t.koncept.benefit1Desc),
      benefitCard("⚡", t.koncept.benefit2Title, t.koncept.benefit2Desc),
      benefitCard("🎯", t.koncept.benefit3Title, t.koncept.benefit3Desc),
      benefitCard("🏃", t.koncept.benefit4Title, t.koncept.benefit4Desc),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// H2 EXPLANATION — 3 variants
// ════════════════════════════════════════════════════════

function variantCard(title, highlight, desc, recommended) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Text(recommended ? t.koncept.h2Recommended : "\u00A0").set({
      font: FONT, exact: "0.7rem", weight: "700",
      color: recommended ? WHITE : "transparent",
      background: recommended ? PRIMARY : "transparent",
      radius: "1rem",
      pad: [{ t: 4 }, { b: 4 }, { l: 12 }, { r: 12 }],
    }),
    new Text(title).set({ font: FONT, exact: "1.15rem", color: GRAY_900, weight: "700", pad: [{ t: 12 }, { b: 8 }] }),
    new Text(highlight).set({ font: FONT, exact: "0.95rem", color: PRIMARY, weight: "600", pad: [{ b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500 }),
  ]);
}

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.koncept.h2Title).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.koncept.h2Desc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
    maxWidth: "600px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  (() => {
    const grid = new FlexGrid().set({
      gap: "1.25rem", colat: "768px", wrap: false,
    }).items([
      variantCard(t.koncept.h2Var1Title, t.koncept.h2Var1Highlight, t.koncept.h2Var1Desc, false),
      variantCard(t.koncept.h2Var2Title, t.koncept.h2Var2Highlight, t.koncept.h2Var2Desc, true),
      variantCard(t.koncept.h2Var3Title, t.koncept.h2Var3Highlight, t.koncept.h2Var3Desc, false),
    ]);
    // Force equal-height cards by overriding colat's alignItems:center
    grid.res.id = "variant-grid";
    const style = document.createElement("style");
    style.textContent = "#variant-grid { align-items: stretch !important; } #variant-grid > div { min-height: 181px; }";
    document.head.appendChild(style);
    return new Wrapper().set({ maxWidth: "900px", mboth: true }).add([grid]);
  })(),
  new Wrapper().set({
    background: "#FEF3C7", radius: "1rem",
    pad: [{ a: 24 }], maxWidth: "700px", mboth: true, mar: [{ t: 32 }],
  }).add([
    new Text(t.koncept.h2WarningTitle).set({ font: FONT, exact: "1.05rem", color: GRAY_900, weight: "700" }),
    new Text(t.koncept.h2WarningDesc).set({
      font: FONT, exact: "0.9rem", color: GRAY_700, pad: [{ t: 8 }],
    }),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// BELT SELECTOR — H0 to H7
// ════════════════════════════════════════════════════════

const levelColors = [
  "#6B7280",   // H0 — no belt
  "#F5F5F5",   // H1 — White belt
  "#FACC15",   // H2 — Yellow belt
  "#F97316",   // H3 — Orange belt
  "#22C55E",   // H4 — Green belt
  "#3B82F6",   // H5 — Blue belt
  "#92400E",   // H6 — Brown belt
  "#1A1A1A",   // H7 — Black belt
];

const levels = t.koncept.levels.map((l, i) => ({ ...l, color: levelColors[i] }));

function levelCard(l) {
  const isH7 = l.level === "H7";
  const isDarkBg = isH7;
  const needsDarkBadgeText = l.level === "H1" || l.level === "H2";
  const badgeTextColor = needsDarkBadgeText ? GRAY_900 : WHITE;
  return new Wrapper().set({
    background: isDarkBg ? GRAY_900 : WHITE,
    radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObja: { width: "2px", color: l.color },
    width: "100%", maxWidth: "550px",
  }).add([
    new FlexRow().set({ align: "center", justify: "flex-start" }).items([
      new Wrapper().set({ width: "80px" }).add([
        new Wrapper().set({
          background: l.color, radius: "0.75rem",
          width: "64px", height: "48px",
          borderObj: l.level === "H1" ? { width: "1px", color: GRAY_200 } : undefined,
        }).add([
          new Text(l.level).set({ font: FONT, exact: "1.3rem", color: badgeTextColor, weight: "900", align: "center", pad: [{ t: 10 }] }),
        ]),
      ]),
      new Text(l.label).set({ font: FONT, exact: "1rem", color: isDarkBg ? WHITE : GRAY_900, weight: "700" }),
    ]),
    new Text(l.hours + " tydne  ·  " + l.minutes + " denne").set({
      font: FONT, exact: "0.8rem", color: isDarkBg ? "rgba(255,255,255,0.7)" : GRAY_500, pad: [{ t: 4 }],
    }),
    new Text(l.desc).set({
      font: FONT, exact: "0.9rem", color: isDarkBg ? "rgba(255,255,255,0.8)" : GRAY_700, pad: [{ t: 12 }],
    }),
    new Text(t.koncept.beltRecAct + " " + l.activities).set({
      font: FONT, exact: "0.8rem", color: isDarkBg ? "rgba(255,255,255,0.6)" : GRAY_500, pad: [{ t: 8 }],
    }),
    ...(isDarkBg ? [new Wrapper().set({
      background: `${ACCENT}22`, radius: "0.75rem",
      pad: [{ a: 12 }], mar: [{ t: 12 }],
    }).add([
      new Text(t.koncept.beltTip).set({
        font: FONT, exact: "0.8rem", color: ACCENT, weight: "500",
      }),
    ])] : []),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.koncept.beltTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center",
  }),
  new Text(t.koncept.beltDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
    maxWidth: "700px", center: true, pad: [{ t: 12 }, { b: 40 }],
  }),
  ...levels.map(l => {
    const w = new Wrapper().set({ pad: [{ b: 20 }], maxWidth: "550px", mboth: true }).add([levelCard(l)]);
    return w;
  }),
]).render("#mount");

// ════════════════════════════════════════════════════════
// AGE GROUPS — 3 columns
// ════════════════════════════════════════════════════════

function ageCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Text(emoji).set({ exact: "2rem", pad: [{ b: 8 }] }),
    new Text(title).set({ font: FONT, exact: "1.15rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.95rem", color: GRAY_500 }),
  ]);
}

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.koncept.ageTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.koncept.ageDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
    maxWidth: "600px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "750px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items([
      ageCard("👶", t.koncept.ageKids, t.koncept.ageKidsDesc),
      ageCard("🏃", t.koncept.ageAdults, t.koncept.ageAdultsDesc),
      ageCard("🧓", t.koncept.ageSeniors, t.koncept.ageSeniorsDesc),
    ]),
  ]),
  new Wrapper().set({
    background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
    radius: "1.5rem",
    pad: [{ a: 32 }], maxWidth: "600px", mboth: true, mar: [{ t: 32 }],
  }).add([
    new Text(t.koncept.ageBannerLine1).set({ font: FONT, exact: "1.2rem", color: WHITE, weight: "700", align: "center" }),
    new Text(t.koncept.ageBannerLine2).set({ font: FONT, size: "S5", color: ACCENT, weight: "900", align: "center", pad: [{ t: 4 }] }),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// SEVEN PILLARS
// ════════════════════════════════════════════════════════

const pillarColors = [ACCENT, "#60A5FA", "#34D399", "#A78BFA", "#FB923C", "#38BDF8", "#F472B6"];

const pillars = t.koncept.pillars.map((p, i) => ({ ...p, color: pillarColors[i] }));

function pillarCard(p) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObja: { width: "2px", color: p.color },
    width: "100%", minHeight: "320px",
  }).add([
    new FlexRow().set({ gap: "0.75rem", align: "center" }).items([
      new Text(p.num).set({ font: FONT, exact: "0.75rem", color: p.color, weight: "800" }),
      new Text(p.title).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700" }),
    ]),
    new Text(p.summary).set({
      font: FONT, exact: "0.8rem", color: p.color, weight: "600",
      background: `${p.color}18`, radius: "1rem",
      pad: [{ t: 4 }, { b: 4 }, { l: 12 }, { r: 12 }],
      mar: [{ t: 8 }],
    }),
    new Text(p.desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, pad: [{ t: 12 }] }),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.koncept.pillarsTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.koncept.pillarsDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
    maxWidth: "650px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "1100px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items(pillars.slice(0, 4).map(p => pillarCard(p))),
  ]),
  new Wrapper().set({ maxWidth: "1100px", mboth: true, pad: [{ t: 16 }] }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items(pillars.slice(4).map(p => pillarCard(p))),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// FINAL CTA
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  maxWidth: "1100px", mboth: true, mar: [{ t: 40 }, { b: 40 }],
  resprop: [
    { breakpoint: "default", borderRadius: "2rem" },
    { breakpoint: "1148px", borderRadius: "0" },
  ],
}).add([
  new Text(t.koncept.ctaTitle).set({ font: FONT, size: "S4", color: WHITE, weight: "800", align: "center" }),
  new Text(t.koncept.ctaTitle2).set({ font: FONT, size: "S4", color: ACCENT, weight: "800", align: "center" }),
  new Text(t.koncept.ctaDesc).set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 16 }],
  }),
  new Wrapper().set({ mar: [{ t: 24 }], mboth: true, maxWidth: "300px" }).add([
    new Link(t.koncept.ctaCTA, "./aktivity.html").set({
      font: FONT, exact: "1.1rem", weight: "700",
      color: PRIMARY, background: ACCENT,
      pad: [{ t: 16 }, { b: 16 }, { l: 36 }, { r: 36 }],
      radius: "3rem", center: true,
      removeDecoration: true,
      hover: { background: WHITE, animation: "0.3s ease" },
    }),
  ]),
]).render("#mount");

renderFooter();
