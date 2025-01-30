import React from "react";
import { assets } from "../assets/assets";
import hospital_dhulikhel from "../assets/hospital_dhulikhel.jpg";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-blue-500 text-white px-6 md:px-16 py-10 md:py-16">
      {/* Left Side Content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Book Your Appointment <br />
          with Trusted Doctors of <br />
          <span className="text-yellow-300">Dhulikhel Hospital</span>
        </h1>

        <p className="text-sm md:text-base leading-relaxed">
          Skip the long queues! Browse through a list of top doctors and schedule 
          your next appointment from the comfort of your home.
        </p>

        <div className="flex items-center gap-4">
          <img className="w-24 md:w-28" src={assets.group_profiles} alt="Doctors" />
          <p className="text-sm">Trusted by thousands for quality healthcare.</p>
        </div>

        <a
          href="#speciality"
          className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-300"
        >
          Book Appointment 
          <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        <img
          className="w-full rounded-lg shadow-lg"
          src={hospital_dhulikhel}
          alt="Dhulikhel Hospital"
        />
      </div>
    </div>
  );
};

export default Header;
