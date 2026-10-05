import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full bg-red-400 items-start justify-between rounded'>
                <div className='w-1/2 m-5'>
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
                <div className='w-w-2/5 flex flex-col items-start m-5'>
                    <h3 className='text-sm text-gray-300'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded-xl outline-none bg-transparent  border border-gray-400' name="" id="" cols="30" rows="3" placeholder='Detailed description of task (Max 500 word)'></textarea>
                </div>
                <button className='bg-emerald-500 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask