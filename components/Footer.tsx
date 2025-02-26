import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" lg:mt-[200px] mt-[100px] lg:mr-[100px] lg:ml-[100px] py-10 px-4">
        <div className='flex lg:flex-row flex-col'>
        <div className="flex flex-col lg:w-1/3 mb-8 lg:mb-0 items-center lg:items-start">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Contact Us</h3>
          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-gray-700" size={20} />
            <span className="text-gray-600 text-base">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-700" size={20} />
            <span className="text-gray-600 text-base">info@digitalempire.com</span>
          </div>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo Section */}
        <div className="flex  items-center mb-6">
          <img
            src="/images/logo.jpg"
            alt="Digital Empire Logo"
            className="w-16 h-16 mr-[10px] rounded-2xl object-contain"
          />
          <h1 className="text-3xl font-bold">
            <span className="text-gray-700">Digital</span>{' '}
            <span
              style={{
                color: 'rgba(255, 0, 127)',
                textShadow: '0 0 10px rgba(255, 0, 127, 0.8)',
              }}
            >
              Empire
            </span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex  gap-4 text-gray-600 text-[15px]">
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
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <p className="text-gray-600 text-sm">
          © 2025 Digital Empire. All Rights Reserved.
        </p>
     </div>
     <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Stay Connected</h3>
          <div className="flex gap-4">
            {/* Social Media Icons */}
            <a href="#linkedin" className="p-4 rounded-full bg-[#FF0066] text-white shadow-lg hover:scale-110 transition-transform">
              <FaLinkedin size={20} />
            </a>
            <a href="#instagram" className="p-4 rounded-full bg-[#FF0066] text-white shadow-lg hover:scale-110 transition-transform">
              <FaInstagram size={20} />
            </a>
            <a href="facebook" className="p-4 rounded-full bg-[#FF0066] text-white shadow-lg hover:scale-110 transition-transform">
              <FaFacebook size={20} />
            </a>
          </div>
        </div> </div>
    </footer>
  );
};

export default Footer;
