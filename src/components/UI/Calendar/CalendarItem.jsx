import React, { useEffect, useState } from 'react'

export default function CalendarItem(props) {

    function strToDate(date) {
        return new Date(date.getYear()+1900, date.getMonth()+1, date.getDate())
    }


    // console.log(props.taskso)

    // useEffect(() => {
    //     // console.log(props.tasks[0].deadline)
    //     // console.log( - strToDate(props.keklol[1] == 0))
    // }, [props.tasks])


    function addZeroToDate(int) {
        if (int < 10) {
            return '0' + int
        }
        return int + ''
    }

    // const statusClass = 'calendar-item-good'
    
    const [percent, setPercent] = useState('')
    const [statusClass, setStatusClass] = useState('')

    useEffect(() => {

        if (props.task) {

            const completedTasks = props.task.filter(task => task.status == 'closed')
            const percent = Math.round((completedTasks.length*100)/props.task.length)
            if (percent < 30) {
                setStatusClass('calendar-item-bad')
            } else if (percent < 70) {
                setStatusClass('calendar-item-norm')
            } else {
                setStatusClass('calendar-item-good')
            }
            setPercent(percent+'%')
        }
    
    }, [])
    
    function getProgressWidth(percent) {
        if (percent == '100%') {
            return 'w-full'
        } else {
            return `w-[${percent}]`
        }
    }

    return (
    <div className={'calendar-item h-[100px] rounded-3xl text-white col-span-1 bg-kek-blue box-border p-4 grid grid-cols-2 grid-rows-2 overflow-hidden relative ' + props.classState}>
        {props.task 
        ? (
            <>
                <div 
                    onClick={(e) => props.setModal(e.target.getAttribute('data-date'))} 
                    className={'absolute z-20 top-0 left-0 w-full h-full cursor-pointer ' + statusClass} 
                    data-date={props.keklol[1].getTime()}></div>
                <div className={'absolute z-1 top-0 left-0 rounded-3xl h-full cursor-pointer bg-[#21436B] '} style={{width: percent}}></div>
            </>
        )
        : <div className={'absolute z-20 top-0 left-0 w-full h-full '}></div>
        }

        <div className='col-span-2 z-15 relative flex justify-end text-2xl'><p className='hidden 2xl:flex'>{percent}</p></div>
        <div className='text-4xl flex z-15 relative items-end font-medium sm:text-2xl'>{addZeroToDate(props.keklol[1].getDate())}</div>
        <div className='justify-end z-15 relative items-end hidden text-xs text-right 2xl:flex'>{props.task.length 
            ? (<>
                {props.task.length == 1
                    ? props.task.length + ' deadline'
                    : props.task.length + ' deadlines'
                }
                </>)
            : ''
        }</div>
    </div>
    )
}
