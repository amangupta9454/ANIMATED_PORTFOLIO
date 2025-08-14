import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white fixed w-full top-0 left-0 z-20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-tight">
          <a href="#home" className="hover:text-blue-300 transition-colors duration-300">Portfolio</a>
        </div>
        <ul className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden md:block'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out`}>
          {['Home', 'About',  'Projects', 'Skill', 'Experience', 'Qualification', 'Contact'].map((item) => (
            <li key={item} className="py-3 md:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block text-lg font-medium hover:text-blue-400 hover:scale-105 transform transition-all duration-200 ease-in-out md:hover:bg-gray-800 md:hover:px-3 md:hover:py-1 md:hover:rounded-md"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="hover:text-blue-300 transition-colors duration-200" /> : <FaBars className="hover:text-blue-300 transition-colors duration-200" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;