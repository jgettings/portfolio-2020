import useMediaQuery from '@material-ui/core/useMediaQuery';
import modes from './modes';

// If not set explicitly, default to the browser dark theme preference
const defaultThemeCheck = (themePreference) => {
  if (themePreference) {
    return themePreference;
  }

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return prefersDarkMode ? modes.dark : modes.light;
};

export default defaultThemeCheck;
