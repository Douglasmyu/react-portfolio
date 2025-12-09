import React, { useState, useEffect} from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import info from "../info.json";
import PDF from "../assets/Douglas_Yu.pdf";
import xp from "../xp.json";
// basically the home page


const list = ["cool guy", "decent golfer", "best cook", "best driver", "okay coder", "great bartender"];
let activeTab = "language"
const language =['C++', 'C#', 'Python', 'JavaScript', "Swift", 'HTML/CSS', 'SQL'];
const tools =['Unity','Git/Github', 'Xcode','Jypter Notebooks'];


function About({ description}) {
  
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    const timeout = setTimeout(()=>{
      setIndex(prev => (prev + 1) % list.length);
    },2000);
    return () => clearTimeout(timeout);
  },[index]);

return (
  <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">About me</h1>
      <h2 className = "text-2xl font-light text-blue-600">{list[index]}</h2>
      {/* <p className="text-slate-600">
        we need to add a timeline component to this for work experience
      </p> */}
      <p className="text-slate-700 leading-7">{info.aboutme}</p>
    </header>

    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-600">Work History</h2>

      {/* Timeline */}
      <ul className="relative border-l border-slate-300 pl-6">
        {xp.work.map((item, idx) => (
          <li key={item.id ?? `${item.job}-${item.time}-${idx}`} className="mb-8 ml-2 relative">
            {/* Dot */}
            <span className="absolute -left-3 top-2 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-white shadow" />

            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.job}
              </h3>
              {item.position && (
                <span className="text-slate-500">• {item.position}</span>
              )}
              {item.time && (
                <span className="ml-auto text-sm text-slate-500">
                  {item.time}
                </span>
              )}

              
            </div>

            {item.description && (
              <p className="mt-2 text-slate-700 leading-7">
                {item.description}
              </p>
            )}

            {/* Optional tags/tech stack */}
            {Array.isArray(item.tech) && item.tech.length > 0 && (
            
              <ul className="mt-3 flex flex-wrap gap-6">

                {item.tech.map((techitems, i) => (
                  <li key={i} 
                  className="text-xs font-medium px-5 py-1 rounded-full border border-slate-300 shadow-sm hover:bg-slate-200 transition">
                    {techitems}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>


    <div id="skills" class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">Skills</h2>
      
      <div class="flex flex-row gap-4">
        <div id="language" class="w-1/2 bg-blue-200 p-4 border border-black rounded-lg">
          <h3>languages</h3>
          <ul>
            {language.map((item,index)=>
            <li key = {index}>{item}</li>
            )}
          </ul>
        </div>
        <div id="tools" class="w-1/2 bg-blue-200 p-4 border border-black rounded-lg">
          <h3>Tools</h3>
          <ul>
            {tools.map((item, index)=>
            <li key = {index}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div>


    <div id="footer">
        <h1>Connect with me!</h1>
        <ul>
            <a href="https://github.com/Douglasmyu"><FaGithub /> Github</a>
            <a href="www.linkedin.com/in/douglasmyu"><FaLinkedin /> LinkedIn</a>
            <a href={PDF} target='_blank' rel='noopener noreffere'><PiReadCvLogoFill /> Resume</a>
            <a href=" "><MdEmail /> yudouglasyu@gmail.com</a>
              
        </ul>
    </div>
  </section>
);
}

export default About;