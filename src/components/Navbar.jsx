import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900">
          CS — <span className="font-semibold text-[#130B2D]">Ticket System</span>
        </h1>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-900 cursor-pointer">Changelog</li>
            <li className="hover:text-gray-900 cursor-pointer">Blog</li>
            <li className="hover:text-gray-900 cursor-pointer">Download</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact</li>
          </ul>
        
          <button className="ml-4 px-4 py-2 rounded-md text-white text-sm font-semibold bg-gradient-to-l from-purple-500 to-indigo-500 hover:bg-indigo-700 transition">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;