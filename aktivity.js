import { Text, Link, FlexRow, FlexGrid, Wrapper, Spacer, TextField } from "nodality";
import { renderNav, renderFooter, renderPageHeader, renderBackLink, PRIMARY, PRIMARY_DK, ACCENT, WHITE, GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_700, GRAY_900, DARK_BG, FONT } from "./shared.js";
import t from "./lang.js";
import levelExtended from "./level-content.js";

renderNav();

const ks = (key, value) => ({ keySet: { key, value } });

// ════════════════════════════════════════════════════════
// HERO HEADER
// ════════════════════════════════════════════════════════

new Wrapper().set({
  pad: [{ t: 120 }, { b: 60 }, { l: 24 }, { r: 24 }],
  keySet: { key: "background", value: "linear-gradient(180deg, #e8e8e8 0%, #d4d4d4 100%)" },
}).add([
  new Text("134 aktivit").set({
    font: FONT, exact: "0.85rem", weight: "700",
    color: DARK_BG, background: ACCENT,
    radius: "2rem", align: "center",
    pad: [{ t: 6 }, { b: 6 }, { l: 18 }, { r: 18 }],
    keySet: { key: "width", value: "fit-content" },
    mboth: true,
  }),
  new Text("Katalog aktivit H0-H8+").set({
    font: FONT, size: "S2", color: GRAY_900, weight: "900",
    align: "center", pad: [{ t: 24 }],
  }),
  new Text("Kompletní seznam vhodných aktivit pro každou úroveň. Vyberte si ty, které vás baví a které se hodí k vašemu životu.").set({
    font: FONT, exact: "1.15rem", color: GRAY_700, weight: "500",
    align: "center", maxWidth: "650px", center: true, pad: [{ t: 16 }],
  }),
]).render("#mount");

// ════════════════════════════════════════════════════════
// STATS CARDS
// ════════════════════════════════════════════════════════

const STATS_BG = "#1e3a8a";
const STATS_CARD = "#1e3f94";

function statCard(icon, number, label) {
  return new Wrapper().set({
    background: STATS_CARD, radius: "1rem",
    pad: [{ t: 28 }, { b: 28 }, { l: 24 }, { r: 24 }],
    keySet: [
      { key: "flex", value: "1 1 0" },
      { key: "minWidth", value: "200px" },
      { key: "textAlign", value: "center" },
    ],
  }).add([
    new Text(icon).set({ exact: "1.5rem", align: "center", color: ACCENT, pad: [{ b: 8 }] }),
    new Text(number).set({ font: FONT, exact: "3rem", color: WHITE, weight: "900", align: "center" }),
    new Text(label).set({ font: FONT, exact: "0.95rem", color: "rgba(255,255,255,0.7)", align: "center", pad: [{ t: 4 }] }),
  ]);
}

new Wrapper().set({
  background: STATS_BG,
  pad: [{ t: 48 }, { b: 48 }, { l: 24 }, { r: 24 }],
}).add([
  new Wrapper().set({
    maxWidth: "900px", mboth: true,
    keySet: [
      { key: "display", value: "flex" },
      { key: "gap", value: "20px" },
      { key: "flexWrap", value: "wrap" },
      { key: "justifyContent", value: "center" },
    ],
  }).add([
    statCard("📋", "134", "aktivit v katalogu"),
    statCard("🏷️", "10", "kategorií"),
    statCard("📈", "9", "úrovní obtížnosti"),
  ]),
]).render("#mount");

// ════════════════════════════════════════════════════════
// ACTIVITY DATA
// ════════════════════════════════════════════════════════

// Belt colors matching the Android/iOS apps
const levelColors = {
  "H0": "#808080", "H1": "#FFFFFF", "H2": "#EBFE00", "H3": "#FF8C00",
  "H4": "#33B859", "H5": "#2673D9", "H6": "#8C592B", "H7": "#1F1F1F", "H8+": "#EF4444",
};
// Dark backgrounds for each level (for extended sections / detail cards)
const levelBgDark = {
  "H0": "#2E2E33", "H1": "#38383D", "H2": "#47401A", "H3": "#47331A",
  "H4": "#1A3824", "H5": "#1A2642", "H6": "#382B1F", "H7": "#2E2E33", "H8+": "#471A1F",
};
// Text color on belt: dark text for light belts
const levelTextOnBelt = {
  "H0": "#fff", "H1": "#1A1A1F", "H2": "#1A1A1F", "H3": "#fff",
  "H4": "#fff", "H5": "#fff", "H6": "#fff", "H7": "#fff", "H8+": "#fff",
};

