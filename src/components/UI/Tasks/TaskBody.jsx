import React from 'react'
import TaskItem from './TaskItem'

export default function TaskBody({tasks}) {
  return (
    <div className='w-full h-auto mt-7 overflow-auto'>
        <TaskItem header={false}></TaskItem>
        <>
            {tasks.map(task => (
                <TaskItem header={true} task={task}></TaskItem>
            ))}
        </>
    </div>
  )
}
