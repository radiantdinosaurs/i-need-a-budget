import React, { useReducer } from 'react';
import Context from './utils/context';
import Routes from './routes';
import * as ACTIONS from './store/actions/actions';

import * as ViewReducer from './store/reducers/viewReducer';

const ContextState = () => {
  /*
    Auth Reducer
  */
  const [stateViewReducer, dispatchViewReducer] = useReducer(ViewReducer.ViewReducer,
    ViewReducer.initialState);


  const handleToggleMobileDrawer = () => {
    dispatchViewReducer(ACTIONS.TOGGLE_MOBILE_DRAWER());
  };

  return (
    <>
      <Context.Provider
        value={{
          isMobileDrawerOpen: stateViewReducer.isMobileDrawerOpen,
          handleToggleMobileDrawer: () => handleToggleMobileDrawer(),
        }}
      >
        <Routes />
      </Context.Provider>
    </>
  );
};


export default ContextState;
