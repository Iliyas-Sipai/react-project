import React from 'react'

const TaskContext = ({childern}) => {
  return (
    <div>
        <h1>{childern}</h1>
       <h1 className='text-white'>How aere you</h1>
       <h1>Props is help to pass data from one component to onther component </h1>
    </div>
  )
}

export default TaskContext
