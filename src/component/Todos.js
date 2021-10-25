import React, {useReducer, useState} from 'react';
import listReducer from '../reducer/listReducer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const dispatchContext = React.createContext();

const Todos = () => {
  const [todos, todosDispatch] = useReducer(listReducer,[]);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  
  return(
    <dispatchContext.Provider value={{todos,todosDispatch, isAllCompleted, setIsAllCompleted}}>
      <div className="todos">
        <AddTodo/>
        <TodoList/>
      </div>
    </dispatchContext.Provider>
  )
}

export {dispatchContext,Todos};
