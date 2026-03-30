import React from 'react';
import SubscriptionsHeader from './SubscriptionsHeader/SubscriptionsHeader';
import SubscriptionsDetails from './SubscriptionsDetails/SubscriptionsDetails';
import { useState } from 'react';
import { Suspense } from 'react';   


const Supscriptions = ({ digitoolsProductsPromise }) => {

    const [toggle, setToggle] = useState(true);
    console.log(toggle)
    return (
        <div>
            <SubscriptionsHeader toggle={toggle} setToggle={setToggle}></SubscriptionsHeader>

            <Suspense>
                <SubscriptionsDetails toggle={toggle} digitoolsProductsPromise={digitoolsProductsPromise}></SubscriptionsDetails>
            </Suspense>
        </div>
    );
};

export default Supscriptions;