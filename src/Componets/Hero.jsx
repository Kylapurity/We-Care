// eslint-disable-next-line no-unused-vars
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img 
        className="object-cover w-full h-full" 
        src="/src/Images/barbera.jpg" 
        alt="women" 
      />
      <div className="absolute inset-0 flex flex-col justify-center pl-20 mb-5">
        <div className="z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Empowering<br/> 
            Youth Through<br/> 
            Education And Technology
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Women Been equipped with skills they need<br/> 
            to succeed to have independence and be their own boss.
          </p>
        </div>
        <div className="flex">
          <button className="mr-4 px-6 py-3 bg-mediumBlue text-white rounded-md hover:bg-darkBlue">Begin the Journey</button>
          <button className="px-6 py-3 border border-mediumBlue text-mediumBlue rounded-md hover:bg-mediumBlue hover:text-white">Book for a mentor</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;


