import {
  AppContainer,
  mapStateToProps,
} from '../../src/containers/AppContainer.jsx'
import { shallow } from 'enzyme'
import React from 'react'
import test from 'ava'

test('renders', t => {
  const component = shallow(<AppContainer value="Hi!" />)

  t.truthy(component.find('Title').length)
  t.truthy(component.find('Spacer').length)
  t.truthy(component.find('Input').length)
  t.truthy(component.find('Output').length)
  t.is(component.find('Output').prop('value'), 'Hi!')
})

test('maps state to props', t => {
  const props = mapStateToProps({ example: 'Something.' })

  t.deepEqual(props, { value: 'Something.' })
})
