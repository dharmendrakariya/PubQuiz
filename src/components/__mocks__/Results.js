import React from 'react'

const Results = (props) => (
  <div>
    <p>MockedResults</p>
    <p>Question: {props.question.text}</p>
    <p>UserAnswer: {props.question.userAnswer ? props.question.userAnswer : 'null'}</p>
  </div>
)

export default Results;
