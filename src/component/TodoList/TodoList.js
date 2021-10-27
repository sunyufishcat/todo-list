import React, {useContext} from 'react';
import {dispatchContext} from '../Todos/Todos';
import InputField from '../InputField/InputField';
import OverView from '../OverView/OverView';
import {toggleAll, inputDelete, buttonDelete} from '../../actions/dispatcher';

const TodoList = () => {
  const todoListContext = useContext(dispatchContext);
  const { todosDispatch, todos } = todoListContext;
  
  const handleAllToggle = () => {
    toggleAll(todosDispatch, todos);
  }
  
  const handleInputDelete = (id) => {
    inputDelete(todosDispatch, id);
    
  }
  
  const handleButtonDelete = (id) => {
    buttonDelete(todosDispatch, id);
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
            ))}
          </ul>
        </section>
      
        <OverView/>
        
      </div>
    ) : null
  )
}
export default TodoList
