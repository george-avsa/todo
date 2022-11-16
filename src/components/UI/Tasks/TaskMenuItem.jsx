import React from 'react'

export default function TaskMenuItem({imageSrc, clickEvent, textValue, bgColor='', textColor='text-white', imageSize='w-6', styleClasses='', ...props}) {
    
    
    return (
        <div className={'flex items-center cursor-pointer h-full px-4 py-3 rounded-2xl relative ' + [bgColor, styleClasses].join(' ')} onClick={clickEvent}>
            <img src={imageSrc} className={'mr-3 relative z-10 '+imageSize}></img>
            <p className={textColor+' relative z-10 '} style={{transition: '.2s'}}>{textValue}</p>
            {props.children}
        </div>
    )
}
