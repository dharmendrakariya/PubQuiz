import React from 'react'

export default class QuizSelection extends React.Component {
  constructor(props) {
    super(props)

    this.quizIndex = props.quizIndex
    this.handleQuizSelection = props.handleQuizSelection

    this.handleOnClick = this.handleOnClick.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  handleOnClick(e) {
    this.handleQuizSelection(e.target.value)
  }

  render() {
    return (
      <div>
        <div>What quiz would you like to play?</div>
        { this.quizIndex.map(this.renderButton) }
      </div>
    )
  }

  renderButton(quiz) {
    return (
      <button key={quiz.name} value={quiz.id} onClick={this.handleOnClick}>{quiz.name}</button>
    )
  }
}
