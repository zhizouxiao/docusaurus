/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function About() {
  return (
    <Layout description="The Diff About Page">
      <div className="container text--center">
        <div className="row margin-vert--lg">
          <div className="col col--6 col--offset-3">
            <img
              src={useBaseUrl('img/the-diff.svg')}
              alt="The Diff Logo"
              style={{ width: 256 }}
            />
            <div className="margin-vert--lg">
              <h1>About The Diff</h1>
              <p>
                The Diff is a podcast from Facebook Open Source, hosted by{' '}
                <a href="https://twitter.com/JoelMarcey">Joel Marcey</a>.
              </p>
              <p>
                Facebook has one of the largest open source programs in the
                world, with over 450 public projects and over 1 million
                followers on GitHub across our entire portfolio. From React to
                Reason, GraphQL to Docusaurus, The Diff showcases the program,
                the projects and the people that drive our mission of building
                community through open source technology. Please join us on this
                journey to get both insight and perspective from those inside
                and outside of Facebook that help drive this program.
              </p>
              <div className="avatar avatar--vertical margin-vert--lg">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src={useBaseUrl('img/joelmarcey.png')}
                  alt="Joel Marcey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
