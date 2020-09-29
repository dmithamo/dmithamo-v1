/**@jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

export default function Nav() {
  return (
    <nav
      css={css`
        span:last-of-type {
          margin-right: 0;
        }
      `}
    >
      <NavItem to="/about-me">about me</NavItem>
      <NavItem to="/projects">projects</NavItem>
      <NavItem to="/resume">resume</NavItem>
      <NavItem isCTA to="/contacts">
        get in touch
      </NavItem>
    </nav>
  );
}

export const NavItem = ({ isCTA, to, children }) => (
  <span
    css={css`
      margin-right: 1em;
      border: ${isCTA ? '1px solid var(--primary-accent-color)' : ''};
      padding: ${isCTA ? '0.80em' : ''};
      border-radius: 10px;

      a {
        color: var(--primary-text-color);
        text-decoration: none;

        &:hover,
        &:active {
          text-decoration: ${isCTA ? 'none' : 'underline'};
        }
      }
    `}
  >
    <Link to={to}>{children}</Link>
  </span>
);

NavItem.propTypes = {
  isCTA: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isCTA: false,
};
