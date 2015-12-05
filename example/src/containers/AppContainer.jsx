import * as exampleActions from '../redux/reducers/example';
import Input from '../components/Input';
import Output from '../components/Output';
import React from 'react';
import Spacer from '../components/Spacer';
import Title from '../components/Title';
import { connect } from 'react-redux';

export const AppContainer = ({ input, value }) => (
  <div>
    <Title />
    <Spacer />
    <Input
      onChange={({ target }) => input(target.value)}
      value={value}
    />
    <Spacer />
    <Output value={value} />
  </div>
);

export const mapStateToProps = ({ example }) => ({
  value: example,
});

export default connect(mapStateToProps, exampleActions)(AppContainer);
