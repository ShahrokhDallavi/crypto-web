import React from 'react';

// React Scroll
import { Element } from 'react-scroll';

const Whyus = () => {
    return (
        <Element name='aboutus' className='flex flex-col lg:flex-row justify-center items-center text-white md:px-8 lg:px-24 px-5 py-8'>
            <div className='lg:mr-8 lg:text-left'>
                <h3 className='bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#FFFFFF] to-75% text-transparent bg-clip-text text-xl font-bold text-justify tracking-wider'>Why you should choose us!?</h3>
                <p className='leading-relaxed lg:leading-loose font-extralight text-justify text-sm mt-4 mb-12'>Users choose our cryptocurrency website because we provide a reliable and comprehensive source of information and news in the world of digital currencies. Our site offers precise market analyses, practical educational content, and the latest updates on blockchain technology and cryptocurrencies, helping users make smarter financial decisions.</p>
            </div>
            <div>
                <div className='inline-flex justify-center items-center text-left hover:bg-gradient-to-r from-[#272727] to-[#14101D] duration-500 rounded-xl cursor-pointer my-4'>
                    <span className='m-4 p-2 bg-secondaryColor rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00F6FF" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <div className='py-4 pr-4'>
                        <h6>Rewards</h6>
                        <p className='font-extralight text-xs'>Get our tempting rewards by choosing the best cryptocurrencies and earn monthly profits.</p>
                    </div>
                </div>
                <div className='inline-flex justify-center items-center text-left hover:bg-gradient-to-r from-[#272727] to-[#14101D] duration-500 rounded-xl cursor-pointer my-4'>
                    <span className='m-4 p-2 bg-secondaryColor rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00F6FF" className="size-6">
                            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <div className='py-4 pr-4'>
                        <h6>100% Secured</h6>
                        <p className='font-extralight text-xs'>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className='inline-flex justify-center items-center text-left hover:bg-gradient-to-r from-[#272727] to-[#14101D] duration-500 rounded-xl cursor-pointer my-4'>
                    <span className='m-4 p-2 bg-secondaryColor rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00F6FF" className="size-6">
                            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                        </svg>
                    </span>
                    <div className='py-4 pr-4'>
                        <h6>Best wallet</h6>
                        <p className='font-extralight text-xs'>Lower Fees Save money by transferring cryptocurrency in our platform wallet.</p>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Whyus;