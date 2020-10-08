/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { NAV_LINKS } from './Nav';

export default function FullPageMenu({ onClose }) {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 1001;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 15em 0;
        background-color: var(--darkThemeBG);

        button {
          font-size: 3em;
          padding: 2em;
          width: 100%;
          opacity: 0.5;
          color: var(--grey) !important;
          :hover {
            opacity: 1;
            color: var(--white) !important;
          }
        }

        div.container {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          button.nav-link {
            font-family: var(--primaryFontBold);
            font-size: 1.5em;
            margin: 0.5em 0;
            padding: 0.5em 0;
            width: 250px;
            display: flex;
            justify-content: center !important;
            align-items: center !important;

            span.icon {
              width: 20%;
            }

            span:last-of-type {
              flex-grow: 1;
            }

            &:hover {
              color: var(--darkThemeAccents) !important;
            }
          }
        }
      `}
    >
      <Button classes="close-btn" category="link" onClick={onClose}>
        <span className="icon">
          <FontAwesomeIcon icon={['far', 'times-circle']} />
        </span>
      </Button>
      <div className="container">
        {NAV_LINKS.map(link => (
          <Button
            key={link.path}
            classes="nav-link"
            category="link"
            onClick={() => {
              navigate(link.path);
              onClose();
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={link.icon} />
            </span>
            <span>{link.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

FullPageMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
