import createStore from '../../src/redux';
import test from 'ava';

test('creates a store', async t => {
  const { is } = t;
  const { dispatch, subscribe, getState } = createStore();

  is(typeof dispatch, 'function');
  is(typeof subscribe, 'function');
  is(typeof getState, 'function');
});
