import { shallow } from 'enzyme'
import React from 'react'
import Spacer from '../../src/components/Spacer.jsx'
import test from 'ava'

test('renders', t => {
  const component = shallow(<Spacer />)

  t.deepEqual(component.prop('style'), { height: '1em' })
})
