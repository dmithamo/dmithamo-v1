/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes, { func } from 'prop-types';
import { Link, navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { NAV_LINKS } from './Nav';
import { useThemeContext } from '../context/theme';
import useClickOutside, {
  useEcapeKeyPress,
} from '../utils/hooks/useClickOutside';
import { useRef } from 'react';

export default function FullPageMenu({ onClose }) {
  const { themeState } = useThemeContext();

  const ref = useRef(null);
  useClickOutside(ref, onClose);
  useEcapeKeyPress(onClose);
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        top: 6vh;
        right: 0;
        height: 94vh;
        width: 100%;
        z-index: 1001;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: ${themeState.themeBG};
        /* box-shadow: var(--modalShadow); */

        div.link-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 2em;

          a {
            padding: 1em;
          }
        }
      `}
    >
      <div className="link-container">
        {NAV_LINKS.map(link => (
          <Link key={link.path} to={link.path}>
            <FontAwesomeIcon icon={link.icon} />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

FullPageMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
