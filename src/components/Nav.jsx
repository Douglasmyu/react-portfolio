import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="bg-slate-800 shadow-lg flex items-center
        justify-around py-3 px-32 fixed top-0 left-0 w-full">
            <Link to="/About">
                <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
                    {/* You can add a logo or text here */}
                </span>
            </Link>
            <div className="flex items-center gap-5 text-black">
                <Link
                    to="/About"
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
                >
                    About
                </Link>
                <Link
                    to="/Project"
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
                >
                    Project
                </Link>
                <Link
                    to="/Links"
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
                >
                    Links
                </Link>
                <Link
                    to="/Blogs"
                    className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
                >
                    Blogs
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
