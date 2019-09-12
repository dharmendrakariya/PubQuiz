import React from 'react';

export default class TimeLimitBar extends React.Component {
  constructor(props) {
    super(props)

    this.style = {
      backgroundColor: 'blue',
      width: '100%',
      height: '2em'
    }
    this.state = { counter: 0 }

    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div style={this.style}>{this.state.counter}</div>
    )
  }
}
