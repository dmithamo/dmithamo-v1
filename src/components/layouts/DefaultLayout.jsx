/**@jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx, css } from '@emotion/core';
import Header from '../Header';
import Footer from '../Footer';

export default function DefaultLayout({ children, pageTitle }) {
  return (
    <>
      <Helmet titleTemplate="%s | @dmithamo">
        <title>{pageTitle}</title>
        <meta name="description" />
        <style>{`
          :root {
            --primary-text-color: #000;
            --primary-bg-color: #eee;
            --primary-accent-color: #000;
            --primary-font: georgia, serif, sans-serif;
          }
          html {
            font: 100%/1em var(--primary-font);
          }

          body {
            font-family: var(--primary-font);
            color: var(--primary-color);
            background: var(--primary-bg-color);
            margin: 0;
            width: 100%;
            box-sizing: border-box;
          }

          p,h1,h2,h3,h4,h5,h6{
            margin: 0 0 1em 0;
          }

          ul {
            margin: 0;
          }

          * {
            box-sizing: border-box;

          }
        `}</style>
      </Helmet>
      <div
        css={css`
          color: var(--primary-text-color);
          width: 90%;
          margin: 0 auto;
          padding: 1em;
          position: relative;
          min-height: 100vh;
        `}
      >
        <Header />
        <section css={css``}>{children}</section>
        <Footer />
      </div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
};

DefaultLayout.defaultProps = {
  pageTitle: 'Dennis Mithamo',
};
