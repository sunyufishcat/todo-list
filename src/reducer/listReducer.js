export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_ALL: "TOGGLE_ALL",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
  INPUT_DELETE: "INPUT_DELETE",
  BUTTON_DELETE: "BUTTON_DELETE"
}

const listReducer = (todos, action) => {
  
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload];
      
    case ACTIONS.TOGGLE_ALL:
      return todos.map(todo => ({
        ...todo,
        isCompleted: action.payload,
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
