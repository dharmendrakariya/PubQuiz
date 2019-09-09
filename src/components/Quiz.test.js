import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quiz from './Quiz';
import Question from './Question';

describe(Quiz, () => {
  it('renders a question', () => {
    const { queryByText } = render(<Quiz />)
    expect(queryByText('What is the answer to life, the universe and everything?')).not.toBeNull()
  })

  it('goes to the results screen', async () => {
    const { queryByText, getByTestId, getByLabelText } = render(<Quiz />)

    await fireEvent.click(getByLabelText('42'))
    await fireEvent.submit(getByTestId('form'))

    expect(queryByText('Results')).not.toBeNull()
  })
})
