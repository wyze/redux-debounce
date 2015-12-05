import Spacer from '../../src/components/Spacer.jsx';
import render from '../_render';
import test from 'ava';

test('renders', async t => {
  const { same } = t;
  const component = render(Spacer);

  same(component.props.style, { height: '1em' });
});
