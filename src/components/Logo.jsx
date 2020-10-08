/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { NavItem } from './Nav';
import PropTypes from 'prop-types';

export default function Logo({ showName }) {
  return (
    <span
      className="heading"
      css={css`
        color: var(--darkThemeAccents);
      `}
    >
      <NavItem to="/">{showName && 'dmithamo'}</NavItem>
    </span>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};
