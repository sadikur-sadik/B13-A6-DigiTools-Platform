import React from 'react';
import { FaCheck } from "react-icons/fa";

const Demo = () => {
    return (
        <div className='lg:max-w-300 max-w-180 w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7.5 rounded-md my-30'>
            <section className='bg-[#f9fafcFF] border border-[#f2f2f2FF] rounded-3xl md:p-6 p-3 shadow-sm space-y-4 flex flex-col '>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold'>Starter</h3>
                    <p className='#627382FF'>Perfect for getting started</p>
                </div>
                <div >
                    <span className='text-2xl font-bold flex-1'>$0</span> /
                    <span className='text-[#627382FF]'>Month</span>
                </div>
                <ul className='text-[#627382FF] h-45 space-y-2'>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Access to 10 free tools</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Basic templates</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Community support</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> 1 project per month</li>
                </ul>
                <div className='flex-1 '>
                    <button className='btn w-full font-medium   md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Get Started Free</button>
                </div>
            </section>

            <section className='bg-linear-to-r from-purple-700 relative via-purple-600 to-purple-500  border border-[#f2f2f2FF] rounded-3xl md:p-6 p-3 shadow-sm space-y-4 flex flex-col text-white'>
                
                    <div className="badge badge-warning rounded-full absolute -top-2 left-[30%] sm:left-[50%] md:left-[35%]">Most Popular</div>
               
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold '>Pro</h3>
                    <p className='#627382FF'>Best for professionals</p>
                </div>
                <div >
                    <span className='text-2xl font-bold flex-1'>$29</span> /
                    <span className='text-white'>Month</span>
                </div>
                <ul className='text-white flex-1 h-45 space-y-2'>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Access to all premium tools</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Unlimited templates</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Priority support</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Unlimited projects</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Cloud sync</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-white' /> Advanced analytics</li>
                </ul>
                <div className='flex-1'>
                    <button className='btn w-full font-medium md:px-5 md:py-5 px-2 py-0 rounded-full text-purple-600'>Get Started Free</button>
                </div>
            </section>
            <section className='bg-[#f9fafcFF] border border-[#f2f2f2FF] rounded-3xl md:p-6 p-3 shadow-sm space-y-4 flex flex-col '>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold'>Enterprise</h3>
                    <p className='#627382FF'>For teams and businesses</p>
                </div>
                <div >
                    <span className='text-2xl font-bold flex-1'>$99</span> /
                    <span className='text-[#627382FF]'>Month</span>
                </div>
                <ul className='text-[#627382FF] flex-1 h-45 space-y-2'>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Everything in Pro</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Team collaboration</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Custom integrations</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Dedicated support</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> SLA guarantee</li>
                    <li className='flex gap-2 items-center'> <FaCheck className='text-green-500' /> Custom branding</li>
                </ul>
                <div className='flex-1'>
                    <button className='btn w-full font-medium md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Get Started Free</button>
                </div>
            </section>
        </div>
    );
};

export default Demo;