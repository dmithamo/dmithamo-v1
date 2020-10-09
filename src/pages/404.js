import React from 'react';
/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { useThemeContext } from '../context/theme';

export default function NotFoundPage() {
  const { themeState } = useThemeContext();
  return (
    <DefaultLayout>
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        You must be lost.&nbsp;
        <Link
          css={css`
            color: ${themeState.themeAccentColor};
            border-radius: 5px;
            padding: 0.5em;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          `}
          to="/"
        >
          Let me take you home
        </Link>
      </span>
    </DefaultLayout>
  );
}
