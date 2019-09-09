import React from 'react';
import './App.css';
import Quiz from './components/Quiz';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          PubQuiz App
        </header>
        <Quiz />
      </div>
    )
  }
}
