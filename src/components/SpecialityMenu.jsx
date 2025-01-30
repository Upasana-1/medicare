import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import Doctors from '../pages/Doctors'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-gray-800'  id='speciality'>
        <h1 className='text-4xl font-medium pt-5'>Find by Speciality of Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm '>Browse through extensive list of Trusted Doctors, <br/>Schedule your appointment to make it hassle free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full '>
        {specialityData.map((item, index) => (
    <Link onClick={()=>{Doctors}} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all' key={index} to={`/doctors/${item.speciality}`}>
        <img src={item.image} alt="" />
        <p>{item.speciality}</p>
    </Link>
))}
        </div>
      
    </div>
  )
}

export default SpecialityMenu
