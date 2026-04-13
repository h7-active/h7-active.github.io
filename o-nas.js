import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";

const ks = (key, value) => ({ keySet: { key, value } });

renderNav();

// ════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: PRIMARY,
  pad: [{ t: 100 }, { b: 80 }, { l: 24 }, { r: 24 }],
  keySet: [
    { key: "position", value: "relative" },
    { key: "overflow", value: "hidden" },
  ],
}).add([
  // BG blurs
  new Wrapper().set({
    width: "600px", height: "600px", radius: "50%",
    background: "rgba(255,255,255,0.05)",
    keySet: [
      { key: "position", value: "absolute" },
      { key: "top", value: "0" },
      { key: "right", value: "25%" },
      { key: "filter", value: "blur(100px)" },
      { key: "pointerEvents", value: "none" },
    ],
  }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]),
  new Wrapper().set({
    width: "800px", height: "800px", radius: "50%",
    background: "rgba(255,255,255,0.05)",
    keySet: [
      { key: "position", value: "absolute" },
      { key: "bottom", value: "0" },
      { key: "left", value: "25%" },
      { key: "filter", value: "blur(120px)" },
      { key: "pointerEvents", value: "none" },
    ],
  }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]),

  // Content
  new Wrapper().set({
    maxWidth: "800px", mboth: true,
    keySet: { key: "position", value: "relative" },
  }).add([
    new Text(t.oNas.heroBadge).set({
      font: FONT, exact: "0.85rem", color: PRIMARY, weight: "700",
      background: ACCENT, radius: "2rem", center: true,
      pad: [{ t: 6 }, { b: 6 }, { l: 20 }, { r: 20 }],
      keySet: { key: "width", value: "fit-content" },
    }),
    new Text(t.oNas.heroTitle).set({
      font: FONT, size: "S2", color: WHITE, weight: "800",
      align: "center", pad: [{ t: 24 }],
    }),
    new Text(t.oNas.heroDesc).set({
      font: FONT, exact: "1.2rem", color: "rgba(255,255,255,0.9)",
      align: "center", maxWidth: "700px", center: true, pad: [{ t: 16 }],
      keySet: { key: "lineHeight", value: "1.7" },
    }),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// FOUNDERS — Petr & Milan (2-col cards)
// ════════════════════════════════════════════════════════

function founderCard(imgEmoji, name, role, bio, credentials) {
  return new Wrapper().set({
    background: WHITE, radius: "1.5rem",
    pad: [{ a: 32 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexDirection", value: "column" },
    ],
  }).add([
    // Photo placeholder
    new Wrapper().set({
      background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
      radius: "1rem", width: "100%", height: "280px",
      keySet: { key: "overflow", value: "hidden" },
    }).add([
      new Text(imgEmoji).set({ exact: "4rem", align: "center", pad: [{ t: 100 }] }),
    ]),
    new Text(name).set({ font: FONT, exact: "1.4rem", color: GRAY_900, weight: "700", pad: [{ t: 20 }] }),
    new Text(role).set({ font: FONT, exact: "0.9rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),
    new Text(bio).set({
      font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 16 }],
      keySet: { key: "lineHeight", value: "1.7" },
    }),
    new Spacer("M1"),
    ...credentials.map(c =>
      new Wrapper().set({
        pad: [{ t: 8 }],
        keySet: [
          { key: "display", value: "flex" },
          { key: "alignItems", value: "center" },
          { key: "gap", value: "12px" },
        ],
      }).add([
        new Text("\u2713").set({ font: FONT, exact: "0.85rem", color: PRIMARY, weight: "700" }),
        new Text(c).set({ font: FONT, exact: "0.85rem", color: GRAY_900, weight: "500" }),
      ])
    ),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 20 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.founderBadge).set({
    font: FONT, exact: "0.85rem", color: ACCENT, weight: "700",
    background: PRIMARY, radius: "2rem", center: true,
    pad: [{ t: 4 }, { b: 4 }, { l: 16 }, { r: 16 }],
    keySet: { key: "width", value: "fit-content" },
    mboth: true,
  }),
  new Text(t.oNas.founderTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.oNas.founderDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "700px", center: true, pad: [{ t: 8 }, { b: 40 }],
  }),
  new Wrapper().set({ maxWidth: "1000px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.5rem", colat: "768px",
    }).items([
      founderCard("\uD83C\uDFC3", t.oNas.petrName, t.oNas.petrRole, t.oNas.petrBio, t.oNas.petrCreds),
      founderCard("\uD83D\uDCCA", t.oNas.milanName, t.oNas.milanRole, t.oNas.milanBio, t.oNas.milanCreds),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// HANA — Full-width highlight card
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 20 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Wrapper().set({
    background: WHITE, radius: "1.5rem",
    maxWidth: "1000px", mboth: true,
    borderObj: { width: "1px", color: GRAY_200 },
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "overflow", value: "hidden" },
    ],
  }).add([
    // Left: text content
    new Wrapper().set({
      pad: [{ a: 32 }],
      keySet: [
        { key: "flex", value: "1 1 400px" },
        { key: "display", value: "flex" },
        { key: "flexDirection", value: "column" },
      ],
    }).add([
      new Text(t.oNas.hanaName).set({ font: FONT, exact: "1.6rem", color: GRAY_900, weight: "800" }),
      new Text(t.oNas.hanaRole).set({ font: FONT, exact: "1rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),
      new Text(t.oNas.hanaBio1).set({
        font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 20 }],
        keySet: { key: "lineHeight", value: "1.7" },
      }),
      new Text(t.oNas.hanaBio2).set({
        font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 12 }],
        keySet: { key: "lineHeight", value: "1.7" },
      }),
      new Text(t.oNas.hanaBio3).set({
        font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 12 }],
        keySet: { key: "lineHeight", value: "1.7" },
      }),
      new Spacer("M2"),
      ...t.oNas.hanaCreds.map(c =>
        new Wrapper().set({
          pad: [{ t: 10 }],
          keySet: [
            { key: "display", value: "flex" },
            { key: "alignItems", value: "center" },
            { key: "gap", value: "14px" },
          ],
        }).add([
          new Wrapper().set({
            width: "28px", height: "28px", radius: "50%",
            background: `${PRIMARY}15`,
          }).add([
            new Text("\u2713").set({ font: FONT, exact: "0.75rem", color: PRIMARY, weight: "700", align: "center", pad: [{ t: 6 }] }),
          ]),
          new Text(c).set({ font: FONT, exact: "0.9rem", color: GRAY_900, weight: "500" }),
        ])
      ),
    ]),
    // Right: photo placeholder with overlay
    new Wrapper().set({
      background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
      keySet: [
        { key: "flex", value: "1 1 350px" },
        { key: "minHeight", value: "500px" },
        { key: "position", value: "relative" },
        { key: "display", value: "flex" },
        { key: "alignItems", value: "flex-end" },
      ],
    }).add([
      new Text("\uD83D\uDC69\u200D\u2695\uFE0F").set({
        exact: "6rem", align: "center",
        keySet: [
          { key: "position", value: "absolute" },
          { key: "top", value: "50%" },
          { key: "left", value: "50%" },
          { key: "transform", value: "translate(-50%, -80%)" },
        ],
      }),
      // Overlay at bottom
      new Wrapper().set({
        pad: [{ t: 40 }, { b: 24 }, { l: 24 }, { r: 24 }],
        width: "100%",
        keySet: {
          key: "background",
          value: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
        },
      }).add([
        new Text(t.oNas.hanaName).set({
          font: FONT, exact: "1.3rem", color: WHITE, weight: "700",
        }),
        new Text(t.oNas.hanaBadge).set({
          font: FONT, exact: "0.9rem", color: ACCENT, weight: "600", pad: [{ t: 4 }],
        }),
      ]),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// SHARED VISION + TEAM GRID
// ════════════════════════════════════════════════════════

const teamMembers = [
  { i: "PV", n: "Petr Vabrou\u0161ek", r: "Sportovn\u00ED vizion\u00E1\u0159" },
  { i: "ML", n: "Milan Litvan", r: "Digit\u00E1ln\u00ED marketing" },
  { i: "DR", n: "David Rosenkranz", r: "CEO" },
  { i: "JP", n: "Jakub Pavelka", r: "Digit\u00E1ln\u00ED strateg" },
  { i: "R\u0160", n: "Radek \u0160vajcr", r: "\u010Clen t\u00FDmu" },
];

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 20 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  // Shared vision banner
  new Wrapper().set({
    background: GRAY_50, radius: "1.5rem",
    pad: [{ a: 40 }], maxWidth: "900px", mboth: true, mar: [{ b: 48 }],
    borderObj: { width: "1px", color: GRAY_200 },
  }).add([
    new Text(t.oNas.sharedVisionTitle).set({
      font: FONT, exact: "1.3rem", color: GRAY_900, weight: "700", align: "center", pad: [{ b: 16 }],
    }),
    new Text(t.oNas.sharedVision).set({
      font: FONT, exact: "1rem", color: GRAY_500, align: "center",
      keySet: { key: "lineHeight", value: "1.7" },
    }),
  ]),

  // Team grid
  new Wrapper().set({
    maxWidth: "1000px", mboth: true,
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "gap", value: "1rem" },
      { key: "justifyContent", value: "center" },
    ],
  }).add([
    ...teamMembers.map(m =>
      new Wrapper().set({
        background: WHITE, radius: "1rem",
        pad: [{ a: 16 }],
        borderObj: { width: "1px", color: GRAY_200 },
        keySet: [
          { key: "display", value: "flex" },
          { key: "alignItems", value: "center" },
          { key: "gap", value: "14px" },
          { key: "flex", value: "1 1 180px" },
          { key: "maxWidth", value: "220px" },
        ],
      }).add([
        new Wrapper().set({
          background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
          radius: "50%",
          width: "44px", height: "44px",
          keySet: { key: "flexShrink", value: "0" },
        }).add([
          new Text(m.i).set({ font: FONT, exact: "0.8rem", color: WHITE, weight: "800", align: "center", pad: [{ t: 12 }] }),
        ]),
        new Wrapper().set({ pad: [] }).add([
          new Text(m.n).set({ font: FONT, exact: "0.85rem", color: GRAY_900, weight: "600" }),
          new Text(m.r).set({ font: FONT, exact: "0.75rem", color: GRAY_500, pad: [{ t: 2 }] }),
        ]),
      ])
    ),
  ]
  ),
]).render("#mount");

