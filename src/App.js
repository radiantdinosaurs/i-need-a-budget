import React, { useReducer } from 'react';
// TODO: Add in PropTypes
// import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// TODO: Fix dependency cycle
import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';
// import Budget from './components/Budget/Budget';

import { THEME } from './constants/styles';

import './App.css';

export const AppContext = React.createContext();

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const initialState = { isMobileDrawerOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MOBILE_DRAWER':
      return { isMobileDrawerOpen: !state.isMobileDrawerOpen };
    default:
      throw new Error();
  }
}

function App() {
  const { root } = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <div className={root}>
          <CssBaseline />
          <AppContext.Provider value={{ state, dispatch }}>
            <NavigationBar />
            <NavigationDrawer />
          </AppContext.Provider>
        </div>
      </ThemeProvider>
    </Router>
  );
}

App.propTypes = {};

export default App;
