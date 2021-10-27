import { v4 as uuidv4 } from "uuid";
import {ACTIONS} from '../reducer/listReducer';

const addTodo = (dispatch, newItem) => {
  dispatch(
    {
    type: ACTIONS.ADD_TODO,
    payload: {id: uuidv4(), value: newItem, isCompleted: false}
    }
  )
}

const toggleAll = (dispatch, todos) => {
  dispatch(
    {
      type: ACTIONS.TOGGLE_ALL,
      payload: todos.find(todoItem => !todoItem.isCompleted)
    }
  )
}

const inputDelete = (dispatch, id) => {
  dispatch(
    {
      type: ACTIONS.INPUT_DELETE,
      payload: id
    }
  )
}

const buttonDelete = (dispatch, id) => {
  dispatch(
    {
      type: ACTIONS.BUTTON_DELETE,
      payload: id
    }
  )
}

const clearCompleted = (dispatch) => {
  dispatch(
    {
      type: ACTIONS.CLEAR_COMPLETED
    }
  )
}

export { addTodo, toggleAll, inputDelete, buttonDelete, clearCompleted };
