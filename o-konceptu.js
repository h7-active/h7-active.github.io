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
// INTERACTIVE LEVEL PICKER — H0 to H8+
// ════════════════════════════════════════════════════════

const pickerLevels = [
  { display: "H0", name: "Bez pohybu", hours: "0h", daily: "0 min denně", desc: "Sedavý životní styl bez pravidelného pohybu. Každá minuta navíc se počítá — začněte třeba 5minutovou procházkou." },
  { display: "H1", name: "Začátek", hours: "1h", daily: "8–9 min denně", desc: "První kroky k aktivnějšímu životu. 1 hodina týdně — krátká procházka nebo protažení každý den." },
  { display: "H2", name: "Budování návyku", hours: "2h", daily: "17–18 min denně", desc: "Pohyb se stává součástí vašeho dne. 2 hodiny týdně budují základ pro silnější návyk." },
  { display: "H3", name: "Součást života", hours: "3h", daily: "25–26 min denně", desc: "Pohyb se stává součástí vašeho života. 3 hodiny týdně vědomé aktivity. Začínáte cítit zlepšení kondice a nálady. Pravidelný rytmus 3–4× týdně." },
  { display: "H4", name: "Nadprůměr", hours: "4h", daily: "34–35 min denně", desc: "Jste nad průměrem populace. 4 hodiny týdně přináší výrazné zdravotní benefity a viditelné výsledky." },
  { display: "H5", name: "Sportovec", hours: "5h", daily: "42–43 min denně", desc: "Aktivní sportovní životní styl. 5 hodin týdně — trénujete pravidelně a pohyb je vaše priorita." },
  { display: "H6", name: "Pokročilý", hours: "6h", daily: "51–52 min denně", desc: "Pokročilá úroveň aktivity. 6 hodin týdně intenzivního pohybu vyžaduje disciplínu a odhodlání." },
  { display: "H7", name: "Mistr", hours: "7h", daily: "60 min denně", desc: "Cíl H7 — hodina pohybu denně, 7 hodin týdně. Dosáhli jste zlatého standardu aktivního života." },
  { display: "H8+", name: "Extrém", hours: "8+h", daily: "69+ min denně", desc: "Extrémní úroveň aktivity. Více než 8 hodin týdně — pro profesionální sportovce a nadšence." },
];

/*
// ── OLD RAW DOM LEVEL PICKER (replaced by pure Nodality version below) ──
*/

// ════════════════════════════════════════════════════════
// INTERACTIVE LEVEL PICKER — Pure Nodality version
// ════════════════════════════════════════════════════════

