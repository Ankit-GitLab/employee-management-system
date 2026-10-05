import React from 'react'

const AcceptTask = ({data}) => {
    console.log();
    
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded-xl'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>
            {data.taskDescription}
        </p>
        <div className='flex justify-between mt-20'>
            <button className='bg-red-800 py-1 px-2 text-sm'>Marks as completed</button>
            <button className='bg-red-800 py-1 px-2 text-sm'>Marks as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask