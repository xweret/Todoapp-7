import React,{useState} from 'react'

function TaskForm({createTask}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, description)
    createTask(title)
}
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Escribe tu tu tarea'
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <textarea
            placeholder='Task description'
            onChange={e => setDescription(e.target.value)}></textarea>
            <button>Guardar</button>
        </form>
  )
}

export default TaskForm