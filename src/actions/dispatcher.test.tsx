import {addTodo, buttonDelete, clearCompleted, inputDelete, toggleAll} from './dispatcher';
import { v4 as uuidv4 } from "uuid";
import {ACTIONS} from './Actions';

jest.mock('uuid', () => {
  return {v4: jest.fn().mockReturnValue("1")}
});
describe('dispatcher', () => {
  test('should dispatch actions when addTodo called', () => {
    const mockDispatch = jest.fn();
    const mockNewItem = 'test1';
    addTodo(mockDispatch, mockNewItem);
    expect(mockDispatch).toBeCalledWith({
      type: ACTIONS.ADD_TODO,
      payload: {id: uuidv4(), value: mockNewItem, isCompleted: false}
    })
  })

  test('should dispatch actions when toggleAll called', () => {
    const mockDispatch = jest.fn();
    const mockTodos = [
      {id: '1', value: 'test1', isCompleted: false},
      {id: '2', value: 'test2', isCompleted: true},
    ]
    toggleAll(mockDispatch, mockTodos);
    expect(mockDispatch).toBeCalledWith({
      type: ACTIONS.TOGGLE_ALL,
      payload: mockTodos[0]
    })
  })

  test('should dispatch actions when inputDelete called', () => {
    const mockDispatch = jest.fn();
    const mockId = '1';
    inputDelete(mockDispatch, mockId);
    expect(mockDispatch).toBeCalledWith({
      type: ACTIONS.INPUT_DELETE,
      payload: '1'
    })
  })

  test('should dispatch actions when buttonDelete called', () => {
    const mockDispatch = jest.fn();
    const mockId = '1';
    buttonDelete(mockDispatch, mockId);
    expect(mockDispatch).toBeCalledWith({
      type: ACTIONS.BUTTON_DELETE,
      payload: '1'
    })
  })

  test('should dispatch actions when clearCompleted called', () => {
    const mockDispatch = jest.fn();
    clearCompleted(mockDispatch);
    expect(mockDispatch).toBeCalledWith({
      type: ACTIONS.CLEAR_COMPLETED,
    })
  })
})
