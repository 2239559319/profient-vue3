// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vue3源码解析',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/pv.svg',

  // Set the production url of your site here
  url: 'https://profient-vue3.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        defer: 'true',
        'data-cf-beacon': '{"token": "9b6235ccfde247a49aef83d2be243598"}',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/pv.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'vue3, sourcecode, from scratch, vue3源码, vue3源码解读, 精通vue3源码',
        },
        { name: 'author', content: 'xiaochuan' },
        { name: 'description', content: '从0开始精通vue3源码' },
      ],
      navbar: {
        title: 'profient vue3',
        logo: {
          alt: 'profient vue3',
          src: 'img/pv.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/2239559319/profient-vue3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'doc',
                to: '/docs',
              },
            ],
          },
          {
            title: 'source',
            items: [
              {
                label: 'user',
                href: 'https://github.com/2239559319/',
              },
              {
                label: 'github',
                href: 'https://github.com/2239559319/profient-vue3',
              },
              {
                label: 'docs source',
                href: 'https://github.com/2239559319/profient-vue3/tree/master/docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Examples',
                href: 'https://github.com/2239559319/profient-vue3/tree/master/examples',
              },
            ],
          },
          {
            title: 'Author',
            items: [
              {
                label: 'xiaochuan',
                href: 'https://github.com/2239559319',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} profient-vue3. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)',
          },
          margin: 0,
        },
      },
    }),
};

module.exports = config;
