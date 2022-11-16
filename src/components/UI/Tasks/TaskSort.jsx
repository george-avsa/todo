import React, { useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import TaskMenuItem from './TaskMenuItem'
import sortIcon from '../../../images/tasks/sort.svg'
import arrowDown from '../../../images/tasks/arrow_down.svg'

export default function TaskSort({sort, setSort}) {

    const [selectOpen, setSelectOpen] = useState(false);   

    return (
        <Transition
            in={selectOpen}
            timeout={200}
        >
           {state => 
                <div className='relative cursor-pointer transition-all' onClick={() => setSelectOpen(!selectOpen)}>
                    <div className={'dropdown absolute pt-5 pb-3 pl-4 pr-14 top-9 left-0 bg-light-blue2 z-10 rounded-2xl rounded-tl-none opacity-0 w-[200px] ' + state}>
                        <p className='mb-2' onClick={() => setSort('priority')}>by priority</p>
                        <p className='mb-2' onClick={() => setSort('deadline')}>by deadline</p>
                    </div>
                    <div className='flex py-3 pl-4 pr-14 items-center top-0 left-0 w-full h-full relative z-20 rounded-2xl bg-[#172F4B] transition-all'>
                        <img src={sortIcon} />
                        <p className='ml-3'>{sort == 'Sort' ? sort : 'Sort by ' + sort}</p>
                    </div>
                    <img className={'selectArrow absolute z-30 right-3 h-full flex items-center w-3 rotate-0 top-0 ' + state} src={arrowDown}></img>
                </div>
            }
        </Transition>
    )
}
