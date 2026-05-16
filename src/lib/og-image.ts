import { Resvg } from '@resvg/resvg-js';

const WIDTH = 1200;
const HEIGHT = 630;

/** Match `public/og-ritik.png` and site tokens (ideas.md). */
const BG = '#2C1AEC';
const FG = '#FDF9F3';

const SITE_NAME = 'Ritik Sahni';
const DEFAULT_TAGLINE = 'Backend systems, tech & culture.';

let instrumentSerifWoff2Base64: string | null = null;

function arrayBufferToBase64(buf: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buf);
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    try {
        return btoa(binary);
    } catch {
        return Buffer.from(bytes).toString('base64');
    }
}

async function fetchFontBase64(
    googleCssUrl: string,
    opts: { weight: number; style: 'normal' | 'italic' }
): Promise<string | null> {
    const cssRes = await fetch(googleCssUrl);
    const css = await cssRes.text();
    const blockRegex = new RegExp(
        `@font-face[^}]*font-style: ${opts.style}[^}]*font-weight: ${opts.weight}[^}]*src: [^;]*url\\(([^)]+)\\)[^}]*}`,
        'm'
    );
    const match = css.match(blockRegex);
    const url = match?.[1];
    if (!url) return null;
    const fontRes = await fetch(url);
    const buf = await fontRes.arrayBuffer();
    return arrayBufferToBase64(buf);
}

async function ensureFonts(): Promise<void> {
    if (!instrumentSerifWoff2Base64) {
        instrumentSerifWoff2Base64 = await fetchFontBase64(
            'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
            { weight: 400, style: 'normal' }
        );
    }
}

export function wrapTitleToLines(title: string, maxLenPerLine: number): string[] {
    const words = title.split(/\s+/);
    const lines: string[] = [];
    let current = '';
    for (const w of words) {
        const next = current ? `${current} ${w}` : w;
        if (next.length > maxLenPerLine && current) {
            lines.push(current);
            current = w;
        } else {
            current = next;
        }
    }
    if (current) lines.push(current);
    return lines.slice(0, 3);
}

function escapeXml(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/** Reflow until at most three lines for the title block. */
function wrapHeadlineForCanvas(title: string): string[] {
    for (const maxLen of [28, 24, 20, 18, 16]) {
        const lines = wrapTitleToLines(title, maxLen);
        if (lines.length <= 3) return lines;
    }
    return wrapTitleToLines(title, 16).slice(0, 3);
}

function headlineFontSize(lines: string[]): number {
    const n = lines.length;
    const longest = Math.max(...lines.map((l) => l.length), 1);
    if (n >= 3) return longest <= 20 ? 54 : 48;
    if (n === 2) return longest > 42 ? 58 : longest > 32 ? 64 : 72;
    if (longest > 38) return 72;
    if (longest > 30) return 80;
    return 88;
}

/**
 * Same typography as `/og/default.png` / `og-ritik.png`: Instrument Serif only,
 * two-line centered lockup. Default = name + tagline; with `headline` = title + site name.
 */
export async function buildOgSvg(headline: string | undefined): Promise<string> {
    await ensureFonts();

    const raw = (headline ?? '').trim();
    const normalized = raw.toLowerCase();
    const safeTitle =
        normalized === 'undefined' || normalized === 'null' || normalized === 'false' ? '' : raw.slice(0, 120);

    const hasHeadline = safeTitle.length > 0;
    const isDefaultLayout = !hasHeadline;

    const secondaryText = isDefaultLayout ? DEFAULT_TAGLINE : SITE_NAME;

    const primaryLines = isDefaultLayout ? [SITE_NAME] : wrapHeadlineForCanvas(safeTitle);
    const primaryFs = isDefaultLayout ? 96 : headlineFontSize(primaryLines);

    const secondaryFs = 40;
    const lineGap = primaryFs * 0.14;
    const blockGap = isDefaultLayout ? 72 : Math.max(48, 56 - (primaryLines.length - 1) * 8);

    const primaryBlockHeight = primaryLines.length * primaryFs + (primaryLines.length - 1) * lineGap;
    const totalBlock = primaryBlockHeight + blockGap + secondaryFs;
    const startY = (HEIGHT - totalBlock) / 2 + primaryFs * 0.78;

    const primaryTextEls = primaryLines
        .map((ln, idx) => {
            const y = startY + idx * (primaryFs + lineGap);
            return `<text x="50%" y="${y}" font-family="'Instrument Serif'" font-size="${primaryFs}" font-weight="400" fill="${FG}" text-anchor="middle">${escapeXml(ln)}</text>`;
        })
        .join('');

    const secondaryY = startY + primaryBlockHeight + blockGap + secondaryFs * 0.75;
    const secondaryEl = `<text x="50%" y="${secondaryY}" font-family="'Instrument Serif'" font-size="${secondaryFs}" font-weight="400" fill="${FG}" text-anchor="middle" opacity="0.95">${escapeXml(secondaryText)}</text>`;

    const aria = escapeXml(isDefaultLayout ? `${SITE_NAME} — ${DEFAULT_TAGLINE}` : `${safeTitle} — ${SITE_NAME}`);

    const styles = `
    <style>
      @font-face {
        font-family: 'Instrument Serif';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff2;base64,${instrumentSerifWoff2Base64 || ''}) format('woff2');
      }
    </style>
  `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">
  ${styles}
  <rect width="100%" height="100%" fill="${BG}"/>
  <g>
    ${primaryTextEls}
    ${secondaryEl}
  </g>
</svg>`;
}

export function renderOgPng(svg: string): Uint8Array {
    const resvg = new Resvg(svg, {
        fitTo: {
            mode: 'width',
            value: WIDTH
        }
    });
    return new Uint8Array(resvg.render().asPng());
}
