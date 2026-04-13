import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";
import levelExtended from "./level-content.js";

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
// INTERACTIVE LEVEL PICKER — H0 to H8+
// ════════════════════════════════════════════════════════

const pickerLevels = t.koncept.picker;

/*
// ── OLD RAW DOM LEVEL PICKER (replaced by pure Nodality version below) ──
*/

// ════════════════════════════════════════════════════════
// INTERACTIVE LEVEL PICKER — Pure Nodality version
// ════════════════════════════════════════════════════════

(() => {
  let selected = 0;
  const TOTAL = pickerLevels.length;
  const invis = () => [new Text("\u00A0").set({ exact: "0px", color: "transparent" })];
  const ks = (key, value) => ({ keySet: { key, value } });
  const flex = (el) => el.set(ks("display", "flex")).set(ks("gridTemplateColumns", "unset"));

  // Belt colors matching the apps
  const beltColors = ["#808080","#FFFFFF","#EBFE00","#FF8C00","#33B859","#2673D9","#8C592B","#1F1F1F","#EF4444"];
  const beltTextColors = ["#fff","#1A1A1F","#1A1A1F","#fff","#fff","#fff","#fff","#fff","#fff"];
  const beltBgLight = ["#F2F2F2","#F5F5F5","#FFF5D1","#FFEBD1","#D9F2E0","#D9E6FB","#EDE0D1","#E0E0E0","#FDE0E3"];
  // Label color when selected (contrast on light bg)
  const beltLabelColors = ["#808080","#666","#998C00","#FF8C00","#33B859","#2673D9","#8C592B","#1F1F1F","#EF4444"];

  // ── Refs for updates ──
  const circles = [], circleTexts = [], names = [], hours = [], diamonds = [];
  let filledLine, detailBadge, detailName, detailWeekly, detailDaily, detailDesc;

  // ── Build one timeline item ──
  function buildItem(l, i) {
    const sel = i === selected;
    const past = i < selected;
    const active = sel || past;
    const bc = beltColors[i];
    const btc = beltTextColors[i];

    const cText = new Text(l.display).set({
      font: FONT, exact: sel ? "22px" : "16px",
      color: active ? btc : "#9CA3AF",
      weight: "700", align: "center",
    });
    circleTexts[i] = cText;

    const circle = new Wrapper().set({
      background: active ? bc : WHITE,
      radius: "50%",
      width: sel ? "64px" : "42px",
      height: sel ? "64px" : "42px",
      borderObj: { width: "2px", color: active ? bc : GRAY_200 },
      mar: [{ t: sel ? -2 : 6 }],
      mboth: true,
      keySet: [
        { key: "display", value: "flex" },
        { key: "alignItems", value: "center" },
        { key: "justifyContent", value: "center" },
      ],
    }).add([cText]);
    circles[i] = circle;

    const lc = beltLabelColors[i];
    const nm = new Text(l.name).set({
      font: FONT, exact: "13px", weight: "600",
      color: sel ? lc : past ? "#4B5563" : "#9CA3AF",
      align: "center", pad: [{ t: 8 }],
    });
    names[i] = nm;

    const hr = new Text(l.hours + " " + t.koncept.weekly.toLowerCase()).set({
      font: FONT, exact: "12px",
      color: sel ? lc : "#9CA3AF",
      align: "center", pad: [{ t: 2 }],
    });
    hours[i] = hr;

    const dia = new Wrapper().set({
      width: "8px", height: "8px",
      background: sel ? lc : "transparent",
      mar: [{ t: 6 }], mboth: true,
    }).add(invis());
    if (sel) dia.set(ks("transform", "rotate(45deg)"));
    diamonds[i] = dia;

    const item = new Wrapper().set({ cursor: "pointer" }).add([circle, nm, hr, dia]);
    item.set(ks("WebkitTapHighlightColor", "transparent")).set(ks("minWidth", "72px")).set(ks("flexShrink", "0")).set(ks("flex", "1 0 0")).set(ks("textAlign", "center")).set(ks("minHeight", "130px"));
    item.res.addEventListener("click", () => { selected = i; update(); });
    return item;
  }

  // ── Update on click ──
  function update() {
    const selColor = beltColors[selected];
    filledLine.set({ width: `${(selected / (TOTAL - 1)) * 100}%`, background: selColor });

    pickerLevels.forEach((l, i) => {
      const sel = i === selected;
      const past = i < selected;
      const active = sel || past;
      const bc = beltColors[i];
      const btc = beltTextColors[i];

      circles[i].set({
        background: active ? bc : WHITE,
        width: sel ? "64px" : "42px",
        height: sel ? "64px" : "42px",
        borderObj: { width: "2px", color: active ? bc : GRAY_200 },
        mar: [{ t: sel ? -2 : 6 }],
      });

      circleTexts[i].set({
        color: active ? btc : "#9CA3AF",
        exact: sel ? "22px" : "16px",
      });

      const lc = beltLabelColors[i];
      names[i].set({ color: sel ? lc : past ? "#4B5563" : "#9CA3AF" });
      hours[i].set({ color: sel ? lc : "#9CA3AF" });

      diamonds[i].set({ background: sel ? lc : "transparent" });
      diamonds[i].set(ks("transform", sel ? "rotate(45deg)" : "none"));
    });

    const l = pickerLevels[selected];
    detailBadge.res.textContent = l.display;
    badgeCircle.set({ background: selColor });
    detailBadge.set({ color: beltTextColors[selected] });
    detailName.res.textContent = l.name;
    detailWeekly.res.textContent = l.hours + " " + t.koncept.weekly.toLowerCase();
    detailDaily.res.textContent = l.daily;
    detailDesc.res.textContent = l.desc;
    watermark.res.textContent = l.display;
    watermark.set({ color: selColor + "15" });
    detailCard.set({ background: beltBgLight[selected] });
    if (typeof renderExtended === "function") renderExtended();
  }

  // ── Timeline row ──
  const items = pickerLevels.map((l, i) => buildItem(l, i));
  const row = new FlexRow().set({ justify: "space-between", align: "flex-start", gap: "0.5rem" }).items(items);
  row.set(ks("position", "relative")).set(ks("zIndex", "2"))
     .set(ks("overflowX", "auto")).set(ks("flexWrap", "nowrap"))
     .set(ks("WebkitOverflowScrolling", "touch")).set(ks("paddingBottom", "4px"))
     .set(ks("paddingTop", "8px"));

  // Background line
  const bgLine = new Wrapper().set({ background: GRAY_200, height: "2px" }).add(invis());
  bgLine.set(ks("position", "absolute")).set(ks("top", "35px")).set(ks("left", "8px")).set(ks("right", "8px"));

  // Filled line
  filledLine = new Wrapper().set({
    background: beltColors[selected], height: "2px",
    width: `${(selected / (TOTAL - 1)) * 100}%`,
    transition: "width 0.3s ease",
  }).add(invis());
  filledLine.set(ks("position", "absolute")).set(ks("top", "35px")).set(ks("left", "8px")).set(ks("zIndex", "1"));

  // Timeline container
  const timeline = new Wrapper().set({ maxWidth: "800px", mboth: true, pad: [{ l: 8 }, { r: 8 }] }).add([bgLine, filledLine, row]);
  timeline.set(ks("position", "relative"));

  // ── Detail card ──
  const l0 = pickerLevels[selected];

  detailBadge = new Text(l0.display).set({
    font: FONT, exact: "14px", color: beltTextColors[selected], weight: "700", align: "center",
  });

  detailName = new Text(l0.name).set({
    font: FONT, exact: "1.5rem", color: GRAY_900, weight: "800",
  });

  detailWeekly = new Text(l0.hours + " " + t.koncept.weekly.toLowerCase()).set({
    font: FONT, exact: "1.05rem", color: GRAY_900, weight: "700",
  });

  detailDaily = new Text(l0.daily).set({
    font: FONT, exact: "1.05rem", color: GRAY_900, weight: "700",
  });

  detailDesc = new Text(l0.desc).set({
    font: FONT, exact: "0.95rem", color: GRAY_500, pad: [{ t: 16 }],
    maxWidth: "65%",
  });

  const badgeCircle = new Wrapper().set({
    background: beltColors[selected], radius: "50%", width: "48px", height: "48px",
    mar: [{ r: "0.8rem" }],
    keySet: [
      { key: "display", value: "flex" },
      { key: "alignItems", value: "center" },
      { key: "justifyContent", value: "center" },
    ],
  }).add([detailBadge]);

  const leftSide = flex(new FlexRow().set({ gap: "1.25rem", align: "center" }).items([badgeCircle, detailName]));

  const weeklyLabel = new Text(t.koncept.weekly).set({ font: FONT, exact: "10px", color: "#9CA3AF", weight: "600", pad: [{ t: 4 }] });
  const weeklyIcon = new Text("\u{1F551}").set({ exact: "1.3rem" });
  const weeklyGroup = new Wrapper().set({ pad: [{ a: "0.6rem" }] }).add([detailWeekly, weeklyLabel]);
  const weeklyStat = flex(new FlexRow().set({ gap: "0.75rem", align: "center" }).items([weeklyIcon, weeklyGroup]));

  const dailyLabel = new Text(t.koncept.daily).set({ font: FONT, exact: "10px", color: "#9CA3AF", weight: "600", pad: [{ t: 4 }] });
  const dailyIcon = new Text("\u{1F4C8}").set({ exact: "1.3rem" });
  const dailyGroup = new Wrapper().set({ pad: [{ a: "0.6rem" }] }).add([detailDaily, dailyLabel]);
  const dailyStat = flex(new FlexRow().set({ gap: "0.75rem", align: "center" }).items([dailyIcon, dailyGroup]));

  const rightSide = flex(new FlexRow().set({ gap: "3rem", align: "center" }).items([weeklyStat, dailyStat]));
  rightSide.set(ks("flexShrink", "0"));
  const topRow = flex(new FlexRow().set({ justify: "space-between", align: "center", gap: "1.5rem" }).items([leftSide, rightSide]));
  topRow.set(ks("flexWrap", "wrap"));

  // Watermark — large faded level number
  const watermark = new Text(l0.display).set({
    font: FONT, exact: "10rem", color: `${beltColors[selected]}15`, weight: "900",
  });
  watermark.set(ks("position", "absolute")).set(ks("right", "20px")).set(ks("bottom", "-10px"))
           .set(ks("lineHeight", "1")).set(ks("pointerEvents", "none")).set(ks("userSelect", "none"));

  const detailCard = new Wrapper().set({
    background: beltBgLight[selected], radius: "1rem",
    pad: [{ a: 32 }], maxWidth: "800px", mboth: true, mar: [{ t: 32 }],
    borderObj: { width: "1px", color: GRAY_200 },
  }).add([topRow, detailDesc, watermark]);
  detailCard.set(ks("position", "relative")).set(ks("overflow", "hidden"));

  // ── Extended content per level ──
  const extendedWrapper = new Wrapper().set({
    maxWidth: "800px", mboth: true, mar: [{ t: 24 }],
    background: beltBgLight[selected], radius: "1rem",
    borderObj: { width: "1px", color: GRAY_200 },
  }).add(invis());

  function renderExtended() {
    extendedWrapper.res.innerHTML = "";
    const content = levelExtended[selected];
    if (!content) {
      extendedWrapper.res.style.padding = "0";
      extendedWrapper.res.style.border = "none";
      return;
    }
    extendedWrapper.res.style.padding = "24px 32px 32px";
    extendedWrapper.res.style.border = "";
    extendedWrapper.set({ background: beltBgLight[selected] });
    const headingColor = beltLabelColors[selected];

    content.forEach(item => {
      if (item.heading) {
        const h = new Text(item.heading).set({
          font: FONT, exact: "1.15rem", color: headingColor, weight: "700",
          pad: [{ t: 20 }, { b: 8 }],
        });
        extendedWrapper.res.appendChild(h.res);
      }
      if (item.text) {
        const p = new Text(item.text).set({
          font: FONT, exact: "0.95rem", color: GRAY_700,
          pad: [{ b: 12 }],
          keySet: { key: "lineHeight", value: "1.7" },
        });
        extendedWrapper.res.appendChild(p.res);
      }
    });
  }

  // ── Render ──
  new Wrapper().set({
    background: GRAY_50,
    pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  }).add([
    new Text(t.koncept.beltTitle).set({
      font: FONT, size: "S4", color: GRAY_900, weight: "800", align: "center",
    }),
    new Text(t.koncept.beltDesc).set({
      font: FONT, exact: "1.05rem", color: GRAY_500, align: "center",
      maxWidth: "700px", center: true, pad: [{ t: 12 }, { b: 40 }],
    }),
    timeline,
    detailCard,
    extendedWrapper,
  ]).render("#mount");

  renderExtended();
})();

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

