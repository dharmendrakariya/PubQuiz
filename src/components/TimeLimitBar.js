import React from 'react';
import './TimerLimitBar.css';

export default class TimeLimitBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { timeLeft: 10, timeTotal: 10 }

    this.timer = this.timer.bind(this)
    this.stop = this.stop.bind(this)
  }

  componentDidMount() {
    this.setState({intervalId: setInterval(this.timer, 1000)});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    const timeLeft = this.state.timeLeft - 1
    this.widthPercentage = timeLeft / this.state.timeTotal * 100;

    if(timeLeft < 0) {
      this.stop()
    }

    this.setState({timeLeft})
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="progress">
        <div className="progress-bar" style={{width: this.widthPercentage + '%'}} />
      </div>
    )
  }
}
