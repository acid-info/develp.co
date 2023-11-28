// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const math = require('remark-math')
const katex = require('rehype-katex')

const thisYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Develp',
  url: 'https://develp.co/',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        customSiteConfig: true,
        businessUnit: 'Nimbus',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
        },
        docs: {
          id: 'Docs',
          routeBasePath: '/',
          // sidebarPath: 'docs/sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        og: {},
      }),
    ],
  ],
  plugins: [],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Develp',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        copyright: `Develp @${thisYear}<br/>All Rights Reserved.`,
        links: [
          {
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/develpgmbh',
              },
            ],
          },
          {
            items: [
              {
                label: 'Contact us',
                href: '/contact-us',
              },
            ],
          },
        ],
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}

module.exports = config
