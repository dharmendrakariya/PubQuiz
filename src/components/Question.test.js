import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Question from './Question';

describe(Question, () => {
  const question = {
    text: 'What is the answer to life, the universe and everything?',
    choices: ['40', '41', '42', '43']
  }

  it('shows the question', () => {
    const { queryByText } = render(<Question question={question} />)

    expect(queryByText(question.text)).not.toBeNull()
  })

  it('shows the choices', () => {
    const { queryByLabelText } = render(<Question question={question} />)

    const choices = question.choices
    expect(queryByLabelText(choices[0])).not.toBeNull()
    expect(queryByLabelText(choices[1])).not.toBeNull()
    expect(queryByLabelText(choices[2])).not.toBeNull()
    expect(queryByLabelText(choices[3])).not.toBeNull()
  })

  it('selects an answer', () => {
    const { getByLabelText } = render(<Question question={question} />)

    const choices = question.choices
    fireEvent.click(getByLabelText('42'))

    expect(getByLabelText('42').checked).toBe(true)
  })

  it("submits the player's answer", () => {
    const mockedHandleAnswer = jest.fn()
    const { getByLabelText, getByTestId } = render(<Question question={question} handleAnswer={mockedHandleAnswer}/>)

    const choices = question.choices
    fireEvent.click(getByLabelText('42'))
    fireEvent.submit(getByTestId('form'))

    expect(mockedHandleAnswer).toBeCalledWith('42')
  })
})
