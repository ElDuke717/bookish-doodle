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
    {
      text: "Download theme",
      href: "https://github.com/JustGoodUI/dante-astro-theme",
    },
  ],
  socialLinks: [
    {
      text: "Dribbble",
      href: "https://dribbble.com/",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/",
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/",
    },
  ],
  hero: {
    title: "Thanks for stopping by!",
    text: "Hey there! I'm all about the world of software engineering and full-stack development, with an interest in web and the flow of information. \n\n I enjoy creating immersive, functional, and visually appealing websites and apps that anyone can access easily. I've spent a good chunk of my career getting up close and personal with JavaScript, HTML5, CSS, Node.js, Express.js, and React.   \n\nI'm a big believer in the power of open source and have lent my skills to several projects, including Reactime, which helps keep an eye on React app performance.   When I'm not building or researching something, you can find my thoughts on software engineering and a bunch of other topics over at my blog, nickhuemmer.com. Outside of work, my world revolves around taking long walks, diving into books on philosophy, natural sciences, and tech, scribbling down my thoughts, and hanging out with my family.",
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
