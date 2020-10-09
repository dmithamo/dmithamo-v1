/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { NavItem } from './Nav';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

export default function Logo({ showName }) {
  return (
    <Link
      css={css`
        text-decoration: none;
      `}
      to="/"
    >
      <h3
        css={css`
          color: var(--themeTextColor);
          font-family: var(--primaryBold);
        `}
      >
        {showName && 'dmithamo'}
      </h3>
    </Link>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};
