import React from 'react';
import step1 from '../assets/user.png';
import step2 from '../assets/package.png';
import step3 from '../assets/rocket.png';

const Steps = () => {
    return (
        <div className='w-full bg-[#f9fafcFF] md:py-30 py-20 space-y-10'>
            <div className='space-y-4'>
                <h1 className='md:font-extrabold md:text-[48px] text-4xl font-bold text-center'>Get Started in 3 Steps</h1>
                <p className='text-[#627382FF] text-center'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='lg:max-w-300 max-w-180 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
                <section className='flex  flex-col justify-center rounded-2xl py-22.5 px-6 relative space-y-4 shadow-lg'>
                    <div className="badge from-0% to-100% bg-linear-to-r absolute from-purple-700 w-8 h-8 rounded-full via-purple-600 to-purple-500 text-white text-md font-bold top-10 right-10">01</div>

                    <div className='w-25 h-24.75 p-6 bg-purple-100 rounded-full mx-auto'>
                        <img src={step1} alt="" />
                    </div>
                    <div className='space-y-4 text-center'>
                        <h1 className='text-2xl font-bold'>Create Account</h1>
                        <p className='text-[#627382FF]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </section>
                <section className='flex  flex-col justify-center rounded-2xl py-22.5 px-6 relative space-y-4 shadow-lg'>
                    <div className="badge from-0% to-100% bg-linear-to-r absolute from-purple-700 w-8 h-8 rounded-full via-purple-600 to-purple-500 text-white text-md font-bold top-10 right-10">02</div>

                    <div className='w-25 h-24.75 p-6 bg-purple-100 rounded-full mx-auto'>
                        <img src={step2} alt="" />
                    </div>
                    <div className='space-y-4 text-center'>
                        <h1 className='text-2xl font-bold'>Choose Products</h1>
                        <p className='text-[#627382FF]'>Browse our catalog and select the tools
                            that fit your needs..
                        </p>
                    </div>

                </section>
                <section className='flex  flex-col justify-center rounded-2xl  py-22.5 px-6 relative space-y-4 shadow-lg'>
                    <div className="badge from-0% to-100% bg-linear-to-r absolute from-purple-700 w-8 h-8 rounded-full via-purple-600 to-purple-500 text-white text-md font-bold top-10 right-10">03</div>

                    <div className='w-25 h-24.75 p-6 bg-purple-100 rounded-full mx-auto'>
                        <img src={step3} alt="" />
                    </div>
                    <div className='space-y-4 text-center'>
                        <h1 className='text-2xl font-bold'>Create Account</h1>
                        <p className='text-[#627382FF]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Steps;