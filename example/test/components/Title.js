import Title from '../../src/components/Title.jsx';
import render from '../_render';
import test from 'ava';

test('renders a value', async t => {
  const { is } = t;
  const component = render(Title);

  is(component.textIn('h1'), 'redux-debounce demo');
});
