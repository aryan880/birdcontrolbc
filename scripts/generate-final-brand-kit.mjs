import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoDir = path.join(root, "public/brand/final");
const applicationDir = path.join(root, "public/brand/applications");
const projectImagePath = path.join(
  root,
  "public/media/projects/lower-mainland-balcony-netting/completed-netting-wide.webp",
);

const palette = {
  forest: "#0F3B2E",
  forestDark: "#092A22",
  olive: "#7A8F4A",
  ivory: "#EDE8DD",
  warmWhite: "#FBFAF6",
  charcoal: "#222222",
  slate: "#66706B",
};

const approvedBirdPath = "M189.5,118.5 Q190.0,105.0 203.5,119.5 Q217.0,134.0 235.0,147.0 Q253.0,160.0 328.5,202.5 Q404.0,245.0 415.5,253.0 Q427.0,261.0 432.5,267.0 Q438.0,273.0 442.5,282.5 Q447.0,292.0 451.0,316.5 Q455.0,341.0 461.5,359.5 Q468.0,378.0 482.5,395.0 Q497.0,412.0 515.0,420.5 Q533.0,429.0 557.5,432.5 Q582.0,436.0 584.0,433.5 Q586.0,431.0 596.0,427.5 Q606.0,424.0 606.0,421.0 Q606.0,418.0 601.0,415.0 Q596.0,412.0 589.0,409.5 Q582.0,407.0 550.0,409.0 Q518.0,411.0 504.0,405.0 Q490.0,399.0 489.0,396.5 Q488.0,394.0 515.5,385.5 Q543.0,377.0 560.5,377.0 Q578.0,377.0 585.0,379.0 Q592.0,381.0 603.5,389.5 Q615.0,398.0 618.0,405.0 Q621.0,412.0 625.5,412.5 Q630.0,413.0 638.5,418.0 Q647.0,423.0 651.5,431.5 Q656.0,440.0 655.0,449.0 Q654.0,458.0 652.0,458.0 Q650.0,458.0 648.0,454.5 Q646.0,451.0 642.0,449.0 Q638.0,447.0 624.5,445.5 Q611.0,444.0 598.0,446.0 Q585.0,448.0 568.5,454.0 Q552.0,460.0 539.5,468.0 Q527.0,476.0 505.0,501.0 Q483.0,526.0 467.0,540.5 Q451.0,555.0 424.5,571.0 Q398.0,587.0 374.5,595.0 Q351.0,603.0 327.0,605.5 Q303.0,608.0 299.5,608.0 Q296.0,608.0 296.0,606.5 Q296.0,605.0 308.0,596.5 Q320.0,588.0 336.0,572.0 Q352.0,556.0 352.0,553.0 Q352.0,550.0 320.5,556.5 Q289.0,563.0 201.0,576.5 Q113.0,590.0 123.0,583.5 Q133.0,577.0 206.0,546.5 Q279.0,516.0 322.5,494.5 Q366.0,473.0 409.5,458.5 Q453.0,444.0 439.0,423.0 Q425.0,402.0 417.0,381.0 Q409.0,360.0 403.0,337.5 Q397.0,315.0 390.0,302.0 Q383.0,289.0 376.0,282.0 Q369.0,275.0 352.0,263.5 Q335.0,252.0 288.0,227.5 Q241.0,203.0 227.5,193.0 Q214.0,183.0 207.5,175.0 Q201.0,167.0 197.0,158.5 Q193.0,150.0 191.0,141.0 Q189.0,132.0 189.5,118.5Z";
const approvedWingPath = "M313.0,267.5 Q314.0,266.0 332.0,277.5 Q350.0,289.0 360.5,301.5 Q371.0,314.0 377.0,327.0 Q383.0,340.0 391.5,367.5 Q400.0,395.0 413.5,416.5 Q427.0,438.0 403.5,443.5 Q380.0,449.0 346.5,463.5 Q313.0,478.0 299.0,466.5 Q285.0,455.0 288.0,455.0 Q291.0,455.0 291.5,451.0 Q292.0,447.0 298.5,441.5 Q305.0,436.0 298.0,435.5 Q291.0,435.0 287.0,431.5 Q283.0,428.0 280.5,422.5 Q278.0,417.0 280.0,411.0 Q282.0,405.0 278.5,404.5 Q275.0,404.0 292.0,401.0 Q309.0,398.0 310.5,396.0 Q312.0,394.0 292.0,390.5 Q272.0,387.0 283.5,380.0 Q295.0,373.0 308.5,370.5 Q322.0,368.0 320.5,366.0 Q319.0,364.0 313.0,362.5 Q307.0,361.0 314.5,361.0 Q322.0,361.0 320.5,357.0 Q319.0,353.0 296.5,344.5 Q274.0,336.0 276.0,336.0 Q278.0,336.0 280.5,332.0 Q283.0,328.0 288.5,324.5 Q294.0,321.0 302.0,319.0 Q310.0,317.0 309.5,315.0 Q309.0,313.0 306.0,312.0 Q303.0,311.0 322.0,317.0 Q341.0,323.0 338.5,319.0 Q336.0,315.0 327.5,309.5 Q319.0,304.0 307.5,297.5 Q296.0,291.0 286.5,288.0 Q277.0,285.0 279.5,284.5 Q282.0,284.0 286.5,278.5 Q291.0,273.0 297.5,270.5 Q304.0,268.0 308.0,268.5 Q312.0,269.0 313.0,267.5Z";

