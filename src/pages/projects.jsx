/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Projects() {
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
        And here will be details of the stuff I am working on for growth as a
        dev
      </span>
    </DefaultLayout>
  );
}
