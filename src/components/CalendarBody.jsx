import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import CalendarItems from './CalendarItems'
import WeekDays from './WeekDays'

export default function CalendarBody(props) {

    useEffect(() => {
        setTimeout(()=>props.changeAnimation(true), 200)
    }, [props.items])

    return (
        <div className='w-full grid grid-cols-7 gap-4 mt-9'>
            <WeekDays header={props.header}/>
            <Transition
                in={props.animation}
                timeout={100}
                unmountOnExit
            >
                {state => 
                    <CalendarItems items={props.items} classState={state} />
                }
            </Transition>
        </div>
    )
    }
