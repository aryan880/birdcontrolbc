import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputRoot = join(process.cwd(), "public", "brand", "refinements");

const palette = {
  forest: "#10352D",
  ivory: "#F7F2E8",
  olive: "#899A5B",
  oliveLight: "#AEBB82",
  charcoal: "#202622",
  secondary: "#647067",
};

const directions = {
  a1: {
    label: "A1",
    name: "Premium Coastal",
    rationale: "A flowing coastline-inspired wing, confident serif wordmark, and one quiet ledge line.",
    bird: "M12 50C29 29 50 20 73 27c11 3 21-2 34-13-3 13-10 23-21 29l22 8-24 6C68 72 46 77 23 68c12-8 20-18 26-31-14 3-26 7-37 13Z",
    wing: "M29 55c14-14 31-22 50-24-14 10-24 21-31 34-7-3-13-6-19-10Z",
    eye: [83, 31],
    ledge: "M19 81h82",
    ledgeWidth: 4,
    wordmarkTracking: -2.1,
  },
  a2: {
    label: "A2",
    name: "Premium Architectural",
    rationale: "A more controlled wing profile paired with a single protected-ledge corner.",
    bird: "M13 51 42 29c12-9 28-11 43-5 7 3 14 0 23-8-2 11-8 20-18 26l19 8-22 6C71 68 52 74 31 68c10-8 18-18 23-30-15 3-28 8-41 13Z",
    wing: "M31 55c13-13 29-20 47-22-12 9-22 20-29 32-6-3-12-6-18-10Z",
    eye: [85, 30],
    ledge: "M19 81h82V69",
    ledgeWidth: 4,
    wordmarkTracking: -1.8,
  },
  a3: {
    label: "A3",
    name: "Bold Social-First",
    rationale: "A compact, heavier Coastline Wing designed to remain unmistakable in circular and 32px crops.",
    bird: "M14 52c18-21 39-29 61-22 10 3 19-2 30-12-3 12-9 21-19 27l20 8-22 6C70 72 50 77 28 69c11-8 19-18 25-31-14 3-27 8-39 14Z",
    wing: "M31 56c14-14 30-21 48-23-12 9-22 20-29 33-7-3-13-6-19-10Z",
    eye: [83, 33],
    ledge: "M22 81h76",
    ledgeWidth: 5,
    wordmarkTracking: -1.4,
  },
};

