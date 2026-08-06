// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
        },
        og: {},
      }),
    ],
  ],
  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/theme-common').UserThemeConfig} */
    ({
      metadata: [
        {
          name: 'description',
          content:
            'Develp GmbH supports Ethereum staking protocols with core infrastructure and operational services, championing client diversity and network decentralisation.',
        },
        {
          name: 'keywords',
          content: 'develp, ethereum, staking, nimbus, client diversity',
        },
        { name: 'image', content: 'img/logo.svg' },
      ],
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
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
