import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import ToDo from './ToDo'

configure({ adapter: new Adapter() })

describe('<Todo/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ToDo/>)
  })

  it('Appends new todo at the end of the list', () => {
    // Mount
    const wrapper = shallow(<ToDo/>)

    wrapper.setState({
      inputValue: 'Buy beer',
      todos: [{
        task: 'Call mom',
        done: false,
      }, {
        task: 'Watch Mr. Robot',
        done: false,
      }]
    })

    // Call method we are testing
    wrapper.instance().handleAddTodo()

    // Check that new todo was added to end of the list
    const resultTodos = wrapper.state('todos')
    expect(resultTodos[resultTodos.length - 1].task).toBe('Buy beer')
  })

  it('Clears inputValue after appending a new task', () => {
    // Mount
    const wrapper = shallow(<ToDo/>)

    wrapper.setState({
      inputValue: 'Buy beer',
      todos: [{
        task: 'Call mom',
        done: false,
      }, {
        task: 'Watch Mr. Robot',
        done: false,
      }]
    })

    // Call method we are testing
    wrapper.instance().handleAddTodo()

    // Check inputValue was cleared
    expect(wrapper.state('inputValue')).toBe('')
  })

  it('Toggles a task as done or todo', () => {
    // Mount
    const wrapper = shallow(<ToDo/>)

    wrapper.setState({
      todos: [{
        task: 'Call mom',
        done: false,
      }]
    })

    wrapper.instance().handleDone(0)

    // Check that our task with index 0
    let resultTodos = wrapper.state('todos')
    expect(resultTodos[0].done).toBe(true)

    wrapper.instance().handleDone(0)

    // Check that new todo was added to end of the list
    resultTodos = wrapper.state('todos')
    expect(resultTodos[0].done).toBe(false)

  })

})
