import React from 'react';

const Stats = () => {
    return (
        <div className=' bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white'>
            <div className="lg:max-w-300 max-w-180  mx-auto flex gap-10 flex-col md:flex-row items-center p-15">
                <div className="text-center md:border-r border-b md:border-b-0 pb-8 md:pb-0 border-white flex-1">
                    <div className="text-4xl font-bold">50k+</div>
                    <div className="">Active Users</div>
                    
                </div>

                <div className="text-center md:border-r border-b md:border-b-0 pb-8 md:pb-0 border-white flex-1">
                    <div className="text-4xl font-bold">200+</div>
                    <div className="">Premium Tools</div>
                    
                    
                </div>

                <div className="text-center flex-1">
                    <div className="text-4xl font-bold">4.9+</div>
                    <div className="">Rating</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Stats;