import React, { useState } from 'react'
import './App.css';

const App = () => {
  // ##### Component Variables
  var status = {
    wip: [],
    complete: []
  }

  // ##### React States
  const [tasks, setTasks] = useState([{
    name:"Angular",             
    category:"wip",              
    bgcolor: "salmon"},
    {
    name:"React",              
    category:"wip",              
    bgcolor:"lightblue"},
    {
    name:"Vue",              
    category:"complete",
    bgcolor:"lightgreen"  
  }])

// ##### Helpers
  const onDragOver = (event) => {
    event.preventDefault();
  }


  const onDragStart = (event, name) => {
    event.dataTransfer.setData("name", name);
  }


const onDrop = (event, cat) => {
  let name = event.dataTransfer.getData("name");

  let newTask = tasks.find((task) => task.name === name)
  let newTaskIndex = tasks.findIndex((task) => task.name === name)
  newTask.category = cat
  console.log(newTask, newTaskIndex)

  const newArr = [...tasks]
  newArr[newTaskIndex] = newTask
  // console.log(newArr)
  setTasks(newArr)
}


  const initializeStatus =  
  tasks.forEach((task) => {
    status[task.category].push(
      <div 
        key={task.name}
        className="draggable"
        style={{backgroundColor: task.bgcolor}}
        draggable
        onDragStart ={(e) => onDragStart(e, task.name)}>
        {task.name}
      </div>
    )
  })


  return (
    <div className="container-kanban">
      <h1>Kanban Demo</h1>
      <div 
        className="wip"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "wip")}>
        <span className="task-header">WIP</span>
        {status.wip}
      </div>
      <div 
        className="droppable"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}>
        <span className="task-header">COMPLETED</span>
        {status.complete}
      </div>
    </div>
  )
}

export default App

