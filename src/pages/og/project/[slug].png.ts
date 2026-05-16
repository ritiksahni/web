import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildOgSvg, renderOgPng } from '../../../lib/og-image';

export async function getStaticPaths() {
    const projects = await getCollection('projects');
    return projects.map((project) => ({ params: { slug: project.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;
    if (!slug) return new Response('Not found', { status: 404 });

    const projects = await getCollection('projects');
    const project = projects.find((p) => p.slug === slug);
    if (!project) return new Response('Not found', { status: 404 });

    const title = project.data.seo?.title ?? project.data.title;
    const svg = await buildOgSvg(title);
    const png = renderOgPng(svg);
    return new Response(png, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable'
        }
    });
};