// ════════════════════════════════════════════════════════
// COMMUNITY — Resources
// ════════════════════════════════════════════════════════

function resourceCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
    keySet: { key: "boxShadow", value: "0 4px 16px rgba(0,0,0,0.06)" },
  }).add([
    new Wrapper().set({
      background: PRIMARY, radius: "1rem",
      width: "56px", height: "56px",
    }).add([
      new Text(emoji).set({ exact: "1.5rem", align: "center", pad: [{ t: 14 }] }),
    ]),
    new Text(title).set({ font: FONT, exact: "1.15rem", color: GRAY_900, weight: "700", pad: [{ t: 16 }, { b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, keySet: { key: "lineHeight", value: "1.6" } }),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 20 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.supportBadge).set({
    font: FONT, exact: "0.85rem", color: ACCENT, weight: "700",
    background: PRIMARY, radius: "2rem", center: true,
    pad: [{ t: 4 }, { b: 4 }, { l: 16 }, { r: 16 }],
    keySet: { key: "width", value: "fit-content" },
    mboth: true,
  }),
  new Text(t.oNas.supportTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.oNas.supportDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "700px", center: true, pad: [{ t: 8 }, { b: 40 }],
  }),
  new Wrapper().set({ maxWidth: "1000px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items([
      resourceCard("\uD83D\uDCF1", t.oNas.support1Title, t.oNas.support1Desc),
      resourceCard("\uD83C\uDF10", t.oNas.support2Title, t.oNas.support2Desc),
      resourceCard("\uD83D\uDC65", t.oNas.support3Title, t.oNas.support3Desc),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// COMMUNITY CTA BANNER
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 20 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Wrapper().set({
    background: `${PRIMARY}F2`,
    radius: "1.5rem", maxWidth: "1000px", mboth: true,
    pad: [{ t: 60 }, { b: 60 }, { l: 32 }, { r: 32 }],
    keySet: { key: "position", value: "relative" },
  }).add([
    new Text(t.oNas.commCTA).set({
      font: FONT, exact: "1.5rem", color: WHITE, weight: "700", align: "center",
      maxWidth: "600px", center: true,
    }),
    new Text(t.oNas.commDesc).set({
      font: FONT, exact: "1.15rem", color: ACCENT, weight: "600",
      align: "center", pad: [{ t: 16 }, { b: 24 }],
    }),
    new Wrapper().set({
      mboth: true,
      keySet: { key: "textAlign", value: "center" },
    }).add([
      new Link(t.oNas.commBtn, "./aktivity.html").set({
        font: FONT, exact: "1rem", weight: "700",
        color: PRIMARY, background: ACCENT,
        pad: [{ t: 14 }, { b: 14 }, { l: 28 }, { r: 28 }],
        radius: "3rem", center: true,
        removeDecoration: true,
        hover: { background: WHITE, animation: "0.3s ease" },
        keySet: { key: "display", value: "inline-block" },
      }),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// AI + MONETIZATION
// ════════════════════════════════════════════════════════

new Wrapper().set({
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
  keySet: { key: "background", value: "linear-gradient(to bottom, rgba(0,0,0,0.02), white)" },
}).add([
  // AI Hero banner
  new Wrapper().set({
    background: PRIMARY, radius: "1.5rem",
    pad: [{ t: 40 }, { b: 40 }, { l: 32 }, { r: 32 }],
    maxWidth: "900px", mboth: true, mar: [{ b: 48 }],
    keySet: [
      { key: "position", value: "relative" },
      { key: "overflow", value: "hidden" },
      { key: "boxShadow", value: "0 8px 32px rgba(0,0,0,0.15)" },
    ],
  }).add([
    // BG glow
    new Wrapper().set({
      width: "400px", height: "400px", radius: "50%",
      keySet: [
        { key: "position", value: "absolute" },
        { key: "top", value: "-200px" },
        { key: "right", value: "-200px" },
        { key: "background", value: `${ACCENT}15` },
        { key: "filter", value: "blur(100px)" },
        { key: "pointerEvents", value: "none" },
      ],
    }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]),
    new Wrapper().set({ maxWidth: "700px", mboth: true, keySet: { key: "position", value: "relative" } }).add([
      new Text(t.oNas.aiTitle).set({
        font: FONT, exact: "1.5rem", color: ACCENT, weight: "800", align: "center",
      }),
      new Text(t.oNas.aiDesc).set({
        font: FONT, exact: "1rem", color: "rgba(255,255,255,0.85)", pad: [{ t: 16 }], align: "center",
        keySet: { key: "lineHeight", value: "1.7" },
      }),
    ]),
  ]),

  // Monetization heading
  new Text(t.oNas.monetTitle).set({
    font: FONT, exact: "1.5rem", color: GRAY_900, weight: "800",
    align: "center",
  }),
  new Text(t.oNas.monetDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "700px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),

  // Monetization cards
  new Wrapper().set({ maxWidth: "800px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "768px",
    }).items([
      new Wrapper().set({
        background: WHITE, radius: "1.2rem",
        pad: [{ a: 28 }],
        borderObj: { width: "1px", color: `${PRIMARY}20` },
        width: "100%",
        keySet: { key: "boxShadow", value: "0 4px 16px rgba(0,0,0,0.06)" },
      }).add([
        new Wrapper().set({
          background: PRIMARY, radius: "0.75rem",
          width: "50px", height: "50px",
        }).add([
          new Text("\uD83C\uDFE2").set({ exact: "1.3rem", align: "center", pad: [{ t: 12 }] }),
        ]),
        new Text(t.oNas.monetCard1).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ t: 16 }, { b: 8 }] }),
        new Text(t.oNas.monetCard1Desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, keySet: { key: "lineHeight", value: "1.6" } }),
      ]),
      new Wrapper().set({
        background: WHITE, radius: "1.2rem",
        pad: [{ a: 28 }],
        borderObj: { width: "1px", color: `${PRIMARY}20` },
        width: "100%",
        keySet: { key: "boxShadow", value: "0 4px 16px rgba(0,0,0,0.06)" },
      }).add([
        new Wrapper().set({
          background: PRIMARY, radius: "0.75rem",
          width: "50px", height: "50px",
        }).add([
          new Text("\uD83D\uDC51").set({ exact: "1.3rem", align: "center", pad: [{ t: 12 }] }),
        ]),
        new Text(t.oNas.monetCard2).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ t: 16 }, { b: 8 }] }),
        new Text(t.oNas.monetCard2Desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, keySet: { key: "lineHeight", value: "1.6" } }),
      ]),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// CONTACT & FAQ
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
  keySet: { key: "borderTop", value: `1px solid ${GRAY_200}` },
}).add([
  new Wrapper().set({
    maxWidth: "1000px", mboth: true,
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "gap", value: "3rem" },
    ],
  }).add([
    // ── Contact ──
    new Wrapper().set({
      keySet: { key: "flex", value: "1 1 380px" },
    }).add([
      new Text(t.oNas.contactBadge).set({
        font: FONT, exact: "0.85rem", color: ACCENT, weight: "700",
        background: PRIMARY, radius: "2rem",
        pad: [{ t: 4 }, { b: 4 }, { l: 16 }, { r: 16 }],
        keySet: { key: "width", value: "fit-content" },
      }),
      new Text(t.oNas.contactTitle).set({
        font: FONT, exact: "1.6rem", color: GRAY_900, weight: "800", pad: [{ t: 12 }],
      }),
      new Text(t.oNas.contactDesc).set({
        font: FONT, exact: "1.05rem", color: GRAY_500, pad: [{ t: 8 }, { b: 32 }],
        keySet: { key: "lineHeight", value: "1.6" },
      }),
      // Email row
      new Wrapper().set({
        pad: [{ b: 24 }],
        keySet: [
          { key: "display", value: "flex" },
          { key: "alignItems", value: "flex-start" },
          { key: "gap", value: "20px" },
        ],
      }).add([
        new Wrapper().set({
          background: `${PRIMARY}15`, radius: "1rem",
          width: "48px", height: "48px",
          keySet: { key: "flexShrink", value: "0" },
        }).add([
          new Text("\u2709").set({ exact: "1.3rem", align: "center", pad: [{ t: 12 }] }),
        ]),
        new Wrapper().set({ pad: [] }).add([
          new Text(t.oNas.contactEmailLabel).set({ font: FONT, exact: "1rem", color: GRAY_900, weight: "700" }),
          new Link("info@h7active.cz", "mailto:info@h7active.cz").set({
            font: FONT, exact: "1rem", color: PRIMARY, weight: "600",
            removeDecoration: true, pad: [{ t: 4 }],
          }),
          new Text(t.oNas.contactEmailNote).set({ font: FONT, exact: "0.8rem", color: GRAY_500, pad: [{ t: 4 }] }),
        ]),
      ]),
      // FB row
      new Wrapper().set({
        keySet: [
          { key: "display", value: "flex" },
          { key: "alignItems", value: "flex-start" },
          { key: "gap", value: "20px" },
        ],
      }).add([
        new Wrapper().set({
          background: `${PRIMARY}15`, radius: "1rem",
          width: "48px", height: "48px",
          keySet: { key: "flexShrink", value: "0" },
        }).add([
          new Text("\uD83D\uDCAC").set({ exact: "1.3rem", align: "center", pad: [{ t: 12 }] }),
        ]),
        new Wrapper().set({ pad: [] }).add([
          new Text(t.oNas.contactFBLabel).set({ font: FONT, exact: "1rem", color: GRAY_900, weight: "700" }),
          new Text(t.oNas.contactFB).set({ font: FONT, exact: "1rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),
          new Text(t.oNas.contactFBNote).set({ font: FONT, exact: "0.8rem", color: GRAY_500, pad: [{ t: 4 }] }),
        ]),
      ]),
    ]),

    // ── FAQ ──
    new Wrapper().set({
      background: GRAY_50, radius: "1.5rem",
      pad: [{ a: 32 }],
      borderObj: { width: "1px", color: GRAY_200 },
      keySet: { key: "flex", value: "1 1 420px" },
    }).add([
      new Wrapper().set({
        pad: [{ b: 24 }],
        keySet: [
          { key: "display", value: "flex" },
          { key: "alignItems", value: "center" },
          { key: "gap", value: "12px" },
        ],
      }).add([
        new Text("\u2753").set({ exact: "1.2rem" }),
        new Text(t.oNas.faqTitle).set({
          font: FONT, exact: "1.2rem", color: GRAY_900, weight: "800",
        }),
      ]),
      ...t.oNas.faqs.map(f =>
        new Wrapper().set({
          background: WHITE, radius: "1rem",
          pad: [{ a: 20 }], mar: [{ b: 12 }],
          borderObj: { width: "1px", color: GRAY_200 },
        }).add([
          new Text(f.q).set({ font: FONT, exact: "0.95rem", color: GRAY_900, weight: "600" }),
          new Text(f.a).set({
            font: FONT, exact: "0.85rem", color: GRAY_500, pad: [{ t: 8 }],
            keySet: { key: "lineHeight", value: "1.6" },
          }),
        ])
      ),
      new Text(t.oNas.faqFooter).set({
        font: FONT, exact: "0.8rem", color: GRAY_500,
        align: "center", pad: [{ t: 12 }, { b: 4 }, { l: 16 }, { r: 16 }],
        background: WHITE, radius: "0.75rem",
        borderObj: { width: "1px", color: GRAY_200 },
      }),
    ]),
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
  new Text(t.oNas.commCTA).set({
    font: FONT, size: "S4", color: WHITE, weight: "800", align: "center",
  }),
  new Text(t.oNas.commDesc).set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 16 }],
  }),
  new Wrapper().set({
    mar: [{ t: 24 }], mboth: true,
    keySet: { key: "textAlign", value: "center" },
  }).add([
    new Link(t.oNas.commBtn, "./aktivity.html").set({
      font: FONT, exact: "1.1rem", weight: "700",
      color: PRIMARY, background: ACCENT,
      pad: [{ t: 16 }, { b: 16 }, { l: 36 }, { r: 36 }],
      radius: "3rem", center: true,
      removeDecoration: true,
      hover: { background: WHITE, animation: "0.3s ease" },
      keySet: { key: "display", value: "inline-block" },
    }),
  ]),
]).render("#mount");

renderFooter();
