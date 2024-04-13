// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row' id='about'>
      <div className='lg:w-1/2 pt-5 p-20 mr-10 '>
        {/* <h3 className='font-bold text-sm uppercase'>About US</h3> */}
        <h2 className='font-bold text-3xl text-blue-800 uppercase underline'>Empowering Women with tech skills to be their own boss.</h2>
        <p className='pt-4 font-medium'>Welcome to WeCare, an online education platform dedicated to empowering women with essential skills to become entrepreneurs and leaders in their own right.<br/> 
          At WeCare, we understand the importance of providing women with the tools and knowledge they need to thrive in todays ever-evolving world. <br/>
          We chose to focus on empowering women because we recognize the immense potential and talent that often goes untapped due to systemic barriers and societal norms. <br/>
        </p>
        <a href="https://www.youtube.com/watch?v=FEeTLopLkEo&pp=ygUfYSB2aWRlbyBpbnNpcHJpbmcgd29tZW4gaW4gdGVjaA%3D%3D" className='readmore' target='blank'>Watch More</a>
      </div>
      <div className='lg:w-1/2 flex justify-end pt-5 mr-20'>
        <img src="src/Images/together.jpg" alt="together" className='w-full lg:w-2/3 h-80'/>
      </div>
    </div>
  );
};

export default About;


