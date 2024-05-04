import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title , desc1 , desc2 ,image ,formtype, setIsUserLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] h-screen my-12 mx-auto gap-x-20  gap-y-0'>
      
      <div className=' w-11/12 max-w-[450px] '>
        <p className='text-[1.875rem] font-semibold  text-richblack-5 leading-[2.375rem]'>{title}</p>
        <p className='text-[1.25rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br/>
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ?
        (<SignupForm setIsUserLoggedIn={setIsUserLoggedIn}/>):
        (<LoginForm setIsUserLoggedIn={setIsUserLoggedIn}/>)}

        <div className='flex flex-row w-full items-center gap-x-2 mt-5'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[23px] py-[8px] gap-x-2 mt-6 '>
          <FcGoogle/>
          <p>Sign up with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} alt="pattern" loading='lazy' height={504} width={558}/>
        <img src={image} alt="student" loading='lazy' height={504} width={558}
             className='absolute -top-4 right-4'
        />
      </div>

    </div>
  )
}

export default Template
