import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

function changeDateFormat(date) {
    const [year, month, day] = date.split('-')
    return day + '.' + month + '.' + year
}

function changeTimeFormat(time) {
    return time.split(':').slice(0,2).join(':')
}

export default function ModalTaskItem({task}) {
    const [hover, setHover] = useState(false)

    return (
        <>

        <div className='relative flex w-full h-16 bg-[#172737] rounded-3xl box-border items-center pl-12 pr-5 justify-between mb-3'>
            <div 
                className=' relative w-1/5 leading-tight cursor-pointer' style={{
                    'overflow': 'hidden',
                    'textOverflow': 'ellipsis',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical'
                }}>
                    {task.name}
            </div>
            {/* {task.name.length > 10 &&
                <Transition
                    in={hover}
                    mountOnEnter
                    unmountOnExit
                >
                {state => 
                    <div className={'task_hover absolute left-12 top-1/2 mt-[-18px] rounded-2xl h-9 bg-[#172F4B] z-50 box-border flex items-center px-6'+state}>
                        {task.name}
                    </div>
                }
                </Transition>
            } */}
            <p className='w-1/5 text-center'>{task.priority}</p>
            <p className='w-1/5 text-center'>{task.type}</p>
            <p className='w-1/5 text-center'>{changeDateFormat(task.start_date)}</p>
            <p className='w-1/5 text-right'>
                {changeDateFormat(task.deadline_date) + ' '}
                {changeTimeFormat(task.deadline_time) != '00:00' && changeTimeFormat(task.deadline_time)}
            </p>
        </div>
        
        </>
    )
}