const categoryList = ["Všechny kategorie", "Kardio", "Bojové", "Tanec", "Flexibilita", "Ostatní", "Outdoor", "Síla", "Týmové", "Vodní", "Zimní"];
const intensityLabels = { low: "Nízká", med: "Střední", high: "Vysoká" };
const intensityColors = { low: "#22C55E", med: "#F59E0B", high: "#EF4444" };

const allActivities = [
  { name: "Šachy", desc: "Strategická desková hra, ale nepočítá se jako pohyb.", level: "H0", cat: "Ostatní", int: "low" },
  { name: "Rybaření", desc: "Relaxační aktivita v přírodě.", level: "H0", cat: "Outdoor", int: "low" },
  { name: "Šipky", desc: "Hospodský sport, nezvedne tepovku.", level: "H0", cat: "Ostatní", int: "low" },
  { name: "Rychlá chůze", desc: "Nejpřirozenější forma pohybu. Stačí 10 minut denně.", level: "H1", cat: "Kardio", int: "low" },
  { name: "Chůze do schodů", desc: "Jednoduché cvičení dostupné každému v bytovém domě.", level: "H1", cat: "Kardio", int: "low" },
  { name: "Rekreační kolo", desc: "Pohodová jízda na kole po rovině.", level: "H1", cat: "Kardio", int: "low" },
  { name: "Rekreační plavání", desc: "Šetrné ke kloubům, ideální start.", level: "H1", cat: "Vodní", int: "low" },
  { name: "Jóga", desc: "Protažení, rovnováha a dýchání.", level: "H1", cat: "Flexibilita", int: "low" },
  { name: "Zahradní práce", desc: "Překvapivě dobrý pohyb — hrabání, kopání, stříhání.", level: "H1", cat: "Ostatní", int: "low" },
  { name: "Procházka se psem", desc: "Denní rutina, která vás zvedne ze židle.", level: "H1", cat: "Kardio", int: "low" },
  { name: "Indiánský běh", desc: "Střídání běhu a chůze — skvělý mezikrok.", level: "H2", cat: "Kardio", int: "low" },
  { name: "Sjezdové lyžování", desc: "Zimní sport pro celé tělo.", level: "H2", cat: "Zimní", int: "med" },
  { name: "Posilování s vlastní vahou", desc: "Kliky, dřepy, planky — žádné vybavení.", level: "H2", cat: "Síla", int: "low" },
  { name: "Volejbal", desc: "Týmový sport ideální pro víkendové party.", level: "H2", cat: "Týmové", int: "med" },
  { name: "Inline brusle", desc: "Skvělé kardio s nízkým dopadem na klouby.", level: "H2", cat: "Kardio", int: "low" },
  { name: "Turistika", desc: "Výlety do přírody s lehkým batůžkem.", level: "H2", cat: "Outdoor", int: "low" },
  { name: "Stolní tenis", desc: "Rychlé reflexy a zábava.", level: "H2", cat: "Ostatní", int: "low" },
  { name: "Jogging do 5 km", desc: "Souvislý běh na kratší vzdálenosti.", level: "H3", cat: "Kardio", int: "med" },
  { name: "Kondiční plavání", desc: "Systematické plavání s důrazem na techniku.", level: "H3", cat: "Vodní", int: "med" },
  { name: "Kruhový trénink", desc: "Kombinace cvičení ve vysokém tempu.", level: "H3", cat: "Síla", int: "med" },
  { name: "Tenis", desc: "Individuální sport vyžadující výdrž i strategii.", level: "H3", cat: "Ostatní", int: "med" },
  { name: "Tanec", desc: "Salsa, bachata, swing — pohyb s radostí.", level: "H3", cat: "Tanec", int: "med" },
  { name: "Badminton", desc: "Překvapivě náročný raketový sport.", level: "H3", cat: "Ostatní", int: "med" },
  { name: "Běžecký pás", desc: "Běh nebo chůze na páse — ideální v zimě.", level: "H3", cat: "Kardio", int: "med" },
  { name: "Běh na 10 km", desc: "Trénink na závodní desítku.", level: "H4", cat: "Kardio", int: "med" },
  { name: "MTB horská kola", desc: "Jízda v terénu vyžadující techniku i sílu.", level: "H4", cat: "Outdoor", int: "med" },
  { name: "Sprint triatlon", desc: "Plavání 750m, kolo 20km, běh 5km.", level: "H4", cat: "Kardio", int: "high" },
  { name: "CrossFit", desc: "Funkční fitness na vysoké intenzitě.", level: "H4", cat: "Síla", int: "high" },
  { name: "Hokej", desc: "Nejrychlejší týmový sport na ledě.", level: "H4", cat: "Týmové", int: "high" },
  { name: "Squash", desc: "Extrémně intenzivní raketový sport.", level: "H4", cat: "Ostatní", int: "high" },
  { name: "Posilovna", desc: "Systematický silový trénink.", level: "H4", cat: "Síla", int: "med" },
  { name: "Fotbal", desc: "Nejpopulárnější týmový sport na světě.", level: "H4", cat: "Týmové", int: "med" },
  { name: "Běh na 15 km", desc: "Delší tréninky budují vytrvalost.", level: "H5", cat: "Kardio", int: "high" },
  { name: "Silniční cyklistika", desc: "Intervalové jízdy a vytrvalostní kilometry.", level: "H5", cat: "Kardio", int: "high" },
  { name: "Spartan Sprint", desc: "Překážkový závod na 5+ km.", level: "H5", cat: "Outdoor", int: "high" },
  { name: "Parkour", desc: "Pohyb městem — skoky, přeskoky, lezení.", level: "H5", cat: "Outdoor", int: "high" },
  { name: "Kickbox", desc: "Kombinace boxu a kopů.", level: "H5", cat: "Bojové", int: "high" },
  { name: "Climbing", desc: "Lezení na stěně nebo ve skalách.", level: "H5", cat: "Outdoor", int: "med" },
  { name: "Půlmaratón", desc: "21,1 km běh — zlomový moment v tréninku.", level: "H6", cat: "Kardio", int: "high" },
  { name: "Olympijský triatlon", desc: "Plavání 1,5km, kolo 40km, běh 10km.", level: "H6", cat: "Kardio", int: "high" },
  { name: "MTB maratón 50–60 km", desc: "Dlouhé terénní závody na horských kolech.", level: "H6", cat: "Outdoor", int: "high" },
  { name: "Skialpinismus", desc: "Náročný zimní sport — výstupy a sjezdy.", level: "H6", cat: "Zimní", int: "high" },
  { name: "Box", desc: "Kompletní bojový sport pro kondici a techniku.", level: "H6", cat: "Bojové", int: "high" },
  { name: "Dálkové plavání 2–3 km", desc: "Systematický vytrvalostní trénink ve vodě.", level: "H6", cat: "Vodní", int: "high" },
  { name: "Maratón", desc: "42,195 km — královská disciplína.", level: "H7", cat: "Kardio", int: "high" },
  { name: "Half Ironman 70.3", desc: "Plavání 1,9km, kolo 90km, běh 21,1km.", level: "H7", cat: "Kardio", int: "high" },
  { name: "Dálkové plavání 5–10 km", desc: "Extrémní vytrvalost ve vodě.", level: "H7", cat: "Vodní", int: "high" },
  { name: "Ultra trail běh", desc: "Terénní běhy přes 50+ km.", level: "H7", cat: "Outdoor", int: "high" },
  { name: "Spartan Beast", desc: "Překážkový závod 21+ km se 30+ překážkami.", level: "H7", cat: "Outdoor", int: "high" },
  { name: "Ironman", desc: "Plavání 3,8km, kolo 180km, běh 42,2km.", level: "H8+", cat: "Kardio", int: "high" },
  { name: "Ultramaratón", desc: "Běhy přes 100 km a víc.", level: "H8+", cat: "Kardio", int: "high" },
  { name: "Ultra cyklistika", desc: "Non-stop cyklistické závody přes 200+ km.", level: "H8+", cat: "Kardio", int: "high" },
  { name: "Swimrun", desc: "Kombinace běhu a plavání v otevřené vodě.", level: "H8+", cat: "Vodní", int: "high" },
];

