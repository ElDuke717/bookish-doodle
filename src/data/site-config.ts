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
  title: "Nick Huemmer",
  subtitle: "Software Engineer",
  description:
    "Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com",
  image: {
    src: "/dante-preview.jpg",
    alt: "Dante - Astro.js and Tailwind CSS theme",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Software",
      href: "/projects",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Terms",
      href: "/terms",
    },
  ],
  socialLinks: [
    {
      text: "Github",
      href: "https://github.com/ElDuke717?tab=repositories",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/nickjhuemmer/",
    },
    {
      text: "Medium",
      href: "https://medium.com/@njhuemmer",
    },
  ],
  hero: {
    title: "Thanks for stopping by!",
    text: "I'm Nick, a software engineer based in the United States. I'm passionate about building software that makes a difference. I'm currently working on a few projects and writing about my experiences. If you'd like to get in touch, feel free to reach out.",
    image: {
      src: "/hero.jpeg",
      alt: "A person sitting at a desk in front of a computer",
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to Dante Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
