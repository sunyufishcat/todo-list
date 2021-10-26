import React, {useContext, useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import {dispatchContext} from '../Todos/Todos';

const AddTodo = () => {
  const ENTER_KEY = 13;
  
  const todoListContext = useContext(dispatchContext);
  const [inputValue, setInputValue] = useState("");
  const dispatch = todoListContext.todosDispatch;
  
  const addItem = event => {
    const newItem = inputValue.trim();
    if (event.keyCode === ENTER_KEY && newItem) {
      dispatch(
        {
          type: "ADD_TODO",
          payload: {id: uuidv4(), value: newItem, isCompleted: false}
        }
      )
      setInputValue('');
    }
  }
  
  return (
      <input
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={addItem}
      />
  )
}
export default AddTodo
