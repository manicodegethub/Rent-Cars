import React from 'react';

const AboutStory = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Images or Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80" 
            alt="Car keys handover" 
            className="rounded-xl object-cover h-48 w-full border border-zinc-800"
          />
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80" 
            alt="Luxury showroom" 
            className="rounded-xl object-cover h-48 w-full border border-zinc-800 mt-6"
          />
        </div>

        {/* Right Side: Text */}
        <div className="space-y-6">
          <span className="text-[#FACC15] uppercase tracking-widest text-sm font-semibold">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Building The Most Trusted Car Marketplace Since 2020
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            AutoDeal ki shuruat ek chote se khwab ke sath hui thi ke log bina kisi hidden charges aur fraud ke apni pasand ki gaadi khareed aur bech sakein. Aaj hum hazaron khush gari khareedaron ka bharosa jeet chuke hain.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-zinc-800">
            <div>
              <h3 className="text-3xl font-bold text-[#FACC15]">5K+</h3>
              <p className="text-gray-400 text-sm mt-1">Cars Sold</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#FACC15]">100%</h3>
              <p className="text-gray-400 text-sm mt-1">Verified</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#FACC15]">24/7</h3>
              <p className="text-gray-400 text-sm mt-1">Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;