// @ts-check

const config = {
  title: 'ECM Documentation',
  tagline: 'Enterprise Content Management User Guide',

  url: 'https://sa3eed125.github.io',
  baseUrl: '/documentation/',

  organizationName: 'Sa3eed125',
  projectName: 'documentation',

  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          include: ['ECM User Guide/**/*.md'],
          editUrl: 'https://github.com/Sa3eed125/documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    navbar: {
      title: 'ECM Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          href: 'https://github.com/Sa3eed125/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'ECM User Guide', to: '/' }],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Sa3eed125/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} ECM Documentation`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },

  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;