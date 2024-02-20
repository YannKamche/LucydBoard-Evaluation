import React, { useState } from 'react'
import { lucydBLogo, women } from '../assets'

import { Link, useNavigate } from 'react-router-dom'
import { facebookLogo, googleLogo, profile, lock, icon, man, background } from '../assets'

import { signInStart, signInFailure, signInSuccess  } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from '../components/OAuth'

const SignUp = () => {

  //initialize navigate
  const navigate = useNavigate();

  //initialize dispatch
  const dispatch = useDispatch();

  // //loading and error using useEFfect
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false)

  //loadinng and error using dispatch
  const { loading , error } = useSelector(state => state.user)

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
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      
      if (data.success === false) {
        dispatch(signInFailure(data))
        return;
      }

      dispatch(signInSuccess(data))
      navigate('/user-dashboard');
    } catch (error) {
      dispatch(signInFailure(error));
    }
          
}
  return (
     <div className='w-full h-screen flex justify-center items-center p-4'>
      <div className='flex justify-center items-center flex-row w-full max-w-5xl shadow-2xl rounded-3xl'>

        <div className='flex flex-col items-center justify-center gap-4 max-lg:w-full lg:w-1/2 '>
          {/* Logo */}
          <img src={lucydBLogo} alt="logo" className='mt-5 mb-3'/>

          {/* titles */}
          <div>
              <p className='text-center text-3xl font-poppins font-bold'>LOGIN</p>
              <p className='text-center font-poppins font-normal text-lg'>Welcome Back!</p>
          </div>

          {/* Form */}
          <div className='max-md:w-4/5 md:w-1/2'>
            <form onSubmit={handleSubmit} action="" className='mt-3 flex flex-col gap-2 w-full'>
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
              {/* Buttons */}
              <div className='flex flex-col gap-2 mt-4'>
                <button disabled={loading} className='login-button max-md:w-1/2 md:w-1/2 cursor-pointer'>
                  {loading ? 'Loading...': 'Sign In'}
                </button>
                <OAuth />
                <button className='button flex justify-center items-center gap-2'><img src={facebookLogo} alt="facebook" />Log in with <span className='font-bold'>Facebook</span></button>
              </div>
            </form>
          </div>


          <p className='flex text-sm gap-8'>Dont have an account? <Link to='/sign-up'><span className='font-bold underline'>Sign Up</span></Link></p>
          <p className='text-red-700 mt-5'>{error ? error.message || 'Something went wrong!' : ''}</p>
        </div>
        
        <div className='hidden lg:flex justify-center items-center w-[500px] h-[570px] -mr-2 relative rounded-br-3xl rounded-tr-3xl' style={{ backgroundImage: `url(${background})`}}>
          <div className='relative w-[60%] h-[60%] border-white border bg-color border-solid rounded-[30px]' style={{backgroundColor: '#9889F5'}}>
            <div className='absolute bottom-0 translate-x-10'>
              <img src={women} alt="man" width={600} />
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