(() => {
  let selected = 3;
  const TOTAL = pickerLevels.length;
  const invis = () => [new Text("\u00A0").set({ exact: "0px", color: "transparent" })];
  const ks = (key, value) => ({ keySet: { key, value } });
  const flex = (el) => el.set(ks("display", "flex")).set(ks("gridTemplateColumns", "unset"));

  // ── Refs for updates ──
  const circles = [], circleTexts = [], names = [], hours = [], diamonds = [];
  let filledLine, detailBadge, detailName, detailWeekly, detailDaily, detailDesc;

  // ── Build one timeline item ──
  function buildItem(l, i) {
    const sel = i === selected;
    const past = i < selected;
    const active = sel || past;

    const cText = new Text(l.display).set({
      font: FONT, exact: sel ? "22px" : "16px",
      color: active ? WHITE : "#9CA3AF",
      weight: "700", align: "center",
      pad: [{ t: sel ? 18 : 10 }],
    });
    circleTexts[i] = cText;

    const circle = new Wrapper().set({
      background: active ? PRIMARY : WHITE,
      radius: "50%",
      width: sel ? "64px" : "42px",
      height: sel ? "64px" : "42px",
      borderObj: { width: "2px", color: active ? PRIMARY : GRAY_200 },
      mar: [{ t: sel ? -2 : 6 }],
      mboth: true,
    }).add([cText]);
    circles[i] = circle;

    const nm = new Text(l.name).set({
      font: FONT, exact: "13px", weight: "600",
      color: sel ? PRIMARY : past ? "#4B5563" : "#9CA3AF",
      align: "center", pad: [{ t: 8 }],
    });
    names[i] = nm;

    const hr = new Text(l.hours + " týdně").set({
      font: FONT, exact: "12px",
      color: sel ? PRIMARY : "#9CA3AF",
      align: "center", pad: [{ t: 2 }],
    });
    hours[i] = hr;

    const dia = new Wrapper().set({
      width: "8px", height: "8px",
      background: sel ? PRIMARY : "transparent",
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
    filledLine.set({ width: `${(selected / (TOTAL - 1)) * 100}%` });

    pickerLevels.forEach((l, i) => {
      const sel = i === selected;
      const past = i < selected;
      const active = sel || past;

      circles[i].set({
        background: active ? PRIMARY : WHITE,
        width: sel ? "64px" : "42px",
        height: sel ? "64px" : "42px",
        borderObj: { width: "2px", color: active ? PRIMARY : GRAY_200 },
        mar: [{ t: sel ? -2 : 6 }],
      });

      circleTexts[i].set({
        color: active ? WHITE : "#9CA3AF",
        exact: sel ? "22px" : "16px",
        pad: [{ t: sel ? 18 : 10 }],
      });

      names[i].set({ color: sel ? PRIMARY : past ? "#4B5563" : "#9CA3AF" });
      hours[i].set({ color: sel ? PRIMARY : "#9CA3AF" });

      diamonds[i].set({ background: sel ? PRIMARY : "transparent" });
      diamonds[i].set(ks("transform", sel ? "rotate(45deg)" : "none"));
    });

    const l = pickerLevels[selected];
    detailBadge.res.textContent = l.display;
    detailName.res.textContent = l.name;
    detailWeekly.res.textContent = l.hours + " týdně";
    detailDaily.res.textContent = l.daily;
    detailDesc.res.textContent = l.desc;
    watermark.res.textContent = l.display;
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
    background: PRIMARY, height: "2px",
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
    font: FONT, exact: "14px", color: WHITE, weight: "700", align: "center", pad: [{ t: 10 }],
  });

  detailName = new Text(l0.name).set({
    font: FONT, exact: "1.5rem", color: GRAY_900, weight: "800",
  });

  detailWeekly = new Text(l0.hours + " týdně").set({
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
    background: PRIMARY, radius: "50%", width: "42px", height: "42px",
  }).add([detailBadge]);

  const leftSide = flex(new FlexRow().set({ gap: "0.75rem", align: "center" }).items([badgeCircle, detailName]));

  const weeklyLabel = new Text("TÝDNĚ").set({ font: FONT, exact: "10px", color: "#9CA3AF", weight: "600" });
  const weeklyIcon = new Text("\u{1F551}").set({ exact: "1.1rem" });
  const weeklyGroup = new Wrapper().set({}).add([detailWeekly, weeklyLabel]);
  const weeklyStat = flex(new FlexRow().set({ gap: "0.5rem", align: "center" }).items([weeklyIcon, weeklyGroup]));

  const dailyLabel = new Text("DENNĚ").set({ font: FONT, exact: "10px", color: "#9CA3AF", weight: "600" });
  const dailyIcon = new Text("\u{1F4C8}").set({ exact: "1.1rem" });
  const dailyGroup = new Wrapper().set({}).add([detailDaily, dailyLabel]);
  const dailyStat = flex(new FlexRow().set({ gap: "0.5rem", align: "center" }).items([dailyIcon, dailyGroup]));

  const rightSide = flex(new FlexRow().set({ gap: "2rem", align: "center" }).items([weeklyStat, dailyStat]));
  rightSide.set(ks("flexShrink", "0"));
  const topRow = flex(new FlexRow().set({ justify: "space-between", align: "center", gap: "1.5rem" }).items([leftSide, rightSide]));
  topRow.set(ks("flexWrap", "wrap"));

  // Watermark — large faded level number
  const watermark = new Text(l0.display).set({
    font: FONT, exact: "10rem", color: `${PRIMARY}0D`, weight: "900",
  });
  watermark.set(ks("position", "absolute")).set(ks("right", "20px")).set(ks("bottom", "-10px"))
           .set(ks("lineHeight", "1")).set(ks("pointerEvents", "none")).set(ks("userSelect", "none"));

  const detailCard = new Wrapper().set({
    background: WHITE, radius: "1rem",
    pad: [{ a: 32 }], maxWidth: "800px", mboth: true, mar: [{ t: 32 }],
    borderObj: { width: "1px", color: GRAY_200 },
  }).add([topRow, detailDesc, watermark]);
  detailCard.set(ks("position", "relative")).set(ks("overflow", "hidden"));

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
  ]).render("#mount");
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
