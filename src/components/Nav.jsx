import React, { useState, useEffect } from "react";
import info from '../info.json';
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";


const list = [
  "cool guy",
  "average golfer",
  "best cook",
  "great bartender",
  "plays badminton",
  "Fortnite player"
];


function CopyEmail({ email }) {
  const [isCopied, setCopied] = useState(false);
  const [message, setMessage] = useState(null);

  const copyEmailToClipboard = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setMessage("Email Copied")
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("failed to copy", err);
      alert("Failed to copy email. Please try again.");
    }
  };

  return (
    <a
      href="#"
      onClick={copyEmailToClipboard}
      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
    >
      <MdEmail className="text-lg" />
      {isCopied ? "Email Copied!" : ``}
    </a>
  );
}

function Nav() {
  const [index, setIndex] = useState(0);
  // rotating text
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);


  return (

    <div className="fixed top-0 left-0 w-full z-50 
                    flex flex-col items-center justify-center 
                  bg-[#6272A4]/70 backdrop-blur-md pb-2">
      <div className="pt-6 text-center">
        <h1 className="font-bold text-4xl">Douglas Yu</h1>
        <h2 className="text-blue-300">{list[index]}</h2>
      </div>
      <hr className="w-1/2 border-gray-400 my-4"/>
      <div id="navItems" className="flex gap-7">
        <Link to="/" className="text-[#F8F8F2] hover:text-blue-700 transition-colors font-bold">About</Link>
        <Link to="/projects" className="text-[#F8F8F2] hover:text-blue-700 transition-colors font-bold">Projects</Link>
        <Link to="/blogs"className="text-[#F8F8F2] hover:text-blue-700 transition-colors font-bold">Blogs</Link>
      </div>
    </div>
    // <nav className="fixed flex-col items-start py-10 px-6 pt-10 bg-[#CFE7D8] h-screen w-56">
    //   <div>
    //     <h1 className="font-bold text-4xl">Douglas Yu</h1>
    //     <h2 className="text-2xl font-light text-blue-600">{list[index]}</h2>       
    //   </div>
    //   <div>
    //     {info.aboutme}
    //   </div>
    //   <div className="flex-col grid gap-6 space-y-4 w-full mt-5">
    //     <a href="#about"><h3 className="hover:text-blue-500">About</h3></a>
    //     <a href="#projects"><h3 className="hover:text-blue-500">Projects</h3></a>
    //     <a href="#blogs"><h3 className="hover:text-blue-500">Blogs</h3></a>
    //     <a href={PDF} target="_blank" rel="noopener noreferrer">
    //       <h3 className="hover:text-blue-500">RESUME</h3>
    //       </a>
    //   </div>

    //   <div id="footer" className="mt-auto pt-10">
    //     <ul className="grid grid-cols-3 items-center">
    //       <a href="https://github.com/Douglasmyu">
    //         <FaGithub />
    //       </a>
    //       <a href="https://linkedin.com/in/douglasmyu">
    //         <FaLinkedin />
    //       </a>
          
    //       <CopyEmail email="yudouglasyu@gmail.com" />
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Nav;
