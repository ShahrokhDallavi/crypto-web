import React from 'react';

const Statistic = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-start text-white my-14 px-8 md:px-56 lg:px-20'>
            <div className='inline-flex items-end my-4 lg:my-0'>
                <p className='text-4xl lg:text-5xl font-bold '>250+</p>
                <h6 className='pb-2 font-bold tracking-wider bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text font-light text-xl lg:text-2xl pl-4'>Digital Currency</h6>
                <span className='h-12 w-1 bg-gray rounded mx-24 hidden lg:block'></span>
            </div>
            <div className='inline-flex items-end my-4 lg:my-0'>
                <p className='text-4xl lg:text-5xl font-bold '>84.2+</p>
                <h6 className='pb-2 font-bold tracking-wider bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text font-light text-xl lg:text-2xl pl-4'>Total Users</h6>
                <span className='h-12 w-1 bg-gray rounded mx-24 hidden lg:block'></span>
            </div>
            <div className='inline-flex items-end my-4 lg:my-0'>
                <p className='text-4xl lg:text-5xl font-bold '>3.6+</p>
                <h6 className='pb-2 font-bold tracking-wider bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text font-light text-xl lg:text-2xl pl-4'>Total Trades</h6>
            </div>
        </div>
    );
};

export default Statistic;