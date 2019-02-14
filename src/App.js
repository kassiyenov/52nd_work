import React, { Component } from 'react';
import './App.css';
import Task from './task/task';
import TaskForm from './task/addTaskForm'
import uuid from "uuid/v4";

class App extends Component {
  state = {
    task: [
      {text: 'Kill bill', id: uuid()},
      {text: 'Fuck Trump', id: uuid()},
      {text: 'Lay down', id: uuid()},
      {text: 'Carry out', id: uuid()}
    ],
    currentTask: ""
  };

  
  changeCurrTask = (event) => {
    let currentTask = [...this.state.currentTask]
    currentTask = event.target.value;
    this.setState({currentTask})
  }

  addTask = (event) => {
    const task = [...this.state.task];
    let currentTask = [...this.state.currentTask]
    const newTask = {text: currentTask, id: uuid()}
    task.push(newTask);

    this.setState({task});
  }

  removeTask = (id) => {
    const index = this.state.task.findIndex(t => t.id === id);
    const task = [...this.state.task];
    task.splice(index, 1);

    this.setState({task});
  };


  render() {
    return (
      <div>
        <TaskForm changeCT={this.changeCurrTask} value={this.state.currentTask} add={this.addTask}/>
        {this.state.task.map((tas) => {
          return <Task key={tas.id} text={tas.text} delete={() => this.removeTask(tas.id)}/>
        })}
      </div>
    );
  }
}
export default App;
