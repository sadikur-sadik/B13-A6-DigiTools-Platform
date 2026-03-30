import React from 'react';
import HeroImg from '../assets/banner.png'


const Hero = () => {
    return (
        <div>
            <div className="hero my-21.25 max-w-300 w-full mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse  gap-25">
                    <img
                        src={HeroImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='w-160'>
                        <button className='btn'> <span className='animate-pulse h-4 w-4 rounded-full bg-linear-to-b from-purple-700 via-purple-600 to-purple-500 from-0% to-100% opacity-75'><span className='animate-pulse h-2 w-2 rounded-full bg-linear-to-b from-purple-700 via-purple-600 to-purple-500 from-0% to-100% opacity-100'></span></span>
                         New: AI-Powered Tools Available </button>
                        <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6 text-[#627382FF]">
                        Access premium AI tools, design assets, templates, and productivity <br /> software-all in one place. Start creating faster today. <br /> Explore Products
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;