import React, { useState, useEffect} from 'react';
import info from "../info.json";
import xp from "../xp.json";
// basically the home page


const language =['C++', 'C#', 'Python', 'JavaScript', "Swift", 'HTML/CSS', 'SQL'];
const tools =['Unity','Git/Github', 'Xcode','Jypter Notebooks'];


function About() {
  
  


return (
  <section id="work-xp" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
    <header className="space-y-2">
      
    
      <p className="text-slate-700 leading-7">{info.aboutme}</p>
    </header>

    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-600">Work History</h2>

      {/* Timeline */}
      <ul className="relative border-l border-slate-300 pl-6">
        {xp.work.map((item, idx) => (
          <li key={item.id ?? `${item.job}-${item.time}-${idx}`} className="mb-8 ml-2 relative">
            {/* Dot */}
           
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


    <div id="skills" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      
      <div className="flex flex-row gap-4">
        <div id="language" className="w-1/2 bg-blue-200 p-4 border border-black rounded-lg">
          <h3>languages</h3>
          <ul>
            {language.map((item,index)=>
            <li key = {index}>{item}</li>
            )}
          </ul>
        </div>
        <div id="tools" className="w-1/2 bg-blue-200 p-4 border border-black rounded-lg">
          <h3>Tools</h3>
          <ul>
            {tools.map((item, index)=>
            <li key = {index}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div>


  </section>
);
}

export default About;