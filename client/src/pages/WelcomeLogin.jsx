import React from 'react'
import { Link } from 'react-router-dom'
import { lucydBLogo } from '../assets'

const WelcomeLogin = () => {
  return (
    <div className='flex justify-center items-center h-screen font-poppins tracking-wide'>
      <div className='relative flex flex-col m-6 space-y-6 md:w-1/2 lg:w-2/5 md:text-lg'>
        
        <div className='flex items-center justify-center'>
          <img src={lucydBLogo} alt="logo" width={200} height={200}/>
        </div>
        <div className='text-left leading-relaxed'>
          <span className='font-bold text-logo-color'>Welcome to your dashboard</span>. This is where site admins will log in to
          manage their transactions. Users will need to <Link to='sign-in' className='underline font-bold text-logo-color'><a href="">login to the site instead </a></Link>
          to access their user account and transactions
        </div>
        <div className='space-y-3'>
            <span className='text-md'>Email</span>
            <input type="text" className=' bg-secondary-color w-full p-2 border-2 border-gray-200 placeholder:font-light placeholder:text-gray-500'
            name='email'
            placeholder='Email'
            id='email'/>
        </div>
        <div className='pt-2 space-y-3'>
            <span className='mb-2 text-md'>Password</span>
            <input type="password" 
            name='password'
            id='password'
            placeholder='Password'
            className='bg-secondary-color w-full p-2 border-2 border-gray-200 placeholder:font-light placeholder:text-gray-500'
            />
        </div>
        <Link to=''><a href="" className='underline font-bold'>Forgot Password?</a></Link>
        <Link to='/admin-dashboard'><button className='w-full bg-logo-color text-white p-2 mb-6 hover:bg-secondary-color hover:text-logo-color hover:border hover:border-gray-300 font-medium transition-colors duration-300 ease-in-out rounded'>Login</button></Link>
      </div>
    </div>
  )
}

export default WelcomeLogin
