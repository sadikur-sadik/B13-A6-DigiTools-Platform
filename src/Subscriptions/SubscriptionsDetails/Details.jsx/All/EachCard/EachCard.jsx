import React from 'react';
import { FaCheck } from "react-icons/fa";
const EachCard = () => {
    return (
        <div className='border border-[#f2f2f2FF] rounded-md p-6 space-y-4 flex flex-col relative'>
            <div class="badge badge-soft badge-primary absolute top-4 right-4 rounded-full font-medium">Primary</div>
            <div className='w-15 h-15 rounded-full p-3.5 border border-[#f2f2f2FF] flex-1'>
                <img src="https://i.ibb.co.com/JW3ZkYpH/camera-8775444-1.png" alt="" />
            </div>
            
            <h1 className='text-2xl font-bold flex-1'>AI Writing Pro</h1>
            
            <p className='text-[#627382FF] flex-1'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>

            <div ><span className='text-2xl font-bold flex-1'>$29.99</span> / <span className='text-[#627382FF]'>Mo</span></div>

            <ul className='text-[#627382FF] flex-1 space-y-2'>
                <li className='flex gap-2 items-center'><FaCheck className='text-green-500'/> Unlimited AI generations</li>
                <li className='flex gap-2 items-center'><FaCheck className='text-green-500'/> Unlimited AI generations</li>
                <li className='flex gap-2 items-center'><FaCheck className='text-green-500'/> Unlimited AI generations</li>
            </ul>

            <div className='flex-1'>
                <button className='btn w-full font-medium md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Buy Now</button>
            </div>
        </div>
    );
};

export default EachCard;