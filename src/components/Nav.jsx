/**@jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import Button from './Button';

export const NAV_LINKS = [
  { path: '/', name: 'home', icon: 'home', isCTA: false },
  {
    path: '/experience',
    name: 'experience',
    icon: 'laptop-code',
    isCTA: false,
  },
  // { path: '/skills', name: 'skills', icon: 'cogs', isCTA: false },
  { path: '/resume', name: 'resume`', icon: 'file-pdf', isCTA: false },
  { path: '/contacts', name: 'contacts', icon: 'address-card', isCTA: false },
  { path: '/projects', name: 'projects', icon: 'code-branch', isCTA: true },
];

export default function Nav() {
  const navCTA = NAV_LINKS.find(n => n.isCTA);
  return (
    <nav
      css={css`
        a:hover,
        a.active {
          color: var(--white);
          border-bottom: 4px solid var(--themeAccentColor);
        }
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
      <div
        className="nav-cta"
        css={css`
          width: 150px;
        `}
      >
        <Button
          alignCenter
          category="primary"
          value={navCTA.name}
          onClick={() => {
            navigate(navCTA.path);
          }}
        />
      </div>
    </nav>
  );
}

export const NavItem = ({ isCTA, to, children, theme }) => (
  <StyledNavlink theme={theme} activeClassName="active" isCTA={isCTA} to={to}>
    {children}
  </StyledNavlink>
);

const StyledNavlink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2em;
  border-bottom: 4px solid var(--themeBG);
`;

NavItem.propTypes = {
  isCTA: PropTypes.bool,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  isCTA: false,
};