function document({ width, height, title, description, body, background }) {
  const backgroundLayer = background ? `  ${background}\n` : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
${backgroundLayer}  ${body}
</svg>
`;
}

function mark(direction, { foreground = palette.forest, accent = palette.olive, eye = palette.ivory, mono = false, simplified = false } = {}) {
  const wing = mono ? eye : accent;
  const ledge = simplified ? direction.ledge.replace(/V69$/, "") : direction.ledge;
  return `<path d="${direction.bird}" fill="${foreground}"/>
    <path d="${direction.wing}" fill="${wing}"/>
    <circle cx="${direction.eye[0]}" cy="${direction.eye[1]}" r="${simplified ? 2.6 : 2.1}" fill="${eye}"/>
    <path d="${ledge}" fill="none" stroke="${foreground}" stroke-width="${simplified ? Math.max(direction.ledgeWidth, 5) : direction.ledgeWidth}" stroke-linecap="square"/>`;
}

function wordmark(direction, { foreground = palette.forest, secondary = palette.secondary, accent = palette.olive, dark = false } = {}) {
  return `<text x="0" y="64" fill="${foreground}" font-family="Georgia, 'Times New Roman', serif" font-size="65" font-weight="700" letter-spacing="${direction.wordmarkTracking}">Bird Control BC</text>
    <path d="M2 88h582" stroke="${accent}" stroke-width="3"/>
    <text x="2" y="121" fill="${secondary}" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="4.6">VANCOUVER · LOWER MAINLAND</text>`;
}

function writeAssets(key, direction) {
  const directory = join(outputRoot, key);
  mkdirSync(directory, { recursive: true });

  const primary = document({
    width: 960,
    height: 220,
    title: `${direction.label} ${direction.name} horizontal logo`,
    description: `Bird Control BC ${direction.name} primary horizontal identity.`,
    body: `<g transform="translate(28 27) scale(1.68)">${mark(direction)}</g>
  <g transform="translate(238 51)">${wordmark(direction)}</g>`,
  });

  const stacked = document({
    width: 640,
    height: 620,
    title: `${direction.label} ${direction.name} stacked logo`,
    description: `Stacked Bird Control BC ${direction.name} identity.`,
    body: `<g transform="translate(208 62) scale(2.08)">${mark(direction)}</g>
  <text x="320" y="360" text-anchor="middle" fill="${palette.forest}" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="700" letter-spacing="${direction.wordmarkTracking}">Bird Control BC</text>
  <path d="M112 394h416" stroke="${palette.olive}" stroke-width="3"/>
  <text x="320" y="437" text-anchor="middle" fill="${palette.secondary}" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="4.6">VANCOUVER · LOWER MAINLAND</text>`,
  });

  const social = document({
    width: 512,
    height: 512,
    title: `${direction.label} ${direction.name} social avatar`,
    description: `Bold Bird Control BC social media avatar designed for square and circular crops.`,
    background: `<rect width="512" height="512" rx="116" fill="${palette.forest}"/>`,
    body: `<circle cx="256" cy="256" r="204" fill="none" stroke="${palette.ivory}" stroke-width="6" opacity=".2"/>
  <g transform="translate(56 76) scale(4.05)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest, simplified: true })}</g>`,
  });

  const favicon = document({
    width: 512,
    height: 512,
    title: `${direction.label} ${direction.name} favicon`,
    description: `Simplified Bird Control BC favicon optimized for 32 pixel recognition.`,
    background: `<rect width="512" height="512" rx="104" fill="${palette.forest}"/>`,
    body: `<g transform="translate(54 77) scale(4.1)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest, simplified: true })}</g>`,
  });

  const monochrome = document({
    width: 960,
    height: 220,
    title: `${direction.label} ${direction.name} monochrome logo`,
    description: `One-color Bird Control BC logo for embroidery, stamps, and print production.`,
    body: `<g transform="translate(28 27) scale(1.68)">${mark(direction, { foreground: palette.charcoal, accent: palette.charcoal, eye: palette.ivory, mono: true })}</g>
  <g transform="translate(238 51)">${wordmark(direction, { foreground: palette.charcoal, secondary: palette.charcoal, accent: palette.charcoal })}</g>`,
  });

  const dark = document({
    width: 960,
    height: 220,
    title: `${direction.label} ${direction.name} dark background logo`,
    description: `High-contrast Bird Control BC identity on deep forest green.`,
    background: `<rect width="960" height="220" rx="18" fill="${palette.forest}"/>`,
    body: `<g transform="translate(28 27) scale(1.68)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest })}</g>
  <g transform="translate(238 51)">${wordmark(direction, { foreground: palette.ivory, secondary: "#D8DECD", accent: palette.oliveLight })}</g>`,
  });

  const vehicle = document({
    width: 1280,
    height: 340,
    title: `${direction.label} ${direction.name} vehicle and uniform lockup`,
    description: `Contractor-grade Bird Control BC vehicle and uniform lockup.`,
    background: `<rect width="1280" height="340" rx="22" fill="${palette.forest}"/>`,
    body: `<g transform="translate(48 49) scale(2.32)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest })}</g>
  <text x="310" y="145" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="74" font-weight="700" letter-spacing="${direction.wordmarkTracking}">Bird Control BC</text>
  <text x="315" y="196" fill="#C9D4AD" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="4">BIRD CONTROL · CLEANUP · EXCLUSION</text>
  <text x="315" y="250" fill="#E1E5DC" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="3">VANCOUVER · LOWER MAINLAND</text>
  <rect x="982" y="118" width="245" height="70" rx="8" fill="${palette.olive}"/>
  <text x="1104" y="162" text-anchor="middle" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="22" font-weight="700">672 699 4826</text>`,
  });

  const board = document({
    width: 1600,
    height: 1200,
    title: `${direction.label} ${direction.name} brand system`,
    description: `${direction.rationale} Includes web, social, favicon, monochrome, dark and contractor applications.`,
    background: `<rect width="1600" height="1200" fill="${palette.ivory}"/>`,
    body: `<text x="72" y="76" fill="${palette.forest}" font-family="Georgia, serif" font-size="44" font-weight="700">${direction.label} · ${direction.name}</text>
  <text x="72" y="116" fill="${palette.secondary}" font-family="Arial, sans-serif" font-size="16">${direction.rationale}</text>
  <line x1="72" y1="148" x2="1528" y2="148" stroke="#CDD1C8"/>

  <g transform="translate(72 184)"><rect width="940" height="272" rx="18" fill="#FFFEFA"/><text x="28" y="38" fill="${palette.secondary}" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">PRIMARY HORIZONTAL</text><g transform="translate(34 67) scale(1.45)">${mark(direction)}</g><g transform="translate(225 88)">${wordmark(direction)}</g></g>
  <g transform="translate(1048 184)"><rect width="480" height="500" rx="18" fill="#FFFEFA"/><text x="26" y="38" fill="${palette.secondary}" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">STACKED</text><g transform="translate(145 66) scale(1.85)">${mark(direction)}</g><text x="240" y="330" text-anchor="middle" fill="${palette.forest}" font-family="Georgia" font-size="48" font-weight="700">Bird Control BC</text><text x="240" y="370" text-anchor="middle" fill="${palette.secondary}" font-family="Arial" font-size="11" font-weight="700" letter-spacing="3">VANCOUVER · LOWER MAINLAND</text></g>

  <g transform="translate(72 492)"><rect width="286" height="286" rx="18" fill="#FFFEFA"/><text x="24" y="36" fill="${palette.secondary}" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">SOCIAL AVATAR</text><circle cx="143" cy="164" r="91" fill="${palette.forest}"/><g transform="translate(79 104) scale(1.3)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest, simplified: true })}</g></g>
  <g transform="translate(390 492)"><rect width="286" height="286" rx="18" fill="#FFFEFA"/><text x="24" y="36" fill="${palette.secondary}" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">FAVICON / 32PX</text><rect x="84" y="102" width="118" height="118" rx="26" fill="${palette.forest}"/><g transform="translate(101 118) scale(.85)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest, simplified: true })}</g></g>
  <g transform="translate(708 492)"><rect width="304" height="286" rx="18" fill="#FFFEFA"/><text x="24" y="36" fill="${palette.secondary}" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">MONOCHROME</text><g transform="translate(32 83) scale(1.25)">${mark(direction, { foreground: palette.charcoal, accent: palette.charcoal, eye: palette.ivory, mono: true })}</g><text x="165" y="151" fill="${palette.charcoal}" font-family="Georgia" font-size="26" font-weight="700">Bird Control BC</text></g>

  <g transform="translate(72 816)"><rect width="940" height="272" rx="18" fill="${palette.forest}"/><text x="26" y="38" fill="#D8DECD" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">VEHICLE / UNIFORM</text><g transform="translate(42 66) scale(1.45)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest })}</g><text x="226" y="144" fill="${palette.ivory}" font-family="Georgia" font-size="48" font-weight="700">Bird Control BC</text><text x="230" y="184" fill="#C9D4AD" font-family="Arial" font-size="12" font-weight="700" letter-spacing="3">BIRD CONTROL · CLEANUP · EXCLUSION</text><rect x="718" y="106" width="178" height="54" rx="6" fill="${palette.olive}"/><text x="807" y="139" text-anchor="middle" fill="${palette.forest}" font-family="Arial" font-size="16" font-weight="700">672 699 4826</text></g>
  <g transform="translate(1048 722)"><rect width="480" height="366" rx="18" fill="${palette.forest}"/><text x="26" y="38" fill="#D8DECD" font-family="Arial" font-size="12" font-weight="700" letter-spacing="2">DARK BACKGROUND</text><g transform="translate(36 80) scale(1.25)">${mark(direction, { foreground: palette.ivory, accent: palette.oliveLight, eye: palette.forest })}</g><text x="190" y="149" fill="${palette.ivory}" font-family="Georgia" font-size="31" font-weight="700">Bird Control BC</text><text x="193" y="182" fill="#D8DECD" font-family="Arial" font-size="9" font-weight="700" letter-spacing="2.4">VANCOUVER · LOWER MAINLAND</text><line x1="26" y1="230" x2="454" y2="230" stroke="#FFFFFF" opacity=".16"/><text x="26" y="275" fill="${palette.ivory}" font-family="Georgia" font-size="24" font-weight="700">Small-format strategy</text><text x="26" y="310" fill="#D8DECD" font-family="Arial" font-size="13">The social and favicon marks use heavier details</text><text x="26" y="334" fill="#D8DECD" font-family="Arial" font-size="13">without changing the primary identity.</text></g>`,
  });

  const files = {
    "primary-horizontal.svg": primary,
    "stacked.svg": stacked,
    "social-avatar.svg": social,
    "favicon.svg": favicon,
    "monochrome.svg": monochrome,
    "dark-background.svg": dark,
    "vehicle-uniform.svg": vehicle,
    "comparison-board.svg": board,
  };

  for (const [filename, contents] of Object.entries(files)) {
    writeFileSync(join(directory, filename), contents);
  }
}

mkdirSync(outputRoot, { recursive: true });
for (const [key, direction] of Object.entries(directions)) {
  writeAssets(key, direction);
}
