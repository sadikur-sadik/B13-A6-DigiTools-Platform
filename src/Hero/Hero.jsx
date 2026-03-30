import React from 'react';
import HeroImg from '../assets/banner.png'
import circle from '../assets/circle.png'
import Play from '../assets/play.png'


const Hero = () => {
    return (

        <div className="my-21.25 lg:max-w-300 max-w-180 w-full mx-auto">
            <div className="flex md:flex-row-reverse flex-col lg:gap-25 gap-8 items-center justify-between">
                <div className=" lg:max-w-125 sm:max-w-80 max-w-75 rounded-lg shadow-2xl">
                    <img
                        src={HeroImg}
                        className='w-full h-full'
                    />
                </div>
                <div className=' md:text-left text-center my-auto'>
                    <button className='btn bg-[#e1e7ffFF] rounded-full'> <span><img src={circle} alt="" className='animate-pulse' /></span>
                        <span className='font-medium bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent'>New: AI-Powered Tools Available</span> </button>
                    <h1 className="md:text-[40px] lg:text-[72px] text-4xl font-extrabold">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6 text-[#627382FF]">
                        Access premium AI tools, design assets, templates, and productivity <br /> software-all in one place. Start creating faster today. <br /> Explore Products
                    </p>
                    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 w-full'>
                        <button className='btn w-41.25 font-medium md:px-4 md:py-4 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Explore Products</button>
                        <button className='btn w-41.25 btn-outline border border-purple-600 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent'><img src={Play} /> Watch Demo</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;