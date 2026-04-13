import { Text, Button, Link, Image, FlexRow, Wrapper, Spacer, FlexGrid, Stack, Switcher, MobileBar, DesktopBar, Theme, Dropdown } from "nodality";
import t from "./lang.js";

// ── Brand Tokens ──
const PRIMARY    = "#104B87";
const PRIMARY_DK = "#0A325A";
const ACCENT     = "#E8FF00";
const DARK_BG    = "#071e3a";
const WHITE      = "#ffffff";
const GRAY_50    = "#F9FAFB";
const GRAY_100   = "#F3F4F6";
const GRAY_200   = "#E5E7EB";
const GRAY_500   = "#6B7280";
const GRAY_700   = "#374151";
const GRAY_900   = "#111827";
const FONT       = "Inter";

// ════════════════════════════════════════════════════════
// SECTION 0 — HEADER / NAV BAR (Switcher + MobileBar/DesktopBar)
// ════════════════════════════════════════════════════════

function navLink(text, url) {
  return new Link().set({
    url: url, text: text,
    font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.8)",
    weight: "500", removeDecoration: true,
    hover: { color: ACCENT, animation: "0.3s ease" },
  });
}

function langOption(code, label) {
  return new Text(label).set({
    font: FONT, exact: "0.75rem", color: GRAY_900, weight: "600",
    pad: [{ t: 8 }, { b: 8 }, { l: 14 }, { r: 14 }],
    cursor: "pointer",
    onTap: () => t._setLang(code),
  });
}

function langToggle() {
  const labels = { cs: "CZ 🇨🇿", en: "EN 🇬🇧", sk: "SK 🇸🇰" };
  const current = new Text(labels[t._lang] || "CZ 🇨🇿").set({
    font: FONT, exact: "0.75rem", color: GRAY_900, weight: "700",
    background: ACCENT, radius: "1rem",
    pad: [{ t: 4 }, { b: 4 }, { l: 10 }, { r: 10 }],
    cursor: "pointer",
  });

  const options = new Wrapper().set({ width: "100%" }).add([
    langOption("cs", "CZ 🇨🇿"),
    langOption("en", "EN 🇬🇧"),
    langOption("sk", "SK 🇸🇰"),
  ]);

  return new Dropdown().set({
    behaviour: "mouseover",
    contentWidth: "100px",
    background: WHITE,
    radius: "0.5rem",
  }).add([current, options]);
}

function navBrand() {
  const img = new Image("./assets/logo-h7-4-HQ.svg").set({
    width: "36px", height: "36px", cursor: "pointer",
  });
  img.res.addEventListener("click", () => { window.location.href = "./index.html"; });
  return img;
}

new Switcher().set({
  breakpoints: [
    {
      at: "0px",
      view: new MobileBar().set({
        background: PRIMARY_DK,
        hamburgerColour: WHITE,
        brand: navBrand(),
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
        navBrand(),
        new Spacer(true),
        navLink(t.nav.koncept, "./o-konceptu.html"),
        navLink(t.nav.aktivity, "./aktivity.html"),
        navLink(t.nav.oNas, "./o-nas.html"),
        langToggle(),
      ]),
    },
  ],
}).render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 1 — HERO
// ════════════════════════════════════════════════════════

const ks = (key, value) => ({ keySet: { key, value } });

const heroBadge = new Text(t.home.heroAiBadge).set({
  font: FONT, exact: "0.9rem", color: ACCENT, weight: "600",
  background: "rgba(232,255,0,0.12)", radius: "2rem",
  pad: [{ t: 8 }, { b: 8 }, { l: 20 }, { r: 20 }],
  center: true,
  keySet: { key: "width", value: "fit-content" },
});

const heroTitle1 = new Text(t.home.heroTitle1).set({
  font: FONT, fluidc: "S2", color: "rgba(255,255,255,0.6)", weight: "800",
  align: "center", pad: [{ t: 24 }],
});

const heroTitle2 = new Text(t.home.heroTitle).set({
  font: FONT, fluidc: "S2", color: WHITE, weight: "900",
  align: "center",
});

