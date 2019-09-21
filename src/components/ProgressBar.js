import React from 'react'
import './ProgressBar.css'

export default class ProgressBar extends React.Component {
  color() {
    if (this.props.percentage < 20) {
      return 'red'
    }
    if (this.props.percentage < 50) {
      return 'orange'
    }

    return 'green'
  }

  render() {
    const style = {
      width: this.props.percentage + '%'
    }
    const classNames = 'progress-bar ' + this.color()

    return (
      <div className="progress" data-testid="progress">
        <div className={classNames} data-testid="progress-bar" style={style} />
      </div>
    )
  }
}

