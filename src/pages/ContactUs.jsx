import React, { useState } from 'react';

const ContactUs = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState('');

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification('thanku your msg sended sucessfully');
    
    setTimeout(() => setNotification(''), 4000);

    // Form clear karna
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-zinc-950 border border-zinc-900 rounded-2xl p-8 shadow-xl">
        
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-[#FACC15] uppercase tracking-widest text-sm font-semibold">
            Contact Us
          </span>
          <h1 className="text-3xl font-bold mt-1">Get In Touch</h1>
        </div>

        {/* Notification Banner */}
        {notification && (
          <div className="mb-6 p-4 bg-[#FACC15]/10 border border-[#FACC15] text-[#FACC15] rounded-lg text-center font-semibold text-sm">
            {notification}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Syed Usman" 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="usman@example.com" 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4" 
              placeholder="Type Your message..."
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FACC15] text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactUs;