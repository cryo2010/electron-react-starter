import Application from './application';
import {createStore} from 'redux';
import {Provider as StoreProvider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';

const initialState = {
  user: null
};

function reducer(prevState = initialState, action) {
  console.debug('Redux Action: ' + action.type);
  console.debug(action);
  const state = Object.assign({}, prevState);
  if (action.type == actions.SIGN_IN_EVENT) {
    state.user = action.user;   
  }
  if (action.type == actions.SIGN_OUT_EVENT) { 
    state.user = null;
  }
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <StoreProvider store={store}>
    <MuiThemeProvider>
      <Application />
    </MuiThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);

