import React, { useState } from 'react';
import { FaCog, FaShoppingBag } from 'react-icons/fa';

const CustomizePanel = () => {
  const [selectedHeader, setSelectedHeader] = useState('Header 2');
  const [selectedDemo, setSelectedDemo] = useState('Home Main');

  return (

    <>
    
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-80">
      {/* Settings Icon */}
      <button className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full">
        <FaCog className="text-gray-600" />
      </button>

      {/* Title */}
      <h2 className="text-center font-bold mb-2">Customize</h2>
      <hr className="mb-4" />

      {/* Header Styles */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Header Styles</p>
        <div className="flex space-x-2">
          {['Header 1', 'Header 2', 'Header 3'].map(header => (
            <button
              key={header}
              onClick={() => setSelectedHeader(header)}
              className={`px-4 py-2 rounded-full ${
                selectedHeader === header ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {header}
            </button>
          ))}
        </div>
      </div>

      {/* Home Demos */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Home Demos</p>
        <div className="flex space-x-2">
          {['Home Main', 'Real Estate', 'Home 3'].map(demo => (
            <button
              key={demo}
              onClick={() => setSelectedDemo(demo)}
              className={`px-4 py-2 rounded-full ${
                selectedDemo === demo ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {demo}
            </button>
          ))}
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-full flex items-center justify-center">
        <FaShoppingBag className="mr-2" />
        Buy this template
      </button>
    </div>
    </>
  );
};

export default CustomizePanel;