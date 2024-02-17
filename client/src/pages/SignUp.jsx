import React, { useState } from 'react'
import { lucydBLogo } from '../assets'

import { Link, useNavigate } from 'react-router-dom'
import { facebookLogo, googleLogo, profile, lock, icon, man, background } from '../assets'

const SignUp = () => {

  //initialize useNavigate
  const navigate = useNavigate();

  //loading effect
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  //State to manage form data
  const [formData, setFormData] = useState({})

  //function to handle event changes
  const handleChange = (e) => {
      setFormData({
        ...formData, 
        [e.target.id]: e.target.value
    });
  }
  console.log(formData)

  //function to handle sumbit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/sign-in')
      
    } catch (error) {
      setLoading(false);
      setError(true);
    }
          
}
  return (
     <div className='w-full h-screen flex justify-center items-center p-4'>
     <div className='flex justify-center items-center flex-row w-full  max-w-5xl shadow-2xl rounded-3xl'>

      <div className='flex flex-col items-center justify-center gap-2 max-lg:w-full lg:w-1/2 '>
        {/* Logo */}
        <img src={lucydBLogo} alt="logo" className='mt-5 mb-3'/>

        {/* titles */}
        <div>
            <p className='text-center text-3xl font-poppins font-bold'>LOGIN</p>
            <p className='text-center font-poppins font-normal text-lg'>Hey! Welcome</p>
        </div>

        {/* Form */}
         <div className='max-md:w-4/5 md:w-1/2'>
          <form onSubmit={handleSubmit} action="" className='mt-3 flex flex-col gap-2 w-full'>
            <div className='w-full relative'>
              <div className='absolute top-3 left-3'>
                <img src={profile} alt="" />
              </div>
              <input 
              className='input'
              type="text"
              name='username'
              id='username'
              placeholder='Username' 
              onChange={handleChange}                                   
              />
              
            </div>

            <div className='relative w-full'>
              <div className='absolute top-3 left-3'>
                <img src={profile} alt="profile" />
              </div>
              <input 
              className='input'
              type="email"
              name='email'
              id='email'
              placeholder='Email' 
              onChange={handleChange}
              />
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
              placeholder='Password' 
              onChange={handleChange}
              />
            </div>
          </form>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-2 max-md:w-4/5 md:w-1/2 mt-4'>
          <button disabled={loading} className='login-button max-md:w-1/2 md:w-1/2 cursor-pointer'>
            {loading ? 'Loading...': 'Sign Up Now'}
          </button>
         
          <button className='button flex justify-center items-center gap-2 disabled:opacity-80'><img src={googleLogo} alt="google" /> Sign Up with<span className='font-bold'>Google</span></button>
          <button className='button flex justify-center items-center gap-2'><img src={facebookLogo} alt="facebook" /> Sign Up with <span className='font-bold'>Facebook</span></button>
        </div>

        <p className='flex text-sm gap-8'>Have an account already? <Link to='/sign-in'><span className='font-bold underline'>Login</span></Link></p>
        <p className='text-red-700 mt-5'>{error && 'Something went wrong'}</p>
      </div>
       
      <div className='hidden lg:flex justify-center items-center w-[500px] h-[580px] -mr-3 relative rounded-br-3xl rounded-tr-3xl' style={{ backgroundImage: `url(${background})`}}>
        <div className='relative w-[60%] h-[60%] border-white border bg-color border-solid rounded-[30px]' style={{backgroundColor: '#9889F5'}}>
          <div className='absolute bottom-0 translate-x-10'>
            <img src={man} alt="man" width={600} />
          </div>

          <div className='absolute top-3 left-3 w-1/2'>
            <p className='font-poppins text-xl text-white font-bold'>Very good works are waiting for you. Sign Up Now!!!</p>
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


export default SignUp
