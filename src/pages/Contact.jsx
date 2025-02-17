import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Contact Us</h1>
        <p className="text-lg text-gray-700">
          Need assistance? We're here to help. Get in touch with us!
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Send Us a Message</h2>
          {success && (
            <p className="text-green-600 text-center font-semibold mb-3">
              ✅ Message sent successfully! We will get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Contact Information</h2>
          <p className="text-gray-700 mb-3">
            📍 <strong>Address:</strong> Dhulikhel,Nepal
          </p>
          <p className="text-gray-700 mb-3">📞 <strong>Phone:</strong>9840579822</p>
          <p className="text-gray-700 mb-3">📧 <strong>Email:</strong> dhulikhelhospital@gmail.com
          </p>

          {/* Google Map Embed */}
          <iframe
  className="w-full h-60 mt-4 rounded-lg"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14172.246302079558!2d85.5450736!3d27.6221095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09ee68b1cf87%3A0xcba2092675a6e51!2sDhulikhel%20Hospital!5e0!3m2!1sen!2snp!4v1711234567890!5m2!1sen!2snp"
  allowFullScreen=""
  loading="lazy"
></iframe>

        </div>
      </div>
    </div>
  );
};

export default Contact;
