import React from 'react'
import Header from '../../other/Header'
import TaskListNum from '../../other/TaskListNum'
import TaskList from '../Tasklist/TaskList'

const EmployeDashbord = () => {
  return (
    <div className='p-10 bg-[#ICICIC]  h-screen bg-red'>
       <Header/>
       <TaskListNum/>
       <TaskList/>
    </div>
  )
}

export default EmployeDashbord
