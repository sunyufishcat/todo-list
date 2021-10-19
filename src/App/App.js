import React, { Component } from 'react';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="todos">
          <input className="new-todo" placeholder="What needs to be done?" />
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
