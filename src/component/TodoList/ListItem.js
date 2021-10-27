import InputField from '../InputField/InputField';
import React, {useContext} from 'react';
import {buttonDelete, inputDelete} from '../../actions/dispatcher';
import {dispatchContext} from '../Todos/Todos';

const ListItem = ({todoItem}) => {
  const todoListContext = useContext(dispatchContext);
  const { todosDispatch } = todoListContext;
  
  const handleInputDelete = (id) => {
    inputDelete(todosDispatch, id);
  }
  
  const handleButtonDelete = (id) => {
    buttonDelete(todosDispatch, id);
  }
  
  return (
    <li className={todoItem.isCompleted ? "completed" : "active"}>
      <div className="view">
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
      </div>
      <input className="edit"/>
    </li>
  )
}

export default ListItem;
