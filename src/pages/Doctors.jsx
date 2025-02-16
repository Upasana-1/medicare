import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Appointment from './Appointment';
import EditDoctor from './EditDoctor';

const Doctors = () => {
  const { speciality } = useParams(); // Get the selected speciality from the URL
  const navigate = useNavigate(); // Used for navigation
  const { doctors } = useContext(AppContext); // Get doctors data from context

  // Store selected speciality in state
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality || "All");

  // Filter doctors based on selectedSpeciality
  const filteredDoctors = selectedSpeciality === "All" 
    ? doctors 
    : doctors.filter((doctor) => doctor.speciality === selectedSpeciality);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors Of Dhulikhel Hospital for Appointment</h1>
      <p className="sm:w-1/3 text-center text-sm">Browse through list of Trusted Doctors</p>

      {/* Doctor Speciality Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {["All", "Physician", "Gynecologist", "Dermatologist","Biochemist" ,"Pediatricians", "Neurologist", "ENT"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedSpeciality(category); // Update selected speciality
              navigate(category === "All" ? "/doctors" : `/doctors/${category}`); // Update URL
            }}
            className={`px-4 py-2 border rounded transition-all cursor-pointer ${
              selectedSpeciality === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Wrapper for Doctors */}
      <div className="w-full overflow-x-auto whitespace-nowrap px-3 sm:px-0 mt-5">
        <div className="flex gap-4 pt-5 px-3 sm:px-0">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500 min-w-[200px]"
              >
                <img className="bg-blue-50 w-full h-40 object-cover" src={doctor.image} alt={doctor.name} />
                <div className="p-4 text-center">
                  <p className="font-bold">{doctor.name}</p>
                  <p className="text-sm text-gray-500">{doctor.speciality}</p>
                  <p
                  className={`text-sm font-medium mt-2 ${
                    doctor.availability ? "text-green-600" : "text-red-600"
                  }`}
                >
                  🕒 {doctor.availability ? `Available: ${doctor.availability}` : "Not Available"}
                  
                </p>
                <button 
  onClick={() => navigate(`/Appointment/${doctor._id}`)}
  className="mt-3 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-yellow-600"
>
  Book an Appointment
</button>
              </div>
              </div>
            ))
          ) : (
            <p className="text-red-500">No doctors available for {selectedSpeciality}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
