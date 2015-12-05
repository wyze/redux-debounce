import React from 'react';

const Input = ({ onChange, value }) => (
  <div>
    <label><strong>Type here: </strong></label>
    <input
      defaultValue={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
