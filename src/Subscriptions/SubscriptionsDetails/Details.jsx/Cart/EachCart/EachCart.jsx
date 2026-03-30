import React from 'react';

const EachCart = ({cartProduct , cart , setCart}) => {

    const handleRemoveBtn = () => {

        const newCart = cart.filter(filteredProduct =>  cartProduct.id !== filteredProduct.id );
        console.log(newCart);
        setCart(newCart);
    }
    return (
        
            <div className=''>
                <div className='py-6 shadow-md bg-[#f9fafcFF] flex sm:flex-row flex-col items-center justify-between rounded-md  px-2'>
                    <div className='bg-[#f9fafcFF] flex sm:flex-row flex-col items-center gap-5'>
                        <div>
                            <img src={cartProduct.icon} alt="" />
                        </div>
                        <div className='sm:text-left text-center'>
                            <h3 className='font-semibold text-xl'>{cartProduct.name}</h3>
                            <p className='text-[#627382FF]'>${cartProduct.price}</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleRemoveBtn} className='btn text-red-600'>Remove</button>
                    </div>
                </div>
            </div>

        
    );
};

export default EachCart;