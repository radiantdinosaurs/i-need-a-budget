/** ****************************
 * Dependencies
 ***************************** */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAuth0 } from '@auth0/auth0-react';

/** ****************************
 * Components
 ***************************** */
import Budget from '../budget/Budget';
import Home from '../home/Home';
import Login from '../login/Login'

/** ****************************
 * Styles
 ***************************** */
import { THEME } from '../common/constants/styles';
import useStyles from './assets/styles';

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ))}
    />
  );
}

function EntryPoint() {
  const { root } = useStyles();
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <div className={root}>
          <CssBaseline />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/budget">
              <Budget />
            </PrivateRoute>
          </Switch>
          {isAuthenticated ? (
            <Redirect to="/budget" />
          )
            : <Redirect to="/login" />}
        </div>
      </ThemeProvider>
    </Router>
  );
}

EntryPoint.propTypes = {};

export default EntryPoint;
