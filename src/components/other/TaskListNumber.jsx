import React from 'react'

const TaskListNumber = () => {
  return (
    <div id='tasklist' className='flex mt-10 justify-between gap-5 w-full'>

        <div className='w[45%] rounded-xl py-6 px-25 bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>

        <div className='w[45%] rounded-xl py-6 px-25 bg-blue-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>

        <div className='w[45%] rounded-xl py-6 px-25 bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>

        <div className='w[45%] rounded-xl py-6 px-25 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumber