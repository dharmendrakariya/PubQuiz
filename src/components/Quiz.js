import React, { Component } from 'react'
import Question from './Question'
import Results from './Results'

export default class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: {
        text: 'What is the answer to life, the universe and everything?',
        choices: ['40', '41', '42', '43'],
        answer: '42'
      },
      showQuestion: true
    }

    this.handleAnswer = this.handleAnswer.bind(this)
  }

  handleAnswer(answer) {
    const question = this.state.question
    question.userAnswer = answer

    this.setState({
      question,
      showQuestion: false
    })
  }

  render() {
    if (this.state.showQuestion) {
      return (
        <Question question={this.state.question} handleAnswer={this.handleAnswer} />
      )
    }

    return (
      <Results question={this.state.question} />
    )
  }
}
