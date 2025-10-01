import type { APIRoute } from 'astro';

const WIDTH = 1200;
const HEIGHT = 630;

export const GET: APIRoute = async ({ url }) => {
    const title = url.searchParams.get('title')?.slice(0, 120) || 'Ritik Sahni';

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2C1AEC"/>
      <stop offset="100%" stop-color="#2C1AEC" stop-opacity=".9"/>
    </linearGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#FDF9F3"/>
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="url(#g)"/>
  <rect x="40" y="40" width="1120" height="550" rx="24" filter="url(#noise)" opacity=".07"/>
  <g fill="#FDF9F3">
    <text x="80" y="200" font-family="'Instrument Serif', serif" font-size="68" font-weight="500">${escapeXml(title)}</text>
    <text x="80" y="270" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="28" opacity=".92">Ritik Sahni</text>
  </g>
</svg>`;

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=31536000, immutable'
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


