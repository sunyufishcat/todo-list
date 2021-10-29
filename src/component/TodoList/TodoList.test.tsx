import React from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from '../Todos/Todos';
import TodoList from './TodoList';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import {toggleAll} from '../../actions/dispatcher';

jest.mock('../../actions/dispatcher');
const mockProvider = {
  todos: [
    {id: '1', value: 'test1', isCompleted: false},
    {id: '2', value: 'test2', isCompleted: false},
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
  })

  test('should call toggle_all function when click toggle checkbox', () => {
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(toggleAll).toBeCalledWith(mockProvider.todosDispatch, mockProvider.todos);
  })
})
