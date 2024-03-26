/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ icon, title, children }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-2 underline">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default Card;