const heroSub1 = new Text(t.home.heroSub1).set({
  font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.7)", weight: "400",
  align: "center", pad: [{ t: 20 }],
});

const heroSub2 = new Text(t.home.heroSub2).set({
  font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.7)", weight: "400",
  align: "center", pad: [{ t: 4 }],
});

const heroSub3 = new Text(t.home.heroSub3).set({
  font: FONT, exact: "1.1rem", color: ACCENT, weight: "600",
  align: "center", pad: [{ t: 4 }],
});

const heroCTA1 = new Link(t.home.heroCTA1, "./aktivity.html").set({
  font: FONT, exact: "0.95rem", weight: "700",
  color: PRIMARY, background: ACCENT,
  pad: [{ t: 14 }, { b: 14 }, { l: 28 }, { r: 28 }],
  radius: "3rem", removeDecoration: true,
  mar: [{ l: 12 }, { r: 12 }],
  hover: { background: WHITE, animation: "0.3s ease" },
});

const heroCTA2 = new Link(t.home.heroCTA2, "./o-konceptu.html").set({
  font: FONT, exact: "0.95rem", weight: "600",
  color: WHITE, background: "transparent",
  pad: [{ t: 12 }, { b: 12 }, { l: 24 }, { r: 24 }],
  radius: "3rem", removeDecoration: true,
  mar: [{ l: 12 }, { r: 12 }],
  borderObj: { width: "1.5px", color: "rgba(255,255,255,0.3)" },
  hover: { background: "rgba(255,255,255,0.1)", animation: "0.3s ease" },
});

const heroCTA3 = new Link(t.home.heroCTA3, "#").set({
  font: FONT, exact: "0.95rem", weight: "600",
  color: WHITE, background: "transparent",
  pad: [{ t: 12 }, { b: 12 }, { l: 24 }, { r: 24 }],
  radius: "3rem", removeDecoration: true,
  mar: [{ l: 12 }, { r: 12 }],
  borderObj: { width: "1.5px", color: "rgba(255,255,255,0.3)" },
  hover: { background: "rgba(255,255,255,0.1)", animation: "0.3s ease" },
});

const heroButtons = new FlexRow().set({
  gap: "2.5rem", justify: "center", pad: [{ t: 40 }, { b: 40 }],
}).items([heroCTA1, heroCTA2, heroCTA3]);
heroButtons.set(ks("flexWrap", "wrap"));

// Stats row
function statCard(icon, value, label) {
  return new Wrapper().set({
    background: "rgba(255,255,255,0.06)", radius: "1rem",
    pad: [{ t: 20 }, { b: 20 }, { l: 24 }, { r: 24 }],
    mar: [{ l: 8 }, { r: 8 }],
    width: "160px", height: "160px",
  }).add([
    new Text(icon).set({ exact: "1.3rem", align: "center", pad: [{ b: 6 }] }),
    new Text(value).set({ font: FONT, exact: "1.8rem", color: ACCENT, weight: "800", align: "center" }),
    new Text(label).set({ font: FONT, exact: "0.8rem", color: "rgba(255,255,255,0.6)", weight: "500", align: "center", pad: [{ t: 2 }] }),
  ]);
}

const statsRow = new FlexRow().set({
  gap: "1.5rem", justify: "center", align: "stretch", pad: [{ t: 48 }],
  maxWidth: "800px",
}).items([
  statCard("🕐", t.home.stat1Val, t.home.stat1Label),
  statCard("🛡️", t.home.stat2Val, t.home.stat2Label),
  statCard("📈", t.home.stat3Val, t.home.stat3Label),
  statCard("🔗", t.home.stat4Val, t.home.stat4Label),
]);
statsRow.set(ks("flexWrap", "wrap")).set(ks("marginLeft", "auto")).set(ks("marginRight", "auto"));

const heroInner = new Wrapper().set({
  pad: [{ t: 100 }, { b: 60 }, { l: 40 }, { r: 40 }],
}).add([heroBadge, heroTitle1, heroTitle2, heroSub1, heroSub2, heroSub3, heroButtons, statsRow]);

