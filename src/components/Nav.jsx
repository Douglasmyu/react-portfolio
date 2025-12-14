import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";



function Nav() {
  return (
    <nav className="fixed flex-col items-start py-10 px-6 ">
      
      <button class="flex flex-col space-y-4 w-full ">
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
