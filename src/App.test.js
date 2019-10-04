import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Quiz from './components/Quiz';
import SelectionQuiz from './components/QuizSelection';

jest.mock('./components/Quiz')
jest.mock('./components/QuizSelection')

describe(App, () => {
  it('renders the app', () => {
    const { queryByText } = render(<App />)
    expect(queryByText('PubQuiz')).not.toBeNull()
  })

  it('goes to the QuizSelection when no quiz is selected', () => {
    const { queryByText } = render(<App />)

    expect(queryByText('MockedQuizSelection')).not.toBeNull()
    expect(queryByText('MockedQuiz')).toBeNull()
  })

  it('goes to the Quiz when quiz is selected', () => {
    const { queryByText } = render(<App />)

    fireEvent.click(queryByText('Select'))

    expect(queryByText('MockedQuizSelection')).toBeNull()
    expect(queryByText('MockedQuiz')).not.toBeNull()
  })
})
