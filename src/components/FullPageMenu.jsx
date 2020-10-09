/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes, { func } from 'prop-types';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { NAV_LINKS } from './Nav';

import useClickOutside, {
  useEcapeKeyPress,
} from '../utils/hooks/useClickOutside';
import { useRef } from 'react';
import Logo from './Logo';
import constants from '../utils/config/constants';

export default function FullPageMenu({ onClose }) {
  const ref = useRef(null);
  useClickOutside(ref, onClose);
  useEcapeKeyPress(onClose);
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        padding: 1em 0;
        top: 0vh;
        right: 0;
        height: 100vh;
        width: 50%;
        z-index: 1001;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        background-color: var(--themeBG);
        box-shadow: var(--modalShadow);

        @media (max-width: ${constants.smallLaptopBreakPoint}) {
          width: 65%;
        }

        button.close-btn {
          font-size: 1.2em;
        }

        button.nav-link {
          width: 75%;
          display: flex;
          flex-direction: row-reverse;
          margin: auto;
          padding: 0.8em 1em;
          font-size: 0.9em;
          margin-bottom: 1em;

          svg {
            font-size: 1em;
          }

          &:hover {
            color: var(--themeAccentColor);
          }
        }

        button.nav-cta {
          background-color: var(--themeAccentColor);
          color: var(--themeBG);
          &:hover {
            background-color: var(--themeTextColor);
            color: var(--black);
          }
        }
      `}
    >
      <>
        {NAV_LINKS.map(link => (
          <Button
            key={link.path}
            onClick={() => {
              onClose();
              navigate(link.path);
            }}
            category="link"
            classes={`nav-link ${link.isCTA ? 'nav-cta' : ''}`}
          >
            <FontAwesomeIcon icon={link.icon} />
            <span>{link.name}</span>
          </Button>
        ))}
      </>

      <Button
        category="link"
        onClick={() => {
          onClose();
        }}
        classes="close-btn"
        alignCenter
      >
        <FontAwesomeIcon icon={['far', 'times-circle']} />
      </Button>
    </div>
  );
}

FullPageMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
