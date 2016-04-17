import { shallow } from 'enzyme'
import React from 'react'
import Title from '../../src/components/Title.jsx'
import test from 'ava'

test('renders a value', t => {
  const component = shallow(<Title />)

  t.is(component.find('h1').text(), 'redux-debounce demo')
})
