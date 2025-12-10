import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";



function Nav() {
  return (
    <nav className="
      w-56
      bg-[#CFE7D8] shadow-lg
      flex flex-col items-start
      py-10 px-6
    ">

      <button >
        <Link to="/About">
      {/* import font family */}
          <h1 className="italic">
            Douglas Yu
          </h1>
       
      </Link>
      </button>

      <div className="flex flex-col space-y-4 w-full gap-8">
        <Link to="/About" class = "flex item-center gap-2 hover:text-blue-700 transition-colors">
          <p>
            About
          </p>
        </Link>

        <Link to="/Project">
          <p>
            Project
          </p>
        </Link>

        <Link to="/Blogs">
          <p>
            Blogs
          </p>

        </Link>
      </div>
    </nav>
  );
}

export default Nav;
