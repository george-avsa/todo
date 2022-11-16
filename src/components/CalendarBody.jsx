import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import CalendarItems from './CalendarItems'
import WeekDays from './WeekDays'

export default function CalendarBody(props) {

    useEffect(() => {
        setTimeout(()=>props.changeAnimation(true), 200)
    }, [props.items])

    return (
        <>
        {props.tasks.length
        ? 
        (<div className='w-full grid grid-cols-7 gap-4 mt-9 md:grid-cols-5 sm:grid-cols-3'>
                <WeekDays header={props.header}/>
                <Transition
                    in={props.animation}
                    timeout={150}
                    unmountOnExit
                >
                    {state => 
                        <CalendarItems setModal={props.setModal} items={props.items} classState={state} tasks={props.tasks} />
                    }
                </Transition>
            </div>)
        :
        (<div className='w-full caret-black pt-20 box-border flex justify-center text-xl'>No Database Connection</div>)
        }
        </>
    )
    }
