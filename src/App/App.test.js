import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  test('should render h1 title', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
    expect(screen.getByText('todos')).toBeInTheDocument();
  })
})
