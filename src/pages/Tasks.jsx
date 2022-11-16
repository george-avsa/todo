import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import FilterMenu from '../components/UI/Tasks/FilterMenu'
import TaskBody from '../components/UI/Tasks/TaskBody'
import TasksMenu from '../components/UI/Tasks/TasksMenu'

function getACurrentStatus(object) {
  for (let status of Object.keys(object)) {
    if (object[status]) {
      return status.toLowerCase()
    }
  }
}

function getACurrentTypes(object) {
  let types = []
  for (let type of Object.keys(object)) {
    if (object[type]) {
      types.push(type)
    }
  }
  return types
}

export default function Tasks() {
  
  const [allTasks, setAllTasks] = useState([])

  const [tasksViewListed, setTasksViewListed] = useState(true)
  const [taskSearch, setTaskSearch] = useState('')
  const [taskFilter, setTaskFilter] = useState(false)
  const [sort, setSort] = useState('Sort')
  const [statusFilterValue, setStatusFilterValue] = useState({All: true, Closed: false, Open: false})
  const [typeFilterValue, setTypeFilterValue] = useState({Target: true, Event: true, Common: true, Finance: true})

  useEffect(() => {
    fetch('http://localhost:8000/tasks/')
    .then(response => response.json())
    .then(data => setAllTasks([...data.tasks]))
  }, [])


  const tasksToShow = useMemo(() => {
    let status = getACurrentStatus(statusFilterValue)
    if (status != 'all')  {
      return [...allTasks].filter(task => task.status == status)
    }
    let types = getACurrentTypes(typeFilterValue)
    if (types.length) {
      return [...allTasks].filter(task => {
        for (let type of types) {
          if (type == task.type) {
            return true
          }
        }
      })
    } 
    return allTasks
  }, [statusFilterValue, typeFilterValue])
  

  return (
    <>
      <Header />
      <TasksMenu 
        listed={tasksViewListed} 
        setListed={setTasksViewListed}
        search={taskSearch}
        setSearch={setTaskSearch}
        filter = {taskFilter}
        setFilter = {setTaskFilter}
      ></TasksMenu>
      <FilterMenu 
        filter={taskFilter} 
        sort={sort} 
        setSort={setSort} 
        status={statusFilterValue}
        setStatus={setStatusFilterValue}
        type={typeFilterValue}
        setType={setTypeFilterValue}
      ></FilterMenu>
      <TaskBody tasks={tasksToShow}></TaskBody>
    </>

  )
}
