export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Ritik Sahni',
    subtitle: 'Software Engineer. Building tools, writing essays.',
    description:
        'Ritik Sahni is a software engineer and writer. He builds developer tools and writes about engineering, technology, and culture.',
    image: {
        src: '/og-ritik.png',
        alt: 'Ritik Sahni'
    },
    headerNavLinks: [
        { text: 'Writings', href: '/blog' },
        { text: 'Projects', href: '/projects' },
        { text: 'Bookshelf', href: '/bookshelf' },
        { text: 'Uses', href: '/uses' },
        { text: 'About', href: '/about' },
        { text: 'Now', href: '/now' }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        { text: 'X', href: 'https://x.com/ritiksahni22' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/ritik-sahni/' },
        { text: 'Instagram', href: 'https://www.instagram.com/ritiksahni22' },
        { text: 'GitHub', href: 'https://github.com/ritiksahni' },
        { text: 'Email', href: 'mailto:ritik@ritiksahni.com' }
    ],
    hero: {
        title: 'Ritik Sahni', // Title is not needed.
        text: 'I build things and write about them.<br/>Systems, tools, and the occasional essay on what it means to make stuff.',
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my newsletter.',
        text: 'Occasional updates, no spam. Unsubscribe at any time.',
        formUrl: '#' // I am using Netlify Forms so no need for a form action.
    },
    postsPerPage: 8,
    projectsPerPage: 12
};

export default siteConfig;
