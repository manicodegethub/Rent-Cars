import React, { useState } from 'react';
import { X, Calendar, Gauge, Fuel, Phone, User, CheckCircle } from 'lucide-react';

const CARS_DATA = [
    {
        id: 1,
        title: 'BMW M4 Competition',
        brand: 'BMW',
        price: 75000,
        year: 2023,
        transmission: 'Automatic',
        fuel: 'Petrol',
        mileage: '12,000 km',
        description: 'Pristine condition BMW M4 Competition with full service history and carbon fiber packages.',
        seller: 'AutoDeal Official',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Mercedes AMG GT',
        brand: 'Mercedes',
        price: 115000,
        year: 2022,
        transmission: 'Automatic',
        fuel: 'Petrol',
        mileage: '8,500 km',
        description: 'Exquisite Mercedes AMG GT offering thrilling performance and unmatched luxury.',
        seller: 'Prime Motors',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Audi RS6 Avant',
        brand: 'Audi',
        price: 98000,
        year: 2023,
        transmission: 'Automatic',
        fuel: 'Hybrid',
        mileage: '15,000 km',
        description: 'The ultimate family estate packed with supercar performance and daily usability.',
        seller: 'Speedway Autos',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        title: 'Porsche 911',
        brand: 'Porsche',
        price: 125000,
        year: 2021,
        transmission: 'Manual',
        fuel: 'Petrol',
        mileage: '20,000 km',
        description: 'Iconic Porsche 911 Carrera with timeless design and pure driving dynamics.',
        seller: 'Elite Rides',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
    },
];

export default function Cars() {
    const [search, setSearch] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const filteredCars = CARS_DATA.filter(car =>
        car.title.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase())
    );

  
    const handleViewDetails = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-black text-white py-16 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">

           
                <div className="text-center mb-10">
                    <span className="text-[#ffc727] text-sm font-semibold uppercase tracking-wider">Explore Inventory</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-1">Search Cars</h2>
                </div>

               
                <div className="max-w-md mx-auto mb-12">
                    <input
                        type="text"
                        placeholder="Search by car name or brand..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#171717] border border-[#262626] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#ffc727] text-sm"
                    />
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCars.length > 0 ? (
                        filteredCars.map(car => (
                            <div key={car.id} className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden group flex flex-col justify-between">
                                <div>
                                    <div className="h-44 overflow-hidden relative">
                                        <img
                                            src={car.image}
                                            alt={car.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />
                                        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[#ffc727] text-xs font-bold px-2.5 py-1 rounded-full border border-[#262626]">
                                            {car.brand}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold mt-1 mb-2">{car.title}</h3>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xl font-extrabold text-[#ffc727]">${car.price.toLocaleString()}</span>
                                            <span className="text-xs text-zinc-400">{car.year}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <div className="p-4 pt-0">
                                    <button
                                        onClick={() => handleViewDetails(car)}
                                        className="w-full bg-transparent border border-[#ffc727] text-[#ffc727] hover:bg-[#ffc727] hover:text-black font-semibold py-2 rounded-lg transition duration-200 text-sm"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-zinc-500">No cars found.</p>
                    )}
                </div>

            </div>

          
            {isModalOpen && selectedCar && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#171717] border border-[#262626] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-white">

                      
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        
                        <div className="h-64 sm:h-72 w-full relative">
                            <img
                                src={selectedCar.image}
                                alt={selectedCar.title}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-[#ffc727] text-xs font-bold px-3 py-1 rounded-full border border-[#262626]">
                                {selectedCar.brand}
                            </span>
                        </div>

                       
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedCar.title}</h2>
                                    <p className="text-zinc-400 text-xs mt-1">ID: #{selectedCar.id} | Verified Listing</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-extrabold text-[#ffc727]">
                                        ${selectedCar.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-zinc-300 mb-4">{selectedCar.description}</p>

                           
                            <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#262626] my-4 text-xs text-zinc-300">
                                <div className="flex items-center gap-2 bg-black/40 p-2.5 rounded-lg border border-[#262626]">
                                    <Calendar className="w-4 h-4 text-[#ffc727]" />
                                    <span>{selectedCar.year}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 p-2.5 rounded-lg border border-[#262626]">
                                    <Gauge className="w-4 h-4 text-[#ffc727]" />
                                    <span>{selectedCar.transmission}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-black/40 p-2.5 rounded-lg border border-[#262626]">
                                    <Fuel className="w-4 h-4 text-[#ffc727]" />
                                    <span>{selectedCar.fuel}</span>
                                </div>
                            </div>

                           
                            <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-[#262626] mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#ffc727]/10 flex items-center justify-center text-[#ffc727] font-bold">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">{selectedCar.seller}</h4>
                                        <p className="text-xs text-zinc-400 flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3 text-green-500" /> Verified Dealer
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right text-xs text-zinc-400">
                                    <span>Mileage: {selectedCar.mileage}</span>
                                </div>
                            </div>

                           
                            <div className="flex gap-4">
                                <button
                                    onClick={() => alert("Test Drive Booked Successfully!")}
                                    className="flex-1 bg-[#ffc727] text-black font-semibold py-3 rounded-xl hover:bg-[#eab308] transition text-sm cursor-pointer"
                                >
                                    Book Test Drive
                                </button>
                                <button
                                    onClick={() => alert("Connecting to Seller...")}
                                    className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-[#ffc727] text-[#ffc727] font-semibold py-3 rounded-xl hover:bg-[#ffc727]/10 transition text-sm cursor-pointer"
                                >
                                    <Phone className="w-4 h-4" /> Contact Seller
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}