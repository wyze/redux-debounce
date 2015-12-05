import createMiddleware from './middleware';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';

export default () =>
  applyMiddleware(...createMiddleware())(createStore)(reducers);
