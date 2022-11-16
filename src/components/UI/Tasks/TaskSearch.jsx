import React from 'react'
import searchIcon from '../../../images/tasks/search.svg'

export default function TaskSearch({search, setSearch}) {
    return (
        <div className='h-full px-4 py-3 rounded-2xl bg-[#172F4B] ml-3 relative'>
            <input className='focus:outline-none bg-transparent' placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
            <img src={searchIcon} className='absolute w-4 top-1/2 right-4 mt-[-8px]'></img>
        </div>
    )
}
