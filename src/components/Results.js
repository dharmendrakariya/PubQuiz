import React, { Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props)

    this.questions = this.props.questions
  }

  answeredCorrectly(question) {
    return question.answer === question.userAnswer
  }

  render() {
    return (
      <div>
        { this.questions.map((q, i) =>
          <p key={i}>Question {i}: { this.answeredCorrectly(q) ? 'Correct!' : 'Incorrect' }</p>
        ) }
      </div>
    )
  }
}

export default Results;
