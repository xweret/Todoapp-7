import React from 'react'
import TaskCard from './taskCard'

function taskList({tasks}) {

    if (tasks.length === 0 ) {
        return <h1> No hay tareas aun </h1>
    }

return (
    <div>
        {
            tasks.map(
                task => (
                    <TaskCard task={task}/>
                )
            )
        }
    </div>
    )
}

export default taskList