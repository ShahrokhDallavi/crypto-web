import React from 'react';

import ScrollToTop from './helper/ScrollToTop';

// React Scroll
import { Element } from 'react-scroll';

// Images
import Robothand from '../assets/Robothand.png'
import Bitcoin from '../assets/Bitcoin.png'

const Header = () => {
    return (
        <Element name='header' className='flex lg:flex-row flex-col items-center lg:text-left text-white'>
            <ScrollToTop />
            <div className='px-5 md:px-8 lg:px-24'>
            <div className='w-80 h-80 bg-gradient-to-b from-[#33BBCF] to-[#5AE5EA] rounded-full blur-[150px] absolute -top-24 -left-20'></div>
                <div className='inline-flex items-center bg-gradient-to-r from-[#272727] to-[#11101D] rounded-lg text-gray px-4 py-2 mb-4 lg:mb-8 lg:mt-32 mt-24 text-xs lg:text-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32" className='mr-2 animate-pulse'>
	                <path fill="#33BBCF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m4.215-24.8l-1.723-.43l-.673 2.776c-.454-.117-.92-.221-1.373-.326l.686-2.79L15.41 6l-.7 2.842c-.375-.091-.737-.17-1.1-.26l-2.37-.6l-.454 1.851s1.282.3 1.256.313c.7.17.83.639.804 1.004l-.519 2.086l-.453 1.812l-.971 3.912c-.091.208-.298.534-.79.417c.012.026-1.257-.313-1.257-.313L8 21.033l2.24.56c.415.105.83.222 1.232.326l-.713 2.882l1.723.43l.7-2.856l.556-2.086l.946-3.82c.194.053.402.092.622.144c.7.156 1.425.221 2.137.274c.44.039.868.052 1.308.052a6.459 6.459 0 0 0 1.93-.34c.519-.169 1.127-.39 1.516-.808c.453-.482.674-1.12.764-1.76c.311-2.099-1.282-3.233-3.445-3.99zm-.142 10.3c-.48.078-.726.117-1.205.143l-.674.039c.648.443 1.05 1.056.842 1.903c-.388 1.591-2.448 1.37-3.976 1.03l-.519 2.113l-.025.09l-.661 2.752l1.71.43l.712-2.881c2.928.56 5.143.339 6.062-2.347c.583-1.656.156-2.947-.738-3.742c-.013.013-.039.013-.052.026c-.414.17-.997.365-1.476.443zm-.506-3.495c-.479 1.956-3.484.965-4.456.717l.855-3.468c.972.261 4.107.704 3.601 2.751" />
                </svg>
                    <p className='font-extralight'>+250 CRYPTOCURRENCIES ON OUR PLATFORM</p>
                </div>
                <h1 className='bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text text-2xl lg:text-6xl font-bold lg:mb-12 mb-6'>Fastest & secure platform to invest in crypto</h1>
                <p className='tracking-wide leading-relaxed font-extralight text-center text-justify'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions. Experience the next generation cryptocurrency platform. No financial limits, extra fees, and fake reviews.</p>
            </div>
            <div>
                <img src={Bitcoin} alt='Bitcoin' className='absolute w-48 md:w-80 bottom-8 right-28 md:right-56 md:bottom-24 lg:top-48 lg:right-32 animate-bounce-slow' />
                <img src={Robothand} alt='Robothand' className='lg:ml-10' />
            </div>
        </Element>
    );
};

export default Header;