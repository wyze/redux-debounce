import { shallow } from 'enzyme'
import Output from '../../src/components/Output.jsx'
import React from 'react'
import test from 'ava'

test('renders a value', async t => {
  const component = shallow(<Output value="Hi!" />)

  t.is(component.find('span').text(), 'Hi!')
})
