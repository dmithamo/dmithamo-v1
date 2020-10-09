import { TYPES } from './actions';
export const DARK_THEME_COLORS = {
  themeTextColor: '#ccc',
  themeSecondaryTextColor: '#cccccc80',
  themeBG: '#263238',
  themeAccentColor: '#4ef0e0',
};

export const LIGHT_THEME_COLORS = {
  themeTextColor: '#24272a',
  themeSecondaryTextColor: '#24272a80',
  themeBG: '#ebebeb',
  themeAccentColor: '#124ff8',
};

export const initialThemeState = DARK_THEME_COLORS;

/**
 * @description Update theme state on theme toggle
 * @param {object} prevState
 * @param {object} action
 */
export default function themeReducer(
  prevState = initialThemeState,
  { type, payload = null }
) {
  switch (type) {
    case TYPES.DARK_THEME_SELECTED:
      return { ...prevState, ...DARK_THEME_COLORS };

    case TYPES.LIGHT_THEME_SELECTED:
      return { ...prevState, ...LIGHT_THEME_COLORS };

    default:
      return prevState;
  }
}
