import React, { useEffect, useState } from 'react'
import filterIcon from '../../../images/tasks/filter_prefs.svg'
import FilterItem from './FilterItem'

export default function TasksFilter({filterName, type, elements, setStatus}) {

    return (
        <div className='py-3 px-4 bg-kek-blue ml-3 rounded-2xl flex'>
            <img src={filterIcon} className='mr-2' />
            <p className='font-medium'>{filterName+':'}</p>
            <>
                {Object.keys(elements).map(key => (
                    <FilterItem type={type} itemName={key} itemValue={elements[key]} elements={elements} setStatus={setStatus}  />    
                ))}
            </>
        </div>
    )
}
