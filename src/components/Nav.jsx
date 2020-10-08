/**@jsx jsx */

import React from 'react';
import { Link, navigate } from 'gatsby';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const NAV_LINKS = [
  { path: '/', name: 'home', icon: 'home', isCTA: false },
  { path: '/about', name: 'about', icon: 'info-circle', isCTA: false },
  { path: '/projects', name: 'projects', icon: 'code-branch', isCTA: false },
  { path: '/resume', name: 'resume`', icon: 'file-pdf', isCTA: false },
  {
    path: '/contacts',
    name: 'get in touch',
    icon: 'address-card',
    isCTA: true,
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

        @media (max-width: 1200px) {
          width: 40%;
        }
      `}
    >
      {NAV_LINKS.filter(n => !n.isCTA && n.name !== 'home').map(link => (
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
