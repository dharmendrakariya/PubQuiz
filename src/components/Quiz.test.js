import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';
import Question from './Question';
import Results from './Results';

jest.mock('./Results')
jest.mock('./TimeLimiter')

describe(Quiz, () => {
  const text = 'What is the answer to life, the universe and everything?'

  it('renders a question', () => {
    const { queryByText } = render(<Quiz />)
    expect(queryByText(text)).not.toBeNull()
  })

  it('renders a time limiter', () => {
    const { queryByText, debug } = render(<Quiz />)
    expect(queryByText('MockedTimeLimiter')).not.toBeNull()
    expect(queryByText('totalTimeInSeconds: 10')).not.toBeNull()
  })

  it('goes to the results screen passing the question', async () => {
    const { queryByText, getByTestId, getByLabelText } = render(<Quiz />)

    await fireEvent.click(getByLabelText('42'))
    await fireEvent.submit(getByTestId('form'))

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question: ' + text)).not.toBeNull()
    expect(queryByText('UserAnswer: 42')).not.toBeNull()
  })

  it('goes to the results screen without answer', async() => {
    const { queryByText, getByTestId, debug } = render(<Quiz />)

    await fireEvent.submit(getByTestId('form'))

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question: ' + text)).not.toBeNull()
    expect(queryByText('UserAnswer: null')).not.toBeNull()
  })
})
