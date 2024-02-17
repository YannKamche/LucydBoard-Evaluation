import React from 'react'
import { lucydBLogo } from '../assets'

import { Link } from 'react-router-dom'
import { facebookLogo, googleLogo, profile, lock, icon, women, background } from '../assets'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
     <div className='flex justify-center items-center flex-row w-full'>

      <div className='flex flex-col items-center justify-center gap-4 max-lg:w-full lg:w-1/2 '>
        {/* Logo */}
        <img src={lucydBLogo} alt="logo" className='mb-3'/>

        {/* titles */}
        <div>
            <p className='text-center text-3xl font-poppins font-bold'>LOGIN</p>
            <p className='text-center font-poppins font-normal text-lg'>Welcome Back!</p>
        </div>

        {/* Form */}
         <div className='max-md:w-4/5 md:w-1/2'>
          <form action="" className='mt-3 flex flex-col gap-2 w-full'>
            <div className='w-full relative'>
              <div className='absolute top-3 left-3'>
                <img src={profile} alt="" />
              </div>
              <input 
              className='input'
              type="text"
              name='username'
              id='username'
              placeholder='Username' />
              
            </div>

            <div className='relative w-full'>
              <div className='absolute top-3 left-3'>
                <img src={lock} alt="lock" />
              </div>
              <input 
              className='input'
              type="password"
              name='password'
              id='password'
              placeholder='Password' />
            </div>
          </form>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-2 max-md:w-4/5 md:w-1/2 mt-4'>
          <button className='login-button max-md:w-1/2 md:w-1/2'>Login Now</button>
          <p className='text-center'><span className='font-bold'>Login </span>with others</p>
          <button className='button flex justify-center items-center gap-2'><img src={googleLogo} alt="google" /> Login with<span className='font-bold'>Google</span></button>
          <button className='button flex justify-center items-center gap-2'><img src={facebookLogo} alt="facebook" /> Login with <span className='font-bold'>Facebook</span></button>
        </div>

        <p className='flex text-sm gap-8'>Don't have an account? <Link to='/sign-up'><span className='font-bold underline'>Sign Up</span></Link></p>
      </div>
       

      <div className='hidden lg:flex justify-center items-center w-[500px] h-[550px] mr-3 relative' style={{ backgroundImage: `url(${background})`}}>
        <div className='relative w-[60%] h-[60%] border-white border bg-color border-solid rounded-[30px]' style={{backgroundColor: '#9889F5'}}>
          <div className='absolute bottom-0 -right-5'>
            <img src={women} alt="women" />
          </div>

          <div className='absolute top-3 left-3 w-1/2'>
            <p className='font-poppins text-xl text-white font-bold'>Very good works are waiting for you. Login Now!!!</p>
          </div>

          <div className='absolute -left-5 bottom-12'>
            <img src={icon} alt="icon" width={60}/>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default SignIn
