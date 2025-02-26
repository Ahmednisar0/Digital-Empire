'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaHandshake, FaChartLine } from 'react-icons/fa';
import { div } from 'framer-motion/client';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/aboutsec';
import SubscribeSection from '@/components/subscription';

const WhyChooseUs: React.FC = () => {
  return (<div>
    <Navbar/>
    <AboutSection/>
    <section className="py-16 px-4 w-full bg-white">
        
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
          Why Choose Digital <span  style={{
                color: 'rgba(255, 49, 49)',
                textShadow: '0 0 10px rgba(255, 49, 49, 0.5)',
              }}>Empire</span><span>?</span>
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto mt-2">
          Experience excellence in digital craftsmanship with our team of skilled professionals
          dedicated to delivering exceptional results.
        </p>
      </div>

      {/* Grid of Content */}
      <div className="grid grid-cols-1 lg:w-[1200px] lg:ml-[120px] lg:grid-cols-2 gap-8">
        {[
          {
            icon: <FaUsers className="text-white text-4xl" />,
            heading: 'Expertise',
            text: 'Our team consists of highly skilled professionals who stay updated with the latest industry trends to deliver cutting-edge solutions.',
          },
          {
            icon: <FaBullseye className="text-white text-4xl" />,
            heading: 'Client-Centric Approach',
            text: 'We prioritize our clients’ needs, listening to their ideas and tailoring our services to meet their specific requirements.',
          },
          {
            icon: <FaChartLine className="text-white text-4xl" />,
            heading: 'Results-Driven Solutions',
            text: 'Our focus is on delivering results, creating digital products that drive business growth and enhance user experiences.',
          },
          {
            icon: <FaHandshake className="text-white text-4xl" />,
            heading: 'Collaborative Partnership',
            text: 'We value long-term relationships, offering ongoing support, maintenance, and updates for continuous success.',
          },
        ].map(({ icon, heading, text }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-left p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div
                              className="mb-4 flex items-center justify-center w-16 h-16 rounded-full"
                              style={{
                                background: 'linear-gradient(145deg, #ff002b, #D60068)',
                                boxShadow: '0 4px 8px rgba(255, 49, 49 , 0.5)',
                              }}
                            >
                              {icon}
                            </div>
            {/* Heading */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{heading}</h3>
            {/* Text */}
            <p className="text-gray-600">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <SubscribeSection/>
    <Footer/></div>
  );
};

export default WhyChooseUs;
