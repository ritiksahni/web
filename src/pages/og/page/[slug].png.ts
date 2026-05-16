import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildOgSvg, renderOgPng } from '../../../lib/og-image';

export async function getStaticPaths() {
    const pages = await getCollection('pages');
    return pages.map((page) => ({ params: { slug: page.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;
    if (!slug) return new Response('Not found', { status: 404 });

    const pages = await getCollection('pages');
    const page = pages.find((p) => p.slug === slug);
    if (!page) return new Response('Not found', { status: 404 });

    const title = page.data.seo?.title ?? page.data.title;
    const svg = await buildOgSvg(title);
    const png = renderOgPng(svg);
    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
};
