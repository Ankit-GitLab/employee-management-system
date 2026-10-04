import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompletedTask';

const TaskList = ({data}) => {
    
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center flex-nowrap justify-start py-5  mt-10 gap-5'>

        <AcceptTask />

        <NewTask />

        <CompletedTask />

        <FailedTask />
    
    </div>
  )
}

export default TaskList