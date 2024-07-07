import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// Image
import Logo from '../../assets/Logo.svg';

const Navbar = () => {

    let [isOpen, setIsOpen] = useState(false)
        const closeNavbar = () => {
            setIsOpen(false);
        };

    return (
        <div className='fixed z-50 w-full lg:px-24 px-2 top-4 md:px-8'>
            <div className='flex justify-between items-center bg-secondaryColor/30 backdrop-blur text-white rounded-xl px-8 py-4' >
                <Link to='/'><img src={Logo} alt='logo' className='w-8' /></Link>
                <div onClick={() => setIsOpen(!isOpen)} className="absolute right-10 cursor-pointer lg:hidden">
                    {
                        isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#33BBCF" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#33BBCF" class="size-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                    }
                    
                </div>
                <div className={`flex flex-col items-left lg:items-center lg:text-sm text-left lg:flex-row absolute lg:static lg:z-auto z-[-1] left-0 w-full rounded-2xl lg:w-auto transition-all duration-500 ease-out  ${isOpen ? 'top-20 bg-secondaryColor/90' : 'top-[-490px]'}`}>
                    <Link className='px-8 my-4 lg:my-0 hover:text-primaryColor duration-300'><ScrollLink to='header' smooth={true} duration={350} onClick={closeNavbar}>Home</ScrollLink></Link>
                    <Link className='px-8 my-4 lg:my-0 hover:text-primaryColor duration-300'><ScrollLink to='aboutus' smooth={true} duration={500} offset={-80} onClick={closeNavbar}>About Us</ScrollLink></Link>
                    <Link className='px-8 my-4 lg:my-0 hover:text-primaryColor duration-300'><ScrollLink to='cryptocurrency' smooth={true} duration={500} offset={-80} onClick={closeNavbar}>Cryptocurrency</ScrollLink></Link>
                    <Link to='/launchapp' title='Coming Soon' className='ml-8 mr-8 lg:mr-0 my-4 lg:my-0 bg-primaryColor rounded-full px-4 py-2 text-sm text-center text-secondaryColor font-medium' onClick={closeNavbar}>Launch App</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;