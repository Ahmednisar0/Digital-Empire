'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:ml-[100px] mb-[-60px] mt-[-100px] bg-white flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side: About Text */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
          About Digital <span style={{
                color: 'rgba(255, 49, 49)',
                textShadow: '0 0 10px rgba(255, 49, 49, 0.5)',
              }}>Empire</span>
        </h2>
        <p className="text-gray-600 hidden lg:block  mt-8 text-lg w-[730px] mx-auto lg:mx-0">
        At Digital Empire, we bring creativity and technology together to build powerful<br/> digital solutions.<br/>
Our team helps businesses grow with smart strategies, eye-catching designs, and smooth development.<br/>
We create strong brand identities, high-quality websites, and marketing campaigns that deliver real results.
Whether you're starting fresh or looking to expand, we’re here to turn your ideas into success.
        </p>
        <p className="text-gray-600 lg:hidden text-center block mt-8 text-lg w-[370px] mx-auto lg:mx-0">
        At Digital Empire, we bring<br/> creativity and technology together to<br/> build powerful digital solutions.
Our team helps businesses grow with smart strategies, eye-catching designs, and smooth development.
We create strong brand identities, high-quality websites, and marketing campaigns that deliver real results.
        </p>
        <motion.a
          href="/"
          className="mt-6 inline-block bg-[#ff002b]  text-white py-2 px-6  text-xl rounded-lg hover:bg-[#ff4690] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         Get Your Brand Succesful Today
        </motion.a>
      

      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/aboutimage.png"
          alt="About Digital Empire"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
