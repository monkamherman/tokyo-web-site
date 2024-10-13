import React from 'react'

function Navbar1() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
                    <div className="flex items-center space-x-4">
                        <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10"/>
                        <span className="text-xl font-semibold text-gray-900">.fis</span>
                    </div>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="px-4 py-2 text-gray-900 bg-gray-100 rounded-full">Home</a>
                        <a href="#" className="text-gray-500">Life style</a>
                        <a href="#" className="text-gray-500">Template</a>
                        <a href="#" className="text-gray-500">Archive Page</a>
                        <a href="#" className="text-gray-500">Other Page</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-sun text-gray-500"></i>
                        <i className="fas fa-bell text-gray-500"></i>
                        <img src="https://placehold.co/40x40" alt="User Avatar" className="w-10 h-10 rounded-full"/>
                    </div>
                </nav>
  )
}

export default Navbar1
