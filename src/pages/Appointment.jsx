import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, curreySymbol } = useContext(AppContext);

  // State variables
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [weekSlots, setWeekSlots] = useState([]);

  // Fetch doctor information
  const fetchDocInfo = async () => {
    if (doctors && doctors.length > 0) {
      const doc = doctors.find((doc) => doc._id === docId);
      setDocInfo(doc || null);
      console.log("Fetched Doctor:", doc);
    }
  };

  // Function to generate slots for a week
  const generateWeeklySlots = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const slots = [
      "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
      "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    const weekData = days.map(day => ({
      day,
      slots: [...slots] // Each day has the same slots
    }));

    setWeekSlots(weekData);
    setSelectedDay(weekData[0].day); // Set default selected day to Sunday
  };

  useEffect(() => {
    fetchDocInfo();
    generateWeeklySlots();
  }, [doctors, docId]);

  if (!docInfo) return <p>Loading doctor details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="Doctor" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-6">
          {/* Doctor Info */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-1 px-3 text-xs font-semibold text-white bg-blue-600 border border-blue-700 rounded-full shadow-lg transition-all duration-200 
                hover:shadow-xl hover:-translate-y-[2px] 
                active:shadow-md active:translate-y-[1px]">
              {docInfo.experience}
            </button>
          </div>

          {/* Doctor About */}
          <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
            About <img src={assets.info_icon} alt="" />
          </p>
          <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>

          {/* Appointment Fee */}
          <p className="text-gray-600 font-medium mt-4">
            Appointment fee: <span className="font-semibold">{curreySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Weekly Time Slots */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Select a Day</h3>
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {weekSlots.map((dayObj, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(dayObj.day)}
              className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 border 
                  ${selectedDay === dayObj.day 
                    ? "bg-blue-600 text-white shadow-md transform scale-105" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              {dayObj.day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots for Selected Day */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Available Time Slots for {selectedDay}</h3>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {weekSlots
            .find((dayObj) => dayObj.day === selectedDay)
            ?.slots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all duration-200 
                    ${selectedSlot === slot 
                      ? "bg-green-600 text-white shadow-md transform scale-105" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {slot}
              </button>
            ))}
        </div>
      </div>

      {/* Confirm Appointment Button */}
      {selectedSlot && (
        <div className="mt-6 text-center">
          <button className="py-2 px-6 text-white font-semibold bg-green-600 rounded-lg shadow-md 
              hover:bg-green-700 transition-all duration-200">
            Confirm Appointment on {selectedDay} at {selectedSlot}
          </button>
        </div>
      )}
    </div>
  );
};

export default Appointment;
