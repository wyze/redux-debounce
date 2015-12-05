import AppContainer from './containers/AppContainer';
import createStore from './redux';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const store = createStore();

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('root'));
