import React, {useEffect, useReducer} from 'react';
import listReducer from '../../reducer/listReducer';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';

const dispatchContext = React.createContext();

const Todos = () => {
  const [todos, todosDispatch] = useReducer(listReducer,[], () => {
    const localData = localStorage.getItem('todoList');
    return localData ? JSON.parse(localData) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos]);
  
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
