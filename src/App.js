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
    name:"Learn Angular",             
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


const initializeStatus =  
tasks.forEach((task) => {
  status[task.category].push(
    <div 
      key={task.name}
      className="draggable"
      style={{backgroundColor: task.bgcolor}}
      draggable>
    </div>
  )
})

  return (
    <div className='container-kanban'>
      KANBAN DEMO
    </div>
  )
}

export default App

