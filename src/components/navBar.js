import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#020F4F] text-[#EEF0F2]">
      <div>
        <h2 className="text-2xl font-bold ">Kasiemobi.</h2>
      </div>

      <ul className="md:flex hidden cursor-pointer">
        <li className="px-4">
          <Link to="home" smooth={true} duration="500">
            {" "}
            Home
          </Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to="about" smooth={true} duration="500">
            {" "}
            About
          </Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to="skills" smooth={true} duration="500">
            {" "}
            Skills
          </Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to="projects" smooth={true} duration="500">
            {" "}
            Projects
          </Link>
        </li>
        <li className="px-4">
          {" "}
          <Link to="contact" smooth={true} duration="500">
            {" "}
            Contacts
          </Link>
        </li>
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
        <li className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration="500">
            {" "}
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration="500">
            {" "}
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration="500">
            {" "}
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration="500"
          >
            {" "}
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          {" "}
          <Link
            onClick={handleClick}
            to="con tact"
            smooth={true}
            duration="500"
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>

      {/* social media icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 py-1 px-4 rounded-sm">
            <a
              className="flex justify-between items-center w-full text-[#EEF0F2] "
              href="https://www.linkedin.com/in/kasiemobi-omeh/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 py-1 px-4 rounded-sm">
            <a
              className="flex justify-between items-center w-full text-[#EEF0F2] "
              href="https://github.com/kassyiemobi/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D2694B] py-1 px-4 rounded-sm">
            <a
              className="flex justify-between items-center w-full text-[#EEF0F2] "
              href="https://gitlab.com/Kassyiemobi"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitLab
              <FaGitlab size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#028090] py-1 px-4 rounded-sm">
            <a
              className="flex justify-between items-center w-full text-[#EEF0F2] "
              href="https://www.linkedin.com/in/kasiemobi-omeh/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] py-1 px-4 rounded-sm ">
            <a
              className="flex justify-between items-center w-full text-[#EEF0F2] "
              href="omeh.kasie@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Resume
              <BsFillPersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
