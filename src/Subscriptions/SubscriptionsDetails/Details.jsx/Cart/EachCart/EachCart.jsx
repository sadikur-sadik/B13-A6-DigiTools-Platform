import React from 'react';

const EachCart = () => {
    return (
        
            <div className=''>
                <div className='py-6 shadow-md bg-[#f9fafcFF] flex items-center justify-between rounded-md  px-2'>
                    <div className='bg-[#f9fafcFF] flex items-center gap-5'>
                        <div>
                            <img src="https://i.ibb.co.com/Qvf7bWJJ/writing-2327400-1.png" alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold text-xl'>AI Writing Pro</h3>
                            <p className='text-[#627382FF]'>$29</p>
                        </div>
                    </div>

                    <div>
                        <button className='btn text-red-600'>Remove</button>
                    </div>
                </div>
            </div>

        
    );
};

export default EachCart;