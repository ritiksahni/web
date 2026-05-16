import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://ritiksahni.com',
    vite: {
        // @resvg/resvg-js ships native .node binaries; do not pre-bundle or SSR-bundle them
        optimizeDeps: {
            exclude: ['@resvg/resvg-js']
        },
        ssr: {
            external: ['@resvg/resvg-js']
        }
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
