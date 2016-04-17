import * as exampleActions from '../redux/reducers/example'
import { connect } from 'react-redux'
import Input from '../components/Input'
import Output from '../components/Output'
import React, { PropTypes } from 'react'
import Spacer from '../components/Spacer'
import Title from '../components/Title'

export const AppContainer = ({ input, value }) => (
  <div>
    <Title />
    <Spacer />
    <Input
      value={value}
      onChange={({ target }) => input(target.value)}
    />
    <Spacer />
    <Output value={value} />
  </div>
)

AppContainer.propTypes = {
  input: PropTypes.func,
  value: PropTypes.string,
}

export const mapStateToProps = ({ example }) => ({
  value: example,
})

export default connect(mapStateToProps, exampleActions)(AppContainer)
