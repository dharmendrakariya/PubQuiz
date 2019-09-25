import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props) {
    super(props)

    this.handlePlayerAnswer = this.props.handlePlayerAnswer
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(e) {
    this.handlePlayerAnswer(e.target.value)
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
        </form>
      </div>
    )
  }
}
