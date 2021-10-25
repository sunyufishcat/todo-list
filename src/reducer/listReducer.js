const listReducer = (todos, action) => {
  
  switch (action.type){
    case "ADD_TODO":
      return [...todos, action.payload];
      
    case "TOGGLE_ALL":
      return todos.map(todo => ({
        ...todo,
        isCompleted: action.payload,
      }))
    
    case "CLEAR_COMPLETED":
      return todos.filter(todoItem => !todoItem.isCompleted);
    
    case "INPUT_DELETE": {
      // todos[action.payload].isCompleted = !todos[action.payload].isCompleted;
      // return todos; 不可直接修改入参
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    }
    
    case "BUTTON_DELETE":
      return todos.filter(todoItem => todoItem.id !== action.payload)
      
    default:
      return todos;
  }
}
export default listReducer
