'use client'; // This directive ensures that the component is client-side only

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 px-4 lg:mb-0 lg:h-screen">
      <div className='flex justify-center'>
        <p className='text-center font-bold text-5xl'>Why Choose Us</p>
      </div>

      <div className='lg:ml-[-70px] flex lg:flex-row flex-col-reverse'>
        {/* Left Bottom Background Image */}
        <div className='lg:mt-[110px] lg:justify-start items-center mt-[100px] justify-center flex flex-col'>
          <motion.div
            className="bottom-0 left-0 z-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/bg-br.png"
              alt="Background Image"
              width={500}
              height={500}
              className="lg:w-[500px] justify-start mr-[410px] w-[160px] h-auto"
            />
          </motion.div>

          {/* Service Thumb Image */}
          <motion.div
            className="lg:ml-[120px] mt-[-240px] relative lg:mt-[-500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/service-thumb.png"
              alt="Service Thumb"
              width={400}
              height={400}
              className="lg:w-[600px] w-[300px] h-[200px] lg:h-[400px]"
            />
          </motion.div>
        </div>

        <div className="py-16 mr-[100px]">
          {/* Grid for Why Choose Us */}
          <div className="grid grid-cols-1">
            {[
              {
                icon: <FaAward size={50} className="text-white" />,
                heading: 'Expertise',
                text: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
              },
              {
                icon: <FaChartLine size={50} className="text-white" />,
                heading: 'Results-Driven Solutions',
                text: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
              },
            ].map(({ icon, heading, text }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start text-black text-left p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Icon with Neon Background */}
                <div
                  className="mb-4 flex items-center justify-center w-16 h-16 rounded-full"
                  style={{
                    background: 'linear-gradient(145deg, #FF007F, #D60068)',
                    boxShadow: '0 4px 8px rgba(255, 0, 127, 0.5)',
                  }}
                >
                  {icon}
                </div>
                {/* Heading */}
                <h3 className="text-lg font-bold text-black">{heading}</h3>
                {/* Text */}
                <p className="text-gray-700 lg:w-[500px] text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
