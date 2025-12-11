import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";



function Nav() {
  return (
    <nav className="
      fixed top-0 left-0 h-screen w-56
        bg-[#CFE7D8] shadow-lg
        flex flex-col items-start
        py-10 px-6
    ">

      <button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        <Link to="/About">
      {/* import font family */}
          <h1 className="italic">
            Douglas Yu
          </h1>
       
      </Link>
      </button>

      <div className="flex flex-col space-y-4 w-full">
        <a href="#about" className="no-underline hover:font-semibold">
          <p>About</p>
        </a>


        <a href="#projects">
          <p>
            Project
          </p>
        </a>

        <a href="#blogs" >
          <p>
            Blogs
          </p>

        </a>
      </div>
    </nav>
  );
}

export default Nav;
