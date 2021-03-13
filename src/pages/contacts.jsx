/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Contacts() {
  return (
    <DefaultLayout pageTitle="Contacts">
      <span
        css={css`
          width: 100%;
          height: 90vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        And here will be criteria for contacting me
      </span>
    </DefaultLayout>
  );
}