// ════════════════════════════════════════════════════════
// INTERACTIVE FILTER + GRID — Pure Nodality
// ════════════════════════════════════════════════════════

(() => {
  let selectedLevel = "Vše";
  let selectedCat = "Všechny kategorie";
  let searchQuery = "";

  const levelOptions = ["Vše", "H0", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8+"];

  // ── Pill builder ──
  function pill(label, active, onClick) {
    return new Text(label).set({
      font: FONT, exact: "0.85rem", weight: active ? "700" : "500",
      color: active ? DARK_BG : "#ccc",
      background: active ? ACCENT : "transparent",
      radius: "2rem",
      pad: [{ t: 8 }, { b: 8 }, { l: 18 }, { r: 18 }],
      cursor: "pointer",
      keySet: { key: "border", value: `1.5px solid ${active ? ACCENT : "#444"}` },
      onTap: onClick,
    });
  }

  // ── Search bar (Nodality TextField) ──
  const searchField = new TextField().set({
    type: "text",
    placeholder: "🔍  Hledat aktivitu...",
  });
  searchField.res.style.cssText = `width:100%;padding:14px 20px;border-radius:2rem;border:1px solid #333;background:#1a1a2e;color:#fff;font-family:${FONT};font-size:1rem;outline:none;box-sizing:border-box;`;
  searchField.res.addEventListener("input", () => { searchQuery = searchField.res.value.toLowerCase(); renderCards(); });

  const searchWrapper = new Wrapper().set({
    maxWidth: "600px", mboth: true, pad: [{ t: 40 }, { l: 24 }, { r: 24 }],
  }).add([searchField]);

  // ── Level pills row ──
  const levelRow = new Wrapper().set({
    pad: [{ t: 24 }, { l: 24 }, { r: 24 }],
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "gap", value: "0.6rem" },
      { key: "justifyContent", value: "center" },
    ],
  }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]);

  function renderLevelPills() {
    levelRow.res.innerHTML = "";
    levelOptions.forEach(lv => {
      const p = pill(lv, lv === selectedLevel, () => { selectedLevel = lv; renderLevelPills(); renderCards(); });
      levelRow.res.appendChild(p.res);
    });
  }

  // ── Category pills row ──
  const catRow = new Wrapper().set({
    pad: [{ t: 16 }, { l: 24 }, { r: 24 }],
    keySet: [
      { key: "display", value: "flex" },
      { key: "flexWrap", value: "wrap" },
      { key: "gap", value: "0.6rem" },
      { key: "justifyContent", value: "center" },
    ],
  }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]);

  function renderCatPills() {
    catRow.res.innerHTML = "";
    categoryList.forEach(cat => {
      const active = cat === selectedCat;
      const p = new Text(cat).set({
        font: FONT, exact: "0.8rem", weight: active ? "600" : "500",
        color: active ? DARK_BG : "#aaa",
        background: active ? ACCENT : "transparent",
        radius: "2rem",
        pad: [{ t: 7 }, { b: 7 }, { l: 16 }, { r: 16 }],
        cursor: "pointer",
        keySet: { key: "border", value: `1.5px solid ${active ? ACCENT : "#444"}` },
        onTap: () => { selectedCat = cat; renderCatPills(); renderCards(); },
      });
      catRow.res.appendChild(p.res);
    });
  }

  // ── Count ──
  const countText = new Text("53 aktivit").set({
    font: FONT, exact: "0.9rem", color: "#9CA3AF",
    align: "center", pad: [{ t: 20 }, { b: 8 }],
  });

  // ── Card grid container ──
  const gridContainer = new Wrapper().set({
    maxWidth: "1200px", mboth: true, pad: [{ t: 16 }, { b: 60 }, { l: 24 }, { r: 24 }],
  }).add([new Text("\u00A0").set({ exact: "0px", color: "transparent" })]);
  gridContainer.set(ks("display", "grid"))
    .set(ks("gridTemplateColumns", "repeat(auto-fill, minmax(300px, 1fr))"))
    .set(ks("gap", "16px"));

  // ── Build a single card ──
  function buildCard(a) {
    const lvColor = levelColors[a.level] || "#6B7280";
    const lvTextColor = levelTextOnBelt[a.level] || "#fff";
    const intColor = intensityColors[a.int];

    const lvBadge = new Text(a.level).set({
      font: FONT, exact: "0.7rem", weight: "700",
      color: lvTextColor,
      background: lvColor, radius: "1rem",
      pad: [{ t: 3 }, { b: 3 }, { l: 10 }, { r: 10 }],
    });

    const catBadge = new Text(a.cat).set({
      font: FONT, exact: "0.7rem", weight: "500",
      color: "#ccc", background: "#2a2a3e", radius: "1rem",
      pad: [{ t: 3 }, { b: 3 }, { l: 10 }, { r: 10 }],
    });

    const intBadge = new Text(intensityLabels[a.int]).set({
      font: FONT, exact: "0.7rem", weight: "600",
      color: "#fff", background: intColor, radius: "1rem",
      pad: [{ t: 3 }, { b: 3 }, { l: 10 }, { r: 10 }],
    });

    const tagsRow = new Wrapper().set({
      pad: [{ t: 16 }],
      keySet: [
        { key: "display", value: "flex" },
        { key: "flexWrap", value: "wrap" },
        { key: "gap", value: "6px" },
      ],
    }).add([lvBadge, catBadge, intBadge]);

    const card = new Wrapper().set({
      background: "#1a1a2e", radius: "1rem",
      pad: [{ a: 24 }],
      keySet: [
        { key: "border", value: "1px solid #2a2a3e" },
        { key: "transition", value: "border-color 0.2s" },
      ],
    }).add([
      new Text(a.name).set({ font: FONT, exact: "1.1rem", color: "#fff", weight: "700", pad: [{ b: 8 }] }),
      new Text(a.desc).set({ font: FONT, exact: "0.85rem", color: "#9CA3AF" }),
      tagsRow,
    ]);

    card.res.addEventListener("mouseenter", () => card.res.style.borderColor = "#444");
    card.res.addEventListener("mouseleave", () => card.res.style.borderColor = "#2a2a3e");

    return card;
  }

  // ── Render cards ──
  function renderCards() {
    const filtered = allActivities.filter(a => {
      if (selectedLevel !== "Vše" && a.level !== selectedLevel) return false;
      if (selectedCat !== "Všechny kategorie" && a.cat !== selectedCat) return false;
      if (searchQuery && !a.name.toLowerCase().includes(searchQuery) && !a.desc.toLowerCase().includes(searchQuery)) return false;
      return true;
    });

    countText.res.textContent = filtered.length + " aktivit";
    gridContainer.res.innerHTML = "";
    filtered.forEach(a => {
      gridContainer.res.appendChild(buildCard(a).res);
    });
  }

  // ── Page wrapper ──
  const page = new Wrapper().set({
    background: DARK_BG,
    keySet: { key: "minHeight", value: "100vh" },
  }).add([searchWrapper, levelRow, catRow, countText, gridContainer]);

  page.render("#mount");

  // ── Initial render ──
  renderLevelPills();
  renderCatPills();
  renderCards();
})();

