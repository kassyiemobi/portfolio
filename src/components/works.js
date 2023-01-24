import React from "react";
import GITLAB from "../assets/gitlab.png";
import Food from "../assets/foodweb.png";
import Cerebrum from "../assets/cerebrum.png";
import dashboard from "../assets/CourierDashboard.png";
import wicryt from "../assets/wycrypt.com.png";
import Ogwugo from "../assets/ogwugo.com.png";

function Works() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#020F4F] text-zinc-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col jutify-canter w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-zinc-300 border-[#D2694B]">
            Projects
          </p>
        </div>
        {/*card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: ` url(${Ogwugo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="https://ogwugo.com" target={"_blank"} rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#BF4E30] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: ` url(${wicryt})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://wicrypt.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#BF4E30] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: ` url(${Food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://food.test.ogwugo.xyz"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#BF4E30] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: ` url(${dashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://dashboard.ogwugo.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#BF4E30] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: ` url(${Cerebrum})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#BF4E30] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: ` url(${GITLAB})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  project-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
