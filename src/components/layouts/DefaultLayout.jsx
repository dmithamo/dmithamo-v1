/**@jsx jsx */

import React, { useEffect, useState } from 'react';
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
import constants from '../../utils/config/constants';

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
    require('../../css/darkTheme.css');
  }, []);

  const [showFullPageMenu, setShowFullPageMenu] = useState(false);

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
          color: var(--themeTextColor);
          background-color: var(--themeBG);
        `}
      >
        <Header
          showMenu={showFullPageMenu}
          onToggleShowMenu={setShowFullPageMenu}
        />
        <section
          id="section-main"
          css={css`
            width: 90%;
            margin: 0 auto;
            padding: 0 1em;
            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              width: 99%;
            }
            filter: blur(${showFullPageMenu ? '0.2em' : '0'});
            opacity: ${showFullPageMenu ? '0.75' : '1'};
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
