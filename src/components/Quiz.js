import React from 'react'
import Question from './Question'
import Results from './Results'
import TimeLimiter from './TimeLimiter'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: {
        text: 'What is the answer to life, the universe and everything?',
        choices: ['40', '41', '42', '43'],
        answer: '42',
        playerAnswer: null,
        timeLimitInSeconds: 10
      },
      showQuestion: true
    }

    this.timerCallback = this.timerCallback.bind(this)
    this.handlePlayerAnswer = this.handlePlayerAnswer.bind(this)
  }

  handlePlayerAnswer(playerAnswer) {
    const question = this.state.question
    question.playerAnswer = playerAnswer

    this.setState({
      question
    })
  }

  timerCallback() {
    this.setState({
      showQuestion: false
    })
  }

  render() {
    if (this.state.showQuestion) {
      return (
        <div>
          <TimeLimiter totalTimeInSeconds={this.state.question.timeLimitInSeconds} callbackFunction={this.timerCallback}/>
          <Question question={this.state.question} handlePlayerAnswer={this.handlePlayerAnswer} />
        </div>
      )
    }

    return (
      <Results question={this.state.question} />
    )
  }
}
