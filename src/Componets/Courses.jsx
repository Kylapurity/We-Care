// eslint-disable-next-line no-unused-vars
import React from 'react';

const Data = [
  {
    name: 'Web Development',
    description: 'This course will teach you how to build a website and applications used is apps where you will be using HTML, CSS, and JavaScript.',
    price: '$10',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg'
  },
  {
    name: 'Data Science',
    price: '$7/mo',
    description: 'This course is designed to give you a solid foundation in data science also will helpyou gain skills on how to clean, anyanlyze data and format data.',
    image: 'https://img.freepik.com/free-vector/big-data-analytics-flat-icons-composition-conceptual-poster-design-with-hand-lens-magnifying_1284-12257.jpg?t=st=1711480514~exp=1711484114~hmac=40e78663a33577ae58a4d217b2278b1a12726c7c636e1be7beeb4912be2d7ff8&w=740'
  },
  {
    name: 'Machine Learning',
    price: '$5/mo',
    description: 'This course is designed to give you a solid foundation in  machine learning. It will also help you be able build robots which is amoung the growing tech in the world.',
    image: 'https://assets.iflscience.com/assets/articleNo/68299/aImg/66941/ai-learning-o.webp'
  },
  {
    name: 'Artificial Intelligence',
    price: 'Free',
    description: 'This course is designed to teach you the basics of artificial intelligence and how it can be used to solve real-world problems.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*AUTrbjzBq8rpKgH5YDznbA.jpeg'
  }
];

const Courses = () => {
  return (
    <div className="container mb-0 " id='Courses'>
      {/* <h1 className="text-3xl font-semibold flex justify-center items-center underline text-blue-700 uppercase pt-5">Featured Courses</h1> */}
      <div className="flex flex-wrap gap-10 ml-20 mt-5">
        {Data.map((d, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md w-72">
            <div className="mb-4">
              <img src={d.image} alt="course" className="w-full h-32 object-cover rounded-lg" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{d.name}</h2>
            <p className="text-gray-800 text-sm mt-2">{d.description}</p>
            <h3 className="text-blue-600 text-lg mt-2">{d.price}</h3>
            <button onClick={() => alert('Course Added to Cart')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

