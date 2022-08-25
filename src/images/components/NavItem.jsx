import React from 'react'
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom'

export default function NavItem(props) {
  
  function clickLink(e) {
    let kekplus = []
    props.state.forEach((kek) => {
        if (kek.name == e.target.innerHTML || kek.name == e.target.getAttribute('id')) {
            let kek2 = kek
            kek2.active = true 
            kekplus.push(kek2)
        } else {
            let kek2 = kek
            kek2.active = false 
            kekplus.push(kek2)
        }
    })
    props.change(kekplus)
    if (props.screen < 767) {
        props.setActive(false)
    }
  }

  return (
    <Link to={props.link+''} className='mt-8' onClick={clickLink} id={props.children}>
        <div className="flex items-center relative" id={props.children}>
            <img src={props.image} id={props.children}></img>
            <p className="ml-1.5 text-white">{props.children}</p>
            <Transition 
                in={props.active}
                timeout={100}
                mountOnEnter
                unmountOnExit
            >
            {state => (
                <div className={'active-cirlce w-[8px] h-[8px] bg-white absolute top-50 left-[-20px] rounded-full opacity-0 ' + state}></div>
            )}
            </Transition>
        </div>
    </Link>
  )
}
