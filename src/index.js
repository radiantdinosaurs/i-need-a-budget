/** ****************************
 * Dependencies
 ***************************** */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/** ****************************
 * Components
 ***************************** */
import AuthenticationProvider from './authentication/Authentication';
import EntryPoint from './entryPoint/EntryPoint';

/** ****************************
 * State
 ***************************** */
import rootReducer from './common/state/rootReducer';

/** ****************************
 * Styles
 ***************************** */
import './index.css';

/** ****************************
 * Other
 ***************************** */
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <AuthenticationProvider>
      <Provider store={store}>
        <EntryPoint />
      </Provider>
    </AuthenticationProvider>
  </Router>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
