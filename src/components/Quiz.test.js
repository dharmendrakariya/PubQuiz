import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';
import Results from './Results';

jest.mock('./Results')

describe(Quiz, () => {
  const text = 'What is the answer to life, the universe and everything?'

  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  it('renders a question', () => {
    const { queryByText } = render(<Quiz />)
    expect(queryByText(text)).not.toBeNull()
  })

  it('goes to the results screen passing the question', async () => {
    const { queryByText, getByLabelText, debug } = render(<Quiz />)

    await fireEvent.click(getByLabelText('42'))

    jest.advanceTimersByTime(11000)

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question: ' + text)).not.toBeNull()
    expect(queryByText('UserAnswer: 42')).not.toBeNull()
  })

  it('goes to the results screen without answer', async() => {
    const { queryByText, getByTestId, debug } = render(<Quiz />)

    jest.advanceTimersByTime(11000)

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question: ' + text)).not.toBeNull()
    expect(queryByText('UserAnswer: null')).not.toBeNull()
  })
})