const heroSection = new Wrapper().set({
  width: "100%",
  keySet: [
    { key: "backgroundImage", value: `linear-gradient(180deg, rgba(7,30,58,0.85) 0%, rgba(10,50,90,0.9) 100%), url('./assets/hero-sports.jpg')` },
    { key: "backgroundSize", value: "cover" },
    { key: "backgroundPosition", value: "center" },
  ],
}).add([heroInner]);

heroSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 2 — PACE BANNER
// ════════════════════════════════════════════════════════

const paceTitle = new Text(t.home.paceTitle).set({
  font: FONT, size: "S5", color: GRAY_900, weight: "800",
  align: "center",
});

const paceDesc = new Text(t.home.paceDesc).set({
  font: FONT, exact: "1.05rem", color: GRAY_500,
  align: "center", maxWidth: "600px", center: true,
  pad: [{ t: 12 }],
});

const h0Badge = new Wrapper().set({
  background: GRAY_200, radius: "1rem",
  pad: [{ a: 20 }], width: "220px",
}).add([
  new Text("H0").set({ font: FONT, size: "S5", color: GRAY_700, weight: "900", align: "center" }),
  new Text(t.home.h0Label).set({ font: FONT, exact: "0.85rem", color: GRAY_500, align: "center", pad: [{ t: 4 }] }),
]);

const paceArrow = new Text("→").set({
  font: FONT, exact: "2rem", color: PRIMARY, weight: "700",
  align: "center", pad: [{ t: 8 }, { b: 8 }],
});

const h1Badge = new Wrapper().set({
  background: PRIMARY, radius: "1rem",
  pad: [{ a: 20 }], width: "220px",
}).add([
  new Text("H1").set({ font: FONT, size: "S5", color: ACCENT, weight: "900", align: "center" }),
  new Text(t.home.h1Label).set({ font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.8)", align: "center", pad: [{ t: 4 }] }),
]);

const paceBadges = new FlexRow().set({
  gap: "1.5rem", align: "center",
  justify: "center",
  pad: [{ t: 24 }],
  colat: "768px",
}).items([h0Badge, paceArrow, h1Badge]);

const paceSection = new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([paceTitle, paceDesc, paceBadges]);

paceSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 3 — HOW IT WORKS
// ════════════════════════════════════════════════════════

const hiwTitle = new Text(t.home.hiwTitle).set({
  font: FONT, size: "S4", color: GRAY_900, weight: "800",
  align: "center", pad: [{ t: 16 }],
});

function stepCard(num, title, desc, accent) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    maxWidth: "340px",
    width: "100%",
  }).add([
    new Text(num).set({ font: FONT, exact: "0.75rem", color: accent, weight: "800", pad: [{ b: 8 }] }),
    new Text(title).set({ font: FONT, exact: "1.15rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.95rem", color: GRAY_500 }),
  ]);
}

const steps = new Wrapper().set({ maxWidth: "900px", mboth: true, width: "100%", pad: [{ t: 32 }] }).add([
  new FlexGrid().set({
    gap: "1.5rem", colat: "600px",
  }).items([
    stepCard("01", t.home.step1Title, t.home.step1Desc, "#3B82F6"),
    stepCard("02", t.home.step2Title, t.home.step2Desc, "#7C3AED"),
    stepCard("03", t.home.step3Title, t.home.step3Desc, PRIMARY),
  ]),
]);

const hiwSection = new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([hiwTitle, steps]);

hiwSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 4 — MOTIVATION (3 cards)
// ════════════════════════════════════════════════════════

function motivCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%", maxWidth: "280px",
  }).add([
    new Text(emoji).set({ exact: "2rem", pad: [{ b: 8 }] }),
    new Text(title).set({ font: FONT, exact: "1.1rem", color: GRAY_900, weight: "700", pad: [{ b: 8 }] }),
    new Text(desc).set({ font: FONT, exact: "0.95rem", color: GRAY_500 }),
  ]);
}

