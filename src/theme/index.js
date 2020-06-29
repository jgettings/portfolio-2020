import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import modes from './modes';

const decorativeFont = "'Cookie', sans-serif";

const colors = {
  [modes.dark]: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: green[400],
    },
  },
  [modes.light]: {
    primary: purple,
    secondary: {
      main: green[600],
    },
  },
};

const theme = (mode) => createMuiTheme({
  palette: {
    type: mode,
    ...colors[mode],
  },
  typography: {
    h2: {
      fontFamily: decorativeFont,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1em',
      },
    },
  },
});

export default (mode) => responsiveFontSizes(theme(mode));
