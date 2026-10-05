import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 px-3 py-1 text-sm rounded-xl'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>
                {data.taskDescription}
            </p>
            <div className='flex justify-center mt-20'>
                <button className='bg-blue-800 w-full py-1 px-2 text-sm'>Failed</button>
            </div>
    </div>
  )
}

export default FailedTask