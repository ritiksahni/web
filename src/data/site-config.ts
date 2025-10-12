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
    subtitle: 'Software Engineering, Cyber Security, Writing, Boxing.',
    description:
        'Ritik Sahni is a JavaScript Developer, Cyber Security Enthusiast, Writer. He writes about software engineering, technology, and culture.',
    image: {
        src: '/og-ritik.png',
        alt: 'Ritik Sahni'
    },
    headerNavLinks: [
        { text: 'Writings', href: '/blog' },
        { text: 'Notes', href: '/notes' },
        { text: 'Projects', href: '/projects' },
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
        text: 'This website is my digital space.<br/> I think out loud about tech, life, and everything in between.',
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
    projectsPerPage: 8
};

export default siteConfig;
