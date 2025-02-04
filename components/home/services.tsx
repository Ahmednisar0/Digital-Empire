'use client';
import React from 'react';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaFilm, FaCamera, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceItemProps {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <section
      className="py-16 px-4"
   
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        The Service We Provide <br /> For You
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-8">
        
        {/* Web Development */}
        <ServiceItem
          icon={<FaLaptopCode size={35} />}
          bgColor="bg-gradient-to-r from-pink-500 to-purple-500"
          iconColor="text-white"
          title="Web Development"
          description="Create a platform with the best and coolest quality from us."
        />
        
        {/* Digital Marketing */}
        <ServiceItem
          icon={<FaBullhorn size={35} />}
          bgColor="bg-gradient-to-r from-yellow-500 to-orange-500"
          iconColor="text-white"
          title="Digital Marketing"
          description="Create a powerful digital presence with the best and most innovative strategies from us."
        />
        
        {/* UX/UI Design */}
        <ServiceItem
          icon={<FaPaintBrush size={35} />}
          bgColor="bg-gradient-to-r from-teal-400 to-green-500"
          iconColor="text-white"
          title="UX/UI Design"
          description="We provide UI/UX Design services, and of course with the best quality."
        />

        {/* Video Editing */}
        <ServiceItem
          icon={<FaFilm size={35} />}
          bgColor="bg-gradient-to-r from-blue-500 to-indigo-500"
          iconColor="text-white"
          title="Video Editing"
          description="Create stunning visuals with the best and most creative video editing services from us."
        />

        {/* Graphic Design */}
        <ServiceItem
          icon={<FaCamera size={35} />}
          bgColor="bg-gradient-to-r from-green-400 to-teal-500"
          iconColor="text-white"
          title="Graphic Design"
          description="We provide Graphic Design services, with the best designers."
        />

        {/* Social Media Account Management */}
        <ServiceItem
          icon={<FaUsers size={35} />}
          bgColor="bg-gradient-to-r from-blue-400 to-indigo-500"
          iconColor="text-white"
          title="Social Media Account Management"
          description="Manage your brand's online presence with the best and most effective social media strategies from us."
        />
        
      </div>
    </section>
  );
};

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, bgColor, iconColor, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center lg:ml-[100px] lg:mr-[50px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${bgColor} ${iconColor} p-3 rounded-full mb-4 shadow-xl`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </motion.div>
  );
};

export default Services;
