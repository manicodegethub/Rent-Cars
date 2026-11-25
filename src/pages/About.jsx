import React from 'react';
import { useNavigate } from 'react-router';
import AboutStory from '../components/AboutStory';
import Ourteam from '../components/Ourteam';

const About = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="bg-black text-white min-h-[80vh] flex items-center justify-center px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="space-y-6">
          <span className="text-[#FACC15] uppercase tracking-widest text-sm font-semibold">
            About AutoDeal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Driving Your Trust, <span className="text-[#FACC15]">Delivering</span> Excellence.
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            AutoDeal ek trusted platform hai jo aapko aapki dream car khareedne aur bechne ka sabse behtareen tajurba faraham karta hai. Humara maqsad gaadiyon ki khareed-o-farokht ko aasaan, transparent aur mehfooz banana hai.
          </p>
          
          

          <div className="flex gap-4 pt-4">
            <a 
              href="#mission"
              className="bg-[#FACC15] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg text-center"
            >
              Our Mission
            </a>
            <button 
              onClick={() => navigate('/contact')}
              className="border border-[#FACC15] text-[#FACC15] font-bold px-6 py-3 rounded-lg hover:bg-[#FACC15] hover:text-black transition duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

      
        <div className="relative flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FACC15] to-yellow-600 rounded-2xl blur-lg opacity-30"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Car Showroom" 
              className="rounded-xl object-cover w-full h-[350px]"
            />
          </div>
        </div>

      </div>
    
    </section>
    
        <AboutStory />
        <Ourteam />
        </>
    

    
  );
};

export default About;