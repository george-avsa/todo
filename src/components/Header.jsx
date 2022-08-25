import React from 'react'
import Deadlines from './Deadlines'

export default function Header(props) {
  return (
    <header className='h-[50px] flex justify-between items-end'>
        <p className='text-xl'>Hello, Gogi!</p>
        {props.month}
        <Deadlines />
    </header>
  )
}
