import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)

    this.question = this.props.question
  }

  answeredCorrectly() {
    return this.question.answer === this.question.userAnswer
  }

  render() {
    const text = this.answeredCorrectly() ? 'Correct!' : 'Incorrect'
    return (
      <div>{text}</div>
    )
  }
}

export default Results;
