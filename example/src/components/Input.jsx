import React, { PropTypes } from 'react'

const Input = ({ onChange, value }) => (
  <div>
    <label><strong>Type here: </strong></label>
    <input
      defaultValue={value}
      onChange={onChange}
    />
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input
