import React, {useContext} from 'react';
import {dispatchContext} from '../Todos/Todos';
import ListItem from './ListItem';
import InputField from '../InputField/InputField';
import OverView from '../OverView/OverView';
import {toggleAll} from '../../actions/dispatcher';

const TodoList = () => {
  const todoListContext = useContext(dispatchContext);
  const { todosDispatch, todos } = todoListContext;
  
  const handleAllToggle = () => {
    toggleAll(todosDispatch, todos);
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
            {todos.map((todoItem, index) =>
              <ListItem key={index} todoItem={todoItem}/>
            )}
          </ul>
        </section>
      
        <OverView/>
        
      </div>
    ) : null
  )
}
export default TodoList
