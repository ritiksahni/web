import type { APIRoute } from 'astro';
import { buildOgSvg, renderOgPng } from '../../lib/og-image';

export const GET: APIRoute = async () => {
    const svg = await buildOgSvg(undefined);
    const png = renderOgPng(svg);
    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
};
