import React from 'react'

const QuizSelection = (props) => (
  <div>
    <p>RealQuizSelection</p>
    <button onClick={() => props.callbackSelected('./quizzes/nerd-quiz.json')}>Select</button>
  </div>
)

export default QuizSelection;
