import React from 'react'

export default function CalendarItem(props) {

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
    <div className={'calendar-item h-[100px] rounded-3xl text-white col-span-1 bg-kek-blue box-border p-4 grid grid-cols-2 grid-rows-2 overflow-hidden ' + props.classState} data-date={dateToString(props.keklol[1])}>
        <div className='col-span-2 flex justify-end text-2xl'></div>
        <div className='text-4xl flex items-end font-medium'>{addZeroToDate(props.keklol[1].getDate())}</div>
        <div className='flex justify-end items-end'></div>
    </div>
    )
}
