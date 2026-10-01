import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login