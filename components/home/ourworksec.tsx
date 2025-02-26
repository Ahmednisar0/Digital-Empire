import Image from 'next/image';
import Link from 'next/link';

const OurWorkSection = () => {
  return (
    <section className="flex  lg:mt-[100px] lg:ml-[30px] flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
      {/* Left Side - Text */}
      <div className="max-w-lg text-center lg:text-left">
        <p className='text-[#ff002b] text-xl font-bold mb-4'>See Our Work in Action</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Bringing Ideas to Life with Innovation & Creativity
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Explore our portfolio and see how we transform ideas into stunning digital experiences. 
          From web development to design, our work speaks for itself—crafted with precision, 
          passion, and cutting-edge technology.
        </p>
   <Link href={'/ourwork'}>     <button className="px-6 py-3 w-[200px] rounded-lg font-semibold bg-[#ff002b] text-white text-xl hover:bg-pink-700 transition-all">
          Our Work
        </button></Link>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 lg:mt-0">
               <Image
                      src="/images/shape-pattern2.png"
                      alt="Background Image"
                      width={500}
                      height={500}
                      className="lg:w-[370px]  lg:mt-0 ml-[140px] mt-[40px]  lg:mb-[25px] justify-start lg:ml-[350px] w-[185px] h-auto"
                    />
        <Image 
          src="/images/ourwork.jpg" 
          alt="Our Work" 
          width={600} 
          height={600} 
          className="relative w-[265px] mt-[-188px] lg:mt-[-400px]  lg:ml-[60px] lg:w-[540px] "
        />
      </div>
    </section>
  );
};

export default OurWorkSection;
