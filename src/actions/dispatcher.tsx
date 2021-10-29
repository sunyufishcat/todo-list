import { v4 as uuidv4 } from "uuid";
import {Actions, ACTIONS, TodoItems} from './Actions';
import React from 'react';

type dispatcher = React.Dispatch<Actions>;

const addTodo = (dispatch: dispatcher, newItem: string): void => {
  dispatch(
    {
    type: ACTIONS.ADD_TODO,
    payload: {id: uuidv4(), value: newItem, isCompleted: false}
    }
  )
}

const toggleAll = (dispatch: dispatcher, todos: TodoItems): void => {
  dispatch(
    {
      type: ACTIONS.TOGGLE_ALL,
      payload: todos.find(todoItem => !todoItem.isCompleted)
    }
  )
}

const inputDelete = (dispatch: dispatcher, id: string): void => {
  dispatch(
    {
      type: ACTIONS.INPUT_DELETE,
      payload: id
    }
  )
}

const buttonDelete = (dispatch: dispatcher, id: string): void=> {
  dispatch(
    {
      type: ACTIONS.BUTTON_DELETE,
      payload: id
    }
  )
}

const clearCompleted = (dispatch: dispatcher): void => {
  dispatch(
    {
      type: ACTIONS.CLEAR_COMPLETED
    }
  )
}

export { addTodo, toggleAll, inputDelete, buttonDelete, clearCompleted };
