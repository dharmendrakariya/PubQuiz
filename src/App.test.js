import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Quiz from './components/Quiz';

jest.mock('./components/Quiz')

describe(App, () => {
  it('renders the app', () => {
    const { queryByText } = render(<App />)
    expect(queryByText('PubQuiz App')).not.toBeNull()
  })

  it('renders the Quiz', () => {
    const { queryByText } = render(<App />)
    expect(queryByText('MockedQuiz')).not.toBeNull()
  })
})
