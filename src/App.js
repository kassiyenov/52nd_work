import React, { Component } from 'react';
import './App.css';
import Task from './task/task';
import TaskForm from './task/addTaskForm'
import uuid from "uuid/v4";
 
class App extends Component {
  state = {
    task: [
      {text: '4:30am – Wake up', id: uuid()},
      {text: 'Eat Breakfast', id: uuid()},
      {text: 'Exericise', id: uuid()},
      {text: 'Meditation', id: uuid()},
      {text: 'Groceries after Work', id: uuid()},
      {text: 'Clean Everything', id: uuid()},
      {text: 'Relax for the rest of the night', id: uuid()}
    ],
    currentTask: ""
  };

   
  changeCurrTask = (event) => {
    let currentTask = [...this.state.currentTask]
    currentTask = event.target.value;
    this.setState({currentTask})
  }

  addTask = () => {
    const task = [...this.state.task];
    let currentTask = [...this.state.currentTask]
    const newTask = {text: currentTask, id: uuid()}
    task.push(newTask);
    this.setState({task});
    currentTask = ''
    this.setState({currentTask})
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
