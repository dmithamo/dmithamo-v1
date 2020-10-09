import React, { useEffect, useMemo, useReducer } from 'react';
import reducer, { initialThemeState } from './reducer';
import { setDarkTheme, setLightTheme } from './actions';

const ThemeContext = React.createContext(initialThemeState);
export const useThemeContext = () => React.useContext(ThemeContext);

export default function ThemeContextProvider(props) {
  const cachedThemeState = JSON.parse(localStorage.getItem('theme'));
  const [themeState, dispatch] = React.useReducer(
    reducer,
    cachedThemeState || initialThemeState
  );

  /* Cache state in local storage to reapply on (manual) page refresh */
  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeState));
  }, [themeState]);

  /**
   * @description Dispatch action to toggle dark mode on/off
   */
  function onDarkModeToggle(isDark) {
    dispatch(isDark ? setDarkTheme() : setLightTheme());
  }

  const value = React.useMemo(() => ({ themeState, onDarkModeToggle }), [
    themeState,
  ]);

  return <ThemeContext.Provider value={value} {...props} />;
}
