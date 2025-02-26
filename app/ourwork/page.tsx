import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';


export default function Page() {
  const works = [
    {
      name: "BioBurn Fuels",
      imagePath: "/images/bio.png",
      description: "BioBurn Fuels is an informational static website that provides guidance and insights into their work, showcasing sustainable fuel solutions and eco-friendly practices.",
      link: "https://bioburnfuels.com/"
    },
    {
      name: "Bandage Clothing",
      imagePath: "/images/bandage.png",
      description: "Bandage Clothing is a 7-page e-commerce website that sells a wide range of stylish clothes, providing a seamless shopping experience for customers.",
      link: "https://figma-hackathon-lac.vercel.app/shop"
    },
    {
      name: "Horror Tales",
      imagePath: "/images/horror.png",
      description: "Dive into the eerie and terrifying world of horror stories and unexplained mysteries.",
      link: "https://horror-blog-seven.vercel.app/"
    },
    {
      name: "Nest Heaven",
      imagePath: "/images/nest.png",
      description: "Nest Heaven is a blog site made to guide people on how to incubate eggs of birds and provide detailed information about various bird species.",
      link: "https://nextjs-blog-site-eight.vercel.app/"
    },
    {
      name: "Sprinkle & Dash Bakery",
      imagePath: "/images/bakery.png",
      description: "Sprinkle & Dash Bakery is a bakery website made for a client where they sell cakes, brownies, pastries, and cheesecakes, offering a variety of delicious treats.",
      link: "https://custom-bakery-web.vercel.app/about"
    },
    {
      name: "Diners Construction",
      imagePath: "/images/diners.png",
      description: "Diners Construction is a professional construction website designed for a client to showcase their projects, portfolio, and the high-quality services they offer. It highlights their expertise in various construction areas, ensuring a seamless experience for potential clients.",
      link: "https://diners-web.vercel.app/projects/Diners-avenue"
    }
  ];

  return (<div className=''>
    <div className=' py-10'
  >
      <Navbar />
      <div className="container bg-white    mt-[-40px]  mx-auto py-10">
        <div className="flex justify-center mt-16 flex-col items-center mb-16">
          <h1 className="text-5xl   font-bold text-center">Our Work</h1>
          <p className="text-gray-600 lg:w-[900px] text-[18px] text-center mt-2">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase <br/> our creativity and expertise.</p>
        </div>

      

  
      </div>
    </div><div className=' w-full justify-center items-center'  
    >
    <div className=" lg:mt-[-30px]  grid grid-cols-1 lg:ml-[120px] ml-4 lg:grid-cols-2 gap-8"
       >
          {works.map((work) => (
            <div key={work.name} className=" lg:w-[500px] w-[380px] p-5 shadow-2xl rounded-lg">
              <Image src={work.imagePath} alt={work.name} height={900} width={600} className="lg:w-full w-[380px]  lg:h-80 object-cover rounded-t-lg" />
            <div className='flex justify-between'>
                <div><h3 className="text-xl  mt-4">{work.name}</h3>
            <div className='bg-gray-300 rounded-sm px-2 text-[15px] mt-[10px] border-white'><p className='text-gray-700 ml-[3px]'>{work.link}</p></div>
            </div>
        <Link rel="stylesheet" href={work.link}><div className=' hover:text-[#fc9dc3] rounded-md bg-white mt-5 text-[#FF0066]' style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <BsFillArrowUpRightSquareFill  size={30} />
    </div>  </Link>   </div> 
    <Link rel="stylesheet" href={work.link}>  <p className="text-gray-500 mt-2">{work.description}</p>
                <button className="flex items-center bg-[#FF0066] mt-5  px-4 py-2 text-white font-semibold hover:bg-[#c92c6b] hover:text-black rounded-md">
                                View More
                                <FaArrowRight className="ml-2 w-5 h-5" />
                              </button>    </Link>        </div>
          ))}
        </div>
     </div>
     <Footer/>
    </div>
  );
}