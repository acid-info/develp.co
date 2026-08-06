// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const thisYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Develp',
  url: 'https://develp.co/',
  baseUrl: '/',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://analytic.keycard.tech/script.js',
      defer: true,
      'data-website-id': '91e01424-76e6-494b-9099-1d80384c1150',
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
  ],

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
            customCss: [
              require.resolve('./src/css/tailwind.css'),
              require.resolve('./src/css/custom.scss'),
            ],
          },
        },
        docs: {
          id: 'Docs',
          routeBasePath: '/',
        },
        og: {},
      }),
    ],
  ],
  plugins: [
    function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(opts) {
          opts.plugins.push(require('tailwindcss'))
          opts.plugins.push(require('autoprefixer'))
          return opts
        },
      }
    },
  ],
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
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Develp',
        logo: {
          alt: 'Develp',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          { label: 'Commitment', to: '/#commitment', position: 'right' },
          { label: 'Key Focus', to: '/#focus', position: 'right' },
          { label: 'Results', to: '/#results', position: 'right' },
          { label: 'Solutions', to: '/#solutions', position: 'right' },
          { label: 'Contact', to: '/#contact', position: 'right' },
        ],
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
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
