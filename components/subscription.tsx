import React from "react";

const SubscribeSection = () => {
  return (
    <div className="flex mr-[20px] mt-[50px] lg:mt-[220px] lg:mr-0 ml-[20px] lg:ml-0 lg:h-[200px] items-center justify-center  ">
      <div className="lg:p-[120px] p-5 bg-[#ff3c5c] rounded-2xl lg:h-[400px] shadow-lg w-full lg:w-[1000px] text-center">
        {/* Heading */}
        <h2 className="lg:text-3xl text-2xl font-bold text-white mb-4">
          Stay connected with us 
        </h2>
        {/* Description */}
        <p className="text-white text-[17px] mb-6">
         By providing us your email you will be updated to any new discount or any news regarding us.
        </p>
        {/* Subscription Form */}
        <div className="flex items-center  bg-white rounded-full shadow-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-3 rounded-full text-purple-500 lg:w-auto w-[180px] focus:outline-none"
          />
          <button className="px-6 py-3 bg-[#ff002b] text-white font-medium rounded-full hover:bg-[#d4296d] focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
