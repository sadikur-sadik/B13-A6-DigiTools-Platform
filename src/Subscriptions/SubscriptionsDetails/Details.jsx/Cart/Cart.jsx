import React from 'react';
import EachCart from './EachCart/EachCart';
import EmptyCart from './EmptyCart/EmptyCart';
import { toast } from 'react-toastify'

const Cart = ({ cart, setCart }) => {
    
    const handleChekoutBtn = () => {
        if(cart.length >0){
        setCart([]); 
        toast.success(`Checkout successful!`)
    }
    else{return}
    }

    let price = 0;
    cart.forEach(cartProduct => {
        price = price + cartProduct.price;
    })
    return (
        <div className='p-10 lg:max-w-300 max-w-180 w-full mx-auto space-y-6'>
            <h1 className='font-bold text-2xl text-center sm:text-left'>Your Cart</h1>

            <div className='space-y-6'>
                {cart.length === 0 ?
                <EmptyCart></EmptyCart> :
                cart.map(cartProduct =>
                    <EachCart key={cartProduct.id} cartProduct={cartProduct} cart={cart} setCart={setCart}></EachCart>
                )
            }
            </div>
            <div className={`flex justify-between items-center mt-5 ${cart.length === 0 && 'hidden'}`}>
                <p className='text-[#627382FF]'>
                    Total
                </p>
                <p className='text-xl font-bold '>
                    ${price}
                </p>
            </div>
            <div className={`w-full  ${cart.length === 0 && 'hidden'}`}>
                <button onClick={handleChekoutBtn} className='btn w-full font-medium md:px-5 md:py-5 px-2 py-0 rounded-md bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white '>Procced to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;