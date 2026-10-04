import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompletedTask';

const TaskList = ({data}) => {
    
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center flex-nowrap justify-start py-5  mt-10 gap-5'>
      {data.tasks.map((elem , idx)=>{
        if(elem.active){
          return <AcceptTask key={idx}  />
        }
        if(elem.newTask){
          return <NewTask key={idx} />
        }
        if(elem.completed){
          return <CompletedTask key={idx} />
        }
        if(elem.failed){
          return <FailedTask key={idx}  />
        }
      })}
    
    </div>
  )
}

export default TaskList