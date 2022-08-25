import React, { useState } from 'react'
import { Transition } from 'react-transition-group'


export default function Burger({state, change}) {
    
    function burgerClick() {
        change(!state)
    }
    
    return (
    <div className="justify-self-end hidden sm:block text-white" onClick={burgerClick}>
        <Transition
            in={state}
            timeout={200}
        >
        {state => (
        <div className='w-[20px] h-[15px] flex flex-col justify-between'>
            <div className={'w-full h-[2px] bg-white rounded-sm relative ' + state} id='kek'></div>
            <div className={'w-full h-[2px] bg-white rounded-sm ' + state} id='kek2'></div>
            <div className={'w-full h-[2px] bg-white rounded-sm ' + state} id='kek3'></div>
        </div>
        )}
        </Transition>
    </div>
  )
}
