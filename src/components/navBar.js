import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#020F4F] text-[#EEF0F2]">
      <div>
        <h2 className="text-2xl font-bold ">Kasiemobi.</h2>
      </div>

      <ul className="md:flex hidden cursor-pointer">
        <li className="px-4">Home</li>
        <li className="px-4">About</li>
        <li className="px-4">Skills</li>
        <li className="px-4">Projects</li>
        <li className="px-4">Contact</li>
      </ul>

      {/*hamburger menu*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}

      <ul
        className={
          !isOpen
            ? "hidden"
            : " absolute top-0 left-0 w-full cursor-pointer h-screen bg-[#020F4F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Projects</li>
        <li className="py-6 text-4xl ">Contact</li>
      </ul>

      {/* social media icons */}
      <div></div>
    </div>
  );
};

export default NavBar;
