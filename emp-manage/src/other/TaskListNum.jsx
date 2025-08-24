import React from 'react'

const TaskListNum = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
          <div className="px-9 py-6 w-[45%] bg-red-400 rounded-xl">
            <h3 className='text-3xl font-semibold'>0</h3>
            <h3 className='text-xl font-medium' >New Task</h3>
          </div>
          <div className="px-9 py-6 w-[45%] bg-blue-400 rounded-xl">
            <h3 className='text-3xl font-semibold'>0</h3>
            <h3 className='text-xl font-medium' >New Task</h3>
          </div>
          <div className="px-9 py-6 w-[45%] bg-green-400 rounded-xl">
            <h3 className='text-3xl font-semibold'>0</h3>
            <h3 className='text-xl font-medium' >New Task</h3>
          </div>
          <div className="px-9 py-6 w-[45%] bg-yellow-400 rounded-xl">
            <h3 className='text-3xl font-semibold'>0</h3>
            <h3 className='text-xl font-medium' >New Task</h3>
          </div>
    </div>
  )
}

export default TaskListNum
