/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { NavItem } from './Nav';
import PropTypes from 'prop-types';

export default function Logo({ showName }) {
  return (
    <span
      css={css`
        font-weight: bold;
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
