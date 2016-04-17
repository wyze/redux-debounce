import createStore from '../../src/redux'
import test from 'ava'

test('creates a store', t => {
  const { dispatch, subscribe, getState } = createStore()

  t.is(typeof dispatch, 'function')
  t.is(typeof subscribe, 'function')
  t.is(typeof getState, 'function')
})
