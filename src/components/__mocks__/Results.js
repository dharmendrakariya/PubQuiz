import React from 'react'

const Results = (props) => (
  <div>
    <p>MockedResults</p>
    <p>Question: {props.question.text}</p>
    <p>UserAnswer: {props.question.playerAnswer ? props.question.playerAnswer : 'null'}</p>
  </div>
)

export default Results;
