import React from 'react'
import Carpic from '../../assets/car.webp'
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    React.useEffect(()=>{
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh()
    }, []);
    return (
        <>
            <div className='bg-black text-white duration-300 relative -z-20'>
                <div className='container mx-auto flex min-h-[620px] px-4'>
                    <div className='grid w-full grid-cols-1 place-items-center sm:grid-cols-2'>
                        <div data-aos ="zoom-in"
                        data-aos-duration ="1500"
                        
                        className='order-1 sm:order-2' >
                            <img src={Carpic} alt="" className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
                        </div>
                        <div
                        data-aos ="fade-up"
                        data-aos-delay ="600"
                         className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                            <p className='text-primary text-2xl'>Effortless</p>
                            <h1 className='text-5xl lg:text-7xl font-semibold
                            '>Buy & Sell Your Dream Car</h1>
                            <p>Lorem ipsum dolor, s Maxime harum odio porro repellat quae <br /> eos! Beatae, error dolore.</p>
                            <button className='btn bg-primary px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>

                        </div>

                    </div>

                </div>





            </div>


        </>
    )
}

export default Hero