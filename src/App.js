import React from 'react';
import questions from './questions.json';
import Quiz from './components/Quiz';
import styles from './App.module.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          PubQuiz
        </header>
        <main className={styles.main}>
          <Quiz questions={this.state.questions}/>
        </main>
      </div>
    )
  }
}
