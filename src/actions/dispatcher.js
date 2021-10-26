import { v4 as uuidv4 } from "uuid";

const addTodo = (dispatch, newItem) => {
  dispatch(
    {
    type: "ADD_TODO",
    payload: {id: uuidv4(), value: newItem, isCompleted: false}
    }
  )
}

export  { addTodo };
