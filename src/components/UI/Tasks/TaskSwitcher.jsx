import React from 'react'
import listBlack from '../../../images/tasks/list_black.svg'
import listWhite from '../../../images/tasks/list_white.svg'
import granttBlack from '../../../images/tasks/grantt_black.svg'
import granttWhite from '../../../images/tasks/grantt_white.svg'
import { Transition } from 'react-transition-group'
import TaskMenuItem from './TaskMenuItem'

export default function TaskSwitcher({listed, setListed}) {
    return (
        <div className='flex bg-[#275180] rounded-2xl relative overflow-hidden'>
            <div className='flex relative z-10 h-full'>
                <TaskMenuItem 
                    clickEvent={() => setListed(true)}
                    imageSrc={listed ? listBlack : listWhite}
                    imageSize = 'w-4'
                    textColor={listed ? 'text-[#172737]' : 'text-white' + 'transition-all'}
                    textValue='Listed'
                ></TaskMenuItem>
                <TaskMenuItem 
                    clickEvent={() => setListed(false)}
                    imageSrc={listed ? granttWhite : granttBlack}
                    textColor={listed ? 'text-white ' : 'text-[#172737] ' + 'transition-all'} 
                    textValue='Grantt' 
                ></TaskMenuItem>
            </div>
            <Transition
                in={listed}
                timeout={300}
            >
            {state => (
                <div className={'absolute w-1/2 h-full bg-white top-0 left-0 rounded-2xl z-5 taskSwitch ' + state}></div>
            )}
            </Transition>
        </div>
    )
}
