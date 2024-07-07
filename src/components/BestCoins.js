import React from 'react';

// Image
import Logo from '../assets/Logo.svg'

const BestCoins = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center text-white text-left px-5 md:px-8 lg:px-24 mt-32 mb-14 lg:my-20'>
            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#272727] to-[#14101D] rounded-xl shadow-xl text-center text-sm font-extralight py-4 px-4 w-52 ml-32 lg:ml-48 -mt-24 lg:-mt-96'>
                <h3 className='text-justify tracking-wider'>Grow your profit and track your investments!</h3>
                <div className='flex items-center pt-4'>
                    <img src={Logo} alt='logo' className='w-8 animate-pulse'/>
                    <p className=' text-xs text-left font-thin px-2'>Best Crypto Platform</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#272727] to-[#14101D] rounded-xl cursor-pointer px-4 py-8 lg:mr-48 mb-12 lg:mb-0 mr-6'>
                <h4 className='font-bold text-xl tracking-widest mb-6 mx-4'>Best Coins</h4>
                <div className='flex justify-between items-center hover:translate-x-8 hover:-translate-y-4 duration-500 hover:bg-gradient-to-r from-[#272727] to-[#14101D] rounded-lg hover:shadow-xl py-2 px-2'>
                    <div className='flex items-center pr-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
	                        <g fill="none" fill-rule="evenodd">
		                    <circle cx="16" cy="16" r="16" fill="#f7931a" />
		                    <path fill="#fff" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538m-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11m.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733" />
	                        </g>
                        </svg>
                        <div className='px-4 text-sm'>
                            <h6 className='font-light tracking-wider'>Bitcoin</h6>
                            <p className='font-thin'>BTC</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className='animate-bounce'>
	                        <path fill="#00D295" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1" />
                        </svg>
                        <p className='text-check'>2.83%</p>
                    </div>
                </div>
                <div className='flex justify-between items-center my-6 hover:translate-x-8 hover:-translate-y-4 duration-500 hover:bg-gradient-to-r from-[#272727] to-[#14101D] rounded-lg hover:shadow-xl py-2 px-2'>
                    <div className='flex items-center pr-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="16" cy="16" r="16" fill="#627eea" />
                                <g fill="#fff" fill-rule="nonzero">
                                    <path fill-opacity="0.602" d="M16.498 4v8.87l7.497 3.35z" />
                                    <path d="M16.498 4L9 16.22l7.498-3.35z" />
                                    <path fill-opacity="0.602" d="M16.498 21.968v6.027L24 17.616z" />
                                    <path d="M16.498 27.995v-6.028L9 17.616z" />
                                    <path fill-opacity="0.2" d="m16.498 20.573l7.497-4.353l-7.497-3.348z" />
                                    <path fill-opacity="0.602" d="m9 16.22l7.498 4.353v-7.701z" />
                                </g>
                            </g>
                        </svg>
                        <div className='px-4 text-sm'>
                            <h6 className='font-light tracking-wider'>Ethereum</h6>
                            <p className='font-thin'>ETH</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className='animate-bounce'>
	                        <path fill="#00D295" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1" />
                        </svg>
                        <p className='text-check'>2.74%</p>
                    </div>
                </div>
                <div className='flex justify-between items-center hover:translate-x-8 hover:-translate-y-4 duration-500 hover:bg-gradient-to-r from-[#272727] to-[#14101D] rounded-lg hover:shadow-xl py-2 px-2'>
                    <div className='flex items-center pr-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
	                        <g fill="none" fill-rule="evenodd">
		                        <circle cx="16" cy="16" r="16" fill="#26a17b" />
		                        <path fill="#fff" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658c0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118c0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116c0-1.043-3.301-1.914-7.694-2.117" />
	                        </g>
                        </svg>
                        <div className='px-4 text-sm'>
                            <h6 className='font-light tracking-wider'>Tether</h6>
                            <p className='font-thin'>USDT</p>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className='animate-bounce'>
	                        <path fill="#BB2D2D" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
                        </svg>
                        <p className='text-error'>0.02%</p>
                    </div>
                </div>
            </div>
            <div className='inline-flex items-center bg-gray rounded-lg text-gray px-4 py-2 absolute mt-80 ml-16 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" className='mr-2 animate-pulse'>
                    <g fill="none">
                        <path fill="#33BBCF"  stroke-linejoin="round" stroke-width="4" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" />
                        <path fill="#fff" fill-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" clip-rule="evenodd" />
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12V28" />
                    </g>
                </svg>
                <p className='text-secondaryColor text-xs'>Attention! The most profitable digital currencies.</p>
            </div>
            <div className='lg:text-left text-center my-8'>
                <h3 className='bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text text-lg text-justify font-bold tracking-wider'>Trade securely and market the high growth cryptocurrencies.</h3>
                <p className='leading-relaxed lg:leading-loose font-extralight text-justify text-sm mt-4'>Three digital currencies that keep a record of transactions, blockchain technology to create and run decentralized digital programs, and digital currencies that allow instant payments to anyone in the world.</p>
            </div>
        </div>
    );
};

export default BestCoins;