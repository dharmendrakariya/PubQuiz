import React from 'react';
import './App.css';
import Quiz from './components/Quiz';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.questions = [{
      id: 'unique_id_1',
      text: 'What is the answer to life, the universe and everything?',
      choices: ['40', '41', '42', '43'],
      answer: '42',
      playerAnswer: null,
      timeLimitInSeconds: 10
    }, {
      id: 'unique_id_2',
      text: 'What is the name of the Colour of Magic?',
      choices: ['Octopus', 'Octarine', 'Ocarina', 'Octagon'],
      answer: 'Octarine',
      playerAnswer: null,
      timeLimitInSeconds: 5
    }]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          PubQuiz App
        </header>
        <Quiz questions={this.questions}/>
      </div>
    )
  }
}
