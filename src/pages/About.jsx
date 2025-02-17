import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About Medicare
        </h1>
        <p className="text-lg text-gray-700">
          Your trusted healthcare partner, committed to providing top-notch 
          medical services with care and compassion.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Mission */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To deliver high-quality, patient-centered healthcare, ensuring 
            accessibility and affordability for all.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading healthcare provider, promoting well-being and 
            medical innovation.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-6xl mx-auto mt-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Dashrath Kafle", specialty: "Orthodontic", image: "/doctor1.jpg" },
            { name: "Dr. Aayusha Sharma", specialty: "Pediatrician", image: "/doctor2.jpg" },
            { name: "Dr. Anish Joshi", specialty: "Cardiologist", image: "/doctor3.jpg" },
          ].map((doc, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-900">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-700 italic">
              "The doctors and staff at Dhulikhel are highly professional and 
              caring. I received the best treatment for my condition!"
            </p>
            <h4 className="text-gray-900 font-semibold mt-3">- Rajesh Shrestha</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-700 italic">
              "I was amazed by the prompt service and friendly staff. Highly 
              recommend Medicare for quality healthcare!"
            </p>
            <h4 className="text-gray-900 font-semibold mt-3">- Sita Adhikari</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto text-center mt-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900">Book an Appointment Today</h2>
        <p className="text-gray-700 mt-3">
          Experience quality medical care from expert doctors.
        </p>
        <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default About;
