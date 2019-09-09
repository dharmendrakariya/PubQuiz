import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleAnswer = this.props.handleAnswer
    this.answer = null
  }

  handleFormChange = (e) => this.answer = e.target.value
  handleSubmit = (e) => {
    e.preventDefault()
    this.handleAnswer(this.answer)
  }

  render() {
    const question = this.props.question
    const choices = question.choices

    return (
      <div>
        <div>{question.text}</div>
        <form onSubmit={this.handleSubmit} data-testid="form">
          { choices.map((choice, index) =>
            <div key={index}>
              <input id={choice} name="answer" type="radio" value={choice} onChange={this.handleFormChange} />
              <label htmlFor={choice}>{choice}</label>
            </div>
          ) }
          <button type="submit">Submit Answer</button>
        </form>
      </div>
    )
  }
}
