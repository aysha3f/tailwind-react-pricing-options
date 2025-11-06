import React from 'react';
import PricingFeatures from './pricingFeatures';

const PricingCard = ({pricing}) => {
   const {name, price , features} = pricing;
    return (
        <div className=' flex flex-col border p-4 bg-amber-600 rounded-2xl text-white'>
           {/* card header  */}
           <div>
            <h1 className='text-7xl'>{name}</h1>
            <h4 className='text-3xl'>{price}</h4>
           </div>
           {/* card body */}
           <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
        {
            features.map((feature, index) => <PricingFeatures 
                key={index}
            feature={feature}></PricingFeatures>)
        }
           </div>
           <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;