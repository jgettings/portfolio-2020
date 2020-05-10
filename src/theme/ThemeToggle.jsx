import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { FaCloudMoon as DarkThemeIcon, FaCloudSun as LightThemeIcon } from 'react-icons/fa';
import Tooltip from '@material-ui/core/Tooltip';
import defaultThemeCheck from './defaultThemeCheck';
import modes from './modes';


const ThemeToggle = ({ themePreference, toggleDarkTheme }) => {
  const themeMode = defaultThemeCheck(themePreference);
  const Icon = themeMode === modes.dark ? DarkThemeIcon : LightThemeIcon;

  const title = `Switch to ${modes.opposite(themeMode)} theme`;

  return (
    <Tooltip title={title}>
      <IconButton
        aria-label={title}
        onClick={toggleDarkTheme}
        color="primary"
      >
        <Icon />
      </IconButton>
    </Tooltip>
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
