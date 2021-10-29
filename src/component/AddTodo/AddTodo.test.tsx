import React from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from '../Todos/Todos';
import AddTodo from './AddTodo';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import {addTodo} from '../../actions/dispatcher';

jest.mock('../../actions/dispatcher');
const mockProvider = {
  todos: [],
  todosDispatch: jest.fn(),
};
describe('AddTodo', () => {
  beforeEach(() => {
    render(
      <dispatchContext.Provider value={mockProvider}>
        <AddTodo />
      </dispatchContext.Provider>
    )
  })

  test('should render input and add todo when enter key down', () => {

    expect(screen.getByPlaceholderText(/What needs to be done?/)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'test{enter}');
    expect(screen.getByRole('textbox')).toBeEmptyDOMElement();
    expect(addTodo).toBeCalledWith(mockProvider.todosDispatch, 'test');
  })

  test('should trim input value when enter key down', () => {
    userEvent.type(screen.getByRole('textbox'), '       test{enter}');
    expect(screen.getByRole('textbox')).toBeEmptyDOMElement();
    expect(addTodo).toBeCalledWith(mockProvider.todosDispatch, 'test');
  })
})
