/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'The Diff',
  tagline: 'A Podcast from Facebook Open Source',
  url: 'https://thediffpodcast.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  // Used for publishing and more
  projectName: 'thediffpodcast',
  organizationName: 'facebookmicrosites',
  themeConfig: {
    navbar: {
      title: 'The Diff',
      logo: {
        alt: 'The Diff Logo',
        src: 'img/the-diff.svg',
      },
      links: [
        { to: 'docs/episode-0', label: 'Episodes', position: 'left' },
        { to: 'about', label: 'About', position: 'left' },
        {
          href: 'https://opensource.facebook.com',
          label: 'Facebook Open Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'The Diff on Facebook Careers',
              href:
                'https://www.facebook.com/careers/life/the-diff-podcast-from-facebook-open-source',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/thediffpodcast',
            },
            {
              label: 'Facebook Open Source',
              href: 'https://twitter.com/fbOpenSource',
            },
          ],
        },
      ],
      // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
      copyright: `Copyright © ${new Date().getFullYear()} The Diff: A Podcast from Facebook Open Source`,
    },
    image: 'img/the-diff.png',
    sidebarCollapsible: false,
    // Google Analytics
    gtag: {
      trackingID: 'UA-44373548-41',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs folder path relative to website dir.
          path: './docs',
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
