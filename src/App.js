import React from 'react';
import questions from './questions.json';
import './App.css';
import Quiz from './components/Quiz';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          PubQuiz App
        </header>
        <Quiz questions={this.state.questions}/>
      </div>
    )
  }
}
