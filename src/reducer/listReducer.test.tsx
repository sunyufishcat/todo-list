import listReducer from './listReducer';
import {ACTIONS, TodoItems} from '../actions/Actions';

describe('listReducer', () => {
  test('should add todo item when ADD_TODO action dispatch', () => {
    const mockTodos: TodoItems = [];
    const mockAction = {
      type: ACTIONS.ADD_TODO,
      payload: {id: '1', value: 'test1', isCompleted: false}
    }
    const todos = listReducer(mockTodos, mockAction);
    expect(todos).toEqual([{id: '1', value: 'test1', isCompleted: false}]);
  })

  test('should toggle all items when TOGGLE_ALL action dispatch', () => {
    const mockTodos =  [
      {id: '1', value: 'test1', isCompleted: false},
      {id: '2', value: 'test2', isCompleted: false},
    ];
    const mockAction = {
      type: ACTIONS.TOGGLE_ALL,
      payload: true
    }
    const todos = listReducer(mockTodos, mockAction);
    expect(todos[0].isCompleted).toBeTruthy();
    expect(todos[1].isCompleted).toBeTruthy();
  })

  test('should clear completed items when CLEAR_COMPLETED action dispatch', () => {
    const mockTodos =  [
      {id: '1', value: 'test1', isCompleted: false},
      {id: '2', value: 'test2', isCompleted: true},
    ];
    const mockAction = {
      type: ACTIONS.CLEAR_COMPLETED,
    }
    const todos = listReducer(mockTodos, mockAction);
    expect(todos).toEqual([{id: '1', value: 'test1', isCompleted: false}]);
  })

  test('should mark item as completed when INPUT_DELETE action dispatch', () => {
    const mockTodos =  [
      {id: '1', value: 'test1', isCompleted: false},
      {id: '2', value: 'test2', isCompleted: false},
    ];
    const mockAction = {
      type: ACTIONS.INPUT_DELETE,
      payload: '1'
    }
    const todos = listReducer(mockTodos, mockAction);
    expect(todos[0].isCompleted).toBeTruthy();
    expect(todos[1].isCompleted).toBeFalsy();
  })

  test('should delete item when BUTTON_DELETE action dispatch', () => {
    const mockTodos =  [
      {id: '1', value: 'test1', isCompleted: false},
      {id: '2', value: 'test2', isCompleted: false},
    ];
    const mockAction = {
      type: ACTIONS.BUTTON_DELETE,
      payload: '2'
    }
    const todos = listReducer(mockTodos, mockAction);
    expect(todos.length).toBe(1);
    expect(todos).toEqual([{id: '1', value: 'test1', isCompleted: false}]);
  })
})