const xml = (body, width, height, title, description) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  ${body}
</svg>`;

function birdMark({
  foreground = palette.forest,
  accent = palette.olive,
  includeLedge = true,
  transform = "",
} = {}) {
  const ledge = includeLedge
    ? `\n    <path d="M18 120h137" fill="none" stroke="${foreground}" stroke-width="4" stroke-linecap="round"/>`
    : "";

  return `<g transform="${transform}">
    <g transform="translate(-9 -18) scale(.22)">
      <path d="${approvedBirdPath}" fill="${foreground}" fill-rule="evenodd"/>
      <path d="${approvedWingPath}" fill="${accent}" fill-rule="evenodd"/>
    </g>${ledge}
  </g>`;
}

function wordmark({ x, y, color = palette.forest, accent = palette.olive, size = 74, centered = false }) {
  const anchor = centered ? "middle" : "start";
  const lineStart = centered ? x - 320 : x;
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${color}" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" font-weight="700" letter-spacing="-2.2">Bird Control BC</text>
  <path d="M${lineStart} ${y + 24}h640" stroke="${accent}" stroke-width="3"/>
  <text x="${x}" y="${y + 65}" text-anchor="${anchor}" fill="${color}" opacity=".72" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="5.4">VANCOUVER + LOWER MAINLAND</text>`;
}

