import {ACTIONS, Actions, todo, TodoItems} from '../actions/Actions';

const listReducer = (todos: TodoItems, action: Actions): TodoItems => {

  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload as todo];

    case ACTIONS.TOGGLE_ALL:
      return todos.map(todo => ({
        ...todo,
        isCompleted: action.payload as boolean,
      }))

    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter(todoItem => !todoItem.isCompleted);

    case ACTIONS.INPUT_DELETE: {
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    }

    case ACTIONS.BUTTON_DELETE:
      return todos.filter(todoItem => todoItem.id !== action.payload)

    default:
      return todos;
  }
}
export default listReducer
