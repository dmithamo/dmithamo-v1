/**@jsx jsx */

import React from 'react';
import { Link, navigate } from 'gatsby';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const NAV_LINKS = [
  {
    name: 'about',
    path: '/about',
    isCTA: false,
  },
  {
    name: 'projects',
    path: '/projects',
    isCTA: false,
  },
  {
    name: 'resume',
    path: '/resume',
    isCTA: false,
  },
];

export default function Nav() {
  return (
    <nav
      css={css`
        a:hover,
        a.active {
          color: var(--darkThemeAccents);
          border-bottom: 4px solid var(--darkThemeAccents);
        }
        width: 20%;
        display: flex;
        justify-content: space-between;
      `}
    >
      {NAV_LINKS.map(link => (
        <NavItem key={link.path} isCTA={link.isCTA} to={link.path}>
          {link.name}
        </NavItem>
      ))}
    </nav>
  );
}

export const NavItem = ({ isCTA, to, children }) => (
  <StyledNavlink activeClassName="active" isCTA={isCTA} to={to}>
    {children}
  </StyledNavlink>
);

const StyledNavlink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2em;
  border-bottom: 4px solid var(--darkThemeBG);
`;

NavItem.propTypes = {
  isCTA: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isCTA: false,
};
