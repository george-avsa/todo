import React, { useState } from 'react'
import TaskMenuItem from './TaskMenuItem'
import TaskSwitcher from './TaskSwitcher'
import granttWhite from '../../../images/tasks/grantt_white.svg'
import filterIcon from '../../../images/tasks/filter.svg'
import createIcon from '../../../images/tasks/creating.svg'
import TaskSearch from './TaskSearch'
import { Transition } from 'react-transition-group'

export default function TasksMenu({listed, setListed, search, setSearch, filter, setFilter}) {
    return (
        <div className='w-full h-auto mt-5 box-border flex flex-wrap'>
            <TaskSwitcher listed={listed} setListed={setListed}></TaskSwitcher>
            <TaskMenuItem 
                imageSrc={createIcon}
                textValue='Create'
                imageSize='w-6'
                bgColor='bg-[#172F4B]'
                styleClasses='ml-3'
            ></TaskMenuItem>
            <Transition
                in={filter}
                timeout={200}
            >
                {state => (
                    <TaskMenuItem 
                        clickEvent={() => setFilter(!filter)}
                        imageSrc={filterIcon}
                        textValue='Filter'
                        imageSize='w-5'
                        styleClasses='ml-3 overflow-hidden'
                    ><div className={'absolute z-5 w-[500%] h-full filterBtn left-0 top-0 ' + state}></div></TaskMenuItem>
                )}
            </Transition>
            <TaskSearch search={search} setSearch={setSearch}></TaskSearch>
        </div>
    )
}
