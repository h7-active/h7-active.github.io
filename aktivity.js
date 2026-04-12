import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";

renderNav();

// ── HERO HEADER ──
renderPageHeader(
  t.aktivity.headerBadge,
  t.aktivity.headerTitle,
  t.aktivity.headerDesc
);

// ════════════════════════════════════════════════════════
// ACTIVITY DATA — Colors + lang.js text
// ════════════════════════════════════════════════════════

const levelColors = {
  "H0": "#6B7280",
  "H1": "#F5F5F5",   // White belt
  "H2": "#FACC15",   // Yellow belt
  "H3": "#F97316",   // Orange belt
  "H4": "#22C55E",   // Green belt
  "H5": "#3B82F6",   // Blue belt
  "H6": "#92400E",   // Brown belt
  "H7": "#1A1A1A",   // Black belt
  "H8+": "#EF4444",
};

const activities = Object.fromEntries(
  Object.entries(t.aktivity.levels).map(([key, val]) => [
    key,
    { ...val, color: levelColors[key] },
  ])
);

// ════════════════════════════════════════════════════════
// RENDER ACTIVITY CATALOG
// ════════════════════════════════════════════════════════

function activityCard(item, levelColor) {
  return new Wrapper().set({
    background: WHITE, radius: "1rem",
    pad: [{ a: 16 }],
    borderObja: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new FlexRow().set({ gap: "0.5rem", align: "center", justify: "flex-start" }).items([
      new Text(item.name).set({ font: FONT, exact: "0.95rem", color: GRAY_900, weight: "600", align: "left" }),
      ...(item.featured ? [new Text("⭐").set({ exact: "0.8rem" })] : []),
    ]),
    new Text(item.desc).set({ font: FONT, exact: "0.8rem", color: GRAY_500, pad: [{ t: 4 }], align: "left" }),
  ]);
}

const catalogSections = Object.entries(activities).map(([level, data]) => {
  const isDarkBg = level === "H7" || level === "H8+";
  const needsDarkText = level === "H1" || level === "H2";
  const badgeTextColor = needsDarkText ? GRAY_900 : WHITE;
  return new Wrapper().set({
    background: isDarkBg ? GRAY_900 : WHITE,
    pad: [{ t: 48 }, { b: 48 }, { l: 24 }, { r: 24 }],
    borderObj: { width: "0 0 1px 0", color: GRAY_200 },
  }).add([
    new Wrapper().set({ maxWidth: "900px", mboth: true }).add([
      new FlexRow().set({ align: "center", pad: [{ b: 20 }] }).items([
        new Wrapper().set({ width: "72px" }).add([
          new Wrapper().set({
            background: data.color, radius: "0.75rem",
            width: "56px", height: "42px",
            borderObj: level === "H1" ? { width: "1px", color: GRAY_200 } : undefined,
          }).add([
            new Text(level).set({ font: FONT, exact: "1.2rem", color: badgeTextColor, weight: "900", align: "center", pad: [{ t: 8 }] }),
          ]),
        ]),
        new Wrapper().set({ width: "auto" }).add([
          new Text(data.label).set({ font: FONT, exact: "1.1rem", color: isDarkBg ? WHITE : GRAY_900, weight: "700" }),
          new Text(data.time).set({ font: FONT, exact: "0.8rem", color: isDarkBg ? "rgba(255,255,255,0.6)" : GRAY_500 }),
        ]),
        new Spacer(),
        new Text(data.items.length + t.aktivity.countSuffix).set({
          font: FONT, exact: "0.75rem", color: data.color, weight: "700",
          background: `${data.color}18`, radius: "1rem",
          pad: [{ t: 4 }, { b: 4 }, { l: 12 }, { r: 12 }],
        }),
      ]),
      ...(() => {
        const items = data.items;
        const rows = [];
        for (let i = 0; i < items.length; i += 2) {
          rows.push(items.slice(i, i + 2));
        }
        return rows.map(row => {
          const cards = row.map(item => activityCard(item, data.color));
          // If only 1 card in row, add an invisible placeholder so it stays half-width
          if (cards.length === 1) {
            cards.push(new Wrapper().set({ width: "100%" }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]));
          }
          return new Wrapper().set({ pad: [{ b: 8 }] }).add([
            new FlexGrid().set({
              gap: "0.75rem", colat: "700px",
            }).items(cards),
          ]);
        });
      })(),
    ]),
  ]);
});

catalogSections.forEach(s => s.render("#mount"));

// ════════════════════════════════════════════════════════
// TIPS SECTION
// ════════════════════════════════════════════════════════

function tipCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Text(emoji).set({ exact: "1.5rem", pad: [{ b: 8 }], align: "center" }),
    new Text(title).set({ font: FONT, exact: "1rem", color: GRAY_900, weight: "700", pad: [{ b: 6 }], align: "center" }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, align: "center" }),
  ]);
}

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.aktivity.tipsTitle).set({
    font: FONT, size: "S5", color: GRAY_900, weight: "800",
    align: "center", pad: [{ b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "1100px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items([
      tipCard("🎯", t.aktivity.tip1Title, t.aktivity.tip1Desc),
      tipCard("❤️", t.aktivity.tip2Title, t.aktivity.tip2Desc),
      tipCard("👥", t.aktivity.tip3Title, t.aktivity.tip3Desc),
      tipCard("📈", t.aktivity.tip4Title, t.aktivity.tip4Desc),
    ]),
  ]),
]).render("#mount");

// ── Final CTA ──
new Wrapper().set({
  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  maxWidth: "1100px", mboth: true, mar: [{ t: 40 }, { b: 40 }],
  resprop: [
    { breakpoint: "default", borderRadius: "2rem" },
    { breakpoint: "1148px", borderRadius: "0" },
  ],
}).add([
  new Text(t.aktivity.ctaTitle).set({ font: FONT, size: "S4", color: WHITE, weight: "800", align: "center" }),
  new Text(t.aktivity.ctaDesc).set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 16 }],
  }),
  new Wrapper().set({ mar: [{ t: 24 }], mboth: true, maxWidth: "300px" }).add([
    new Link(t.aktivity.ctaCTA, "#").set({
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
