/** Theme action types */
const DARK_THEME_SELECTED = 'DARK_THEME_SELECTED';
const LIGHT_THEME_SELECTED = 'LIGHT_THEME_SELECTED';
export const TYPES = { DARK_THEME_SELECTED, LIGHT_THEME_SELECTED };

/** Theme actions */
export const setDarkTheme = () => ({ type: DARK_THEME_SELECTED });
export const setLightTheme = () => ({ type: LIGHT_THEME_SELECTED });