const motivCards = new Wrapper().set({ maxWidth: "900px", mboth: true, width: "100%" }).add([
  new FlexGrid().set({
    gap: "1.5rem", colat: "600px",
  }).items([
    motivCard("❤️", t.home.motiv1Title, t.home.motiv1Desc),
    motivCard("⚡", t.home.motiv2Title, t.home.motiv2Desc),
    motivCard("🏁", t.home.motiv3Title, t.home.motiv3Desc),
  ]),
]);

const motivSection = new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.home.motivTitle).set({ font: FONT, size: "S5", color: GRAY_900, weight: "800", align: "center", pad: [{ b: 24 }] }),
  motivCards,
]);

motivSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 5 — WHITE BELT SYSTEM (7 levels)
// ════════════════════════════════════════════════════════

const belts = [
  { level: "H1", name: t.home.beltNames[0], time: t.home.beltTimes[0], bg: "#E5E7EB", tc: "#374151" },
  { level: "H2", name: t.home.beltNames[1], time: t.home.beltTimes[1], bg: "#FCD34D", tc: "#78350F" },
  { level: "H3", name: t.home.beltNames[2], time: t.home.beltTimes[2], bg: "#FB923C", tc: "#9A3412" },
  { level: "H4", name: t.home.beltNames[3], time: t.home.beltTimes[3], bg: "#34D399", tc: "#065F46" },
  { level: "H5", name: t.home.beltNames[4], time: t.home.beltTimes[4], bg: "#60A5FA", tc: "#1E3A8A" },
  { level: "H6", name: t.home.beltNames[5], time: t.home.beltTimes[5], bg: "#92400E", tc: "#FEF3C7" },
  { level: "H7", name: t.home.beltNames[6], time: t.home.beltTimes[6], bg: "#1F2937", tc: ACCENT },
];

function beltCard(b) {
  return new Wrapper().set({
    background: WHITE, radius: "1rem",
    borderObj: { width: "1px", color: GRAY_200 },
    pad: [{ a: 16 }],
    width: "100%", maxWidth: "200px",
  }).add([
    new Wrapper().set({
      background: b.bg, radius: "0.75rem",
      pad: [{ t: 20 }, { b: 20 }],
    }).add([
      new Text(b.level).set({ font: FONT, exact: "1.5rem", color: b.tc, weight: "900", align: "center" }),
    ]),
    new Text(b.name).set({
      font: FONT, exact: "0.8rem", color: GRAY_700, weight: "600",
      align: "center", pad: [{ t: 10 }],
      background: GRAY_100, radius: "1rem",
    }),
    new Text(b.time).set({ font: FONT, exact: "0.75rem", color: GRAY_500, align: "center", pad: [{ t: 6 }] }),
  ]);
}

const beltsTitle = new Text(t.home.beltsTitle).set({
  font: FONT, size: "S4", color: GRAY_900, weight: "800",
  align: "center", pad: [{ t: 12 }],
});

const beltsDesc = new Text(t.home.beltsDesc).set({
  font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
  maxWidth: "550px", center: true, pad: [{ t: 8 }, { b: 24 }],
});

const beltsGrid = new Wrapper().set({ maxWidth: "900px", mboth: true, width: "100%", pad: [{ t: 8 }] }).add([
  new FlexGrid().set({
    gap: "1rem", colat: "600px",
  }).items(belts.map(b => beltCard(b))),
]);

const beltsBottom = new Wrapper().set({
  background: `${PRIMARY}0C`, radius: "1rem",
  pad: [{ a: 24 }],
  maxWidth: "600px",
  mboth: true,
  mar: [{ t: 32 }],
}).add([
  new Text(t.home.beltsBottomTitle).set({ font: FONT, exact: "1.05rem", color: GRAY_900, weight: "700", align: "center" }),
  new Text(t.home.beltsBottomDesc).set({ font: FONT, exact: "0.9rem", color: GRAY_500, align: "center", pad: [{ t: 8 }] }),
]);

const beltsSection = new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([beltsTitle, beltsDesc, beltsGrid, beltsBottom]);

beltsSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 6 — CONCEPT (4 benefit cards)
// ════════════════════════════════════════════════════════

const conceptTitle = new Text(t.home.conceptTitle).set({
  font: FONT, size: "S4", color: PRIMARY, weight: "800",
  align: "center", pad: [{ t: 12 }],
});

