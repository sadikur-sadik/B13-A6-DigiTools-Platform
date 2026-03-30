import React from 'react';
import { use } from 'react';
import All from './Details.jsx/All/All';
import Cart from './Details.jsx/Cart/Cart';

const SubscriptionsDetails = ({ digitoolsProductsPromise , toggle, cart , setCart}) => {

    const digitoolsData = use(digitoolsProductsPromise );

    
    return (
       <>
       {
        toggle ? 

         <div className='lg:max-w-300 max-w-180 w-full mx-auto border border-black rounded-md'>
            <All digitoolsData={digitoolsData} cart={cart} setCart={setCart}></All>
        </div> :

        <div>
            <Cart cart={cart} setCart={setCart}></Cart>
        </div>

       }
       </>
    );
};

export default SubscriptionsDetails;