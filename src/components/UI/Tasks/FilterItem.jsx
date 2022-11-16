import React, { useCallback, useEffect } from 'react'

export default function FilterItem({type, itemName, itemValue, setStatus, elements}) {

    const filterManager = (e) => {
        let chosenItem = e.target.getAttribute('id')
        if (type == 'radio' && chosenItem) {
            let newStatus = {
                'All': false,
                'Closed': false,
                'Open': false,
            }
            newStatus[chosenItem] = true
            setStatus(newStatus)
        } 
        if (type == 'checkbox' && chosenItem) {
            let newTypes = {...elements}
            newTypes[chosenItem] = !elements[chosenItem]
            setStatus(newTypes)
        }
    }

    return (
        <label className='ml-3 flex relative pl-5'>
            <input type={type} checked={itemValue} id={itemName} onChange={e => filterManager(e)} />
            <span className={'absolute top-1/2 left-0 w-4 h-4 -mt-2 ' + (type == 'radio' ? 'radio' : 'checkbox')}></span>
            {itemName}
        </label>
    )
}
