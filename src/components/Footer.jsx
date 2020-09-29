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
        &copy;{new Date().getFullYear()} dmithamo
      </span>
    </div>
  );
}
