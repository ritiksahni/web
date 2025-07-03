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
    subtitle: 'Software Development, Cyber Security, Writing, Boxing.',
    description:
        'Ritik Sahni is a JavaScript Developer, Cyber Security Enthusiast, Writer, and Boxer. He writes about JavaScript, Cyber Security, and other topics.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Thinking',
            href: '/thinking'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
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
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ritik-sahni/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/ritiksahni22'
        },
        {
            text: 'X (Twitter)',
            href: 'https://x.com/ritiksahni'
        }
    ],
    hero: {
        title: 'Hey, I\'m Ritik Sahni',
        text: 'JavaScript Developer, Cyber Security Enthusiast, Writer, and Boxer.<br/><br/>I build things with code, explore security vulnerabilities, and think out loud about tech and life.',
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            },
            {
                text: 'View My Work',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my newsletter.',
        text: 'Occasional updates, no spam. Unsubscribe at any time.',
        formUrl: '#' // I am using Netlify Forms so no need for a form action.
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
