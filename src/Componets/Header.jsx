// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
    return (
        <nav className=" container mx-auto">
            <div className="flex items-center justify-between">
                <div className='flex'>
                    <img className='w-40 text-3xl space-x-8' src="src/Images/Logo care.jpg" alt="logo" />
                </div>
                <div className="hidden space-x-10 md:flex justify-between">
                    <a href="#Hero" className="text-1.5xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Home</a>
                    <span className="mx-6"></span>
                    <a href="#menu" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">About</a>
                    <span className="mx-6"></span>
                    <a href="#" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Courses</a>
                    <span className="mx-6"></span>
                    <a href="#Contact" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Testimonals</a>
                    <span className="mx-6"></span>
                    <a href="#Contact" className="text-1xl text-gray-700 hover:text-gray-900 hover:underline active:underline font-bold uppercase">Contact Us</a>
                </div>
                <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bg-mediumBlue md:block uppercase">Get Started</a>
                <button id="menu-btn" className="block md:hidden border-black focus:outline-none">
                    <span className="menu-btn-top"></span>
                    <span className="menu-btn-middle"></span>
                    <span className="menu-btn-bottom"></span>
                </button>
            </div>
        </nav>
    )
}

export default Header
