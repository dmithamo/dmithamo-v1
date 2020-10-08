/**@jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import Nav from './Nav';
import Logo from './Logo';

export default function Header() {
  return (
    <header
      css={css`
        padding: 1.5em 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-shadow: var(--modalShadow);
      `}
    >
      <Logo />
      <Nav />
    </header>
  );
}
