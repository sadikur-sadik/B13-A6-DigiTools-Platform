import React from 'react';

const Explore = () => {
    return (
        <div className='w-full  md:py-30 py-20 space-y-10 bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white'>
            <div className='lg:max-w-300 max-w-180 w-11/12 mx-auto space-y-10'>
                  <div>
                    <h1 className='text-center font-extrabold text-2xl text-white'>   
                         Ready to Transform Your Workflow?
                    </h1>
                    <p className='text-center text-white'>
                        Join thousands of professionals who are already using Digitools to work smarter.
                        Start your free trial today.
                    </p>
                </div>

                <div className='text-center text-white'>
                    <div className='space-y-2'>
                        <div className='space-x-2'>
                            <button className='bg-white text-purple-600 rounded-full py-3 px-4 font-bold'>Explore Products</button>
                            <button className='bg-transparent rounded-full text-white border py-3 px-4 border-white'>View Pricing</button>
                        </div>
                        <p className='text-center text-white text-xs font-medium'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;