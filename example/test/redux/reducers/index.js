import reducers from '../../../src/redux/reducers'
import test from 'ava'

test('combines reducers', t => {
  const reducer = reducers()

  t.is(reducer.example, '')
})
