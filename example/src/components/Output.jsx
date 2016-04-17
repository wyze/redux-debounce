import React, { PropTypes } from 'react'

const Output = ({ value }) => (
  <div>
    <label><strong>You typed: </strong></label>
    <span>{value}</span>
  </div>
)

Output.propTypes = {
  value: PropTypes.string,
}

export default Output
