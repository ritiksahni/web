import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildOgSvg, renderOgPng } from '../../../lib/og-image';

export async function getStaticPaths() {
    const posts = await getCollection('blog');
    return posts.map((post) => ({ params: { slug: post.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;
    if (!slug) return new Response('Not found', { status: 404 });

    const posts = await getCollection('blog');
    const post = posts.find((p) => p.slug === slug);
    if (!post) return new Response('Not found', { status: 404 });

    const title = post.data.seo?.title ?? post.data.title;
    const svg = await buildOgSvg(title);
    const png = renderOgPng(svg);
    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
};
