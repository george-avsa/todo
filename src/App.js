import './App.css';
import logo from './images/logo.svg'
import calendar from './images/calendar.svg'
import logout from './images/logout.svg'
import target from './images/target.svg'
import event from './images/event.svg'
import tasks from './images/tasks.svg'
import NavItem from './images/components/NavItem';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Tasks from './pages/Tasks';
import Events from './pages/Events';
import Targets from './pages/Targets';
import NotFound from './pages/NotFound';
import { Transition } from 'react-transition-group';
import Burger from './components/Burger';

function App() {

  const [navItems, setNavItems] = useState([
    {name: "Calendar", image: calendar, active:false, link: '/'},
    {name: "Tasks", image: tasks, active:false, link: '/tasks'},
    {name: "Events", image: event, active:false, link: '/events'},
    {name: "Targets", image: target, active:false, link: '/targets'},
  ])

  const [modalVisibililty, setModalVisibililty] = useState(false)

  const screenSize = parseInt(window.innerWidth)

  const [tasksArray, setTasksArray] = useState([])
  

  const [menuMobile, setMenuMobile] = useState(false)
  

  async function loadNames(change) {
    const response = await fetch('http://127.0.0.1:8000/tasks/');
    const names = await response.json();
    change(names.tasks)
    // return names.tasks
 }

  useEffect(() => {
    
    if (screenSize > 900) {
      setMenuMobile(true)
    }
    let kekurl = (window.location+'').replace('http://localhost:3000', '')
    let kekplus = []
    navItems.forEach((kek) => {
      if (kekurl == kek.link) {
        let kek2 = kek
        kek2.active = true 
        kekplus.push(kek2)
      } else {
        let kek2 = kek
        kek2.active = false 
        kekplus.push(kek2)
      }
    })
    
    setNavItems(kekplus)

    // fetch('./DB/kek.json')
    // .then(response => {
    //     return response.json();
    // })
    // .then(json => {
    //      console.log(json);
    // })
    
      loadNames(setTasksArray);
    }, [])

  return (
    <div className="container mx-auto 2xl flex h-full sm:w-screen sm:m-0 sm:h-10 sm:block">
      
      <div className="w-1/5 pl-6 box-border pt-10 pb-9 flex sm:overflow-y-hidden flex-col justify-between sm:w-full sm:pl-8 sm:pr-8 sm:bg-light-blue sm:flex-row">
        <div className="w-full flex flex-col flex-between">
          <div className="flex items-end">
            <img className="" src={logo}></img>
            <p className="ml-1.5 text-white">todo</p>
          </div>
          <Transition
            in={menuMobile}
            timeout={200}
            mountOnEnter
            unmountOnExit
          >
            {state => (
              <nav className={'flex flex-col mt-20 sm:mt-4 sm:h-0 ' + state}>
                {navItems.map(navItem => (
                  <NavItem screen={screenSize} menuState={menuMobile} image={navItem.image} classState={state} key={navItem.name} active={navItem.active} setActive={setMenuMobile} state={navItems} link={navItem.link} change={setNavItems}>{navItem.name}</NavItem>
                ))}
              </nav>
            )}
          </Transition>
        </div>
        <div className="justify-self-end sm:hidden">
            <NavItem image={logout}>Logout</NavItem>
        </div>
        <Burger state={menuMobile} change={setMenuMobile} />
      </div>

      <div className="w-4/5 sm:w-screen box-border pt-10 pb-9 pr-6 sm:pr-0">
        <div className="w-full bg-dark-blue rounded-3xl box-border p-5 text-white min-h-full">
          <Routes>
            <Route path="/" element={<Calendar tasks={tasksArray} modal={modalVisibililty} setModal={setModalVisibililty} />} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/targets" element={<Targets/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
