/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useThemeContext } from '../context/theme';

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
  const { themeState } = useThemeContext();

  return (
    <StyledButton theme={themeState}>
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
        theme={themeState}
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
    color: ${props => props.theme.themeBG};
    background-color: ${props => props.theme.themeAccentColor};
    border: none;

    :hover {
      filter: brightness(120%);
    }
  }

  button.secondary {
    font-weight: normal;
    color: ${props => props.theme.themeSecondaryTextColor};
    background-color: ${props => props.theme.themeSecondaryTextColor};
    border: none;

    :hover {
      filter: brightness(120%);
    }
  }

  button.outline {
    background: none;
    color: var(--white);
    border: 1px solid var(--white);

    :hover {
      background-color: var(--black);
      color: ${props => props.theme.themeAccentColor};
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
    color: ${props => props.theme.themeTextColor};
    border: none;

    :hover {
      color: ${props => props.theme.themeAccentColor};
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
