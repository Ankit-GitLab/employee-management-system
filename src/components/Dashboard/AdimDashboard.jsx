import React from 'react'
import Header from '../other/Header'

const AdimDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
        <Header />
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded-xl'>
            <form className='flex flex-wrap w-full bg-red-200 items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent  border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent  border border-gray-400 mb-4' type='date'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent  border border-gray-400 mb-4' type="text" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent  border border-gray-400 mb-4' type="text" placeholder='Design, Development, etc....' /> <br />
                    </div>
                </div>
                <div className='w-w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded-xl outline-none bg-transparent  border border-gray-400' name="" id="" cols="30" rows="3" placeholder='Detailed description of task (Max 500 word)'></textarea>
                </div>
                <button className='bg-emerald-500 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdimDashboard