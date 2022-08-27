import arrow from './../images/arrow.svg'
import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

export default function MonthFilter(props) {
    
    return (
          <div className='flex relative w-[250px] h-[36px] justify-center sm:order-3'>
                  <button className='mr-8 absolute left-[-10px] top-3 calendar-item ' onClick={props.decrement}><img src={arrow}></img></button>
                  <p className='text-3xl calendar-header'>{props.date}</p>
              <div></div>
          </div>
  )
}
