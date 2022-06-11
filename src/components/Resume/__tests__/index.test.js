// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Resume from '..'

afterEach(cleanup)

describe('Resume component', () => {
    it('renders', () => {
      render(<Resume />);
    });
  
    it('renders', () => {
      const { asFragment } = render(<Resume />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
  
  
  it('renders', () => {
    const { getByTestId } = render(<Resume />)
    expect(getByTestId('h1tag')).toHaveTextContent('Resume')
  })
  
  it('renders', () => {
    const { getByTestId } = render(<Resume />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })