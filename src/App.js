import React from 'react';
import styles from './App.module.scss';
import Quiz from './components/Quiz';
import QuizSelection from './components/QuizSelection';

import quizIndex from './quizzes/quiz-index.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.index = quizIndex
    this.state = {
      quizzes: this.loadQuizzes(this.index),
      selectedQuiz: null
    }

    this.handleQuizSelection = this.handleQuizSelection.bind(this)
  }

  loadQuizzes(index) {
    const quizzes = {}
    index.map((q) => quizzes[q.id] = require('./quizzes/' + q.file) )
    return quizzes
  }

  handleQuizSelection(id) {
    this.setState({selectedQuiz: this.state.quizzes[id]})
  }

  render() {
    this.component = <QuizSelection index={this.index} handleQuizSelection={this.handleQuizSelection} />

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
