import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="
      w-56
      bg-[#CFE7D8] shadow-lg
      flex flex-col items-start
      py-10 px-6
    ">
      <Link to="/About">
        <span className="text-2xl font-semibold text-blue-400 mb-8">
          Douglas Yu
        </span>
      </Link>

      <div className="flex flex-col space-y-4 w-full">
        <Link
          to="/About"
          className="w-full py-2 px-3 hover:bg-black hover:text-white rounded-md transition"
        >
          About
        </Link>
        <Link
          to="/Project"
          className="py-2 px-3 w-full text-lg font-light text-white hover:text-sky-300 hover:bg-slate-700 rounded-lg transition duration-300"
        >
          Project
        </Link>

        <Link
          to="/Blogs"
          className="py-2 px-3 w-full text-lg font-light text-white hover:text-sky-300 hover:bg-slate-700 rounded-lg transition duration-300"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
