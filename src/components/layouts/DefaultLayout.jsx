/**@jsx jsx */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { jsx, css } from '@emotion/core';
import Header from '../Header';
import Footer from '../Footer';
import '../../css/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faHome,
  faCodeBranch,
  faAddressCard,
  faFilePdf,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../context/theme';

// Add font awesome icons here
(() => {
  library.add(
    fab,
    faBars,
    faTimesCircle,
    faHome,
    faCodeBranch,
    faAddressCard,
    faInfoCircle,
    faFilePdf
  );
})();
export default function DefaultLayout({ children, pageTitle }) {
  // Load pacejs and theme css on component mounted
  useEffect(() => {
    require('../../../static/pace');
  }, []);

  const { themeState } = useThemeContext();
  return (
    <>
      <Helmet titleTemplate="%s | @dmithamo">
        <html lang="en"></html>
        <title>{pageTitle}</title>
        <meta name="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Homepage of Dennis Mithamo, a made-in-Kenya Software Engineer"
        ></meta>
      </Helmet>
      <div
        className="root-container"
        css={css`
          min-height: 100vh;
          position: relative;
          color: ${themeState.themeTextColor};
          background-color: ${themeState.themeBG};
        `}
      >
        <Header />
        <section
          id="section-main"
          css={css`
            width: 90%;
            margin: 0 auto;
            padding: 0 1em;
            @media (max-width: 749px) {
              width: 99%;
            }
          `}
        >
          {children}
        </section>
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
