import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import GITHUB from "../assets/github.png";
import TAIL from "../assets/tailwind.png";
import FIRE from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#020F4F] text-zinc-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl  font-bold mb-5 text-zinc-300 py-4 border-b-4 inline border-[#D2694B]">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-8">
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Html logo" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS logo" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JAVASCRIPT}
              alt="JAVASCRIPT logo"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 h-20 mx-auto" src={REACT} alt="REACT logo" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="GITHUB logo" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 h-20 mx-auto" src={NODE} alt="NODE logo" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FIRE} alt="FIRE logo" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#020F4F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAIL} alt="Tail logo" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
