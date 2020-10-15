/** @jsx jsx */

import React from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { jsx, css } from '@emotion/core';
import Button from '../components/Button';
import constants from '../utils/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

export default function Homepage() {
  return (
    <DefaultLayout pageTitle="Home">
      <div
        className="container"
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 90vh;
          width: 80%;
          margin: auto;

          @media (max-width: ${constants.smallLaptopBreakPoint}) {
            flex-direction: column;

            div.img {
              width: 250px;
              border-radius: 20% 20% 0 20%;
              img {
                border-radius: 20% 20% 0 20%;
              }
            }

            div.details {
              width: 100%;
              padding: 0.5em;

              h2.name {
                font-size: 2em;
              }

              h2.subtitle {
                font-size: 1.6em;
              }
            }
          }
        `}
      >
        <div
          className="img"
          css={css`
            background-color: var(--trueBlack);
            width: 400px;
            border-radius: 20% 0 20% 20%;
            transform: rotate(45deg);
            :hover {
              transform: rotate(0);
            }
          `}
        >
          <img
            src="https://lh3.googleusercontent.com/kHe_LFyengbwbwpChCZ2QQ4uS7dcF7AjGj211XmEj30LhUBET2I_pekRqhJvZhmAi99zpGPu8YzhMY06vUcaew6PeIOouynj0wgC3UtUvfmyf4Ux7bgixINTzrhXB-Kaja4cl617SLHr62TwS76nkpKjYqa43RGtVpvL8vFtF8z7AiZ1USb0SndpIWlY5BofuZUDgffqfr9L12UlPhWGV78kvl0qDv30gdytBSJLUqPvH8IHYIqxF5gdRm5Tx4Zk7EBE34y614CN44aXQpMX1_M5U6HCmAqU_o9wQ5ZbhGow5hPeYRb_k9Cgtf-5bV6nTwtCdjsAfTjRlagO85HD58hfCUIZ4Vp47pZltJtq59ZRZ82GIzvldc2rAvbVdhr8xKRNDgEcBQIhoJ6D-ljXMly0xhW40enGfaE0azT-PK9jzwdl3X5m_14EKjaMdV96Lnhy8Y1w_7RGYW1B2PaDrM_58GYQVUoQ_IcKO-k5-HFklRS3ly6uW6Hf9RTcynkJQV9wJOlR9hUG4JPmmCK-66n_x_mScmiXQlJnN69JFS_n2zk7WO7ez8_IAluTVPYS1qn9td4WKBfopX3kiTLQob6EzMCxeQLJ0W98tpAhqM2YkFe0mTMa-XcgPZ5QOnVInG9NAsZSOFmezm3RyXpadaWHa8zTWrF4kb9dhcyvA6gpJ0vCzyZcDlBC_cRQ=w606-h688-no?authuser=0"
            alt="Dennis Mithamo"
            css={css`
              width: 100%;
              height: auto;
              transform: translate(20px, 20px);
              border-radius: 20% 0 20% 20%;

              :hover {
                transform: translateX(0) translateY(0);
              }
            `}
          />
        </div>
        <div
          className="details"
          css={css`
            width: 50%;
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            color: var(--offWhite) !important;
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
            <h2
              className="name"
              css={css`
                font-weight: bold;
                font-family: var(--primaryFontBold);
                font-size: 4em;
                margin: 0;
                color: var(--white);
              `}
            >
              Dennis Mithamo
            </h2>
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
                I build cool stuff with code for a living and for fun.
              </span>
              <span>I have been at it for just about two years now.</span>
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
                  color: var(--white);
                }

                a.linkedin {
                  color: var(--linkedInBlue);
                }

                a.email {
                  color: var(--gmailRed);
                }

                a.home {
                  color: var(--locationYellow);
                }

                a.social-link {
                  :hover {
                    color: var(--themeAccentColor);
                  }
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
              </a>
              <a
                href="https://linkedin.com/in/dennis-mithamo"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn: Dennis Mithamo"
                className="social-link linkedin"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a
                href="mailto:dennisbmithamo@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Email: dennisbmithamo@gmail.com"
                className="social-link email"
              >
                <FontAwesomeIcon icon={['fab', 'google-plus']} />
              </a>
              <a
                href="https://goo.gl/maps/7YXgDewY5JKTZJiS8"
                target="_blank"
                rel="noreferrer noopener"
                title="Based in: Nairobi, Kenya"
                className="social-link home"
              >
                <FontAwesomeIcon icon="map-marker-alt" />
              </a>
            </p>
          </div>

          {/* Links to places here */}
          <div
            className="actions"
            css={css`
              padding: 1em 0;
              margin-top: 2em;
              width: 75%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span.button {
                width: fit-content;
              }

              button.isCTA {
                margin-right: 3.5em;
              }
            `}
          >
            <Button
              onClick={() => {
                navigate('/about');
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
    </DefaultLayout>
  );
}
