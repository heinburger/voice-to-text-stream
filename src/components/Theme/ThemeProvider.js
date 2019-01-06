import React from 'react';
import { inject, observer } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

const ThemeProvider = ({ view, children }) => (
  <MuiThemeProvider theme={createMuiTheme({
    drawerWidth: 260,
    typography: {
      useNextVariants: true,
    },
    bodyColor: {
      dark: grey['A400'],
      light: grey[50],
    },
    palette: {
      primary: teal,
      type: view.lightThemeActive ? 'light' : 'dark',
    },
  })}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  view: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default inject('view')(observer(ThemeProvider));
