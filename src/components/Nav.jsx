/**@jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const NAV_LINKS = [
  {
    name: 'about me',
    path: '/aboutMe',
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
  {
    name: 'get in touch',
    path: '/contacts',
    isCTA: true,
  },
];

export default function Nav() {
  return (
    <nav css={css``}>
      {NAV_LINKS.map(link => (
        <NavItem isCTA={link.isCTA} to={link.path}>
          {link.name}
        </NavItem>
      ))}
    </nav>
  );
}

export const NavItem = ({ isCTA, to, children }) => (
  <StyledNavlink isCTA={isCTA} to={to}>
    {children}
  </StyledNavlink>
);

const StyledNavlink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 1em;
  border: ${props => (props.isCTA ? '1px solid var(--darkThemeAccents)' : '')};
  padding: ${props => (props.isCTA ? '0.75em' : '')};
  border-radius: 3px;

  &:hover {
    background-color: ${props =>
      props.isCTA ? 'var(--darkThemeAccents)' : 'none'};

    color: ${props => (props.isCTA ? 'var(--black)' : 'inherit')};

    text-decoration: ${props => (props.isCTA ? 'none' : 'underline')};
  }
`;

NavItem.propTypes = {
  isCTA: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isCTA: false,
};
