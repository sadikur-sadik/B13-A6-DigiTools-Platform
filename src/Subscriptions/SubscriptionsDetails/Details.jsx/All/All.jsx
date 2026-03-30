import React from 'react';
import EachCard from './EachCard/EachCard';    

const All = ({ digitoolsData }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7.5'>
           {digitoolsData.map((product) => <EachCard key={product.id} product={product}></EachCard>)}
        </div>
    );
};

export default All;