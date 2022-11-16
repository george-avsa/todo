import React from 'react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function TaskItem({header, task}) {
    
    return (
        <div className={'w-full pl-14 pr-5 border-box flex items-center justify-between ' + (header && 'py-3 bg-kek-blue mt-4 rounded-2xl')}>
            <p className='w-1/4 box-border pr-14'
                style={{
                    'overflow': 'hidden',
                    'textOverflow': 'ellipsis',
                    'display': '-webkit-box',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical'
                }}
            >{header ? task.name : 'Name'}</p>
            <p className='w-1/6'>{header ? capitalizeFirstLetter(task.status) : 'Status'}</p>
            <p className='w-1/6'>{header ? task.priority : 'Priority'}</p>
            <p className='w-1/6'>{header ? task.type : 'Type'}</p>
            <p className='w-1/4 text-center'>{header 
                ?(
                    <>
                        {task.start_date} {task.start_time == '00:00:00' ? '' :<><br/>{task.start_time.split(':').slice(0,2).join(':')}</>}
                    </>
                ) 
                : 'StartDate-Time'}</p>
            <p className='w-1/4 text-center'>
                {header 
                    ?(
                        <>
                            {task.deadline_date} {task.deadline_time == '00:00:00' ? '' :<><br/>{task.deadline_time.split(':').slice(0,2).join(':')}</>}
                        </>
                    ) 
                    : 'DeadlineDate-Time'
                }
            </p>
            <div className='w-1/6 flex justify-end'>{!header ? 'Actions' : (
                <div className='flex'>
                    <p className='underline transition-all duration-200 underline-offset-2 hover:underline-offset-4 cursor-pointer mr-3'>Edit</p>
                    <p  className='underline transition-all duration-200 underline-offset-2 hover:underline-offset-4 cursor-pointer'>Close</p>
                </div>
            )}</div>
        </div>
    )
}
