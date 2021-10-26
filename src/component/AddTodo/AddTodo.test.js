import React from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from '../Todos/Todos';
import AddTodo from './AddTodo';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('AddTodo', () => {
  test('should render input and add todo when enter key down', () => {
    const mockProvider = {
      todosDispatch: jest.fn(),
    };
    render(
      <dispatchContext.Provider value={mockProvider}>
        <AddTodo />
      </dispatchContext.Provider>
    )
    expect(screen.getByPlaceholderText(/What needs to be done?/)).toBeInTheDocument();
    
    userEvent.type(screen.getByRole('textbox'), 'test{enter}');
    expect(screen.getByRole('textbox')).toBeEmptyDOMElement();
    
  })
})
