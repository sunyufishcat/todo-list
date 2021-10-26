import React, {useContext} from 'react';
import {dispatchContext} from '../Todos/Todos';

function OverView() {
  const todoListContext = useContext(dispatchContext);
  const dispatch = todoListContext.todosDispatch;
  const todoItems = todoListContext.todos;
  
  const numberOfLeftItems = todoItems.filter(
    (todoItem) => !todoItem.isCompleted
  ).length;
  
  const numberOfCompletedItems = todoItems.filter(
    (todoItem) => todoItem.isCompleted
  ).length;
  
  const handleClear = () => {
    dispatch(
      {
        type: "CLEAR_COMPLETED"
      }
    )
  }
  
  return (
    <div className="overview">
      <div className="items-left">
        <span>{`${numberOfLeftItems} item left`}</span>
      </div>
      <div className="buttons">
        <button className="selected">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      { numberOfCompletedItems !== 0 ? <button className="button-clear" onClick={handleClear}>Clear completed</button> : null }
    </div>
  )
}

export default OverView;