const conceptDesc = new Text(t.home.conceptDesc).set({
  font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
  maxWidth: "650px", center: true, pad: [{ t: 8 }, { b: 32 }],
});

function benefitCard(emoji, title, desc) {
  return new Wrapper().set({
    background: WHITE, radius: "1.2rem",
    pad: [{ a: 24 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%", maxWidth: "280px",
  }).add([
    new Text(emoji).set({ exact: "1.5rem", pad: [{ b: 8 }] }),
    new Text(title).set({ font: FONT, exact: "1rem", color: GRAY_900, weight: "700", pad: [{ b: 6 }] }),
    new Text(desc).set({ font: FONT, exact: "0.9rem", color: GRAY_500 }),
  ]);
}

const benefitCards = new Wrapper().set({ maxWidth: "1100px", mboth: true, width: "100%" }).add([
  new FlexGrid().set({
    gap: "1.25rem", colat: "600px",
  }).items([
    benefitCard("❤️", t.home.benefit1Title, t.home.benefit1Desc),
    benefitCard("⚡", t.home.benefit2Title, t.home.benefit2Desc),
    benefitCard("🎯", t.home.benefit3Title, t.home.benefit3Desc),
    benefitCard("🏃", t.home.benefit4Title, t.home.benefit4Desc),
  ]),
]);

const conceptSection = new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([conceptTitle, conceptDesc, benefitCards]);

conceptSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 7 — QUICK NAV CARDS
// ════════════════════════════════════════════════════════

function navCard(title, desc, cta, url, bg, textColor) {
  return new Wrapper().set({
    background: bg, radius: "1.2rem",
    pad: [{ a: 20 }],
    width: "100%",
    cursor: "pointer",
    onTap: () => window.location.href = url,
  }).add([
    new Text(title).set({ font: FONT, exact: "1.1rem", color: textColor, weight: "800", pad: [{ b: 4 }] }),
    new Text(desc).set({ font: FONT, exact: "0.85rem", color: textColor === WHITE ? "rgba(255,255,255,0.75)" : GRAY_500, pad: [{ b: 10 }] }),
    new Text(cta + " →").set({ font: FONT, exact: "0.85rem", color: textColor === WHITE ? ACCENT : PRIMARY, weight: "700" }),
  ]);
}

const navCards = new Wrapper().set({ width: "100%", maxWidth: "900px", mboth: true }).add([
  new FlexGrid().set({
    gap: "1.25rem", colat: "600px",
  }).items([
    navCard(t.home.navCard1Title, t.home.navCard1Desc, t.home.navCard1CTA, "./o-konceptu.html", `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DK})`, WHITE),
    navCard(t.home.navCard2Title, t.home.navCard2Desc, t.home.navCard2CTA, "./aktivity.html", ACCENT, GRAY_900),
    navCard(t.home.navCard3Title, t.home.navCard3Desc, t.home.navCard3CTA, "./o-nas.html", GRAY_900, WHITE),
  ]),
]);

const navSection = new Wrapper().set({
  background: GRAY_50,
  pad: [{ t: 48 }, { b: 48 }, { l: 24 }, { r: 24 }],
  width: "100%",
}).add([navCards]);

navSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 8 — APP DOWNLOAD
// ════════════════════════════════════════════════════════

const appTitle = new Text(t.home.appTitle).set({
  font: FONT, size: "S4", color: WHITE, weight: "800",
  align: "center", pad: [{ t: 16 }],
});

const appDesc = new Text(t.home.appDesc).set({
  font: FONT, exact: "1.05rem", color: "rgba(255,255,255,0.8)",
  align: "center", maxWidth: "600px", center: true, pad: [{ t: 12 }],
});

function appFeature(emoji, title, desc) {
  return new FlexRow().set({
    gap: "1rem", align: "center",
    pad: [{ t: 16 }],
  }).items([
    new Text(emoji).set({ exact: "1.5rem" }),
    new Wrapper().set({ width: "100%" }).add([
      new Text(title).set({ font: FONT, exact: "0.95rem", color: WHITE, weight: "700" }),
      new Text(desc).set({ font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.7)" }),
    ]),
  ]);
}

const appFeatures = new Wrapper().set({ width: "100%", maxWidth: "500px", mboth: true }).add([
  appFeature("🧠", t.home.appFeat1Title, t.home.appFeat1Desc),
  appFeature("⚡", t.home.appFeat2Title, t.home.appFeat2Desc),
  appFeature("📈", t.home.appFeat3Title, t.home.appFeat3Desc),
]);

const appStoreBtn = new Wrapper().set({ cursor: "pointer" }).add([
  new Image("./badge-appstore.svg").set({ height: "52px" }),
]);

const playStoreBtn = new Wrapper().set({ cursor: "pointer" }).add([
  new Image("./badge-googleplay.svg").set({ height: "52px" }),
]);

const appButtons = new Wrapper().set({ pad: [{ t: 28 }] }).add([
  new FlexRow().set({ justify: "center" }).items([
    appStoreBtn,
    new Wrapper().set({ width: "24px" }).add([]),
    playStoreBtn,
  ]),
]);

const appNote = new Text(t.home.appNote).set({
  font: FONT, exact: "0.8rem", color: "rgba(255,255,255,0.5)",
  align: "center", pad: [{ t: 12 }],
});

const appSection = new Wrapper().set({
  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  width: "100%",
}).add([
  new Wrapper().set({ maxWidth: "700px", mboth: true }).add([
    appTitle, appDesc, appFeatures, appButtons, appNote,
  ]),
]);

appSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 9 — FOUNDERS (ZAKLADATELÉ)
// ════════════════════════════════════════════════════════

function founderCard(initials, name, role, bio, credentials) {
  return new Wrapper().set({
    background: WHITE, radius: "1.5rem",
    pad: [{ a: 28 }],
    borderObj: { width: "1px", color: GRAY_200 },
    width: "100%", height: "100%",
    keySet: { key: "boxSizing", value: "border-box" },
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

const founderSection = new Wrapper().set({
  background: WHITE,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
}).add([
  new Text(t.oNas.founderTitle).set({
    font: FONT, size: "S4", color: GRAY_900, weight: "800",
    align: "center", pad: [{ t: 12 }],
  }),
  new Text(t.oNas.founderDesc).set({
    font: FONT, exact: "1.05rem", color: GRAY_500,
    align: "center", maxWidth: "600px", center: true, pad: [{ t: 8 }, { b: 40 }],
  }),
  new Wrapper().set({ maxWidth: "1100px", mboth: true }).add([
    new FlexRow().set({ gap: "1.25rem", colat: "600px", align: "stretch" }).items([
      founderCard("PV", t.oNas.petrName, t.oNas.petrRole, t.oNas.petrBio, t.oNas.petrCreds),
      founderCard("HŠ", t.oNas.hanaName, t.oNas.hanaRole, t.oNas.hanaBio1 + " " + t.oNas.hanaBio2 + " " + t.oNas.hanaBio3, t.oNas.hanaCreds),
    ]),
    new FlexRow().set({ gap: "1.25rem", colat: "600px", align: "stretch", pad: [{ t: "1.25rem" }] }).items([
      founderCard("ML", t.oNas.milanName, t.oNas.milanRole, t.oNas.milanBio, t.oNas.milanCreds),
      founderCard("FV", t.oNas.filipName, t.oNas.filipRole, t.oNas.filipBio, t.oNas.filipCreds),
    ]),
  ]),
]);

founderSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 11 — FINAL CTA
// ════════════════════════════════════════════════════════

const ctaTitle = new Text(t.home.ctaTitle).set({
  font: FONT, size: "S4", color: WHITE, weight: "800",
  align: "center",
});

const ctaTitle2 = new Text(t.home.ctaTitle2).set({
  font: FONT, size: "S4", color: ACCENT, weight: "800",
  align: "center",
});

const ctaDesc = new Text(t.home.ctaDesc).set({
  font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.8)",
  align: "center", maxWidth: "600px", center: true, pad: [{ t: 16 }],
});

const ctaBtn = new Link(t.home.ctaCTA, "./aktivity.html").set({
  font: FONT, exact: "1.1rem", weight: "700",
  color: PRIMARY, background: ACCENT,
  pad: [{ t: 16 }, { b: 16 }, { l: 36 }, { r: 36 }],
  radius: "3rem", center: true,
  removeDecoration: true,
  hover: { background: WHITE, animation: "0.3s ease" },
});

function ctaStat(value, label) {
  return new Wrapper().set({ width: "100%" }).add([
    new Text(value).set({ font: FONT, exact: "1.75rem", color: ACCENT, weight: "900", align: "center" }),
    new Text(label).set({ font: FONT, exact: "0.7rem", color: "rgba(255,255,255,0.6)", weight: "700", align: "center", pad: [{ t: 4 }] }),
  ]);
}

const ctaStats = new Wrapper().set({ maxWidth: "600px", mboth: true, width: "100%", pad: [{ t: 40 }] }).add([
  new FlexGrid().set({
    gap: "2rem", colat: "768px",
  }).items([
    ctaStat(t.home.ctaStat1, t.home.ctaStat1Label),
    ctaStat(t.home.ctaStat2, t.home.ctaStat2Label),
    ctaStat(t.home.ctaStat3, t.home.ctaStat3Label),
  ]),
]);

const ctaSection = new Wrapper().set({
  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
  pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  radius: "2rem",
  maxWidth: "1100px", mboth: true,
  mar: [{ t: 40 }, { b: 40 }],
  resprop: [
    { breakpoint: "default", borderRadius: "2rem" },
    { breakpoint: "1148px", borderRadius: "0" },
  ],
}).add([ctaTitle, ctaTitle2, ctaDesc,
  new FlexRow().set({ justify: "center", pad: [{ t: 24 }] }).items([ctaBtn]),
  ctaStats,
]);

ctaSection.render("#mount");

// ════════════════════════════════════════════════════════
// SECTION 12 — FOOTER
// ════════════════════════════════════════════════════════

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
  new Text(t.home.footerBrand).set({ font: FONT, exact: "1.3rem", color: WHITE, weight: "900" }),
  new Text(t.home.footerDesc).set({ font: FONT, exact: "0.85rem", color: "rgba(255,255,255,0.5)", pad: [{ t: 8 }], maxWidth: "280px" }),
]);

const footerNav = footerCol(t.footer.navigace, [
  { text: t.footer.konceptH7, url: "./o-konceptu.html" },
  { text: t.footer.aktivity, url: "./aktivity.html" },
  { text: t.footer.oNas, url: "./o-nas.html" },
]);

const footerConcept = footerCol(t.footer.koncept, [
  { text: t.footer.systemUrovni, url: "./aktivity.html" },
  { text: t.footer.sedmPiliru, url: "./o-konceptu.html" },
  { text: t.footer.katalogAktivit, url: "./aktivity.html" },
]);

const footerContact = footerCol(t.footer.kontakt, [
  { text: "info@h7active.cz", url: "mailto:info@h7active.cz" },
  { text: "h7active.cz", url: "https://h7active.cz" },
]);

const footerGrid = new FlexRow().set({
  gap: "2rem",
  pad: [{ t: 48 }, { b: 32 }, { l: 40 }, { r: 40 }],
  maxWidth: "1100px",
  colat: "768px",
}).items([footerBrand, footerNav, footerConcept, footerContact]);

const footerBottom = new Wrapper().set({
  pad: [{ t: 16 }, { b: 24 }, { l: 40 }, { r: 40 }],
  borderObj: { width: "1px 0 0 0", color: "rgba(255,255,255,0.1)" },
}).add([
  new Text(t.home.footerCopyright.replace("{year}", new Date().getFullYear())).set({
    font: FONT, exact: "0.8rem", color: "rgba(255,255,255,0.4)", align: "center", pad: [{ t: 16 }],
  })
]);

const footer = new Wrapper("footer").set({
  background: DARK_BG,
  width: "100%",
}).add([footerGrid, footerBottom]);

footer.render("#mount");
