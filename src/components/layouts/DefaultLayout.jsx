/**@jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx, css } from '@emotion/core';
import Header from '../Header';
import Footer from '../Footer';
import '../../css/index.css';
import '../../utils/pace/pace';
import '../../utils/pace/pace-theme.css';

export default function DefaultLayout({ children, pageTitle }) {
  return (
    <>
      <Helmet titleTemplate="%s | @dmithamo">
        <title>{pageTitle}</title>
        <meta name="description" />
        <script src="../../utils/pace/pace.js"></script>
        <link href="../../utils/pace/theme.css" rel="stylesheet"></link>
      </Helmet>
      <div
        css={css`
          width: 90%;
          margin: 0 auto;
          padding: 0 1em;
          position: relative;
          min-height: 105vh;
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
