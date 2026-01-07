import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import PDF from "../assets/Douglas_Yu.pdf";


const list = [
  "cool guy",
  "decent golfer",
  "best cook",
  "best driver",
  "okay coder",
  "great bartender",
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
      {isCopied ? "Email Copied!" : `Copy ${email}`}
    </a>
  );
}

function Nav() {
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("about");

  // rotating text
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  // section detection logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // mark whichever section is at least 50% visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px", // triggers a bit before it fully enters view
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Blogs" },
  ];

  return (
    <nav className="fixed flex-col items-start py-10 px-6 pt-10 bg-[#CFE7D8] h-screen w-56">
      <a href="#about">
        <h1 className="font-bold text-4xl">Douglas Yu</h1>
        <h2 className="text-2xl font-light text-blue-600">{list[index]}</h2>
      </a>

      <div className="flex flex-col space-y-4 w-full mt-10">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 transition-all duration-200 ${
              activeSection === id
                ? "text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600 hover:underline"
            }`}
          >
            {activeSection === id && (
              <FaArrowRight className="text-blue-700 transition-transform duration-200" />
            )}
            <span>{label}</span>
          </a>
        ))}
      </div>

      <div id="footer" className="mt-auto pt-10">
        <ul className="grid-cols-1">
          <a href="https://github.com/Douglasmyu">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/douglasmyu">
            <FaLinkedin />
          </a>
          <a href={PDF} target="_blank" rel="noopener noreferrer">
            <PiReadCvLogoFill />
          </a>
          <CopyEmail email="yudouglasyu@gmail.com" />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
