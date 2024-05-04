import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isUserLoggedIn = props.isUserLoggedIn;
    let setIsUserLoggedIn = props.setIsUserLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      
        <Link to ='/'>
            <img src = {logo} alt='Logo' height={32} width={160} loading='lazy'/>
        </Link> 

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to ='/' >Home</Link>
                </li>

                <li>
                    <Link to ='/About' >About</Link>
                </li>

                <li>
                    <Link to ='/Contact' >Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4 '>
            { 
                !isUserLoggedIn &&
                <Link to='/Login'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Log in</button>
                </Link>
            }
            { 
                !isUserLoggedIn &&
                <Link to='/Signup'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign up</button>
                </Link>
            }
            {
                isUserLoggedIn &&
                <Link to='/Logout'>
                    <button 
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    onClick={() =>{
                        setIsUserLoggedIn(false); 
                        toast.success('Logged out');
                    }}>Log out</button>
                </Link>
            }
            {
                isUserLoggedIn &&
                <Link to='/Dashboard'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }

        </div>
    </div>
  )
}

export default Navbar
