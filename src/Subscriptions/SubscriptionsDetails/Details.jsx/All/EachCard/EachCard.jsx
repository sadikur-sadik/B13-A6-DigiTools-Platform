import React from 'react';

import { FaCheck } from "react-icons/fa";

const EachCard = ({ product }) => {
    return (
        <div className='border border-[#f2f2f2FF] rounded-md p-6 space-y-4 flex flex-col relative'>
            <div className={`badge badge-soft 
                ${product.tagType === 'best-seller' ? 'badge-warning' :
                    product.tagType === 'popular' ? 'badge-info' :
                        product.tagType === 'new' ? 'badge-success' : ''}
                   absolute top-4 right-4 rounded-full font-medium`}>{product.tag}</div>
            <div className='w-15 h-15 rounded-full p-3.5 border border-[#f2f2f2FF] flex-1'>
                <img src={product.icon} alt={product.name} />
            </div>

            <h1 className='text-2xl font-bold flex-1'>{product.name}</h1>

            <p className='text-[#627382FF] flex-1'>{product.description}</p>

            <div ><span className='text-2xl font-bold flex-1'>${product.price}</span> / <span className='text-[#627382FF]'>{product.period}</span></div>

            <ul className='text-[#627382FF] flex-1 space-y-2'>
                {product.features.map((feature, i) => <li key={i} className='flex gap-2 items-center'><FaCheck className='text-green-500' /> {feature}</li>)}
            </ul>

            <div className='flex-1'>
                <button className='btn w-full font-medium md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Buy Now</button>
            </div>
        </div>
    );
};

export default EachCard;