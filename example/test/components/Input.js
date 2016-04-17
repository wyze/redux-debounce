import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Input from '../../src/components/Input.jsx'
import React from 'react'
import test from 'ava'

test('renders a value', t => {
  const component = shallow(<Input value="Hi!" />)

  t.is(component.find('input').prop('defaultValue'), 'Hi!')
})

test('fires onChange', t => {
  const onChange = spy()
  const component = shallow(<Input onChange={onChange} />)

  component.find('input').simulate('change', 'Hello!')

  t.truthy(onChange.called)
  t.truthy(onChange.calledWith('Hello!'))
})
