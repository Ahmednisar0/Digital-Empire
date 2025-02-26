'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mt-[30px] mb-[140px] lg:h-[170px] lg:mb-0 mr-[10px] ml-[10px] lg:mr-[50px] lg:ml-[50px]  py-4 px-6">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col  justify-between items-center">
      <div className='flex lg:w-[200px] w-full items-center lg:items-start justify-between'> {/* Left Section: Logo */}
        <div className="flex  items-center">
          <img
            src="/images/digitalempire1.jpg"
            alt="Digital Empire Logo"
            className="w-12 h-12 mr-3 rounded-2xl object-contain"
          />
          <h1 className="text-xl font-bold">
            <span className="text-gray-700">Digital</span>{' '}
            <span
              style={{
                color: 'rgba(255, 49, 49)',
                textShadow: '0 0 10px rgba(255, 49, 40)',
              }}
            >
              Empire
            </span>
          </h1>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div></div> 

        {/* Center Section: Navigation Links */}
        <nav
          className={`lg:flex gap-8 text-gray-600 text-base font-medium items-center 
            ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 text-center">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="/ourwork" className="hover:text-black">
                Our Work
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-black">
                About Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section: Get Started Button */}
        <div className="hidden lg:block">
          <button
            className="px-6 py-2 rounded-lg font-medium bg-white text-[#ff002b] border border-[#ff002b] hover:bg-pink-50 transition-all"
            style={{
              textShadow: '0 0 10px rgba(255, 0, 127, 0.8)',
              boxShadow: '0 0 10px rgba(255, 0, 127, 0.5)',
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 text-center">
          <button
            className="px-6 py-2 rounded-lg font-medium bg-white text-[#ff002b] border border-[#ff002b] hover:bg-pink-50 transition-all"
            style={{
              textShadow: '0 0 10px rgba(255, 49, 49)',
              boxShadow: '0 0 10px rgba(255, 49, 49, 0.5)',
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
