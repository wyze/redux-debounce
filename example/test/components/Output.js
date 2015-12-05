import Output from '../../src/components/Output.jsx';
import render from '../_render';
import test from 'ava';

test('renders a value', async t => {
  const { is } = t;
  const component = render(Output, { value: 'Hi!' });

  is(component.textIn('span'), 'Hi!');
});
