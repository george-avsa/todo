import React from 'react'

export default function WeekDays(props) {
  return (
    <>
        {props.header.map(keklol => (
            <div className='h-auto text-white col-span-1 flex items-end'>{keklol}</div>
        ))}
    </>
  )
}
