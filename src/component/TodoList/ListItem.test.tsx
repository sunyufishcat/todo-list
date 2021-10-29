import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {buttonDelete, inputDelete} from '../../actions/dispatcher';
import {dispatchContext} from '../Todos/Todos';
import ListItem from './ListItem';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../actions/dispatcher');
const mockTodoItem = {id: '1', value: 'test', isCompleted: false};
const mockProvider = {
  todos: [],
  todosDispatch: jest.fn(),
};

describe('ListItem', () => {
  beforeEach(() => {
    render(
      <dispatchContext.Provider value={mockProvider}>
        <ListItem todoItem={mockTodoItem}/>
      </dispatchContext.Provider>
    )
  })

  test('should render todo item', () => {
    expect(screen.getByText('test')).toBeInTheDocument();
    userEvent.hover(screen.getByRole('listitem'));
    expect(screen.getByRole('button')).toHaveClass('delete');

  })

  test('should call input_delete function when click todo item checkbox', () => {
    userEvent.click(screen.getByRole('checkbox'));
    expect(inputDelete).toBeCalledWith(mockProvider.todosDispatch, "1");
  })

  test('should call button_delete function when click delete button', () => {
    userEvent.click(screen.getByRole('button'));
    expect(buttonDelete).toBeCalledWith(mockProvider.todosDispatch, "1");
  })
})
