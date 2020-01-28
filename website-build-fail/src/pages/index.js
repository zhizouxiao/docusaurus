/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const users = [
  {
    caption: 'Anchor',
    image: '/img/anchor_icon_badge.png',
    infoLink: 'https://anchor.fm/thediff',
    pinned: true,
  },
  {
    caption: 'Apple Podcasts',
    image: '/img/apple_podcast_icon_badge.svg',
    infoLink:
      'https://itunes.apple.com/us/podcast/the-diff-a-podcast-from-facebook-open-source/id1454407488?mt=2&ign-mpt=uo%3D4',
    pinned: true,
  },
  {
    caption: 'Google Podcasts',
    image: '/img/google_podcasts_icon_badge.svg',
    infoLink:
      'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NTNiMjAwL3BvZGNhc3QvcnNz',
    pinned: true,
  },
  {
    caption: 'Spotify',
    image: '/img/spotify_icon_badge.png',
    infoLink: 'https://open.spotify.com/show/7tG4FZzBYqtLVHiU5jICVr',
    pinned: true,
  },
  {
    caption: 'Breaker',
    image: '/img/breaker_icon_badge.svg',
    infoLink:
      'https://www.breaker.audio/the-diff-a-podcast-from-facebook-open-source',
    pinned: true,
  },
  {
    caption: 'Overcast',
    image: '/img/overcast_icon_badge.svg',
    infoLink:
      'https://overcast.fm/itunes1454407488/the-diff-a-podcast-from-facebook-open-source',
    pinned: true,
  },
  {
    caption: 'PocketCasts',
    image: '/img/pocketcasts_icon_badge.png',
    infoLink: 'https://pca.st/FA3a',
    pinned: true,
  },
  {
    caption: 'RadioPublic',
    image: '/img/radiopublic_icon_badge.svg',
    infoLink: 'https://radiopublic.com/the-diff-a-podcast-from-facebook-G7qmaR',
    pinned: true,
  },
  {
    caption: 'Stitcher',
    image: '/img/stitcher_icon_badge.png',
    infoLink:
      'https://www.stitcher.com/podcast/anchor-podcasts/the-diff-a-podcast-from-facebook-open-source',
    pinned: true,
  },
  {
    caption: 'PodBean',
    image: '/img/podbean_icon_badge.png',
    infoLink:
      'https://www.podbean.com/podcast-detail/97vub-8882b/The-Diff-A-Podcast-from-Facebook-Open-Source',
    pinned: true,
  },
  {
    caption: 'RSS',
    image: '/img/rss_icon_badge.svg',
    infoLink: 'https://anchor.fm/s/953b200/podcast/rss',
    pinned: true,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary text--center">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl('docs/episode-0')}
            >
              Episodes
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row margin-vert--lg">
            <div className="col col--6 col--offset-3 text--center">
              <h2>Play the Latest</h2>
              <iframe
                src="https://anchor.fm/thediff/embed"
                height="102px"
                width="400px"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
          <div className="row margin-vert--lg">
            <div className="col col--6 col--offset-3 text--center">
              <h2>Elsewhere</h2>
              <div>
                {users.map(({ infoLink, image, caption }, index) => (
                  <a
                    className="channel"
                    href={infoLink}
                    key={index}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      className="channel-logo"
                      src={useBaseUrl(image)}
                      alt={caption}
                      title={caption}
                    />
                    <h4>{caption}</h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
