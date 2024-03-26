/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ icon, title, children }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-72">
      <div className="flex items-center justify-center mb-4 text-blue-600">{icon}</div>
      <h2 className="text-3xl font-semibold mb-2 underline">{title}</h2>
      <div className="text-black text-sm mt-5">{children}</div>
    </div>
  );
};

export default Card;


