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
        userAnswer: null,
        timeLimitInSeconds: 10
      },
      showQuestion: true
    }

    this.handleAnswer = this.handleAnswer.bind(this)
    this.timerCallback = this.timerCallback.bind(this)
  }

  handleAnswer(answer) {
    const question = this.state.question
    question.userAnswer = answer

    this.setState({
      question,
      showQuestion: false
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
          <TimeLimiter totalTimeInSeconds={10} callbackFunction={this.timerCallback}/>
          <Question question={this.state.question} handleAnswer={this.handleAnswer} />
        </div>
      )
    }

    return (
      <Results question={this.state.question} />
    )
  }
}
