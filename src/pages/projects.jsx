/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { uniqueId } from 'lodash';
import DefaultLayout from '../components/layouts/DefaultLayout';
import TechstackCard from '../components/TechstackCard';
import { projectsOnCourse } from '../utils/config/constants';

export default function Projects() {
  return (
    <DefaultLayout pageTitle="Projects">
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          padding-top: 2vh;
          padding-bottom: 2vh;
        `}
      >
        {projectsOnCourse.map(
          ({ title, description, website, repo, screenshot, techtack }) => (
            <div
              css={css`
                padding: 2em;
                border-radius: 10px;
                width: 800px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column-reverse;
              `}
            >
              <div css={css``}>
                <h2
                  css={css`
                    font-weight: bold;
                    font-size: 2em;
                    font-family: var(--primaryFontMedium);
                    padding: 0.5em;
                  `}
                >
                  {title}
                </h2>
                <p
                  css={css`
                    padding: 1em;
                  `}
                >
                  {description}
                </p>
                <p
                  css={css`
                    padding: 1em;
                  `}
                >
                  <a
                    css={css`
                      color: var(--themeTextColor);
                    `}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={repo}
                  >
                    The code
                  </a>
                </p>
                <p
                  css={css`
                    display: flex;
                    padding: 1em;
                    flex-wrap: wrap;
                  `}
                >
                  {techtack.map(tech => (
                    <TechstackCard key={uniqueId()}>{tech}</TechstackCard>
                  ))}
                </p>
              </div>

              <div
                className="gradient-bg"
                css={css`
                  width: 800px;
                  border-radius: 10px;
                  opacity: 0.75;
                `}
              >
                <img
                  className="animate-transition-1"
                  src={screenshot}
                  alt={title}
                  css={css`
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    transform: translateX(30px) translateY(30px);

                    :hover {
                      transform: translateX(0) translateY(0);
                    }
                  `}
                />
              </div>
            </div>
          )
        )}
      </div>
    </DefaultLayout>
  );
}
