import React from 'react'

const CompletedTask = () => {
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 px-3 py-1 text-sm rounded-xl'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Learn react project</h2>
            <p className='text-sm mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio eaque pariatur voluptas aut minus.
            </p>
            <div className='flex justify-center mt-20'>
                <button className='bg-yellow-800 w-full py-1 px-2 text-sm'>Completed</button>
            </div>
    </div>
  )
}

export default CompletedTask