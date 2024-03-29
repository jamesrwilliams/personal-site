import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components';
import styled from "styled-components";
const FourOhFourCard = styled.div`
  max-width: 450px;
  position: relative;
  margin: 1rem;
  z-index: 40;

  &:after {
    content: '';
    display: block;
    background: var(--text-gradient);
    border-radius: 5px;
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
  }

  .inner {
    position: relative;
    z-index: 50;
    background: var(--brand-darker);
    padding: 1rem;
    border-radius: 5px;
    font-size: 14px;
    color: var(--typography-primary);

    @media screen and ${mediaQuery.minMd} {
      font-size: 16px;
      padding: 2rem;
    }
  }

  a { text-decoration: underline; }

  h1 {
    font-weight: normal;
    margin-top: 0;
    span {
      ${textGradient}
    }
  }
`;

import {mediaQuery, textGradient} from "../theme/variables";
import {Meta} from "../components/utilities/Meta";

const NotFoundPage = () => (
  <Layout>
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FourOhFourCard>
        <div className="inner">
          <h1>⚠️ <span>404 Page Not Found</span></h1>
          <p>
            You just hit a route that does not exist, or it did and now does not. Please check the URL
            or visit the <Link to="/">homepage</Link> or try my <Link to="/posts">posts</Link>.
          </p>
        </div>
      </FourOhFourCard>
    </main>
  </Layout>
);

export const Head = () => <Meta title={'404 Not Found'} />

export default NotFoundPage;