async function writeAsset(directory, filename, svg) {
  await fs.mkdir(directory, { recursive: true });
  const svgPath = path.join(directory, `${filename}.svg`);
  const pngPath = path.join(directory, `${filename}.png`);
  await fs.writeFile(svgPath, svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(pngPath);
}

async function imageDataUri() {
  const file = await sharp(projectImagePath).jpeg({ quality: 88 }).toBuffer();
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

async function generateLogos() {
  await writeAsset(
    logoDir,
    "logo-horizontal",
    xml(
      `${birdMark({ transform: "translate(30 24) scale(1.9)" })}${wordmark({ x: 355, y: 126, size: 76 })}`,
      1200,
      280,
      "Bird Control BC horizontal logo",
      "Primary Bird Control BC logo with a flying bird, visible wing feathers, and a subtle exclusion ledge.",
    ),
  );

  await writeAsset(
    logoDir,
    "logo-stacked",
    xml(
      `${birdMark({ transform: "translate(160 25) scale(2.65)" })}${wordmark({ x: 400, y: 570, size: 70, centered: true })}`,
      800,
      760,
      "Bird Control BC stacked logo",
      "Stacked Bird Control BC logo for square and vertical placements.",
    ),
  );

  await writeAsset(
    logoDir,
    "social-avatar",
    xml(
      `<rect width="1080" height="1080" rx="540" fill="${palette.forest}"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, includeLedge: false, transform: "translate(95 220) scale(4.95)" })}`,
      1080,
      1080,
      "Bird Control BC social avatar",
      "Bold circular Bird Control BC bird mark optimized for social media crops.",
    ),
  );

  const favicon = xml(
    `<rect width="512" height="512" rx="104" fill="${palette.forest}"/>
     ${birdMark({ foreground: palette.ivory, accent: palette.olive, includeLedge: false, transform: "translate(53 116) scale(2.25)" })}`,
    512,
    512,
    "Bird Control BC favicon",
    "Simplified Bird Control BC bird mark optimized for small browser and profile displays.",
  );
  await writeAsset(logoDir, "icon", favicon);
  await sharp(Buffer.from(favicon)).resize(32, 32).png({ compressionLevel: 9 }).toFile(path.join(logoDir, "favicon-32.png"));
  await sharp(Buffer.from(favicon)).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(logoDir, "apple-touch-icon.png"));
  await sharp(Buffer.from(favicon)).resize(192, 192).png({ compressionLevel: 9 }).toFile(path.join(logoDir, "icon-192.png"));
  await fs.writeFile(path.join(root, "public/brand/bird-control-bc-mark.svg"), favicon);

  await writeAsset(
    logoDir,
    "logo-monochrome",
    xml(
      `${birdMark({ foreground: palette.charcoal, accent: palette.charcoal, cutout: palette.warmWhite, transform: "translate(30 24) scale(1.9)" })}${wordmark({ x: 355, y: 126, color: palette.charcoal, accent: palette.charcoal, size: 76 })}`,
      1200,
      280,
      "Bird Control BC monochrome logo",
      "Single-colour Bird Control BC logo for print and production.",
    ),
  );

  await writeAsset(
    logoDir,
    "logo-dark-background",
    xml(
      `<rect width="1200" height="280" fill="${palette.forest}"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(30 24) scale(1.9)" })}
       ${wordmark({ x: 355, y: 126, color: palette.ivory, accent: "#A9B97C", size: 76 })}`,
      1200,
      280,
      "Bird Control BC dark-background logo",
      "Reversed Bird Control BC logo for dark green backgrounds.",
    ),
  );

  await writeAsset(
    logoDir,
    "logo-vehicle-uniform",
    xml(
      `<rect width="1600" height="500" rx="24" fill="${palette.forest}"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(55 76) scale(2.85)" })}
       <text x="560" y="210" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="700" letter-spacing="-2.5">Bird Control BC</text>
       <text x="565" y="275" fill="#A9B97C" font-family="Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="5.2">BIRD CONTROL  +  CLEANUP  +  EXCLUSION</text>
       <path d="M1230 100v300" stroke="${palette.ivory}" stroke-width="2" opacity=".38"/>
       <text x="1280" y="220" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="38" font-weight="700">672 699 4826</text>
       <text x="1280" y="278" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="24">birdcontrolbc.ca</text>`,
      1600,
      500,
      "Bird Control BC vehicle and uniform lockup",
      "High-contrast Bird Control BC identification lockup for vehicles and uniforms.",
    ),
  );
}

async function generateApplications() {
  const image = await imageDataUri();
  const smallLogo = `${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(75 45) scale(1.15)" })}
    <text x="290" y="120" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="54" font-weight="700">Bird Control BC</text>
    <text x="292" y="158" fill="#A9B97C" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="4">VANCOUVER + LOWER MAINLAND</text>`;

  await writeAsset(
    applicationDir,
    "website-banner",
    xml(
      `<image href="${image}" width="1920" height="640" preserveAspectRatio="xMidYMid slice"/>
       <rect width="1920" height="640" fill="url(#shade)"/>
       <defs><linearGradient id="shade" x1="0" x2="1"><stop stop-color="${palette.forestDark}" stop-opacity=".96"/><stop offset=".58" stop-color="${palette.forestDark}" stop-opacity=".62"/><stop offset="1" stop-color="${palette.forestDark}" stop-opacity=".18"/></linearGradient></defs>
       ${smallLogo}
       <text x="90" y="365" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700">Clean balconies. Thoughtful bird exclusion.</text>
       <text x="94" y="428" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="28">Netting, deterrents, cleanup, and commercial bird control.</text>
       <rect x="90" y="485" width="430" height="88" rx="4" fill="#A9B97C"/>
       <text x="305" y="541" text-anchor="middle" fill="${palette.forestDark}" font-family="Arial, sans-serif" font-size="24" font-weight="700">SEND PHOTOS FOR A FREE QUOTE</text>`,
      1920,
      640,
      "Bird Control BC website banner",
      "Photography-led website banner for Bird Control BC.",
    ),
  );

  await writeAsset(
    applicationDir,
    "social-cover",
    xml(
      `<image href="${image}" width="1640" height="624" preserveAspectRatio="xMidYMid slice"/>
       <rect width="1640" height="624" fill="${palette.forestDark}" opacity=".68"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(95 135) scale(2.75)" })}
       <text x="630" y="272" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700">Bird Control BC</text>
       <text x="635" y="344" fill="#A9B97C" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="6">VANCOUVER + LOWER MAINLAND</text>
       <text x="635" y="420" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="30">Bird control  +  balcony cleanup  +  exclusion</text>
       <text x="635" y="477" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="25">672 699 4826   |   birdcontrolbc.ca</text>`,
      1640,
      624,
      "Bird Control BC social media cover",
      "Social media cover image for Bird Control BC.",
    ),
  );

  await writeAsset(
    applicationDir,
    "service-poster",
    xml(
      `<rect width="1080" height="1350" fill="${palette.warmWhite}"/>
       <rect width="1080" height="210" fill="${palette.forest}"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(58 35) scale(1.25)" })}
       <text x="295" y="105" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700">Bird Control BC</text>
       <text x="299" y="151" fill="#A9B97C" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="4.2">VANCOUVER + LOWER MAINLAND</text>
       <image href="${image}" x="0" y="210" width="1080" height="520" preserveAspectRatio="xMidYMid slice"/>
       <text x="70" y="840" fill="${palette.forest}" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700">Balcony bird control</text>
       <text x="70" y="920" fill="${palette.forest}" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700">and cleanup.</text>
       <text x="74" y="998" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="28">Netting  +  deterrents  +  pigeon-dropping cleanup</text>
       <path d="M74 1045h930" stroke="${palette.olive}" stroke-width="3"/>
       <text x="74" y="1110" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="27" font-weight="700">Free inspections available</text>
       <text x="74" y="1154" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="27" font-weight="700">Photo-based quotes</text>
       <text x="74" y="1210" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="26">Call or text 672 699 4826</text>
       <rect x="650" y="1084" width="355" height="112" rx="5" fill="${palette.forest}"/>
       <text x="827" y="1133" text-anchor="middle" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="22" font-weight="700">SEND PHOTOS FOR</text>
       <text x="827" y="1167" text-anchor="middle" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="22" font-weight="700">A FREE QUOTE</text>
       <text x="74" y="1285" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="25" font-weight="700">birdcontrolbc.ca  |  info@birdcontrolbc.ca</text>`,
      1080,
      1350,
      "Bird Control BC service poster",
      "Print and social service poster featuring real balcony bird-netting photography.",
    ),
  );

  await writeAsset(
    applicationDir,
    "tri-fold-pamphlet",
    xml(
      `<rect width="1800" height="1200" fill="${palette.warmWhite}"/>
       <rect width="600" height="1200" fill="${palette.forest}"/>
       ${birdMark({ foreground: palette.ivory, accent: palette.olive, transform: "translate(80 95) scale(2.45)" })}
       <text x="80" y="510" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700">Bird Control BC</text>
       <text x="84" y="566" fill="#A9B97C" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="4.5">VANCOUVER + LOWER MAINLAND</text>
       <text x="82" y="700" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="48" font-weight="700">Cleaner spaces.</text>
       <text x="82" y="760" fill="${palette.ivory}" font-family="Georgia, 'Times New Roman', serif" font-size="48" font-weight="700">Practical exclusion.</text>
       <text x="82" y="876" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="25">Send photos for a free quote</text>
       <text x="82" y="925" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="25">or request a free inspection.</text>
       <text x="82" y="1052" fill="#A9B97C" font-family="Arial, sans-serif" font-size="26" font-weight="700">672 699 4826</text>
       <text x="82" y="1096" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="22">birdcontrolbc.ca</text>

       <image href="${image}" x="600" y="0" width="600" height="520" preserveAspectRatio="xMidYMid slice"/>
       <text x="660" y="620" fill="${palette.forest}" font-family="Georgia, 'Times New Roman', serif" font-size="53" font-weight="700">What we handle</text>
       <text x="660" y="705" fill="${palette.charcoal}" font-family="Arial, sans-serif" font-size="27">Balcony bird netting</text>
       <text x="660" y="763" fill="${palette.charcoal}" font-family="Arial, sans-serif" font-size="27">Bird spike installation</text>
       <text x="660" y="821" fill="${palette.charcoal}" font-family="Arial, sans-serif" font-size="27">Pigeon-dropping cleanup</text>
       <text x="660" y="879" fill="${palette.charcoal}" font-family="Arial, sans-serif" font-size="27">Commercial and strata bird control</text>
       <path d="M660 938h480" stroke="${palette.olive}" stroke-width="3"/>
       <text x="660" y="1010" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="23">Homes, condos, stratas, storefronts,</text>
       <text x="660" y="1052" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="23">and commercial properties.</text>

       <rect x="1200" y="0" width="600" height="1200" fill="${palette.ivory}"/>
       <text x="1260" y="135" fill="${palette.forest}" font-family="Georgia, 'Times New Roman', serif" font-size="57" font-weight="700">A simple process</text>
       <text x="1260" y="250" fill="${palette.olive}" font-family="Georgia, serif" font-size="48" font-weight="700">01</text>
       <text x="1340" y="248" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="28" font-weight="700">Send photos</text>
       <text x="1340" y="286" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="21">Show the balcony, ledge, or affected area.</text>
       <text x="1260" y="390" fill="${palette.olive}" font-family="Georgia, serif" font-size="48" font-weight="700">02</text>
       <text x="1340" y="388" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="28" font-weight="700">Review the options</text>
       <text x="1340" y="426" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="21">We discuss access, cleanup, and exclusion.</text>
       <text x="1260" y="530" fill="${palette.olive}" font-family="Georgia, serif" font-size="48" font-weight="700">03</text>
       <text x="1340" y="528" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="28" font-weight="700">Schedule the work</text>
       <text x="1340" y="566" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="21">Confirm the practical next step for the site.</text>
       <rect x="1260" y="680" width="470" height="190" fill="${palette.forest}"/>
       <text x="1495" y="750" text-anchor="middle" fill="${palette.ivory}" font-family="Arial, sans-serif" font-size="24" font-weight="700">CALL OR TEXT</text>
       <text x="1495" y="812" text-anchor="middle" fill="#A9B97C" font-family="Arial, sans-serif" font-size="36" font-weight="700">672 699 4826</text>
       <text x="1260" y="965" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="23" font-weight="700">info@birdcontrolbc.ca</text>
       <text x="1260" y="1010" fill="${palette.forest}" font-family="Arial, sans-serif" font-size="23" font-weight="700">birdcontrolbc.ca</text>
       <text x="1260" y="1085" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="20">Vancouver and the Lower Mainland</text>
       <path d="M600 0v1200M1200 0v1200" stroke="${palette.charcoal}" stroke-width="2" stroke-dasharray="12 12" opacity=".18"/>`,
      1800,
      1200,
      "Bird Control BC tri-fold pamphlet",
      "Outside and information panel layout for a Bird Control BC tri-fold pamphlet.",
    ),
  );
}

await generateLogos();
await generateApplications();

console.log("Generated final Bird Control BC logo and application kit.");