const pillarColors = [ACCENT, "#60A5FA", "#34D399", "#A78BFA", "#FB923C", "#38BDF8", "#F472B6"];

// ════════════════════════════════════════════════════════
// SEVEN PILLARS — Interactive
// ════════════════════════════════════════════════════════

(() => {
  const pks = (key, value) => ({ keySet: { key, value } });
  const pinvis = () => [new Text("\u00A0").set({ exact: "0px", color: "transparent" })];

  const pillarIcons = ["\u2191\u2193", "\u263E", "\u2B22", "\u2B50", "\u2764", "\u2B59", "\u2B21"];
  const pillarColors = [ACCENT, "#60A5FA", "#34D399", "#A78BFA", "#FB923C", "#38BDF8", "#F472B6"];
  const pillars = t.koncept.pillars;
  let selPillar = 0;

  // ── Pill selector row ──
  const pillRow = new Wrapper().set({
    pad: [{ t: 32 }, { b: 32 }],
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "gap", value: "0.75rem" },
      { key: "justifyContent", value: "center" },
    ],
  }).add(pinvis());

  function renderPills() {
    pillRow.res.innerHTML = "";
    pillars.forEach((p, i) => {
      const active = i === selPillar;
      const pill = new Text(p.title).set({
        font: FONT, exact: "0.9rem", weight: active ? "700" : "500",
        color: active ? DARK_BG : "rgba(255,255,255,0.8)",
        background: active ? ACCENT : "transparent",
        radius: "0.6rem", cursor: "pointer",
        pad: [{ t: 10 }, { b: 10 }, { l: 20 }, { r: 20 }],
        keySet: { key: "border", value: active ? "none" : "1.5px solid rgba(255,255,255,0.25)" },
        onTap: () => { selPillar = i; renderPills(); renderDetail(); },
      });
      pillRow.res.appendChild(pill.res);
    });
  }

  // ── Detail card refs ──
  const detNumBig = new Text("01").set({
    font: FONT, exact: "8rem", color: "rgba(255,255,255,0.12)", weight: "900",
  });
  detNumBig.set(pks("position", "absolute")).set(pks("left", "32px")).set(pks("top", "20px"))
    .set(pks("lineHeight", "1")).set(pks("pointerEvents", "none"));

  const detIcon = new Wrapper().set({
    width: "72px", height: "72px", radius: "18px",
    background: "rgba(255,255,255,0.15)",
    mar: [{ t: 80 }],
  }).add([
    new Text("\u2191\u2193").set({ exact: "1.75rem", align: "center", color: WHITE, pad: [{ t: 20 }] }),
  ]);

  const detTitle = new Text("Fyzick\u00E1 aktivita").set({
    font: FONT, exact: "1.75rem", color: WHITE, weight: "800", pad: [{ t: 24 }],
  });

  const detBadge = new Text("\u2022 7h+ pohybu t\u00FDdn\u011B").set({
    font: FONT, exact: "0.85rem", color: ACCENT, weight: "600",
    background: "rgba(0,0,0,0.35)", radius: "2rem",
    pad: [{ t: 8 }, { b: 8 }, { l: 16 }, { r: 16 }],
    mar: [{ t: 16 }],
    keySet: { key: "width", value: "fit-content" },
  });

  const detDesc = new Text("").set({
    font: FONT, exact: "1.1rem", color: "rgba(255,255,255,0.75)",
    keySet: { key: "lineHeight", value: "1.8" },
  });

  const detCounter = new Text(t.koncept.pillarCounter.replace("{num}", "01")).set({
    font: FONT, exact: "0.75rem", color: "rgba(255,255,255,0.4)", weight: "600",
    keySet: { key: "letterSpacing", value: "0.1em" },
  });

  // Progress bar segments
  const progressRow = new Wrapper().set({
    keySet: [
      { key: "display", value: "flex" },
      { key: "gap", value: "6px" },
      { key: "marginTop", value: "8px" },
    ],
  }).add(pinvis());

  function renderProgress() {
    progressRow.res.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const seg = new Wrapper().set({
        height: "3px",
        background: i === selPillar ? pillarColors[selPillar] : "rgba(255,255,255,0.15)",
        radius: "2px",
        keySet: { key: "flex", value: "1" },
      }).add(pinvis());
      progressRow.res.appendChild(seg.res);
    }
  }

  // ── Left side of card ──
  const cardLeft = new Wrapper().set({
    pad: [{ a: 36 }],
    keySet: [
      { key: "flex", value: "1 1 300px" },
      { key: "position", value: "relative" },
      { key: "display", value: "flex" },
      { key: "flexDirection", value: "column" },
    ],
  }).add([detNumBig, detIcon, detTitle, detBadge]);

  // ── Right side of card ──
  const cardRight = new Wrapper().set({
    pad: [{ a: 36 }],
    keySet: [
      { key: "flex", value: "1 1 400px" },
      { key: "display", value: "flex" },
      { key: "flexDirection", value: "column" },
      { key: "justifyContent", value: "space-between" },
      { key: "borderLeft", value: "1px solid rgba(255,255,255,0.1)" },
    ],
  }).add([detDesc, new Wrapper().set({ pad: [{ t: 32 }] }).add([detCounter, progressRow])]);

  const detailCard = new Wrapper().set({
    background: "linear-gradient(135deg, rgba(120,160,130,0.25) 0%, rgba(80,120,100,0.15) 100%)",
    radius: "1.5rem", maxWidth: "1100px", mboth: true,
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "backdropFilter", value: "blur(24px)" },
      { key: "border", value: "1px solid rgba(255,255,255,0.12)" },
      { key: "minHeight", value: "360px" },
      { key: "overflow", value: "hidden" },
    ],
  }).add([cardLeft, cardRight]);

  function renderDetail() {
    const p = pillars[selPillar];
    const pc = pillarColors[selPillar];
    const num = String(selPillar + 1).padStart(2, "0");

    detNumBig.res.textContent = num;
    detIcon.set({ background: `${pc}30` });
    detIcon.res.firstChild.style.color = pc;
    detTitle.res.textContent = p.title;
    detBadge.res.textContent = "\u2022 " + p.summary;
    detBadge.set({ color: pc, background: `${pc}20` });
    detDesc.res.textContent = p.desc;
    detCounter.res.textContent = t.koncept.pillarCounter.replace("{num}", num);
    renderProgress();
  }

  // ── Render section ──
  new Wrapper().set({
    background: `linear-gradient(180deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)`,
    pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  }).add([
    new Text(t.koncept.pillarsTitle).set({
      font: FONT, size: "S3", color: WHITE, weight: "900",
      align: "center",
    }),
    new Text(t.koncept.pillarsDesc).set({
      font: FONT, exact: "1.05rem", color: "rgba(255,255,255,0.7)", align: "center",
      maxWidth: "700px", center: true, pad: [{ t: 12 }, { b: 8 }],
    }),
    pillRow,
    detailCard,
  ]).render("#mount");

  renderPills();
  renderDetail();
})();

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
