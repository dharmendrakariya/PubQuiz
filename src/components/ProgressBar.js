import React from 'react'
import styles from './ProgressBar.module.css'

export default class ProgressBar extends React.Component {
  color() {
    if (this.props.percentage < 20) {
      return styles.low
    }
    if (this.props.percentage < 50) {
      return styles.middle
    }

    return styles.high
  }

  render() {
    const style = {
      width: this.props.percentage + '%'
    }
    const classNames = styles.progressBar + ' ' + this.color()

    return (
      <div className={styles.progress} data-testid="progress">
        <div className={classNames} data-testid="progress-bar" style={style} />
      </div>
    )
  }
}

