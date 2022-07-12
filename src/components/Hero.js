import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020F4F]">
      {/* container */}
      <div className=" text-[#EEF0F2] max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#BF4E30] "> Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Kasiemobi Omeh</h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I'm a Front-end Developer
        </h2>
        <p className="py-4  max-w-700px">
          {" "}
          I'm a front end developer with a passion for creating beautiful, fully
          functional and modern responsive web application.
        </p>
        <div>
          <button className=" group border-2 py-3 px-6 my-3 hover:bg-[#D2694B] hover:border-[#D2694B]  flex justify-between">
            View Projects
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-4 mt-1 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
