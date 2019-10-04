import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import QuizSelection from './QuizSelection'

describe(QuizSelection, () => {
  it('renders the damn thing', () => {
    const { queryByText } = render(<QuizSelection />)
    expect(queryByText('RealQuizSelection')).not.toBeNull()
  })
})
