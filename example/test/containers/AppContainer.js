import render from '../_render';
import test from 'ava';
import {
  AppContainer,
  mapStateToProps,
} from '../../src/containers/AppContainer.jsx';

test('renders', async t => {
  const { is, ok } = t;
  const component = render(AppContainer, { value: 'Hi!' });

  ok(component.subTree('Title'));
  ok(component.subTree('Spacer'));
  ok(component.subTree('Input'));
  ok(component.subTree('Output'));
  is(component.subTree('Output').props.value, 'Hi!');
});

test('maps state to props', async t => {
  const { same } = t;
  const props = mapStateToProps({ example: 'Something.' });

  same(props, { value: 'Something.' });
});
