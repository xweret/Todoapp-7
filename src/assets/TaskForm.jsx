import React,{useState} from 'react'

function TaskForm(createTask) {
    const [title, setTitle] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    
    const newTask = {    title: title}
    createTask(newTask)
}
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Escribe tu tu tarea'
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <button>Guardar</button>
        </form>
  )
}

export default TaskForm