import React, { useState, useEffect} from 'react';
import info from "../info.json";
import xp from "../xp.json";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

import PDF from "../assets/Douglas_Yu.pdf";
// basically the home page


// const language =['C++', 'C#', 'Python', 'JavaScript', "Swift", 'HTML/CSS', 'SQL'];
// const tools =['Unity','Git/Github', 'Xcode','Jypter Notebooks'];


function About() {
  
return (
  <div className='space-y-4 p-4 max-w-4xl mx-auto pt-45'>
    <h1 className='font-bold text-2xl flex justify-center'>About Me</h1>
    <div>
      <p>{info.aboutme}</p>
    </div>
    <div className="flex flex-row gap-3">
      <a href='https://github.com/Douglasmyu'><FiGithub size={40} color="#8BE9FD"/></a>
      <a href='https://www.linkedin.com/in/douglasmyu/'><FiLinkedin size={40} color="#8BE9FD"/></a>
      <a href={PDF} target="_blank" rel="noopener noreferrer"><IoDocumentTextOutline size={40} color="#8BE9FD"/></a>
    </div>
    
    <div id = "educate">
      <h2 className='font-bold text-xl'>Education</h2>
      <ul className='relative border-l-5 border-blue-400 border-dashed pl-5 pt-2'>
        {xp.education.map((item, idx) =>(
          <li key={item.id ?? `${item.school}-${item.time}-${idx}`} className='mb-5 ml-2 relative'>
            <div className='flex flex-col items-baseline gap-x-2'>
              <h3 className='text-lg font-semibold text-slate-900'>{item.school}</h3>
              <h4>{item.major}</h4>
              <span className='ml-auto text-sm text-slate-500'>{item.time}</span>
              <div>
                {Array.isArray(item.courses) && item.courses.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-4">
                    {item.courses.map((courseItem, i) =>(
                      <li key = {i}
                      className="text-xs font-medium px-5 py-1 rounded-full border bg-slate-200 border-slate-300 shadow-sm">
                        {courseItem}</li>
                    ))}
                  </ul>
                )}
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div id= "workXP">
        <h2 className='font-bold text-xl'>Work History</h2>
        <ul className='relative border-l-5 border-blue-400 border-dashed pl-5 pt-2'>
          {xp.work.map((item, idx) => (
            <li key={item.id ?? `${item.job}-${item.time}-${idx}`} className='mb-5 ml-2 relative'>
              <div className='flex flex-col items-baseline gap-x-2'>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.positon} <span> @ {item.job}</span>
                </h3>
                {item.time && (
                <span className="ml-auto text-sm text-slate-500">
                  {item.time}
                </span>
                )}
              </div>

              {item.description && (
                <p>{item.description}</p>
              )}
           {Array.isArray(item.tech) && item.tech.length > 0 && (
             <ul className="mt-3 flex flex-wrap gap-6">
               {item.tech.map((techitems, i) => (
                <li key={i} 
                  className="text-xs font-medium px-5 py-1 rounded-full border bg-slate-200 border-slate-300 shadow-sm">
                  {techitems}
                  </li>
                ))}
              </ul>
            )}

            </li>

          ))}

        </ul>
    </div>
    {/* <div id="skills">
      <h2 className='font-bold text-xl'>Skills</h2>
      <div>

      </div>
    </div> */}
  </div>




  //   <div id="skills" className="flex flex-col gap-4">
  //     <h2 className="text-2xl font-semibold">Skills</h2>
      
  //     <div className="flex flex-row gap-4">
  //       <div id="language" className="w-1/2 bg-[#CFE7D8] hover:bg-green-100 transition duration-300 p-4 border border-black rounded-lg">
  //         <h3 className='font-bold'>Languages</h3>
  //         <ul>
  //           {language.map((item,index)=>
  //           <li key = {index}>{item}</li>
  //           )}
  //         </ul>
  //       </div>
  //       <div id="tools" className="w-1/2 bg-[#CFE7D8]  hover:bg-green-100 transition duration-300 p-4 border border-black rounded-lg">
  //         <h3 className='font-bold text-xl'>Tools</h3>
  //         <ul>
  //           {tools.map((item, index)=>
  //           <li key = {index}>{item}</li>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //   </div>


  // </section>
);
}

export default About;