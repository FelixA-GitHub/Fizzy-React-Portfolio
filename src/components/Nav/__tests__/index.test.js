// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portfolio', description: 'A simple search engine for movies, with a favorites list' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByLabelText('briefcase')).toHaveTextContent('💼');
  });
})

describe('links are visible', () => {
  it('inserts text into the home link', () => {
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByTestId('link')).toHaveTextContent('Professional Portfolio');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})

describe('onClick events', () => {
  it('calls the click handler when clicked', () => {
    const { getByText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);
    fireEvent.click(getByText('About me'))
    fireEvent.click(getByText('Portfolio'))
    fireEvent.click(getByText('Contact'))
    fireEvent.click(getByText('Resume'))

    expect(mockSetContactSelected).toHaveBeenCalledTimes(4);
  });
})