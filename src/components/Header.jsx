import React from 'react'
import Deadlines from './Deadlines'

export default function Header(props) {
  return (
    <header className='h-[50px] flex justify-between items-end sm:flex-col sm:items-center sm:h-auto'>
        <p className='text-xl sm:m-2'>Hello, Gogi!</p>
        {props.month}
        <Deadlines />
    </header>
  )
}
