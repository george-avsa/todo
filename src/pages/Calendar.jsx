import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import MonthFilter from '../components/MonthFilter'

export default function Calendar() {

  const kek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const weeksJs = [1, 2, 3, 4, 5, 6, 0]
  
  const [date, setDate] = useState(['', '', '', '', ''])
  
  useEffect(() => {
    const date = new Date()
    const firstDate = new Date(new Date().setDate(1))
    const lastDate = new Date(new Date().setDate(0))
    setDate([date.getMonth(), date.getYear()+1900, months[date.getMonth()] + ' ' + (date.getYear()+1900), firstDate.getDay(), lastDate.getDate()])
  }, [])
  
  const keklol = useMemo(() => {
    const array = []
    for (let i = 0; i < (date[4]+date[3]-1); i++) {
      if (weeksJs[date[3]]-3 >= i) {
        array.push([false])
      } else {
        array.push([true])
      }
    }
    return array
  }, [date])

  function dateDecrement() {
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
  }


  return (
    <>
      <Header month={<MonthFilter decrement={dateDecrement} date={date[2]} />} />
      <div className='w-full grid grid-cols-7 gap-4 mt-9'>
        {kek.map(keklol => (
          <div className='h-auto text-white col-span-1 flex items-end'>{keklol}</div>
        ))}
        {keklol.map(keklol => keklol[0]
        ?
        (
            <div className='h-[100px] rounded-3xl text-white col-span-1 flex bg-kek-blue'>{keklol}</div>
        )
        :
        (
            <div className='h-[100px] rounded-3xl text-white col-span-1 flex bg-kek-blue opacity-0'>{keklol}</div>
        )
        )}
      </div>
    </>
  )
}
