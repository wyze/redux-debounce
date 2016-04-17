import { applyMiddleware, createStore } from 'redux'
import createMiddleware from './middleware'
import reducers from './reducers'

export default () =>
  applyMiddleware(...createMiddleware())(createStore)(reducers)
