import React, { Component } from 'react';

const ENTER_KEY = 13;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      numberOfLeftItems: 0,
      inputValue: '',
    }
  }
  
  
  addItem = (keyCode, value) => {
    const newItem = value.trim()
    if (keyCode === ENTER_KEY) {
      if(newItem || newItem === 0) {
        this.setState({
          todoItems: [...this.state.todoItems, newItem],
          numberOfLeftItems: this.state.numberOfLeftItems + 1,
          inputValue: '',
        });
      }
    }
  }
  
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  
  handleButtonDelete = (index) => {
    const items = this.state.todoItems;
    items.splice(index, 1);
    this.setState({
      todoItems: items,
      numberOfLeftItems: items.length,
    })
  }
  
  handleInputDelete = (index) => {
  
  }
  
  render() {
    const { todoItems, numberOfLeftItems, inputValue } = this.state;
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="todos">
          <input value={inputValue}
                 onChange={(event) => this.handleChange(event)}
                 className="new-todo" placeholder="What needs to be done?"
                 onKeyUp={(event) => this.addItem(event.keyCode, event.target.value)}
          />
          {numberOfLeftItems ?
            <div>
              <section className="items">
                <input type="checkbox" id="toggle-all"/>
                <label htmlFor="toggle-all" className="toggle-all"/>
                <ul className="todo-list">
                  {
                    todoItems.map((todoItem, index) => (
                      <li key={index}>
                        <input type="checkbox" id="item" onClick={() => this.handleInputDelete(index)}/>
                        <label className="item">{todoItem}</label>
                        <button className="delete" onClick={() => this.handleButtonDelete(index)}>×</button>
                      </li>
                    ))
                  }
                </ul>
              </section>
              
              <div className="overview">
                <div className="items-left">
                  <span>{`${numberOfLeftItems} item left`}</span>
                </div>
                <div className='buttons'>
                  <button className="selected">All</button>
                  <button>Active</button>
                  <button>Completed</button>
                </div>
              </div>
            </div>: null }
          
        </div>
        
        <footer>
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="https://github.com/petehunt/">petehunt</a></p>
          <p>Part of <a href="https://todomvc.com/">TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}

export default App;
