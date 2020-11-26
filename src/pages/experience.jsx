/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import uniqueId from 'lodash/uniqueId';
import DefaultLayout from '../components/layouts/DefaultLayout';
import TechstackCard from '../components/TechstackCard';
import constants, { jobsHeld } from '../utils/config/constants';

export default function ExperiencePage() {
  return (
    <DefaultLayout pageTitle="Experience">
      <div
        css={css`
          width: 50%;
          margin: auto;
          padding: 1em;

          .boldText {
            font-family: var(--primaryFontMedium);
          }

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
            width: 100%;
          }
        `}
      >
        {jobsHeld.map(
          ({
            company,
            title,
            description,
            roles,
            period,
            website,
            techstack,
          }) => (
            <div
              className="gradient-bg"
              css={css`
                padding: 2em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                box-shadow: var(--modalShadow);
                margin-top: 5vh;
                margin-bottom: 5vh;
                color: var(--lightThemeTextColor);
              `}
              key={company}
            >
              <h2 className="boldText">
                <span
                  css={css`
                    text-transform: capitalize;
                  `}
                >
                  {title}
                </span>
                &nbsp;@&nbsp;
                <a
                  css={css`
                    color: inherit;
                  `}
                  href={website}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  {company}
                </a>
              </h2>
              <p className="boldText">{period}</p>
              <p
                css={css`
                  padding: 1em 0;
                `}
              >
                {description}
              </p>

              <h3
                className="boldText"
                css={css`
                  text-decoration: underline;
                `}
              >
                Roles
              </h3>
              <ul>
                {roles.map(role => (
                  <li
                    css={css`
                      padding: 0.5em 0;
                    `}
                    key={role}
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <p
                css={css`
                  display: flex;
                  padding: 1em;
                  flex-wrap: wrap;
                `}
              >
                {techstack.map(tech => (
                  <TechstackCard key={uniqueId()}>{tech}</TechstackCard>
                ))}
              </p>
            </div>
          )
        )}
      </div>
    </DefaultLayout>
  );
}
