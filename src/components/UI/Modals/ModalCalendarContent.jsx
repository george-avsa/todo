import React, { useMemo } from 'react'
import ModalTaskItem from './ModalTaskItem'

export default function ModalCalendarContent({dayInfo}) {
    
    const dayTasks = useMemo(() => {
        return dayInfo.tasks.sort((a, b) => a.priority.localeCompare(b.priority, 'en')) 
    }, [dayInfo])

    return (
        <>
            <p className='text-3xl mb-8'>{dayInfo.day} - Deadlines</p>
            <div className='flex w-full h-12 box-border items-center pl-12 pr-5 justify-between'>
                <p className='w-1/5'>Name</p>
                <p className='w-1/5 text-center'>Priority</p>
                <p className='w-1/5 text-center'>Type</p>
                <p className='w-1/5 text-center'>Start Date</p>
                <p className='w-1/5 text-right'>Deadline</p>
            </div>
            {dayTasks.map(task => 
                <ModalTaskItem task={task} key={task.name}></ModalTaskItem> 
            )}
        </>
    )
}
