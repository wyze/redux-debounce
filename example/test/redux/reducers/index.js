import reducers from '../../../src/redux/reducers';
import test from 'ava';

test('combines reducers', async t => {
  const { is } = t;
  const reducer = reducers();

  is(reducer.example, '');
});
