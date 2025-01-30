import React from 'react';
import { assets } from '../assets/assets';
import hospital_dhulikhel from '../assets/hospital_dhulikhel.jpg';


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-400">
      {/* Left Side */}
      <div>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book your Appointment <br /> With Trusted Doctors of <br /> Dhulikhel Hospital
        </p>
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-2 py-5 m-auto md:py-[10vw] md:mb-[-30px]">
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img className="w-28" src={assets.group_profiles} alt="Profiles" />
            <p>Browse through a list of trusted doctors, <br className="hidden sm:block" /> Schedule your next appointment</p>
          </div>
    
          <a href='#speciality' className=" flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm md:m-0 hover:scale-105 transition-all duration-300">
            Book Appointment  <img className="w-3"  src={assets.arrow_icon} alt="Arrow Icon" />
          </a>
         
        </div>
      </div>
<div className='md:w-1/2 relative'>
    <img className='w-full md:absolute bottom-22 h-auto rounded-lg' src={hospital_dhulikhel} alt='Header'/>
    </div>
</div>
     
  );
};

export default Header;
