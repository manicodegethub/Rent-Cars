import React, { useState } from 'react';

const SellCar = () => {
  // 1. Tamaam inputs ke liye sirf 1 state object
  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    price: '',
    year: '',
    image: '',
    description: ''
  });

  const [myCars, setMyCars] = useState([]);
  const [notification, setNotification] = useState('');

  // 2. Single handler function sab inputs ke liye
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = { id: Date.now(), ...formData };
    
    setMyCars([newCar, ...myCars]);
    setNotification(`${formData.carName} successfully add ho gayi hai!`);
    setTimeout(() => setNotification(''), 4000);

    // Form clear karna
    setFormData({
      carName: '',
      brand: '',
      price: '',
      year: '',
      image: '',
      description: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-16 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-zinc-950 border border-zinc-900 rounded-2xl p-8 shadow-xl mb-12">
        
        <div className="text-center space-y-2 mb-8">
          <span className="text-[#FACC15] uppercase tracking-widest text-sm font-semibold">
            Sell Your Car
          </span>
          <h1 className="text-3xl font-bold">List Your Car For Sale</h1>
        </div>

        {/* Notification Banner */}
        {notification && (
          <div className="mb-6 p-4 bg-[#FACC15]/10 border border-[#FACC15] text-[#FACC15] rounded-lg text-center font-semibold">
            {notification}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Car Name</label>
            <input 
              type="text" 
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              placeholder="e.g. BMW M4 Competition" 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Brand</label>
              <input 
                type="text" 
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. BMW" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
              <input 
                type="number" 
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 75000" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Model Year</label>
              <input 
                type="number" 
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g. 2023" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
              <input 
                type="url" 
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://image-link.com" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3" 
              placeholder="Gaadi ke baray mein kuch likhein..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FACC15]"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FACC15] text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer"
          >
            Post Car For Sale
          </button>
        </form>
      </div>

      {/* Added Cars Cards */}
      {myCars.length > 0 && (
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-[#FACC15]">My Added Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myCars.map((car) => (
              <div key={car.id} className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden p-4 flex gap-4 items-center">
                <img src={car.image} alt={car.carName} className="w-28 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg">{car.carName}</h3>
                  <p className="text-[#FACC15] font-semibold">${car.price}</p>
                  <p className="text-gray-400 text-xs">{car.brand} • {car.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default SellCar;