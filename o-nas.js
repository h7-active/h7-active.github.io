import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";

renderNav();

// ── HERO HEADER ──
renderPageHeader(
  t.oNas.heroBadge,
  t.oNas.heroTitle,
  t.oNas.heroDesc
);

// ════════════════════════════════════════════════════════
// FOUNDERS SECTION
// ════════════════════════════════════════════════════════

function founderCard(initials, name, role, bio, credentials) {
  return new Wrapper().set({
    background: WHITE, radius: "1.5rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Wrapper().set({
      background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
      radius: "50%",
      width: "60px", height: "60px",
    }).add([
      new Text(initials).set({ font: FONT, exact: "1.1rem", color: WHITE, weight: "800", align: "center", pad: [{ t: 18 }] }),
    ]),
    new Text(name).set({ font: FONT, exact: "1.25rem", color: GRAY_900, weight: "700", pad: [{ t: 16 }] }),
    new Text(role).set({ font: FONT, exact: "0.85rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),
    new Text(bio).set({ font: FONT, exact: "0.9rem", color: GRAY_500, pad: [{ t: 12 }], align: "left" }),
    ...credentials.map(c =>
      new Text("• " + c).set({ font: FONT, exact: "0.8rem", color: GRAY_500, pad: [{ t: 4 }], align: "left" })
    ),
  ]);
}

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.founderTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.oNas.founderDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 8 }, { b: 40 }],
  }),

  // Main founders row: Petr, Hana, Milan
  new Wrapper().set({ maxWidth: "1100px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "700px", wrap: false,
    }).items([
      founderCard("PV", t.oNas.petrName, t.oNas.petrRole,
        t.oNas.petrBio,
        t.oNas.petrCreds
      ),
      founderCard("HŠ", t.oNas.hanaName, t.oNas.hanaRole,
        t.oNas.hanaBio1,
        t.oNas.hanaCreds
      ),
      founderCard("ML", t.oNas.milanName, t.oNas.milanRole,
        t.oNas.milanBio,
        t.oNas.milanCreds
      ),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// OTHER TEAM MEMBERS
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.otherTitle).set({
    font: FONT, exact: "1.3rem", color: GRAY_900, weight: "700",
    align: "center", pad: [{ b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "750px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1rem", colat: "600px", wrap: false,
    }).items(
      t.oNas.teamMembers.map(m =>
        new Wrapper().set({
          background: GRAY_50, radius: "1rem",
          pad: [{ a: 20 }],
          borderObj: { width: "1px", color: GRAY_200 },
          width: "100%",
        }).add([
          new Wrapper().set({
            background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`,
            radius: "50%",
            width: "48px", height: "48px",
            mboth: true,
          }).add([
            new Text(m.i).set({ font: FONT, exact: "0.9rem", color: WHITE, weight: "800", align: "center", pad: [{ t: 14 }] }),
          ]),
          new Text(m.n).set({ font: FONT, exact: "0.95rem", color: GRAY_900, weight: "600", align: "center", pad: [{ t: 10 }] }),
          new Text(m.r).set({ font: FONT, exact: "0.8rem", color: GRAY_500, align: "center", pad: [{ t: 2 }] }),
        ])
      )
    ),
  ]),

  // Shared vision
  new Wrapper().set({
    background: GRAY_50, radius: "1rem",
    pad: [{ a: 24 }], maxWidth: "800px", mboth: true, mar: [{ t: 32 }],
    borderObj: { width: "1px", color: GRAY_200 },
  }).add([
    new Text(t.oNas.sharedVision).set({
      font: FONT, exact: "0.95rem", color: GRAY_500, align: "center",
    }),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// COMMUNITY SECTION
// ════════════════════════════════════════════════════════

function communityCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%",
  }).add([
    new Text(emoji).set({ exact: "2rem", pad: [{ b: 8 }] }),
    new Text(title).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500 }),
  ]);
}

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.supportTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.oNas.supportDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "650px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "900px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "700px", wrap: false,
    }).items([
      communityCard("📱", t.oNas.support1Title, t.oNas.support1Desc),
      communityCard("🌐", t.oNas.support2Title, t.oNas.support2Desc),
      communityCard("👥", t.oNas.support3Title, t.oNas.support3Desc),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// AI + MONETIZATION
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: WHITE,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  // AI Feature highlight
  new Wrapper().set({
    background: GRAY_50, radius: "1.5rem",
    pad: [{ a: 32 }], maxWidth: "900px", mboth: true,
    borderObj: { width: "1px", color: GRAY_200 },
  }).add([
    new Text(t.oNas.aiTitle).set({
      font: FONT, exact: "1.3rem", color: GRAY_900, weight: "800",
    }),
    new Text(t.oNas.aiDesc).set({
      font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 12 }], align: "left",
    }),
  ]),

  // Monetization
  new Text(t.oNas.monetTitle).set({
    font: FONT, exact: "1.3rem", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 48 }],
  }),
  new Text(t.oNas.monetDesc).set({
    font: FONT, exact: "1rem", color: GRAY_500,
    align: "center", maxWidth: "650px", center: true, pad: [{ t: 8 }, { b: 32 }],
  }),
  new Wrapper().set({ maxWidth: "900px", mboth: true }).add([
    new FlexGrid().set({
      gap: "1.25rem", colat: "700px", wrap: false,
    }).items([
      new Wrapper().set({
        background: GRAY_50, radius: "1.2rem",
        pad: [{ a: 24 }],
        borderObj: { width: "1px", color: GRAY_200 },
        width: "100%",
      }).add([
        new Text("🏢").set({ exact: "2rem", pad: [{ b: 8 }] }),
        new Text(t.oNas.monetCard1).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
        new Text(t.oNas.monetCard1Desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500 }),
      ]),
      new Wrapper().set({
        background: GRAY_50, radius: "1.2rem",
        pad: [{ a: 24 }],
        borderObj: { width: "1px", color: GRAY_200 },
        width: "100%",
      }).add([
        new Text("👑").set({ exact: "2rem", pad: [{ b: 8 }] }),
        new Text(t.oNas.monetCard2).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
        new Text(t.oNas.monetCard2Desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500 }),
      ]),
    ]),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// CONTACT & FAQ
// ════════════════════════════════════════════════════════

new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 60 }, { b: 60 }, { l: 24 }, { r: 24 }],
}).add([
  new Wrapper().set({ maxWidth: "1000px", mboth: true }).add([
    new FlexGrid().set({
      gap: "2rem",
      colat: "700px", wrap: false,
    }).items([
      // Contact
      new Wrapper().set({ width: "100%" }).add([
      new Text(t.oNas.contactTitle).set({
        font: FONT, exact: "1.5rem", color: GRAY_900, weight: "800", pad: [{ t: 16 }],
      }),
      new Text(t.oNas.contactDesc).set({
        font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 8 }, { b: 24 }],
      }),
      new Wrapper().set({
        background: WHITE, radius: "1rem",
        pad: [{ a: 20 }], mar: [{ b: 12 }],
        borderObj: { width: "1px", color: GRAY_200 },
      }).add([
        new Text(t.oNas.contactEmail).set({ font: FONT, exact: "0.85rem", color: GRAY_500, weight: "600" }),
        new Link("info@h7active.cz", "mailto:info@h7active.cz").set({
          font: FONT, exact: "1rem", color: PRIMARY, weight: "600",
          removeDecoration: true, pad: [{ t: 4 }],
        }),
        new Text(t.oNas.contactEmailNote).set({ font: FONT, exact: "0.75rem", color: GRAY_500, pad: [{ t: 4 }] }),
      ]),
      new Wrapper().set({
        background: WHITE, radius: "1rem",
        pad: [{ a: 20 }],
        borderObj: { width: "1px", color: GRAY_200 },
      }).add([
        new Text(t.oNas.contactFB).set({ font: FONT, exact: "0.85rem", color: GRAY_500, weight: "600" }),
        new Text("@H7active").set({ font: FONT, exact: "1rem", color: PRIMARY, weight: "600", pad: [{ t: 4 }] }),
        new Text(t.oNas.contactFBNote).set({ font: FONT, exact: "0.75rem", color: GRAY_500, pad: [{ t: 4 }] }),
      ]),
    ]),

    // FAQ
    new Wrapper().set({ width: "100%" }).add([
      new Text(t.oNas.faqTitle).set({
        font: FONT, exact: "1.2rem", color: GRAY_900, weight: "800", pad: [{ b: 24 }],
      }),
      ...t.oNas.faqs.map(f =>
        new Wrapper().set({
          background: WHITE, radius: "1rem",
          pad: [{ a: 20 }], mar: [{ b: 12 }],
          borderObj: { width: "1px", color: GRAY_200 },
        }).add([
          new Text(f.q).set({ font: FONT, exact: "0.95rem", color: GRAY_900, weight: "600" }),
          new Text(f.a).set({ font: FONT, exact: "0.85rem", color: GRAY_500, pad: [{ t: 8 }], align: "left" }),
        ])
      ),
      new Text(t.oNas.faqFooter).set({
        font: FONT, exact: "0.8rem", color: GRAY_500, pad: [{ t: 8 }],
      }),
    ]),
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
  new Text(t.oNas.commCTA).set({
    font: FONT, size: "S4", color: WHITE, weight: "800", align: "center",
  }),
  new Text(t.oNas.commDesc).set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 16 }],
  }),
  new Wrapper().set({ mar: [{ t: 24 }], mboth: true, maxWidth: "300px" }).add([
    new Link(t.oNas.commBtn, "./aktivity.html").set({
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
