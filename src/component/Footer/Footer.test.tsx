import * as React from 'react';
import Footer from './Footer';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  test('should render footer', () => {})
  render(<Footer />);
  expect(screen.getByText('Double-click to edit a todo')).toBeInTheDocument();
  expect(screen.getByText('Created by')).toBeInTheDocument();
  expect(screen.getByText('Part of')).toBeInTheDocument();
  expect(screen.getByText('petehunt')).toHaveAttribute('href', 'https://github.com/petehunt/');
  expect(screen.getByText('TodoMVC')).toHaveAttribute('href', 'https://todomvc.com/');
})
