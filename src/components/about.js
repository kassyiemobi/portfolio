import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#020F4F] text-zinc-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-[#D2694B] inline">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hi, I am Kasiemobi, nice to meet you. Please take a Look around
            </p>
          </div>
          <div>
            <p>
              I love building solutions that help make the world a better place.
              I find passion in being a part of a system that makes things work
              better. I build website solutions for individuals,organizations
              and large enterprises. I love to learn new things and I am always
              looking to learn more. I am currently working as a Front-end
              developer but I have some knowledge about back-end technology
              tools and database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
