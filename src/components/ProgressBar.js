import React from 'react'

const ProgressBar = (props) => (
  <div className="progress">
    <div className="progress-bar" style={{width: props.percentage + '%'}} />
  </div>
)

export default ProgressBar;