// ════════════════════════════════════════════════════════
// LEVEL PICKER — interactive circle timeline
// ════════════════════════════════════════════════════════

(() => {
  const ks2 = (key, value) => ({ keySet: { key, value } });
  const invis = () => [new Text("\u00A0").set({ exact: "0px", color: "transparent" })];
  const flex = (el) => el.set(ks2("display", "flex")).set(ks2("gridTemplateColumns", "unset"));

  const pickerLevels = [
    { display: "H0", name: "Bez pohybu", hours: "0h", daily: "0 min denn\u011B", desc: "Pokud chod\u00ED\u0161 na ryby, hraje\u0161 \u0161achy nebo si d\u00E1\u0161 v hospod\u011B \u0161ipky, je to sice hezk\u00FD kon\u00ED\u010Dek... ale srdce, pl\u00EDce a svaly ti to zrovna nerozh\u00FDbe." },
    { display: "H1", name: "Za\u010D\u00E1tek", hours: "1h", daily: "9 min denn\u011B", desc: "N\u011Bjak se za\u010D\u00EDt mus\u00ED \u2013 jdeme na to!" },
    { display: "H2", name: "Budov\u00E1n\u00ED n\u00E1vyku", hours: "2h", daily: "17\u201318 min denn\u011B", desc: "Super, jdeme d\u00E1l a budujeme konzistenci! Se dv\u011Bma hodinami t\u00FDdn\u011B si m\u016F\u017Ee\u0161 dovolit u\u017E trochu \u010Darovat." },
    { display: "H3", name: "Sou\u010D\u00E1st \u017Eivota", hours: "3h", daily: "26 min denn\u011B", desc: "Pohyb je pomalu, ale jist\u011B sou\u010D\u00E1st\u00ED tv\u00E9ho \u017Eivota \u2013 riziko srde\u010Dn\u011B c\u00E9vn\u00EDch onemocn\u011Bn\u00ED razantn\u011B kles\u00E1." },
    { display: "H4", name: "Nadpr\u016Fm\u011Br", hours: "4h", daily: "35 min denn\u011B", desc: "Se zelen\u00FDm p\u00E1skem prost\u011B pat\u0159\u00ED\u0161 mezi elitu n\u00E1roda. Tohle u\u017E nen\u00ED \u0161ol\u00EDch\u00E1n\u00ED, tady u\u017E opravdu tr\u00E9nuje\u0161!" },
    { display: "H5", name: "Sportovec", hours: "5h", daily: "43 min denn\u011B", desc: "Jsi u\u017E opravdu spor\u0165\u00E1k a jede\u0161 bomby! Tv\u016Fj tr\u00E9nink za\u010D\u00EDn\u00E1 m\u00EDt syst\u00E9m a strukturu." },
    { display: "H6", name: "Pokro\u010Dil\u00FD", hours: "6h", daily: "52 min denn\u011B", desc: "Sport je pro tebe kon\u00ED\u010Dkem \u010D\u00EDslo jedna a prioritou. Vybral sis del\u0161\u00ED, kvalitn\u011Bj\u0161\u00ED, aktivn\u00ED \u017Eivot." },
    { display: "H7", name: "Mistr", hours: "7h", daily: "60 min denn\u011B", desc: "\u0160\u0165astn\u00E1, zdrav\u00E1, skv\u011Bl\u00E1 sedmi\u010Dka a \u0161\u0165astn\u00FD a zdrav\u00FD ty! Hodina pohybu denn\u011B je profi p\u0159\u00EDstup." },
    { display: "H8+", name: "Extr\u00E9m", hours: "8+h", daily: "68+ min denn\u011B", desc: "Pohyb se stal ned\u00EDlnou sou\u010D\u00E1st\u00ED tv\u00E9ho \u017Eivota. S vhodn\u00FDm pl\u00E1nem zvl\u00E1dne\u0161 triatlon i ultramaraton!" },
  ];
  const TOTAL = pickerLevels.length;
  let selected = 0;

  const circles = [], circleTexts = [], pNames = [], pHours = [], diamonds = [];
  let filledLine, detailBadge, detailName, detailWeekly, detailDaily, detailDesc, watermark;

  const beltColors = ["#808080","#FFFFFF","#EBFE00","#FF8C00","#33B859","#2673D9","#8C592B","#1F1F1F","#EF4444"];
  const beltTextColors = ["#fff","#1A1A1F","#1A1A1F","#fff","#fff","#fff","#fff","#fff","#fff"];
  const beltBgDark = ["#2E2E33","#38383D","#47401A","#47331A","#1A3824","#1A2642","#382B1F","#2E2E33","#471A1F"];

  function buildItem(l, i) {
    const sel = i === selected;
    const past = i < selected;
    const active = sel || past;
    const bColor = beltColors[i];
    const bTextColor = beltTextColors[i];

    const cText = new Text(l.display).set({
      font: FONT, exact: sel ? "22px" : "16px",
      color: active ? bTextColor : "#9CA3AF",
      weight: "700", align: "center",
      pad: [{ t: sel ? 18 : 10 }],
    });
    circleTexts[i] = cText;

    const circle = new Wrapper().set({
      background: active ? bColor : "#1a1a2e",
      radius: "50%",
      width: sel ? "64px" : "42px",
      height: sel ? "64px" : "42px",
      borderObj: { width: "2px", color: active ? bColor : "#444" },
      mar: [{ t: sel ? -2 : 6 }],
      mboth: true,
    }).add([cText]);
    circles[i] = circle;

    const nm = new Text(l.name).set({
      font: FONT, exact: "13px", weight: "600",
      color: sel ? bColor : past ? "#aaa" : "#666",
      align: "center", pad: [{ t: 8 }],
    });
    pNames[i] = nm;

    const hr = new Text(l.hours + " týdně").set({
      font: FONT, exact: "12px",
      color: sel ? bColor : "#666",
      align: "center", pad: [{ t: 2 }],
    });
    pHours[i] = hr;

    const dia = new Wrapper().set({
      width: "8px", height: "8px",
      background: sel ? bColor : "transparent",
      mar: [{ t: 6 }], mboth: true,
    }).add(invis());
    if (sel) dia.set(ks2("transform", "rotate(45deg)"));
    diamonds[i] = dia;

    const item = new Wrapper().set({ cursor: "pointer" }).add([circle, nm, hr, dia]);
    item.set(ks2("WebkitTapHighlightColor", "transparent")).set(ks2("minWidth", "72px")).set(ks2("flexShrink", "0")).set(ks2("flex", "1 0 0")).set(ks2("textAlign", "center")).set(ks2("minHeight", "130px"));
    item.res.addEventListener("click", () => { selected = i; update(); });
    return item;
  }

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
        background: active ? bc : "#1a1a2e",
        width: sel ? "64px" : "42px",
        height: sel ? "64px" : "42px",
        borderObj: { width: "2px", color: active ? bc : "#444" },
        mar: [{ t: sel ? -2 : 6 }],
      });

      circleTexts[i].set({
        color: active ? btc : "#9CA3AF",
        exact: sel ? "22px" : "16px",
        pad: [{ t: sel ? 18 : 10 }],
      });

      pNames[i].set({ color: sel ? bc : past ? "#aaa" : "#666" });
      pHours[i].set({ color: sel ? bc : "#666" });

      diamonds[i].set({ background: sel ? bc : "transparent" });
      diamonds[i].set(ks2("transform", sel ? "rotate(45deg)" : "none"));
    });

    const l = pickerLevels[selected];
    detailBadge.res.textContent = l.display;
    badgeCircle.set({ background: selColor });
    detailBadge.set({ color: beltTextColors[selected] });
    detailName.res.textContent = l.name;
    detailWeekly.res.textContent = l.hours + " týdně";
    detailDaily.res.textContent = l.daily;
    detailDesc.res.textContent = l.desc;
    watermark.res.textContent = l.display;
    watermark.set({ color: selColor + "0D" });
    detailCard.set({ background: beltBgDark[selected] });
    extendedWrapper.set({ background: beltBgDark[selected], radius: "1rem" });
    if (typeof renderExtended === "function") renderExtended();
  }

  // ── Timeline row ──
  const items = pickerLevels.map((l, i) => buildItem(l, i));
  const row = new FlexRow().set({ justify: "space-between", align: "flex-start", gap: "0.5rem" }).items(items);
  row.set(ks2("position", "relative")).set(ks2("zIndex", "2"))
    .set(ks2("overflowX", "auto")).set(ks2("flexWrap", "nowrap"))
    .set(ks2("WebkitOverflowScrolling", "touch")).set(ks2("paddingBottom", "4px"))
    .set(ks2("paddingTop", "8px"));

  const bgLine = new Wrapper().set({ background: "#333", height: "2px" }).add(invis());
  bgLine.set(ks2("position", "absolute")).set(ks2("top", "35px")).set(ks2("left", "8px")).set(ks2("right", "8px"));

  filledLine = new Wrapper().set({
    background: beltColors[selected], height: "2px",
    width: `${(selected / (TOTAL - 1)) * 100}%`,
    transition: "width 0.3s ease",
  }).add(invis());
  filledLine.set(ks2("position", "absolute")).set(ks2("top", "35px")).set(ks2("left", "8px")).set(ks2("zIndex", "1"));

  const timeline = new Wrapper().set({ maxWidth: "800px", mboth: true, pad: [{ l: 8 }, { r: 8 }] }).add([bgLine, filledLine, row]);
  timeline.set(ks2("position", "relative"));

  // ── Detail card ──
  const l0 = pickerLevels[selected];

  detailBadge = new Text(l0.display).set({
    font: FONT, exact: "14px", color: beltTextColors[selected], weight: "700", align: "center", pad: [{ t: 10 }],
  });

  detailName = new Text(l0.name).set({
    font: FONT, exact: "1.5rem", color: "#fff", weight: "800",
  });

  detailWeekly = new Text(l0.hours + " týdně").set({
    font: FONT, exact: "1.05rem", color: "#fff", weight: "700",
  });

  detailDaily = new Text(l0.daily).set({
    font: FONT, exact: "1.05rem", color: "#fff", weight: "700",
  });

  detailDesc = new Text(l0.desc).set({
    font: FONT, exact: "0.95rem", color: "#9CA3AF", pad: [{ t: 16 }],
    maxWidth: "65%",
  });

  const badgeCircle = new Wrapper().set({
    background: beltColors[selected], radius: "50%", width: "42px", height: "42px",
  }).add([detailBadge]);

  const leftSide = flex(new FlexRow().set({ gap: "1.25rem", align: "center" }).items([badgeCircle, detailName]));

  const weeklyLabel = new Text("TÝDNĚ").set({ font: FONT, exact: "10px", color: "#666", weight: "600" });
  const weeklyIcon = new Text("\u{1F551}").set({ exact: "1.1rem" });
  const weeklyGroup = new Wrapper().set({}).add([detailWeekly, weeklyLabel]);
  const weeklyStat = flex(new FlexRow().set({ gap: "0.5rem", align: "center" }).items([weeklyIcon, weeklyGroup]));

  const dailyLabel = new Text("DENNĚ").set({ font: FONT, exact: "10px", color: "#666", weight: "600" });
  const dailyIcon = new Text("\u{1F4C8}").set({ exact: "1.1rem" });
  const dailyGroup = new Wrapper().set({}).add([detailDaily, dailyLabel]);
  const dailyStat = flex(new FlexRow().set({ gap: "0.5rem", align: "center" }).items([dailyIcon, dailyGroup]));

  const rightSide = flex(new FlexRow().set({ gap: "2rem", align: "center" }).items([weeklyStat, dailyStat]));
  rightSide.set(ks2("flexShrink", "0"));
  const topRow = flex(new FlexRow().set({ justify: "space-between", align: "center", gap: "1.5rem" }).items([leftSide, rightSide]));
  topRow.set(ks2("flexWrap", "wrap"));

  watermark = new Text(l0.display).set({
    font: FONT, exact: "10rem", color: `${beltColors[selected]}0D`, weight: "900",
  });
  watermark.set(ks2("position", "absolute")).set(ks2("right", "20px")).set(ks2("bottom", "-10px"))
    .set(ks2("lineHeight", "1")).set(ks2("pointerEvents", "none")).set(ks2("userSelect", "none"));

  const detailCard = new Wrapper().set({
    background: beltBgDark[selected], radius: "1rem",
    pad: [{ a: 32 }], maxWidth: "800px", mboth: true, mar: [{ t: 32 }],
    borderObj: { width: "1px", color: "#2a2a3e" },
  }).add([topRow, detailDesc, watermark]);
  detailCard.set(ks2("position", "relative")).set(ks2("overflow", "hidden"));

  // ── Extended content per level (imported from level-content.js) ──

  const extendedWrapper = new Wrapper().set({
    maxWidth: "800px", mboth: true, mar: [{ t: 24 }],
    background: beltBgDark[selected], radius: "1rem",
  }).add(invis());

  function renderExtended() {
    extendedWrapper.res.innerHTML = "";
    const content = levelExtended[selected];
    if (!content) {
      extendedWrapper.res.style.padding = "0";
      return;
    }
    extendedWrapper.res.style.padding = "24px 32px 32px";
    const headingColor = beltColors[selected];

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
          font: FONT, exact: "0.95rem", color: "#bbb",
          pad: [{ b: 12 }],
          keySet: { key: "lineHeight", value: "1.7" },
        });
        extendedWrapper.res.appendChild(p.res);
      }
    });
  }

  // ── Render ──
  new Wrapper().set({
    background: DARK_BG,
    pad: [{ t: 80 }, { b: 80 }, { l: 24 }, { r: 24 }],
  }).add([
    new Text("Úrovně pohybu").set({
      font: FONT, size: "S4", color: "#fff", weight: "800", align: "center",
    }),
    new Text("Vyberte si úroveň a zjistěte, co obnáší.").set({
      font: FONT, exact: "1.05rem", color: "#9CA3AF", align: "center",
      maxWidth: "700px", center: true, pad: [{ t: 12 }, { b: 40 }],
    }),
    timeline,
    detailCard,
    extendedWrapper,
  ]).render("#mount");

  // Initial extended render
  renderExtended();
})();

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
