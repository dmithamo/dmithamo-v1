/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useThemeContext } from '../context/theme';

export default function Footer() {
  const { themeState } = useThemeContext();
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
          opacity: 0.2;
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
            color: ${themeState.themeAccentColor};
          `}
        >
          &copy;{new Date().getFullYear()} dmithamo
        </a>
      </span>
    </div>
  );
}
