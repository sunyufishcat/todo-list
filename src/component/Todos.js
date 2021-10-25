import React, {useReducer} from 'react';
import listReducer from '../reducer/listReducer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const dispatchContext = React.createContext();

const Todos = () => {
  const [todos, todosDispatch] = useReducer(listReducer,[]);
  
  return(
    <dispatchContext.Provider value={{todos,todosDispatch}}>
      <div className="todos">
        <AddTodo/>
        <TodoList/>
      </div>
    </dispatchContext.Provider>
  )
}

export {dispatchContext,Todos};
