import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";



const TopDoctors = () => {

  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors Of Dhulikhel Hospital for Appointment</h1>
      <p className="sm:w-1/3 text-center text-sm">Browse through list of Trusted Doctors</p>

      {/* Horizontal Scroll Wrapper */}
      <div className="w-full overflow-x-auto whitespace-nowrap px-3 sm:px-0">
        <div className="flex gap-4 pt-5 px-3 sm:px-0">
          {doctors.slice(0, 10).map((item, index) => (
            <div /*Individual Doctor Card */
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500 min-w-[200px]"
            >
               <img className="bg-blue-50 w-full h-40 object-cover" src={item.image} alt={item.name} />
              <div className="p-4 text-center">
                {/* Doctor Availability */}
                {item.available ? (
                  <div className="flex items-center justify-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-sm text-red-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <p>Not Available</p>
                  </div>
                )}
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">More Doctors</button>
    </div>
  );
};

export default TopDoctors;
