import reducer, { input } from '../../../src/redux/reducers/example';
import test from 'ava';

test('reduces', async t => {
  const { is } = t;
  const state = reducer();

  is(state, '');

  const action = input('something');
  const newState = reducer(state, action);

  is(newState, 'something');
});

test('has input action', async t => {
  const { is, ok, same } = t;
  const action = input('text');

  is(action.payload, 'text');
  same(action.meta, { debounce: 'simple' });
  ok(action.type);
});
