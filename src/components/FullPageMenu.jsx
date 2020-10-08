/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

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

          svg {
            margin: 0 0.5em 0 0;
          }
        }

        div.container {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        background-color: var(--darkThemeBG);

        a {
          font-family: var(--primaryFontBold);
          font-size: 1.5em;
          padding: 0.5em 2em;
          width: 100%;
          margin: auto;
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 10px;

          &:hover {
            color: var(--darkThemeAccents);
            background-color: var(--black);
          }
        }
      `}
    >
      <Button category="link" onClick={onClose}>
        <FontAwesomeIcon icon={['far', 'times-circle']} />
        <span>Close</span>
      </Button>
      <div className="container">
        {[
          { path: '/', value: 'home', icon: 'home' },
          { path: '/about', value: 'about', icon: 'info-circle' },
          { path: '/projects', value: 'projects', icon: 'code-branch' },
          { path: '/resume', value: 'resume', icon: 'file-pdf' },
          { path: '/contacts', value: 'get in touch', icon: 'address-card' },
        ].map(link => (
          <Link to={link.path}>
            <span>{link.value}</span>
            <FontAwesomeIcon icon={link.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

FullPageMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
