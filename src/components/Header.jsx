/**@jsx jsx */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';
import Nav from './Nav';
import Logo from './Logo';
import Button from './Button';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullPageMenu from './FullPageMenu';
import constants from '../utils/config/constants';

export default function Header({ showMenu, onToggleShowMenu }) {
  return (
    <>
      <header
        css={css`
          padding: 1em 3em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          box-shadow: ${showMenu ? 'none' : 'var(--modalShadow)'};
          position: relative;

          div.toggle-menu {
            display: none;
          }

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
            div.toggle-menu {
              display: inline-block;
            }

            nav,
            div.cta {
              display: none;
            }
          }
        `}
      >
        <Logo />
        <Nav />
        <div className="toggle-menu">
          <Button
            category="link"
            onClick={() => {
              onToggleShowMenu(!showMenu);
            }}
          >
            <FontAwesomeIcon
              icon={showMenu ? ['far', 'times-circle'] : 'bars'}
            />
          </Button>
        </div>

        <div className="cta">
          <Button
            classes="cta"
            value="get in touch"
            category="primary"
            onClick={() => {
              navigate('/contacts');
            }}
            alignCenter
          />
        </div>

        {showMenu && (
          <FullPageMenu
            onClose={() => {
              onToggleShowMenu(false);
            }}
          />
        )}
      </header>
    </>
  );
}
