import React from 'react';
import EachCart from './EachCart/EachCart';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = ({ cart, setCart }) => {
    return (
        <div className='p-10 space-y-6'>
            <h1 className='font-bold text-2xl'>Your Cart</h1>

            {cart.lenght === 0 ?
                <EmptyCart></EmptyCart> :
                cart.map(cartProduct =>
                    <EachCart key={cartProduct.id} cartProduct={cartProduct} cart={cart} setCart={setCart}></EachCart>
                )
            }

        </div>
    );
};

export default Cart;