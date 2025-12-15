import { defineConfig } from "vitepress";
import { markdownIconPlugin } from "./plugins/markdown-icon";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "",

  base: "/digital-handbook/",

  title: "Victory Digital Handbook",
  head: [
    [
      "meta",
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/digital-handbook/logo.svg",
      },
    ],
  ],

  description:
    "A collection of guides, tutorials, and knowledge about Victory Lutheran Church.",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/logo.svg",

    footer: {
      message:
        'Made with <svg xmlns="http://www.w3.org/2000/svg" style="display: inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg> by Jarrett Mielke',
      copyright: "Copyright © 2025–present Victory Lutheran Church",
    },

    nav: [{ text: "Home", link: "/" }],

    search: {
      provider: "local",
    },

    sidebar: {
      "/google/": [
        {
          text: "Google",
          items: [
            {
              text: "Logging In",
              link: "/google/logging-in",
            },
            {
              text: "Accessing the Shared Drive",
              link: "/google/accessing-the-shared-drive",
            },
            {
              text: "Victory Shared Drive Organizational Philosophy",
              link: "/google/victory-shared-drive-organizational-philosophy",
            },
          ],
        },
      ],
      "/sermon-videos/": [
        {
          text: "Sermon Videos",
          items: [
            {
              text: "Getting the Worship Video",
              link: "/sermon-videos/getting-the-worship-video",
            },
            {
              text: "Setting Up the Project",
              link: "/sermon-videos/setting-up-the-project",
            },
          ],
        },
      ],
      "/website/": [
        {
          text: "Website",
          items: [
            { text: "Website Access", link: "/website/website-access" },
            { text: "Editing Links", link: "/website/editing-links" },
          ],
        },
      ],
      "/worship/": [
        {
          text: "Worship",
          items: [
            { text: "Worship Folders", link: "/worship/worship-folders" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/victorylutheranjax/digital-handbook",
      },
    ],
  },

  lastUpdated: false,
  ignoreDeadLinks: true,

  markdown: {
    config: (md) => {
      md.use(markdownIconPlugin);
    },
  },
});
