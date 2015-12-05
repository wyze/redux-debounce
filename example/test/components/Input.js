import Input from '../../src/components/Input.jsx';
import render from '../_render';
import test from 'ava';
import { spy } from 'sinon';

test('renders a value', async t => {
  const { is } = t;
  const component = render(Input, { value: 'Hi!' });

  is(component.findNode('input').props.defaultValue, 'Hi!');
});

test('fires onChange', async t => {
  const { ok } = t;
  const onChange = spy();
  const component = render(Input, { onChange });

  component.fillField('input', 'Hello!');

  ok(onChange.calledWith({ target: { value: 'Hello!' } }));
});
