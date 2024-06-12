// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black mt-10 rounded-sm'  id="contact">
      <div className='container mx-auto py-6'>
        <h1 className='text-3xl text-blue-600 uppercase pl-10'>
          <span  className="border-2 border-blue-700 rounded-full p-1">We</span>Care</h1>
        <div className='flex justify-between items-center'>
          <div className='text-white flex items-center '>
            <img src="Images/girl.jpg" alt="Women together" className="w-80 h-40 ml-5 pt-5" />
            <p className='text-white text-sm md:text-xl ml-20'>
              We Care is dedicated to providing top-notch services in Nairobi, Kenya.<br/> 
              Through our programs and initiatives, we aim to equip young individuals with practical skills in various fields, <br/>
              including technology, entrepreneurship, and personal development. Our mission is to make a positive impact <br/>
              on society through our work.
            </p>
          </div>
          <nav className="mt-4 mr-20">
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#Courses" className="text-gray-400 hover:text-white">Courses</a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex justify-center mt-4'>
          <a href="#" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center mr-2">
            <FaFacebook className="mr-1" /> Facebook
          </a>
          <a href="#" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center mr-2">
            <FaTwitter className="mr-1" /> Twitter
          </a>
          <a href="#" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center mr-2">
            <FaInstagram className="mr-1" /> Instagram
          </a>
          <a href="#" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center mr-2">
            <FaLinkedin className="mr-1" /> LinkedIn
          </a>
          <a href="#" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center">
            <FaYoutube className="mr-1" /> YouTube
          </a>
        </div>
        <div className='text-gray-400 mt-4 text-center'>
          © 2024 We Care. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;





      
