import React, { useEffect, useState } from 'react'

export default function MonthFilter(props) {

    return (
    <div className='flex relative w-[250px] justify-center'>
        <button className='mr-8 absolute left-[-10px] top-1' onClick={props.decrement}>{'<'}</button>
        <p className='text-3xl'>{props.date}</p>
        <div></div>
    </div>
  )
}
