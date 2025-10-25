// @ts-nocheck
const WIDTH = 1200;
const HEIGHT = 630;

let instrumentSerifWoff2Base64: string | null = null;
let interWoff2Base64: string | null = null;

function arrayBufferToBase64(buf: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  // Prefer btoa if present; fallback to Node Buffer if available at runtime
  // Use any-typed global to avoid TS node type requirements
  try { return btoa(binary); } catch (_) {
    const B: any = (globalThis as any).Buffer;
    return B ? B.from(bytes).toString('base64') : '';
  }
}

async function fetchFontBase64(googleCssUrl: string, opts: { weight: number; style: 'normal' | 'italic' }) {
  const cssRes = await fetch(googleCssUrl);
  const css = await cssRes.text();
  // Find the block matching weight/style, then extract the woff2 URL
  const blockRegex = new RegExp(`@font-face[^}]*font-style: ${opts.style}[^}]*font-weight: ${opts.weight}[^}]*src: [^;]*url\\(([^)]+)\\)[^}]*}`, 'm');
  const match = css.match(blockRegex);
  const url = match?.[1];
  if (!url) return null;
  const fontRes = await fetch(url);
  const buf = await fontRes.arrayBuffer();
  const base64 = arrayBufferToBase64(buf);
  return base64;
}

async function ensureFonts() {
  if (!instrumentSerifWoff2Base64) {
    instrumentSerifWoff2Base64 = await fetchFontBase64(
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
      { weight: 400, style: 'normal' }
    );
  }
  if (!interWoff2Base64) {
    interWoff2Base64 = await fetchFontBase64(
      'https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap',
      { weight: 600, style: 'normal' }
    );
  }
}

function wrapTitleToLines(title: string, maxLenPerLine = 28): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const next = current ? current + ' ' + w : w;
    if (next.length > maxLenPerLine && current) {
      lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

export const GET = async (ctx) => {
  const u = new URL((ctx && (ctx.url || (ctx.request && ctx.request.url))) || 'http://localhost');
  const rawTitle =
    (u.searchParams.get('title') ||
      u.searchParams.get('t') ||
      u.searchParams.get('text') ||
      u.searchParams.get('q') ||
      u.searchParams.get('heading') ||
      '')
      .trim();
  const normalized = rawTitle.toLowerCase();
  const safeTitle = normalized === 'undefined' || normalized === 'null' || normalized === 'false' ? '' : rawTitle;
  const blogTitle = safeTitle ? safeTitle.slice(0, 120) : '';
  const hasBlogTitle = blogTitle.length > 0;

  const lineOne = 'Ritik Sahni';
  const tagline = 'Backend systems, tech & culture.';
  const lineTwo = hasBlogTitle ? blogTitle : tagline;
  const titleLines = hasBlogTitle ? wrapTitleToLines(blogTitle, 28) : [];
  const lineTwoFontSize = hasBlogTitle ? (blogTitle.length > 60 ? 54 : 64) : 40;
  const lineTwoFontFamily = hasBlogTitle ? "'Instrument Serif'" : "'Inter'";
  const lineTwoFontWeight = hasBlogTitle ? '500' : '600';

  await ensureFonts();

  const styles = `
    <style>
      @font-face {
        font-family: 'Instrument Serif';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff2;base64,${instrumentSerifWoff2Base64 || ''}) format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(data:font/woff2;base64,${interWoff2Base64 || ''}) format('woff2');
      }
    </style>
  `;

  const titleTexts = hasBlogTitle
    ? titleLines
      .map((ln, idx) => {
        const y = 360 + idx * (lineTwoFontSize + 10);
        return `<text x="50%" y="${y}" font-family=${JSON.stringify(lineTwoFontFamily)} font-size="${lineTwoFontSize}" font-weight="${lineTwoFontWeight}" opacity="0.98" text-anchor="middle">${escapeXml(ln)}</text>`;
      })
      .join('')
    : '';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open Graph image for ${escapeXml(lineTwo)}">
  ${styles}
  <rect width="100%" height="100%" fill="#2C1AEC"/>
  <g fill="#FDF9F3" text-anchor="middle">
    <text x="50%" y="280" font-family="'Instrument Serif'" font-size="96" font-weight="500">${escapeXml(lineOne)}</text>
    ${hasBlogTitle
      ? `${titleTexts}`
      : `<text x="50%" y="390" font-family="${lineTwoFontFamily}" font-size="${lineTwoFontSize}" font-weight="${lineTwoFontWeight}" opacity="0.98">${escapeXml(lineTwo)}</text>`}
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Vary': 'Accept, Accept-Encoding'
    }
  });
};

function escapeXml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


