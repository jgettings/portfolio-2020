import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './index';
import defaultThemeCheck from './defaultThemeCheck';


const ThemedApp = ({ themePreference, children }) => (
  <ThemeProvider theme={theme(defaultThemeCheck(themePreference))}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);


ThemedApp.propTypes = {
  themePreference: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const mapStateToProps = (state) => ({
  themePreference: state.theme.mode,
});

export default connect(mapStateToProps)(ThemedApp);
