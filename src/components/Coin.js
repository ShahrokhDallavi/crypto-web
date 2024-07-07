import React from 'react';

const Coin = ({name, image, symbol, price, marketCap, priceChange}) => {

    const arrow = priceChange > 0 ? 
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
	    <path fill="#00D295" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1" />
    </svg> :
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
	    <path fill="#BB2D2D" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
    </svg>;
    const priceChangeColor = priceChange > 0 ? 'text-check' : 'text-error';

    return (
        <div className='text-white px-2 md:px-8 lg:px-24 text-sm'>
            <div className='flex justify-between items-center border-2 border-gray border-opacity-15 bg-gradient-to-r from-[#272727] to-[#14101D] rounded-xl py-4 my-4 px-4 text-xs'>
                <img src={image} alt={name} className='w-6 rounded-full' />
                <div className='flex flex-col'>
                    <span>{symbol.toUpperCase()}</span>
                    <span className='px-2'>{name}</span>
                </div>
                <span>${price.toLocaleString()}</span>
                <div className='flex items-center px-2'>
                    <span>{arrow}</span>
                    <span className={priceChangeColor}>{priceChange.toFixed(2)}%</span>
                </div>
                <span>${marketCap.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Coin;