import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import QuizSelection from './QuizSelection'

describe(QuizSelection, () => {
  const text = "What quiz would you like to play?"
  const quizIndex = [
    {
      "id": "1",
      "name": "Nerd Quiz",
      "file": "nerd-quiz.json"
    },
    {
      "id": "2",
      "name": "Rock Quiz",
      "file": "rock-quiz.json"
    }
  ]

  it('asks which quiz the player would like to select', () => {
    const { queryByText } = render(<QuizSelection quizIndex={quizIndex} />)
    expect(queryByText(text)).not.toBeNull()
  })

  it('shows all the quizes', () => {
    const { queryByText } = render(<QuizSelection quizIndex={quizIndex} />)
    expect(queryByText(quizIndex[0].name)).not.toBeNull()
    expect(queryByText(quizIndex[1].name)).not.toBeNull()
  })

  it('selects a quiz', async () => {
    const callback = jest.fn()
    const { getByText } = render(<QuizSelection quizIndex={quizIndex} handleQuizSelection={callback} />)

    await fireEvent.click(getByText(quizIndex[1].name))

    expect(callback).toHaveBeenCalledWith(quizIndex[1].id)
  })
})
