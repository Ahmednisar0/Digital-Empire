'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center h-[800px] lg:mb-0 lg:h-screen lg:mt-[-100px] mt-[-130px] bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Shape */}
      <motion.div
        className="absolute mt-[170px] lg:mt-[-100px] left-0 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/6 lg:w-1/5"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/images/shape-left.png"
          alt="Left Shape"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Center Content */}
      <motion.div
        className="text-center lg:w-[700px] lg:mt-0 mt-[-200px] z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className='text-2xl lg:text-5xl text-center font-bold'>
          Building Powerful Digital Solutions for Your Brand’s Success
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto">
          We specialize in web development, digital marketing, and graphic design to help your brand thrive online. Let us bring your ideas to life and create an impactful digital presence.
        </p>
        
        {/* Our Services Button with Framer Motion */}
        <motion.a
          href="/services"
          className="mt-6 inline-block bg-[#9f4ee3] text-white py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our Services
        </motion.a>
      </motion.div>

      {/* Right Shape */}
      <motion.div
        className="absolute mt-[130px]  lg:mt-[-100px] right-0 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/6 lg:w-1/5"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/images/shape-right.png"
          alt="Right Shape"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
