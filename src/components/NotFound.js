import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='w-80 h-80 bg-gradient-to-b from-[#33BBCF] to-[#5AE5EA] rounded-full blur-[150px] absolute -top-24 -left-20'></div>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h2 className='text-8xl font-bold bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text animate-pulse'>404</h2>
                <p className='my-4 font-extralight tracking-widest text-gray'>Oops! Page Not Found.</p>
                <Link to='/' className='bg-gradient-to-r from-[#7DE7EB] to-[#33BBCF] rounded-lg p-4 font-medium mt-4'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;