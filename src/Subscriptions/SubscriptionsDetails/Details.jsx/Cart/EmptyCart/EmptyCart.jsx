import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const EmptyCart = () => {
    return (
        <div className=' space-y-4'>
            <CiShoppingCart className='md:w-30 md:h-30 w-20 h-20 mx-auto' />

            <div className='space-y-2 text-center w-auto mx-auto'>
                <h1 className='md:text-4xl text-2xl font-extrabold'>
                    Cart is Empty.
                </h1>
                <p className='text-[#627382FF]'>
                    Please add some products to your cart.
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;