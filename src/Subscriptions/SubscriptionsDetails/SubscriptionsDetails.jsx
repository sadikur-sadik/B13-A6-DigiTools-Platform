import React from 'react';
import { use } from 'react';
import All from './Details.jsx/All/All';

const SubscriptionsDetails = ({ digitoolsProductsPromise , toggle}) => {

    const digitoolsData = use(digitoolsProductsPromise);

    console.log(digitoolsData)
    return (
       <>
       {
        toggle ? 

         <div className='lg:max-w-300 max-w-180 w-full mx-auto border border-black rounded-md'>
            <All digitoolsData={digitoolsData}></All>
        </div> :

        <div>
            
        </div>

       }
       </>
    );
};

export default SubscriptionsDetails;