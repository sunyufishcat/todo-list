import React from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from '../Todos/Todos';
import '@testing-library/jest-dom/extend-expect';
import OverView from './OverView';
import { clearCompleted } from '../../actions/dispatcher';
import userEvent from '@testing-library/user-event';

jest.mock('../../actions/dispatcher');
describe('OverView', () => {

  test('should render two item left and three buttons', () => {
    const mockProvider = {
      todos: [
        {id: '1', value: 'test1', isCompleted: false},
        {id: '2', value: 'test2', isCompleted: false},
      ],
      todosDispatch: jest.fn(),
    };
    render(
      <dispatchContext.Provider value={mockProvider}>
        <OverView />
      </dispatchContext.Provider>
    )
    expect(screen.getByText('2 item left')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(3);
    expect(screen.getByRole('button', {name: 'All'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Active'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Completed'})).toBeInTheDocument();
  })
})

const mockProvider = {
  todos: [
    {id: '1', value: 'test1', isCompleted: true},
    {id: '2', value: 'test2', isCompleted: false},
  ],
  todosDispatch: jest.fn(),
};
describe('OverView', () => {
  beforeEach(() => {
    render(
      <dispatchContext.Provider value={mockProvider}>
        <OverView />
      </dispatchContext.Provider>
    )
  })

  test('should render clear button when one item is completed', () => {
    expect(screen.getByText('1 item left')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(4);
    expect(screen.getByRole('button', {name: 'Clear completed'})).toBeInTheDocument();
  })

  test('should call clear_completed function when click clear button', () => {
    userEvent.click(screen.getByRole('button', {name: 'Clear completed'}));
    expect(clearCompleted).toBeCalledWith(mockProvider.todosDispatch);
  })
})

