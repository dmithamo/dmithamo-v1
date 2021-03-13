/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function NotFoundPage() {
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
            font-family: var(--primaryFontBold);
            color: var(--offWhite);
            background-color: var(--trueBlack);
            padding: 0.8em 1.5em;
            border-radius: 15px;
            text-decoration: none;
            &:hover {
              filter: brightness(112%);
              color: var(--white);
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
