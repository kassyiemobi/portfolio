import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020F4F]">
      {/* container */}
      <div className=" text-[#EEF0F2] max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#BF4E30] font-bold "> Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Kasiemobi Nwankwo</h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I'm a Front-end Developer
        </h2>
        <div className="py-4 max-w-700px text-lg flex">
          <p className="mr-2"> A front end developer with a passion for</p>
          <Typed
            className="text-[#BF4E30] font-bold"
            strings={[
              "beautiful",
              "functional",
              "innovative",
              "mordern web applications.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            backDelay={1}
            loop
            smartBackspace
          ></Typed>
        </div>

        <div>
          <Link
            to="projects"
            smooth={true}
            duration="500"
            className=" w-60 group border-2 py-3 px-6 my-3 hover:bg-[#D2694B] hover:border-[#D2694B] flex justify-between"
          >
            View Projects
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-4 mt-1 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
