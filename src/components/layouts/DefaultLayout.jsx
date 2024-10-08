/**@jsx jsx */

import { css, jsx } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGooglePlus,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faAddressCard,
  faBars,
  faCodeBranch,
  faCogs,
  faFilePdf,
  faHome,
  faInbox,
  faInfoCircle,
  faLaptopCode,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import '../../css/index.css';
import constants from '../../utils/config/constants';
import Footer from '../Footer';
import Header from '../Header';

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
    faFilePdf,
    faLinkedin,
    faGooglePlus,
    faMapMarkerAlt,
    faLaptopCode,
    faInbox,
    faCogs
  );
})();
export default function DefaultLayout({ children, pageTitle }) {
  // Load pacejs and theme css on component mounted
  React.useEffect(() => {
    require('../../../static/pace');
    require('../../css/darkTheme.css');
    require('../../css/lightTheme.css');
  }, []);

  const [showFullPageMenu, setShowFullPageMenu] = React.useState(false);

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
              width: 100%;
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
