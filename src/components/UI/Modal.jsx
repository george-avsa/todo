import React, { useEffect } from 'react'
import ModalCalendarContent from './Modals/ModalCalendarContent'
import ModalPreloader from './Modals/ModalPreloader'

export default function Modal(props) {

    useEffect(() => {
        fetch('http://127.0.0.1:8000/tasks/' + props.modal)
        .then(response => response.json())
        .then(data => props.setDayInfo(data))
    }, [])

    return (
        <div onClick={() => props.setModal(!props.modal)} className={'fixed top-0 left-0 w-full h-full bg-[#172737]/80 z-40 flex items-center justify-center modal-wrapper '+props.state} style={{backdropFilter: 'blur(8px)'}}>
            <div className='relative w-[700px] h-[700px] bg-[#172F4B] rounded-3xl px-8 py-7 box-border' 
                onClick={e => e.stopPropagation()}
            >
                <div className='w-full h-full overflow-x-hidden'>

                    {props.dayInfo
                        ? <ModalCalendarContent dayInfo={props.dayInfo}></ModalCalendarContent>
                        : <ModalPreloader></ModalPreloader>
                    }
                    <div className='absolute top-0 right-[-40px] z-45 cursor-pointer w-8 h-8' onClick={() => props.setModal(!props.modal)}>
                        <div className='absolute top-[10px] w-[30px] h-[4px] rounded-sm bg-white rotate-45 left-0'></div>
                        <div className='w-[30px] top-[10px] h-[4px] rounded-sm bg-white rotate-[-45deg] absolute left-0'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
