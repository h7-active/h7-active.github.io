import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";

renderNav();

// ── HERO HEADER ──
renderPageHeader(
  t.ambasadori.headerBadge,
  t.ambasadori.headerTitle,
  t.ambasadori.headerDesc
);

// ════════════════════════════════════════════════════════
// AMBASSADOR — MUDr. Hana Stefanicova
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Wrapper().set({
    background: WHITE, radius: "1.5rem",
    pad: [{ a: 32 }],
    borderObj: { width: "1px", color: GRAY_200 },
    maxWidth: "900px", mboth: true,
  }).add([
    // Avatar
    new Wrapper().set({
      background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
      radius: "1rem",
      pad: [{ t: 32 }, { b: 32 }],
      width: "100px",
    }).add([
      new Text("HŠ").set({ font: FONT, exact: "2rem", color: WHITE, weight: "900", align: "center" }),
    ]),

    // Name + role
    new Text(t.ambasadori.hanaName).set({ font: FONT, exact: "1.5rem", color: GRAY_900, weight: "800", pad: [{ t: 20 }] }),
    new Text(t.ambasadori.hanaRole).set({ font: FONT, exact: "0.95rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),

    // Badges
    new FlexGrid().set({
      gap: "0.5rem", colat: "500px", wrap: false, pad: [{ t: 12 }],
    }).items([
      new Text(t.ambasadori.hanaBadge).set({
        font: FONT, exact: "0.75rem", color: "#DC2626", weight: "700",
        background: "#FEE2E2", radius: "1rem",
        pad: [{ t: 4 }, { b: 4 }, { l: 10 }, { r: 10 }],
      }),
      new Text(t.ambasadori.hanaSpec).set({
        font: FONT, exact: "0.75rem", color: PRIMARY, weight: "600",
        background: GRAY_100, radius: "1rem",
        pad: [{ t: 4 }, { b: 4 }, { l: 10 }, { r: 10 }],
      }),
    ]),

    // Quote
    new Wrapper().set({
      background: GRAY_50, radius: "1rem",
      pad: [{ a: 16 }], mar: [{ t: 20 }],
      borderObj: { width: "3px 0 0 0", color: PRIMARY },
    }).add([
      new Text(t.ambasadori.hanaQuote).set({
        font: FONT, exact: "1rem", color: GRAY_700, weight: "500", align: "left",
      }),
    ]),

    // Bio
    new Text(t.ambasadori.hanaBio1).set({
      font: FONT, exact: "0.9rem", color: GRAY_700, pad: [{ t: 16 }], align: "left",
    }),
    new Text(t.ambasadori.hanaBio2).set({
      font: FONT, exact: "0.9rem", color: GRAY_700, pad: [{ t: 8 }], align: "left",
    }),
    new Text(t.ambasadori.hanaBio3).set({
      font: FONT, exact: "0.9rem", color: GRAY_700, pad: [{ t: 8 }], align: "left",
    }),

    // Credentials
    new FlexGrid().set({ gap: "0.5rem", colat: "500px", wrap: false, pad: [{ t: 16 }] }).items(
      t.ambasadori.hanaCreds.map(c =>
        new Text(c).set({
          font: FONT, exact: "0.75rem", color: PRIMARY, weight: "500",
          background: GRAY_100, radius: "1rem",
          pad: [{ t: 6 }, { b: 6 }, { l: 14 }, { r: 14 }],
        })
      )
    ),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// CTA — Join the project + Partners
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new FlexGrid().set({
    gap: "1.5rem", maxWidth: "900px", mboth: true,
    colat: "700px", wrap: false,
  }).items([
    // Join CTA
    new Wrapper().set({
      background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
      radius: "1.5rem",
      pad: [{ a: 32 }], width: "100%",
    }).add([
      new Text(t.ambasadori.joinTitle).set({ font: FONT, exact: "1.3rem", color: WHITE, weight: "800" }),
      new Text(t.ambasadori.joinDesc).set({
        font: FONT, exact: "0.95rem", color: "rgba(255,255,255,0.8)", pad: [{ t: 12 }], align: "left",
      }),
      new Link(t.ambasadori.joinCTA, "mailto:info@h7active.cz").set({
        font: FONT, exact: "1rem", weight: "700",
        color: PRIMARY, background: ACCENT,
        pad: [{ t: 14 }, { b: 14 }, { l: 28 }, { r: 28 }],
        radius: "3rem",
        removeDecoration: true,
        hover: { background: WHITE, animation: "0.3s ease" },
        mar: [{ t: 20 }],
      }),
    ]),

    // Partners placeholder
    new Wrapper().set({
      background: WHITE, radius: "1.5rem",
      pad: [{ a: 32 }], width: "100%",
      borderObj: { width: "1px", color: GRAY_200 },
    }).add([
      new Text(t.ambasadori.partnersTitle).set({ font: FONT, exact: "1.15rem", color: GRAY_900, weight: "700" }),
      new Text(t.ambasadori.partnersDesc).set({
        font: FONT, exact: "0.9rem", color: GRAY_500, pad: [{ t: 8 }, { b: 20 }], align: "left",
      }),
      new FlexGrid().set({ gap: "0.75rem", colat: "400px", wrap: false }).items(
        [1, 2, 3, 4].map(() =>
          new Wrapper().set({
            background: GRAY_50, radius: "0.75rem",
            pad: [{ t: 24 }, { b: 24 }, { l: 20 }, { r: 20 }],
            borderObj: { width: "1px", color: GRAY_200 },
            width: "100%",
          }).add([
            new Text(t.ambasadori.partnerPlaceholder).set({ font: FONT, exact: "0.8rem", color: GRAY_500, align: "center" }),
          ])
        )
      ),
    ]),
  ]),
]).render("#mount");

// ── Final CTA ──
new Wrapper().set({
  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.ambasadori.joinTitle).set({ font: FONT, size: "S4", color: WHITE, weight: "800", align: "center" }),
  new Text(t.ambasadori.joinDesc).set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
    align: "center", pad: [{ t: 12 }],
  }),
  new Link(t.ambasadori.joinCTA, "mailto:info@h7active.cz").set({
    font: FONT, exact: "1rem", weight: "700",
    color: PRIMARY, background: ACCENT,
    pad: [{ t: 14 }, { b: 14 }, { l: 32 }, { r: 32 }],
    radius: "3rem", center: true,
    removeDecoration: true,
    hover: { background: WHITE, animation: "0.3s ease" },
    mar: [{ t: 20 }],
  }),
]).render("#mount");

renderFooter();
