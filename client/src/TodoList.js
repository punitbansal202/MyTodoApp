import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    //Get TodoList api request as soon as TodoList component mount
    axios.get('http://localhost:8000/api/todos').then(res => {
      const tasks = res.data;
      this.setState({ tasks });
    });
  }

  // create new task api request
  handleChange = event => {
    this.setState({ task: event.target.value });
  };

  // submit event for add new task
  handleSubmit = event => {
    event.preventDefault();

    var newTask = {
      task: this.state.task,
      status: 'active'
    };
    const tasksCopy = this.state.tasks.slice();

    axios.post('http://localhost:8000/api/todos', newTask).then(res => {
      if (res.data.id) {
        newTask = { id: res.data.id, task: this.state.task, status: 'active' };
        tasksCopy.push(newTask);
        this.setState({ tasks: tasksCopy });
      }
    });
  };

  //delete event for deleting existing task.
  handleDelete = event => {
    event.preventDefault();
    const filteredArray = this.state.tasks.filter(
      item => item.id !== Number(event.target.name)
    );
    axios
      .delete(`http://localhost:8000/api/todos?id=${event.target.name}`)
      .then(res => {
        if (res.data === 'SUCCESS') {
          this.setState({ tasks: filteredArray });
        }
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task :{'  '}
            <input type="text" name="task" onChange={this.handleChange} />
          </label>
          <button type="submit">Add Task</button>
        </form>
        <br></br>
        <table>
          <tbody>
            {this.state.tasks.map(task => (
              <tr key={task.id}>
                <th>{task.task}</th>
                <th>
                  <button name={task.id} onClick={this.handleDelete}>
                    Remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
