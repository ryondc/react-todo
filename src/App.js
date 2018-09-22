import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddNewTask } from './Apptask';
import { ToDoAppList } from './Applist';


class App extends Component {

  render() {
    var tasklist = ["A","B"];
    return (
      <div className="App">
        <h1>To Do App</h1>
          <AddNewTask/>
          <ToDoAppList task={tasklist}/>
      </div>
    );
  }
}


export default App;
