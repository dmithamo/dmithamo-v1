/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Logo({ showName }) {
  return (
    <Link
      css={css`
        text-decoration: none;
        color: var(--themeTextColor);
      `}
      to="/"
    >
      {showName && (
        <h3
          css={css`
            font-family: var(--primaryFontBold);
            font-size: 1.25em;
          `}
        >
          dmithamo&trade;
        </h3>
      )}
    </Link>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};
