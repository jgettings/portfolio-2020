import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DarkThemeIcon from '@material-ui/icons/NightsStay';
import LightThemeIcon from '@material-ui/icons/WbSunny';
import defaultThemeCheck from './defaultThemeCheck';
import modes from './modes';


const ThemeToggle = ({ themePreference, toggleDarkTheme }) => {
  const themeMode = defaultThemeCheck(themePreference);
  const Icon = themeMode === modes.dark ? DarkThemeIcon : LightThemeIcon;

  return (
    <div>
      <IconButton
        aria-label={`Switch to ${modes.opposite(themeMode)} theme`}
        onClick={toggleDarkTheme}
        color="primary"
      >
        <Icon />
      </IconButton>
    </div>
  );
};


ThemeToggle.propTypes = {
  themePreference: PropTypes.string.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  themePreference: state.theme.mode,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkTheme: () => dispatch({ type: 'TOGGLE_DARK_THEME' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
