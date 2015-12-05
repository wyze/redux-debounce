import { createElement } from 'react';
import { shallowRender } from 'skin-deep';

const render = ( component, props ) =>
  shallowRender(createElement(component, props));

export default render;
