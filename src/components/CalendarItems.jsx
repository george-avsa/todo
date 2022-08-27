import React, { useEffect } from 'react'
import CalendarItem from './UI/Calendar/CalendarItem'

export default function CalendarItems(props) {

  return (
    <>
        {props.items.map(keklol => keklol[0]
            ? <CalendarItem keklol={keklol} classState={props.classState} tasks={props.tasks}></CalendarItem>
            : <div className={'h-[100px] rounded-3xl text-white col-span-1 flex bg-kek-blue opacity-0 sm:hidden ' + props.classState}>{keklol}</div>
        )}
    </>
  )
}
