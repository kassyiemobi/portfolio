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
          <div className="sm:text-right text-2xl font-bold ">
            <p>
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale performance.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              I love building solutions that help make processes better. I find
              passion in being a part of a system that makes things work. My
              past expirence are mostly in Ecommerce and data management
              crafting thoughtful and inclusive experiences that adhere to web
              standards for over a million merchants across the world. I am a
              Front-end developer but I have basic knowledge on back-end
              technology, tools and database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
