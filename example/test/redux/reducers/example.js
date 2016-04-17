import reducer, { input } from '../../../src/redux/reducers/example'
import test from 'ava'

test('reduces', t => {
  const state = reducer()

  t.is(state, '')

  const action = input('something')
  const newState = reducer(state, action)

  t.is(newState, 'something')
})

test('has input action', t => {
  const action = input('text')

  t.is(action.payload, 'text')
  t.deepEqual(action.meta, { debounce: 'simple' })
  t.truthy(action.type)
})
