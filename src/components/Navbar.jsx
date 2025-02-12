import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, User, LogOut, Calendar, UserCircle } from "lucide-react";
import Logo from './logo';

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const[token, setToken] = useState(true)
  return (
    <div className="p-4 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <Logo/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1 group'>
          <NavLink to='/' className="hover:text-blue-500">Home</NavLink>
          <hr className='h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden group-hover:block' />
        </li>
        <li className='py-1 group'>
          <NavLink to='/Doctors' className="hover:text-blue-500">Doctors</NavLink>
          <hr className='h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden group-hover:block' />
        </li>
        <li className='py-1 group'>
          <NavLink to='/about' className="hover:text-blue-500">About</NavLink>
          <hr className='h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden group-hover:block' />
        </li>
        <li className='py-1 group'>
          <NavLink to='/contact' className="hover:text-blue-500">Contact</NavLink>
          <hr className='h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden group-hover:block' />
        </li>
      </ul>
      
 {/*If else statements to show profile when login to website*/
 token 
 ? <div className='flex item-center gap-2 cursor-pointer group relative'>
    <img className='w-8 rounded-full' src={assets.profile_pic} alt=""/>
    <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
        <div className='min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
<p onClick={()=>navigate('Profile')}   className='hover:text-black cursor-pointer'>My Profile</p>
<p onClick={()=>navigate('MyAppointment')} className='hover:text-black cursor-pointer'>Appointments</p>
<p  onClick={()=>setToken()}className='hover:text-black cursor-pointer'>Logout</p>
        </div>
        </div>
 </div>
 : 
        <button onClick={()=>navigate('/login')} className="px-4 py-2 bg-blue-500 text-white rounded-md">Create Account</button>
 }
      </div>
  )
}

export default Navbar;




























