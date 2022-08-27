import React, { useEffect, useMemo, useState } from 'react'
import CalendarBody from '../components/CalendarBody'
import Header from '../components/Header'
import MonthFilter from '../components/MonthFilter'

export default function Calendar(props) {

  const kek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const [tasks, setTasks] = useState([])

  const [animationCalendarItems, setAnimationCalendarItems] = useState(false)
  
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const weeksJs = [7, 1, 2, 3, 4, 5, 6]
  
  const [date, setDate] = useState(['', '', '', '', ''])
  
  useEffect(() => {
    const date = new Date()
    const firstDate = new Date(new Date().setDate(1))
    const lastDate = new Date(new Date().setDate(0))
    setDate([date.getMonth(), date.getYear()+1900, months[date.getMonth()] + ' ' + (date.getYear()+1900), firstDate.getDay(), lastDate.getDate()])
    setAnimationCalendarItems(true)
  }, [])

function splitDate(str) {
  const dateArray = []
  str += ' '
  while (dateArray.length != 3) {
    let pos = str.search('/')
    dateArray.push(str.slice(0, pos))
    str = str.slice(pos+1, str.length)
  }
return dateArray
}

function generateDate(str) {
  const dateArray = splitDate(str)
  return new Date(dateArray[2], dateArray[1], dateArray[0])
}

useEffect(() => {
  const newTasks = []
  props.tasks.forEach((task) => {
    newTasks.push({...task, 'deadline': generateDate(task.deadline ), 'start': generateDate(task.start)}) 
  })
  setTasks(newTasks)
}, [props.tasks])

  const keklol = useMemo(() => {
    const array = []
    let counter = 1
    console.log(tasks)
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
      <Header month={<MonthFilter decrement={dateDecrement} changeAnimation={setAnimationCalendarItems} date={date[2]} animation={animationCalendarItems} />} />
      <CalendarBody header={kek} items={keklol} animation={animationCalendarItems} changeAnimation={setAnimationCalendarItems} tasks={tasks} />
    </>
  )
}
