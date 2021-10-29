import React, {FC, ReactElement, useContext} from 'react';
import {dispatchContext} from '../Todos/Todos';
import {clearCompleted} from '../../actions/dispatcher';

const OverView: FC = (): ReactElement => {
  const { todos, todosDispatch } = useContext(dispatchContext);

  const numberOfLeftItems: number = todos.filter(
    (todoItem) => !todoItem.isCompleted
  ).length;

  const numberOfCompletedItems: number = todos.filter(
    (todoItem) => todoItem.isCompleted
  ).length;

  const handleClear = (): void => {
    clearCompleted(todosDispatch);
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
