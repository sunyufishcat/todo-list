import { v4 as uuidv4 } from "uuid";

const addTodo = (dispatch, newItem) => {
  dispatch(
    {
    type: "ADD_TODO",
    payload: {id: uuidv4(), value: newItem, isCompleted: false}
    }
  )
}

const toggleAll = (dispatch, todos) => {
  dispatch(
    {
      type: "TOGGLE_ALL",
      payload: todos.find(todoItem => !todoItem.isCompleted)
    }
  )
}

const inputDelete = (dispatch, id) => {
  dispatch(
    {
      type: "INPUT_DELETE",
      payload: id
    }
  )
}

const buttonDelete = (dispatch, id) => {
  dispatch(
    {
      type: "BUTTON_DELETE",
      payload: id
    }
  )
}

const clearCompleted = (dispatch) => {
  dispatch(
    {
      type: "CLEAR_COMPLETED"
    }
  )
}

export { addTodo, toggleAll, inputDelete, buttonDelete, clearCompleted };
