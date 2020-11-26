/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export default function TechstackCard({ children }) {
  return (
    <span
      css={css`
        background-color: var(--grey);
        color: var(--black);
        padding: 0.5em;
        font-family: var(--primaryFontItalic);
        font-weight: bolder;
        display: flex;
        justify-content: center;
        margin: 1em 0.5em;
        border-radius: 5px;
        width: fit-content;
      `}
    >
      {children}
    </span>
  );
}

TechstackCard.propTypes = {
  children: PropTypes.any.isRequired,
};
