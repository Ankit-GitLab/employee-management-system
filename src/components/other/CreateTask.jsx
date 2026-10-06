import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, AssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Task Created");
        
    }


  return (
    <div>
        <div className='p-5 bg-[#1c1c1c] mt-7 border-2 border-emerald-500rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-wrap w-full  items-start justify-between rounded'>
                <div className='w-1/2 m-5 '>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
                        <input className=' border-2 border-emerald-500 text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                        <input className=' border-2 border-emerald-500 text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent mb-4' type='date'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Assign To</h3>
                        <input className=' border-2 border-emerald-500 text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent   mb-4' type="text" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Category</h3>
                        <input className=' border-2 border-emerald-500 text-sm py-1 px-2 w-4/5 rounded-xl outline-none bg-transparent  mb-4' type="text" placeholder='Design, Development, etc....' /> <br />
                    </div>
                </div>
                <div className='w-w-2/5 flex flex-col items-start m-5 '>
                    <h3 className='text-sm text-gray-300'>Description</h3>
                    <textarea className=' border-2 border-emerald-500 w-full h-44 text-sm py-2 px-4 rounded-xl outline-none bg-transparent' name="" id="" cols="30" rows="3" placeholder='Detailed description of task (Max 500 word)'></textarea>
                </div>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask