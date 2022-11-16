import React from 'react'
import { Transition } from 'react-transition-group'
import TaskMenuItem from './TaskMenuItem'
import sortIcon from '../../../images/tasks/sort.svg'
import TaskSort from './TaskSort'
import TasksFilter from './TasksFilter'

export default function FilterMenu({filter, sort, setSort, ...props}) {
    
    return (
        <Transition
            in={filter}
            timeout={200}
            unmountOnExit
            mountOnEnter
        >
            {state => (
                <div className={'mt-6 flex items-center w-full h-0 opacity-0 filter ' + state}>
                    <TaskSort filter={filter} sort={sort} setSort={setSort}></TaskSort>
                    <TasksFilter filterName='Status' type='radio' elements={props.status} setStatus={props.setStatus}></TasksFilter>
                    <TasksFilter filterName='Type' type='checkbox' elements={props.type} setStatus={props.setType}></TasksFilter>
                </div>
            )}
        </Transition>
    )
}
