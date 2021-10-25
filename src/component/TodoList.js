import React, {useContext, useState} from 'react';
import {dispatchContext} from './Todos';
import InputField from './InputField';
import OverView from './OverView';

const TodoList = () => {
  const todoListContext = useContext(dispatchContext);
  const { todosDispatch, todos, setIsAllCompleted } = todoListContext;
  
  const handleAllToggle = () => {
    setIsAllCompleted(isAllCompleted => {
      todosDispatch(
        {
          type: "TOGGLE_ALL",
          payload: !isAllCompleted
        }
      )
      return !isAllCompleted;
    });
  }
  
  const handleInputDelete = (id) => {
    todosDispatch(
      {
        type: "INPUT_DELETE",
        payload: id
      }
    )
  }
  
  const handleButtonDelete = (id) => {
    todosDispatch(
      {
        type: "BUTTON_DELETE",
        payload: id
      }
    )
  }
  
  return (
    todos.length ? (
      <div>
        <section className="items">
          <InputField
            type="checkbox"
            id="toggle-all"
            checked={!todos.find(todoItem => !todoItem.isCompleted)}
            onClick={handleAllToggle}
            className="toggle-all"
            htmlFor="toggle-all"
          />
          <ul className="todo-list">
            {todos.map((todoItem, index) => (
              <li key={index} className={todoItem.isCompleted ? "completed" : "active"}>
                <InputField
                  type="checkbox"
                  id="item"
                  onClick={() => {handleInputDelete(todoItem.id)}}
                  className="item"
                  labelValue={todoItem.value}
                />
                <button
                  className="delete"
                  onClick={() => handleButtonDelete(todoItem.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      
        <OverView/>
        
      </div>
    ) : null
  )
}
export default TodoList
