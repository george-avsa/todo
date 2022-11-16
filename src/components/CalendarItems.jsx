import React, { useEffect } from 'react'
import CalendarItem from './UI/Calendar/CalendarItem'

export default function CalendarItems(props) {

  // console.log(props.tasks[0].deadline)

  function compareDates(tasks, itemDate) {
    if (itemDate[0]) {
      let kek = tasks.filter(task => task.deadline.getTime() === itemDate[1].getTime())
      if (kek.length) {
        return kek
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return (
    <>
        {props.items.map(keklol => keklol[0]
            ? <CalendarItem keklol={keklol} setModal={props.setModal} classState={props.classState} task={compareDates(props.tasks, keklol)}></CalendarItem>
            : <div className={'h-[100px] rounded-3xl text-white col-span-1 flex bg-kek-blue opacity-0 sm:hidden ' + props.classState}>{keklol}</div>
        )}
    </>
  )
}
