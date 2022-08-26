import TaskList from './assets/TaskList';
import TaskForm from './assets/TaskForm';
import {tasks as data} from './assets/tasks'
import {useEffect, useState} from 'react'

function App(){

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, task])
    
  }

  return <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks = {tasks}/>
    
  </>

}

export default App