/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';
import myPic from '../assets/myPic.jpg';
import Button from '../components/Button';
import DefaultLayout from '../components/layouts/DefaultLayout';
import constants from '../utils/config/constants';

export default function Homepage() {
  return (
    <DefaultLayout pageTitle="Home">
      <div
        className="root-container"
        css={css`
          margin: auto;
          width: 90%;

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
            width: 100%;
          }
        `}
      >
        <div
          className="container"
          css={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 90vh;
            margin: auto;
            font-size: 1.2em;
            width: 100%;

            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              flex-direction: column;

              div.img {
                width: 150px;
                border-radius: 10% 20% 0 10%;
                img {
                  transform: rotate(0) translateX(10px) translateY(10px);
                  border-radius: 10% 10% 0 10%;
                }
              }

              div.details {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5em;

                h2.name {
                  font-size: 2em;
                }

                h2.subtitle {
                  font-size: 1.6em;
                }
              }

              div.actions {
              }
            }
          `}
        >
          <div
            className="img animate-transition-1"
            css={css`
              background-color: var(--trueBlack);
              width: 400px;
              border-radius: 20% 0 20% 20%;
              /* transform: rotate(45deg); */
              /* :hover {
                transform: rotate(0);

                img {
                  transform: translateX(0) translateY(0);
                }
              } */
            `}
          >
            <img
              src={myPic}
              alt="Dennis Mithamo"
              css={css`
                width: 400px;
                height: auto;
                transform: translate(20px, 20px);
                border-radius: 20% 0 20% 20%;
              `}
            />
          </div>
          <div
            className="details"
            css={css`
              padding: 2em;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-evenly;
              color: var(--themeTextColor) !important;
            `}
          >
            <div className="name-plus">
              <p
                className="salutation"
                css={css`
                  color: var(--themeAccentColor);
                `}
              >
                Hi, my name is
              </p>
              <h1
                className="name"
                css={css`
                  font-family: var(--primaryFontBold);
                  font-size: 4em;
                  margin: 0;
                  color: var(--white);
                  @media (max-width: ${constants.smallLaptopBreakPoint}) {
                    font-size: 3em;
                  }
                `}
              >
                Dennis Mithamo
              </h1>
              <h2
                className="subtitle"
                css={css`
                  font-size: 2em;
                  margin-bottom: 1.5em;
                  font-family: var(--primaryFontMedium);
                  opacity: 0.8;
                `}
              >
                Software Engineer
              </h2>
              <p
                className="description"
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                `}
              >
                <span>
                  I build cool and useful stuff with code for a living and for
                  fun.
                </span>
                <span>I have been at it for close to three years now.</span>
              </p>

              <p
                className="links-social"
                css={css`
                  border-radius: 20px;
                  cursor: pointer;
                  width: 100%;
                  margin: 3em 0;
                  padding: 1em;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  opacity: 1;
                  svg {
                    font-size: 2.2em;
                  }

                  a.github {
                    color: var(--themeTextColor);
                  }

                  a.linkedin {
                    color: var(--linkedInBlue);
                  }

                  a.email {
                    color: var(--gmailRed);
                  }

                  a.home {
                    color: var(--themeTextColor);
                  }

                  a.social-link {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    margin: 0 0.25em;
                    :hover {
                      color: var(--themeAccentColor);
                    }
                  }

                  .link-name {
                    font-size: 0.65em;
                    text-decoration: none;
                    color: var(--grey);
                  }
                `}
              >
                <a
                  href="https://github.com/dmithamo"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="GitHub: @dmithamo"
                  className="social-link github"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                  <span className="link-name">dmithamo</span>
                </a>
                <a
                  href="https://linkedin.com/in/dennis-mithamo"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="LinkedIn: Dennis Mithamo"
                  className="social-link linkedin"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  <span className="link-name">dennis-mithamo</span>
                </a>
                <a
                  href="mailto:dennisbmithamo@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Email: dennisbmithamo@gmail.com"
                  className="social-link email"
                >
                  <FontAwesomeIcon icon="inbox" />
                  <span className="link-name">dennisbmithamo@gmail.com</span>
                </a>
                <a
                  href="#"
                  rel="noreferrer noopener"
                  title="Based in: Nairobi, Kenya"
                  className="social-link home"
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <span className="link-name">Nairobi, Kenya</span>
                </a>
              </p>

              <div
                className="actions"
                css={css`
                  width: 100%;
                  margin-top: 2em;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  span.button {
                    width: 47%;
                  }
                `}
              >
                <Button
                  onClick={() => {
                    navigate('/experience');
                  }}
                  alignCenter
                  category="outline"
                >
                  Experience
                </Button>
                <Button
                  onClick={() => {
                    navigate('/projects');
                  }}
                  classes="isCTA"
                  alignCenter
                  category="primary"
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
