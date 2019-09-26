import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';
import Results from './Results';

jest.mock('./Results')

describe(Quiz, () => {
  const question1 = 'What is the answer to life, the universe and everything?'
  const question2 = 'What is the name of the Colour of Magic?'

  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  it('renders a question', () => {
    const { queryByText } = render(<Quiz />)
    expect(queryByText(question1)).not.toBeNull()
  })

  it('goes to the next question', async () => {
    const { queryByText, getByLabelText } = render(<Quiz />)

    await fireEvent.click(getByLabelText('42'))
    jest.advanceTimersByTime(11000)

    expect(queryByText(question2)).not.toBeNull()
  })

  it('goes to the results screen, passing the answers', async () => {
    const { queryByText, getByLabelText } = render(<Quiz />)

    await fireEvent.click(getByLabelText('42'))
    jest.advanceTimersByTime(11000)
    await fireEvent.click(getByLabelText('Octarine'))
    jest.advanceTimersByTime(11000)

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question0: ' + question1)).not.toBeNull()
    expect(queryByText('PlayerAnswer0: 42')).not.toBeNull()
    expect(queryByText('Question1: ' + question2)).not.toBeNull()
    expect(queryByText('PlayerAnswer1: Octarine')).not.toBeNull()
  })

  xit('goes to the results screen without answer', async() => {
    const { queryByText, getByTestId } = render(<Quiz />)

    jest.advanceTimersByTime(11000)

    expect(queryByText('MockedResults')).not.toBeNull()
    expect(queryByText('Question: ' + question1)).not.toBeNull()
    expect(queryByText('UserAnswer: null')).not.toBeNull()
  })
})
