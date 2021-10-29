import InputField from '../InputField/InputField';
import * as React from 'react';
import {FC, ReactElement, useContext} from 'react';
import {buttonDelete, inputDelete} from '../../actions/dispatcher';
import {dispatchContext} from '../Todos/Todos';
import {todo} from '../../actions/Actions';

interface Props {
  todoItem: todo;
}

const ListItem: FC<Props> = ({todoItem}): ReactElement => {
  const { todosDispatch } = useContext(dispatchContext);

  const handleInputDelete = (id: string): void => {
    inputDelete(todosDispatch, id);
  }

  const handleButtonDelete = (id: string): void => {
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
