import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results';

describe(Results, () => {
  const question = {
    text: 'What is the answer to life, the universe and everything?',
    answer: '42'
  }

  it('shows that the question was answered correctly', () => {
    question.userAnswer = '42'

    const { queryByText } = render(<Results question={question} />)
    expect(queryByText('Correct!')).not.toBeNull()
  })

  it('shows that the question was answered incorrectly', () => {
    question.userAnswer = '43'

    const { queryByText } = render(<Results question={question} />)
    expect(queryByText('Incorrect')).not.toBeNull()
  })
})
