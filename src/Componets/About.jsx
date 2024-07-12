// eslint-disable-next-line no-unused-vars
import React from 'react';


const About = () => {
  return (
    <div className='p-4 mx-auto max-w-7xl flex flex-col lg:flex-row' id='about'>
      <div className='lg:w-1/2 space-y-4'>
        <h2 className='text-4xl font-extrabold tracking-tight text-balance'>Empowering <span className='underline decoration-amber-500 decoration-dashed underline-offset-4'>women with tech skills</span> to be their own boss.</h2>
        <p className='pt-4'>Welcome to WeCare, an online education platform dedicated to empowering women with essential skills to become entrepreneurs and leaders in their own right.<br/> 
          At WeCare, we understand the importance of providing women with the tools and knowledge they need to thrive in todays ever-evolving world. <br/>
          We chose to focus on empowering women because we recognize the immense potential and talent that often goes untapped due to systemic barriers and societal norms. <br/>
        </p>
        <a href="https://www.youtube.com/watch?v=FEeTLopLkEo&pp=ygUfYSB2aWRlbyBpbnNpcHJpbmcgd29tZW4gaW4gdGVjaA%3D%3D" className='readmore' target='blank'>Watch More</a>
      </div>
      <div className='lg:w-1/2 flex justify-end '>
        <img src="/Images/together.jpg" alt="together" className='w-full lg:w-2/3 h-80 rounded-2xl'/>
      </div>
    </div>
  );
};

export default About;


