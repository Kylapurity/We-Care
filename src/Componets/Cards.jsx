import React from 'react';

const Card = ({ images, icons, title, description, button}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-72">
        <div>{images}</div>
      <div className="flex items-center justify-center mb-4 text-blue-600 text-3xl">{icons}</div>
      <h2 className="text-3xl font-semibold mb-2 underline">{title}</h2>
      <div className="text-black text-sm mt-5">{description}</div>
      <div>{button}</div>
    </div>
  );
};

export default Card;