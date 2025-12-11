import React from 'react';
import info from '../info.json';
import { PiLinkSimpleBold } from "react-icons/pi";


function Project() {
    return (
        <div id = "project-section">
            <h1 id = "project-content-header" className = "Content-Item-Header">Projects</h1>
            <div id ="project-item-container" className = "flex flex-row">
                <ul>
                    {/* info/projects/title */}
                    {info.projects.map(item => (
                        <li>
                            <h3>
                                <a href ={item.link} target='_blank' >{item.title}<PiLinkSimpleBold></PiLinkSimpleBold></a>
                            </h3>
                            <p>{item.date}</p>
                            <p>{item.summary}</p>
                            <div id ="pic-frame" class ="w-12 h-12 flex items-center justify-center overflow-hidden">
                                <img 
                                src={item.preview}
                                alt={item.title}
                                className="w-full h-full object-scale-down rounded-md border"
                                />
                            </div>
                            
                            {Array.isArray(item.skills) && item.skills.length> 0 && (
                               <ul id = "skill-used" class ="mt-3 flex flex-wrap gap-6">
                                {item.skills.map((skillitems,i) => (
                                    <li key ={i}
                                    class = "text-xs font-medium px-5 py-1 rounded-full border border-slate-300 shadow-sm hover:bg-slate-200 transition">
                                        {skillitems}
                                    </li>
                                )
                            )}</ul> 
                            )}
                              
                        </li>
                    ))}
                </ul>
            </div>  
        </div>
    )
}

export default Project;