import React, { useEffect } from 'react'

export default function CalendarItem(props) {

    useEffect(() => {
        console.log(props.keklol[1])
    }, [])

    function dateToString(date) {
        return date.getDate() + '.' + date.getDate()  + '.' + (date.getYear()+1900)
    }

    function addZeroToDate(int) {
        if (int < 10) {
            return '0' + int
        }
        return int + ''
    }


    return (
    <div className={'calendar-item h-[100px] rounded-3xl text-white col-span-1 bg-kek-blue box-border p-4 grid grid-cols-2 grid-rows-2 overflow-hidden relative ' + props.classState} data-date={dateToString(props.keklol[1])}>
        <div className='calendar-item-bad absolute z-50 top-0 left-0 w-full h-full'></div>
        <div className='col-span-2 flex justify-end text-2xl'><p className='hidden 2xl:flex'>90%</p></div>
        <div className='text-4xl flex items-end font-medium sm:text-2xl'>{addZeroToDate(props.keklol[1].getDate())}</div>
        <div className='justify-end items-end hidden 2xl:flex'>3 tasks</div>
    </div>
    )
}
