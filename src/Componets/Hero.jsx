// eslint-disable-next-line no-unused-vars
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img 
        className="object-cover w-full h-full" 
        src="Images/empower.jpg" 
        alt="women" 
      />
      <div className="absolute inset-0 flex flex-col justify-center pl-20 mb-5">
        <div className="z-10">
          <h1 className="text-7xl font-bold text-white mb-4">
            Empowering<br/> 
            Women Through<br/> 
            Education And Technology
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;


