import React, { Component } from 'react'

class ToDo extends Component {
  state = {
    todos: [],
    inputValue: '',
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleAddTodo = () => {
    const { inputValue } = this.state
    const newTodo = {
      task: inputValue,
      done: false,
    }

    this.setState( prevState => {
      return {
        todos: prevState.todos.concat(newTodo),
        inputValue: '',
      }
    })
  }

  handleDone = index => {
    this.setState( prevState => {
      const todoMarkedAsDone = {
        ...prevState.todos[index],
        done: !prevState.todos[index].done,
      }

      return {
        todos: Object.assign([], prevState.todos, {
          [index]: todoMarkedAsDone
        })
      }
    })
  }

  render() {
    const { todos, inputValue } = this.state

    return (
      <div>
        <input data-testid='todo-input' type='text' value={inputValue} onChange={this.handleInputChange} />
        <button data-testid='todo-button' onClick={this.handleAddTodo}>Add</button>
        { todos.length === 0 && <p>Empty</p> }
        <ol data-testid='todo-list'>
          { todos.map( (todo, index) => (
            <li
              key={index}
              onClick={() => this.handleDone(index)}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.task}
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ToDo

