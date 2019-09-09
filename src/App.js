import React from 'react';
import './App.css';
import Question from './components/Question';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleAnswer = this.handleAnswer.bind(this)

    this.question = {
      text: 'What is the answer to life, the universe and everything?',
      choices: ['40', '41', '42', '43']
    }
  }

  handleAnswer(answer) {
    console.log(answer)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          PubQuiz App
        </header>
        <Question question={this.question} handleAnswer={this.handleAnswer}/>
      </div>
    )
  }
}
