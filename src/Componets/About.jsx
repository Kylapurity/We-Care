// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (

    <div className="container-image">
      <h1 className="flex justify-center text-blue-600 text-3xl">About us</h1>
      <img src="/src/Images/girl.jpg" alt="Women together" className="image" />
      <div className="max-w-md">
        <p className="text-1xl text-gray-800 mt-5">
          At our organization, we are dedicated to empowering the youth by providing them with the necessary skills and knowledge to thrive in today world. Through our programs and initiatives, we aim to equip young individuals with practical skills in various fields, including technology, entrepreneurship, and personal development. 
        </p>
        <button  type="button" onClick={() => window.location.href = '/signup'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Lets get started
        </button>
      </div>
    </div>
  );
}

export default About;




