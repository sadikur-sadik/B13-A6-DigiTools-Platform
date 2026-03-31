import React from 'react';
import SubscriptionsHeader from './SubscriptionsHeader/SubscriptionsHeader';
import SubscriptionsDetails from './SubscriptionsDetails/SubscriptionsDetails';
import { useState } from 'react';
import { Suspense } from 'react';   


const Supscriptions = ({ digitoolsProductsPromise, cart, setCart }) => {

    const [toggle, setToggle] = useState(true);
    
    return (
        <div>
            <SubscriptionsHeader cart={cart} toggle={toggle} setToggle={setToggle}></SubscriptionsHeader>

            <Suspense>
                <SubscriptionsDetails cart={cart} setCart={setCart} toggle={toggle} digitoolsProductsPromise={digitoolsProductsPromise}></SubscriptionsDetails>
            </Suspense>
        </div>
    );
};

export default Supscriptions;
