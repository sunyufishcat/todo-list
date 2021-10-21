import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const ENTER_KEY = 13;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      inputValue: "",
      isAllCompleted: false,
      allTodoItems: [],
    };
  }

  addItem = (keyCode, value) => {
    const newItem = value.trim();
    if (keyCode === ENTER_KEY) {
      if (newItem || newItem === 0) {
        this.setState({
          allTodoItems: [
            ...this.state.allTodoItems,
            { id: uuidv4(), value: newItem, isCompleted: false },
          ],
          inputValue: "",
          isAllCompleted: false,
        });
      }
    }
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleButtonDelete = (index) => {
    const allTodoItems = this.state.allTodoItems;
    allTodoItems.splice(index, 1);
    
    for (const allTodoItem of allTodoItems) {
      if(!allTodoItem.isCompleted) {
        this.setState({isAllCompleted: false});
        break;
      } else {
        this.setState({isAllCompleted: true})
      }
    }
    
    this.setState({
      allTodoItems,
    });
  };

  handleInputDelete = (index) => {
    let allTodoItems = this.state.allTodoItems;
    allTodoItems[index].isCompleted = !allTodoItems[index].isCompleted;
    
    for (const allTodoItem of allTodoItems) {
      if(!allTodoItem.isCompleted) {
        this.setState({isAllCompleted: false});
        break;
      } else {
        this.setState({isAllCompleted: true})
      }
    }
    this.setState((pre) => ({
      ...pre,
      allTodoItems,
    }));
  };

  handleAllToggle = () => {
    const isAllCompleted = !this.state.isAllCompleted;
    let allTodoItems = this.state.allTodoItems;
    allTodoItems.map(allTodoItem => {
      isAllCompleted ? allTodoItem.isCompleted = true : allTodoItem.isCompleted = false;
    })
    this.setState((pre) => ({
      ...pre,
      allTodoItems,
      isAllCompleted,
    }));
  };
  
  handleClear = () => {
    const allTodoItems = this.state.allTodoItems.filter(allTodoItem => !allTodoItem.isCompleted);
    this.setState({allTodoItems});
  }

  // handleAllItems = () => {
  //   this.setState({
  //     todoItems: this.state.allTodoItems,
  //   })
  // }
  //
  // handleActiveItems =() => {
  //   const todoItems = this.state.allTodoItems.filter(allTodoItem => !allTodoItem.isCompleted);
  //   this.setState({
  //     todoItems
  //   })
  // }
  //
  // handleCompletedItems = () => {
  //   const todoItems = this.state.allTodoItems.filter(todoItem => todoItem.isCompleted);
  //   this.setState({
  //     todoItems,
  //   })
  // }
  
  render() {
    const { allTodoItems, inputValue, isAllCompleted} = this.state;
    const numberOfLeftItems = allTodoItems.filter(
      (allTodoItem) => !allTodoItem.isCompleted
    ).length;
  
    const numberOfCompletedItems = allTodoItems.filter(
      (allTodoItem) => allTodoItem.isCompleted
    ).length;

    return (
      <div className="app">
        <h1>todos</h1>
        <div className="todos">
          <input
            value={inputValue}
            onChange={(event) => this.handleChange(event)}
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyUp={(event) => this.addItem(event.keyCode, event.target.value)}
          />
          {allTodoItems.length ? (
            <div>
              <section className="items">
                <input
                  type="checkbox"
                  id="toggle-all"
                  checked={isAllCompleted}
                  onClick={this.handleAllToggle}
                />
                <label htmlFor="toggle-all" className="toggle-all" />
                <ul className="todo-list">
                  {allTodoItems.map((allTodoItem, index) => (
                    <li key={index} className={ allTodoItem.isCompleted ? "completed" : "active" }>
                      <input
                        type="checkbox"
                        id="item"
                        onClick={() => this.handleInputDelete(index)}
                      />
                      <label className="item">{allTodoItem.value}</label>
                      <button
                        className="delete"
                        onClick={() => this.handleButtonDelete(index)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="overview">
                <div className="items-left">
                  <span>{`${numberOfLeftItems} item left`}</span>
                </div>
                <div className="buttons">
                  <button className="selected" onClick={this.handleAllItems}>All</button>
                  <button onClick={this.handleActiveItems}>Active</button>
                  <button onClick={this.handleCompletedItems}>Completed</button>
                </div>
                { numberOfCompletedItems !== 0 ? <button className="button-clear" onClick={() => this.handleClear()}>Clear completed</button> : null }
              </div>
            </div>
          ) : null}
        </div>

        <footer>
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="https://github.com/petehunt/">petehunt</a>
          </p>
          <p>
            Part of <a href="https://todomvc.com/">TodoMVC</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
