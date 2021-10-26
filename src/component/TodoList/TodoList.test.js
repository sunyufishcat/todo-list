import React from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from '../Todos/Todos';
import TodoList from './TodoList';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import {toggleAll, inputDelete, buttonDelete} from '../../actions/dispatcher';

jest.mock('../../actions/dispatcher');
const mockProvider = {
  todos: [
    {id: 1, value: 'test1', isCompleted: false},
    {id: 2, value: 'test2', isCompleted: false},
  ],
  todosDispatch: jest.fn(),
};
describe('TodoList', () => {
  beforeEach(() => {
    render(
      <dispatchContext.Provider value={mockProvider}>
        <TodoList />
      </dispatchContext.Provider>
    )
  })
  
  test('should render all todo lists', () => {
    expect(screen.getAllByRole('listitem').length).toBe(2);
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
    userEvent.hover(screen.getAllByRole('listitem')[0]);
    expect(screen.getAllByRole('button')[0]).toHaveClass('delete');
  })
  
  test('should call toggle_all function when click toggle checkbox', () => {
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(toggleAll).toBeCalledWith(mockProvider.todosDispatch, mockProvider.todos);
  })
  
  test('should call input_delete function when click todo item checkbox', () => {
    userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(inputDelete).toBeCalledWith(mockProvider.todosDispatch, 1);
    userEvent.click(screen.getAllByRole('checkbox')[2]);
    expect(inputDelete).toBeCalledWith(mockProvider.todosDispatch, 2);
  })
  
  test('should call button_delete function when click delete button', () => {
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(buttonDelete).toBeCalledWith(mockProvider.todosDispatch, 1);
    userEvent.click(screen.getAllByRole('button')[1]);
    expect(buttonDelete).toBeCalledWith(mockProvider.todosDispatch, 2);
  })
})
