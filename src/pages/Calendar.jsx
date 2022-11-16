import React, { useEffect, useMemo, useState } from 'react'
import { Transition } from 'react-transition-group'
import CalendarBody from '../components/CalendarBody'
import Header from '../components/Header'
import MonthFilter from '../components/MonthFilter'
import Modal from '../components/UI/Modal'
import ModalPreloader from '../components/UI/Modals/ModalPreloader'

export default function Calendar(props) {

  const kek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const [tasks, setTasks] = useState([])

  const [animationCalendarItems, setAnimationCalendarItems] = useState(false)
  
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const weeksJs = [7, 1, 2, 3, 4, 5, 6]
  
  const [date, setDate] = useState(['', '', '', '', ''])

  const [dayInfo, setDayInfo] = useState(false)

  useEffect(() => {
    const date = new Date()
    const firstDate = new Date(new Date().setDate(1))
    const lastDate = new Date(new Date().setDate(0))
    setDate([date.getMonth(), date.getYear()+1900, months[date.getMonth()] + ' ' + (date.getYear()+1900), firstDate.getDay(), lastDate.getDate()])
    setAnimationCalendarItems(true)
  }, [])

function splitDateTime(str, symbol) {
  const dateArray = []
  str += ' '
  while (dateArray.length != 3) {
    let pos = str.search(symbol)
    dateArray.push(str.slice(0, pos))
    str = str.slice(pos+1, str.length)
  }
  return dateArray
}

function generateDateTime(date, time) {
  const [day, month, year] = splitDateTime(date, '-')
  const [hour, minute, second] = splitDateTime(time, ':')
  return [new Date(day, month-1, year, hour, minute, second), new Date(day, month-1, year)]
}

useEffect(() => {
  const newTasks = []
  props.tasks.forEach((task) => {
    const [deadlineDateTime, deadlineDate] = generateDateTime(task.deadline_date, task.deadline_time)
    const [startDateTime, startDate] = generateDateTime(task.start_date, task.start_date)
    newTasks.push({
      ...task, 
      'deadline': deadlineDate, 
      'deadlineDateTime': deadlineDateTime, 
      'startDateTime': startDateTime
    }) 
  })
  console.log(newTasks)
  setTasks(newTasks)
}, [props.tasks])

  const keklol = useMemo(() => {
    const array = []
    let counter = 1
      for (let i = 0; i < (date[4]+weeksJs[date[3]]-1); i++) {
        if (weeksJs[date[3]]-2 >= i) {
          array.push([false])
        } else {  
          const thisDate = new Date(date[1], date[0], counter)
          array.push([true, thisDate])
          counter += 1
        }
      }
    return array
  }, [date])

  function dateDecrement() {
    setAnimationCalendarItems(false)
    setTimeout(() => {
      let month = parseInt(date[0])
      let year = parseInt(date[1])
      if (month != 0) {
        const date = new Date(year, (month-1), 1)
        const lastDay = new Date(year, (month), 0)
        setDate([month-1, year, months[month-1] + ' ' + year, date.getDay(), lastDay.getDate()])
      } else {
        const date = new Date((year-1), 11, 1)
        const lastDay = new Date((year-1), 11, 0)
        setDate([11, year-1, 'December ' + (year-1), date.getDay(), lastDay.getDate()])
      }
    }, 500)
  }

  return (
    <>
      <Transition
        in={props.modal}
        timeout={200}
        unmountOnExit
        mountOnEnter
      > 
      {state => 
        <Modal state={state} setModal={props.setModal} modal={props.modal} dayInfo={dayInfo} setDayInfo={setDayInfo}></Modal>
      }
      </Transition>
      <Header month={<MonthFilter decrement={dateDecrement} changeAnimation={setAnimationCalendarItems} date={date[2]} animation={animationCalendarItems} />} />
      <CalendarBody setModal={props.setModal} header={kek} items={keklol} animation={animationCalendarItems} changeAnimation={setAnimationCalendarItems} tasks={tasks} />
    </>
  )
}
