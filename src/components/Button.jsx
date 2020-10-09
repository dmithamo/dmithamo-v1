/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

export default function Button({
  children,
  type,
  category,
  value,
  onClick,
  title,
  disabled,
  alignCenter,
  classes,
}) {
  return (
    <StyledButton>
      <button
        title={title}
        className={`${classes} ${category} ${disabled ? 'disabled' : ''}`}
        onClick={onClick}
        type={type}
        value={value}
        disabled={disabled}
        style={{
          justifyContent: `${alignCenter ? 'center' : 'space-between'}`,
        }}
      >
        {value || children}
      </button>
    </StyledButton>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.string,
  category: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'link',
    'outline',
  ]),
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  category: 'primary',
  value: '',
  title: '',
  children: null,
  disabled: false,
  alignCenter: false,
  classes: '',
};

const StyledButton = styled.span`
  width: fit-content;
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: inherit;
    padding: 0.85em 1.1em;
    font-weight: bolder;
    outline: none;
    border-radius: 5px;
    cursor: pointer;

    svg {
      font-size: 1.3em;
    }
  }

  button.primary {
    color: var(--themeBG);
    background-color: var(--themeAccentColor);
    border: none;

    :hover {
      background-color: var(--themeTextColor);
    }
  }

  button.secondary {
    font-weight: normal;
    color: var(--black);
    background-color: var(--grey);
    border: none;

    :hover {
      background-color: var(--black);
      color: var(--themeAccentColor);
    }
  }

  button.outline {
    background: none;
    color: var(--white);
    border: 1px solid var(--white);

    :hover {
      background-color: var(--black);
      color: var(--themeAccentColor);
      border: 1px solid var(--black);
    }
  }

  button.danger {
    color: var(--red);
    background-color: none;
    border: var(--red);

    :hover {
      background-color: var(--red);
      color: var(--white);
    }
  }

  button.link {
    padding: 0;
    background: none;
    color: var(--themeTextColor);
    border: none;

    :hover {
      color: var(--themeAccentColor);
      font-weight: bold;
    }
  }

  button.disabled {
    cursor: not-allowed;
    color: var(--black);
    background-color: var(--grey);
    :hover {
      color: var(--grey);
      background-color: var(--grey);
    }
  }
`;
