import React from 'react';
import styles from './App.module.scss';
import Quiz from './components/Quiz';
import QuizSelection from './components/QuizSelection';

import quiz from './quizzes/nerd-quiz.json';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedQuiz: null
    }

    this.handleSelectedQuiz = this.handleSelectedQuiz.bind(this)
  }

  handleSelectedQuiz() {
    this.setState({selectedQuiz: quiz})
  }

  render() {
    this.component = <QuizSelection callbackSelected={this.handleSelectedQuiz} />

    this.selectedQuiz = this.state.selectedQuiz
    if (this.selectedQuiz) {
      this.component = <Quiz questions={this.selectedQuiz} />
    }

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          PubQuiz
        </header>
        <main className={styles.main}>
          { this.component }
        </main>
      </div>
    )
  }
}
