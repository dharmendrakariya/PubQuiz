import React from 'react'
import Question from './Question'
import Results from './Results'
import TimeLimiter from './TimeLimiter'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)

    const question1 = {
      id: 'unique_id_1',
      text: 'What is the answer to life, the universe and everything?',
      choices: ['40', '41', '42', '43'],
      answer: '42',
      playerAnswer: null,
      timeLimitInSeconds: 10
    }
    const question2 = {
      id: 'unique_id_2',
      text: 'What is the name of the Colour of Magic?',
      choices: ['Octopus', 'Octarine', 'Ocarina', 'Octagon'],
      answer: 'Octarine',
      playerAnswer: null,
      timeLimitInSeconds: 5
    }

    this.state = {
      questions: [question1, question2],
      currentQuestionIndex: 0
    }

    this.timerCallback = this.timerCallback.bind(this)
    this.handlePlayerAnswer = this.handlePlayerAnswer.bind(this)
  }

  handlePlayerAnswer(playerAnswer) {
    const index = this.state.currentQuestionIndex

    const questions = this.state.questions
    questions[index].playerAnswer = playerAnswer

    this.setState({
      questions
    })
  }

  timerCallback() {
    const index = this.state.currentQuestionIndex

    this.setState({
      currentQuestionIndex: index + 1,
      showResults: (index + 1 === this.state.questions.length)
    })
  }

  render() {
    if (this.state.showResults) {
      return (
        <Results questions={this.state.questions} />
      )
    }

    const question = this.state.questions[this.state.currentQuestionIndex]
    return (
      <div key={question.id}>
        <TimeLimiter totalTimeInSeconds={question.timeLimitInSeconds} callbackFunction={this.timerCallback}/>
        <Question question={question} handlePlayerAnswer={this.handlePlayerAnswer} />
      </div>
    )
  }
}
