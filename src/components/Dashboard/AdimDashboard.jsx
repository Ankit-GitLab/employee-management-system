import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdimDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
    <Header
      data={props.data}
      changeUser={props.changeUser}
    />        
    <CreateTask />
    <AllTask />
    </div>
  )
}

export default AdimDashboard