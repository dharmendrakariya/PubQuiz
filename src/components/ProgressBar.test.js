import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe(ProgressBar, () => {
  it('uses the percentage as width', () => {
    const { getByTestId } = render(<ProgressBar percentage={42} />)

    expect(getByTestId('progress-bar')).toHaveStyle('width: 42%;')
  })

  it("is green when it's 100%", () => {
    const { getByTestId } = render(<ProgressBar percentage={100} />)
    expect(getByTestId('progress-bar')).toHaveClass('green')
  })

  it("is green when it's 50%", () => {
    const { getByTestId } = render(<ProgressBar percentage={50} />)
    expect(getByTestId('progress-bar')).toHaveClass('green')
  })

  it("is orange when it's 49%", () => {
    const { getByTestId } = render(<ProgressBar percentage={49} />)
    expect(getByTestId('progress-bar')).toHaveClass('orange')
  })

  it("is orange when it's 20%", () => {
    const { getByTestId } = render(<ProgressBar percentage={20} />)
    expect(getByTestId('progress-bar')).toHaveClass('orange')
  })

  it("is red when it's 19%", () => {
    const { getByTestId } = render(<ProgressBar percentage={19} />)
    expect(getByTestId('progress-bar')).toHaveClass('red')
  })

  it("is red when it's 10%", () => {
    const { getByTestId } = render(<ProgressBar percentage={10} />)
    expect(getByTestId('progress-bar')).toHaveClass('red')
  })
})
