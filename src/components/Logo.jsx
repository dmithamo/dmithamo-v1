/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { NavItem } from './Nav';
import PropTypes from 'prop-types';

export default function Logo({ showName }) {
  return (
    <NavItem to="/">
      <h3>{showName && 'dmithamo'}</h3>
    </NavItem>
  );
}

Logo.propTypes = {
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: true,
};
