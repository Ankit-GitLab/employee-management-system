import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const authData = useContext(AuthContext);
    


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 '>

        <div className='bg-red-400 py-2 mb-1 px-4 flex justify-between rounded'>
            <h2 className='w-1/6 bg-red-600 rounded'>Employee Name</h2>
            <h3 className='w-1/6 bg-red-600 rounded'>New Task</h3>
            <h5 className='w-1/6 bg-red-600 rounded'>Active Task</h5>
            <h5 className='w-1/6 bg-red-600 rounded'>Completed</h5>
            <h5 className='w-1/6 bg-red-600 rounded'>Failed</h5>
        </div>

        <div className='h-[80%] overflow-auto'>
            {authData.employees.map(function(elem){
            return <div className='bg-red-400 py-2 mb-1 px-4 flex justify-between rounded'>
                <h2 className='w-1/6 rounded'>{elem.firstName}</h2>
                <h3 className='w-1/6 text-blue-600 rounded'>Task</h3>
                <h5 className='w-1/6 text-yellow-600 rounded'>Status</h5>
                <h5 className='w-1/6 text-green-500 rounded'>Status</h5>
                <h5 className='w-1/6 text-red-600 rounded'>Failed</h5>
            </div>
        })}
        </div>

        
    </div>
  )
}

export default AllTask