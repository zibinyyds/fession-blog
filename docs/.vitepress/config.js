export default {
  title: "VitePress",
  description: "Just playing around.",
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "Guide",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/index" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
