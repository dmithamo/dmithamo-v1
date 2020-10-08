/**@jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import Nav from './Nav';
import Logo from './Logo';
import Button from './Button';
import { navigate } from 'gatsby';

export default function Header() {
  return (
    <header
      css={css`
        padding: 1em 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-shadow: var(--modalShadow);
      `}
    >
      <Logo />
      <Nav />
      <Button
        value="get in touch"
        category="primary"
        onClick={() => {
          navigate('/contacts');
        }}
        alignCenter
      />
    </header>
  );
}
