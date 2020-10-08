/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export default function Footer() {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        padding: 0.2em;
        font-family: var(-primaryFontThin);
      `}
    >
      <span
        css={css`
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        `}
      >
        <a
          href="https://github.com/dmithamo"
          target="_blank"
          rel="noreferrer external noopener"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          &copy;{new Date().getFullYear()} dmithamo
        </a>
      </span>
    </div>
  );
}
