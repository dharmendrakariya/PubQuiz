import React, { Component } from 'react'
import Question from './Question'

export default class Quiz extends Component {
  constructor(props) {
    super(props)

    this.handleAnswer = this.handleAnswer.bind(this)
    this.state = {
      question: {
        text: 'What is the answer to life, the universe and everything?',
        choices: ['40', '41', '42', '43']
      },
      showQuestion: true
    }
  }

  handleAnswer(answer) {
    this.setState({ question: { answer }, showQuestion: false })
  }

  render() {
    if (this.state.showQuestion) {
      return (
        <Question question={this.state.question} handleAnswer={this.handleAnswer} />
      )
    }

    return (
      <div>Results</div>
    )
  }
}
