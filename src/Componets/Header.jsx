// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
    return (
        <nav className="container mx-auto shadow-md py-2 px-10 md:py-3 md:px-5 pt-10">
            <div className="flex items-center justify-center space-x-8"> 
                <div className='flex'>
                   <h1 className='text-3xl text-blue-600 uppercase'>
                    <span  className="border-2 border-blue-600 rounded-full p-1">We</span>Care</h1>
                </div>
                <div className="hidden space-x-6 md:flex justify-between">
                    <a href="#Hero" className="text-1.5xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Home</a>
                    <span className="mx-4"></span>
                    <a href="#menu" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">About</a>
                    <span className="mx-4"></span>
                    <a href="#" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Courses</a>
                    <span className="mx-4"></span>
                    <a href="#Contact" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Testimonials</a>
                    <span className="mx-4"></span>
                    <a href="#Contact" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Contact Us</a>
                </div>
                <a href="#" className="hidden py-2 px-4 text-lg text-white bg-blue-600 rounded-full baseline hover:bg-darkBlue md:block uppercase">Get Started</a>
                <button id="menu-btn" className="block md:hidden border-black focus:outline-none">
                    <span className="menu-btn-top"></span>
                    <span className="menu-btn-middle"></span>
                    <span className="menu-btn-bottom"></span>
                </button>
            </div>
        </nav>
    );
}

export default Header;
