import React from 'react'

export default function ModalPreloader() {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='modalPreloader'>
                <div className='preloaderCircle w-2 h-2 absolute ml-1 bg-white rounded-full'></div>
            </div>
        </div>
    )
}
