import {FC, ReactElement, useContext, useState} from 'react';
import * as React from 'react';
import {dispatchContext} from '../Todos/Todos';
import {addTodo} from '../../actions/dispatcher';

const ENTER_KEY = "Enter";

const AddTodo: FC = () : ReactElement => {

  const dispatch = useContext(dispatchContext).todosDispatch;
  const [inputValue, setInputValue] = useState<string>("");

  const addItem = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const newItem: string = inputValue.trim();
    if (event.key === ENTER_KEY && newItem) {
      addTodo(dispatch, newItem);
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
