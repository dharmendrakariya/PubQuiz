import React from 'react';
import Quiz from './components/Quiz';
import styles from './App.module.scss';
import quiz from './quizzes/nerd-quiz.json';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quiz
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          PubQuiz
        </header>
        <main className={styles.main}>
          <Quiz questions={this.state.quiz}/>
        </main>
      </div>
    )
  }
}
