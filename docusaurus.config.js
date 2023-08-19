// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const lessPlugin = () => ({
  name: 'less-plugin',
  configureWebpack(config, isServer, utils) {
    const { getStyleLoaders } = utils;
    const isProd = process.env.NODE_ENV === 'production';
    return {
      module: {
        rules: [
          {
            test: /\.less$/,
            oneOf: [
              {
                test: /\.module\.less$/,
                use: [
                  ...getStyleLoaders(isServer, {
                    modules: {
                      localIdentName: isProd
                        ? '[sha1:hash:hex:5]'
                        : '[name]_[local]',
                      exportOnlyLocals: isServer,
                    },
                    importLoaders: 1,
                    sourceMap: !isProd,
                  }),
                  {
                    loader: 'less-loader',
                  },
                ],
              },
              {
                use: [
                  ...getStyleLoaders(isServer),
                  {
                    loader: 'less-loader',
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
});

const debugPlugin =
  process.env.NODE_ENV === 'development'
    ? [
        () => ({
          name: 'devtool-plugin',
          configureWebpack() {
            return {
              devtool: 'source-map',
            };
          },
        }),
      ]
    : [];

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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.less'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    ...debugPlugin,
    lessPlugin,
  ],
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
        title: 'vue3源码解析',
        logo: {
          alt: 'profient vue3',
          src: 'img/pv-cover.png',
        },
        items: [
          { to: '/', label: '主页', position: 'left' },
          { to: '/docs', label: '文档', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          {
            to: 'https://github.com/2239559319/profient-vue3',
            label: 'github',
            position: 'left',
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
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
          hideable: false,
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
      algolia: {
        apiKey: '520d86fddc8eb39ee53eca0526e25b84',
        appId: 'LG4KY0NZF0',
        indexName: 'profient-vue3-web',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
