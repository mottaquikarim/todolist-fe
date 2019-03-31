import React, { Component } from 'react';

import {getTodos, getUser} from './services/todosAPI';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        currentUser: 1,
        userEmail: null,
        currentTodos: [],
    }
  }
  componentDidMount() {
    const u = getUser(this.state.currentUser)
    const t = getTodos(this.state.currentUser)
    Promise.all([u, t]).then(([userData, todos]) => {
        this.setState({
            userEmail: userData.data.email,
            currentTodos: todos.data,
        })
    })
  }
  render() {
    let header = <h1>Loading...</h1>;
    if (this.state.userEmail) {
        header = <h1>{this.state.userEmail}</h1>
    }
    return (
      <div className="App">
        {header}
        <ul>
        {this.state.currentTodos.map((todo, i)  => {
            return <li key={i}>{todo.todo}</li>
        })}
        </ul>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
