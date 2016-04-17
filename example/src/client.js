import { Provider } from 'react-redux'
import { render } from 'react-dom'
import AppContainer from './containers/AppContainer'
import React from 'react'
import createStore from './redux'

const store = createStore()

render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('root'))
