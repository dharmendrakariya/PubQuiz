import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe(App, () => {
  it('renders the app', () => {
    const { queryByText } = render(<App />)
    expect(queryByText('PubQuiz App')).not.toBeNull()
  })
})
