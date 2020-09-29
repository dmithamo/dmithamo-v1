/**@jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import Nav from './Nav';
import Logo from './Logo';

export default function Header() {
  return (
    <header
      css={css`
        padding: 1em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      `}
    >
      <Logo />
      <Nav />
    </header>
  );
}
