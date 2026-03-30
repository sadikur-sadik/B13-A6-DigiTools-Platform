import React from 'react';
import EachCart from './EachCart/EachCart';

const Cart = () => {
    return (
        <div className='p-10 space-y-6'>
            <h1 className='font-bold text-2xl'>Your Cart</h1>
            

            <EachCart></EachCart>
        </div>
    );
};

export default Cart;