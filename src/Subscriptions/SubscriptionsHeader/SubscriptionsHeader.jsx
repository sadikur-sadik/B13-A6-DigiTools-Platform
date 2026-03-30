import React from 'react';

const SubscriptionsHeader = () => {
    return (
        <div className='md:mt-30 mt-20 lg:max-w-300 max-w-180 w-full mx-auto text-center space-y-4'>
            <h1 className='md:font-extrabold md:text-[48px] text-4xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[#627382FF]'>Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.
            </p>
            <div>
                <button className="btn font-medium border-r-0 md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white ">
                    Products
                </button>
                <button className="btn font-medium border-l-0 md:px-5 md:py-5 px-2 py-0 rounded-full bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white ">
                    Carts <span>(0)</span>
                </button>
            </div>
        </div>
    );
};

export default SubscriptionsHeader;