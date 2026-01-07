import React from 'react';
import info from '../info.json';
import { RiGithubLine } from "react-icons/ri";



function Project() {
    return (
        <div id="project-section">
            <h1 id="project-content-header" className="text-2xl font-bold">
                Projects
            </h1>
            <div id="project-item-container" className="grid gap-8">
                {info.projects.map((item, index) => (
                <div key={index} className="bg-zinc-300 hover:bg-zinc-500 transition duration-300 p-4 rounded">
                    <div className='flex justify-between items-start mb-4'>
                        <h3 className='font-bold'>
                            {item.title}
                        </h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                            className='text bg-gray-300 hover:text-red-600 transition-colors'>
                            <RiGithubLine />

                        </a>
                        
                    </div>
                    

                    <p className='font-thin mb-4'>{item.date}</p>
                    <p>{item.summary}</p>

                    {Array.isArray(item.skills) && item.skills.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-3">
                        {item.skills.map((skill, i) => (
                        <li
                            key={i}
                            className="text-xs font-medium px-4 py-1 rounded-full border border-slate-300 shadow-sm"
                        >
                            {skill}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                ))}
            </div>
        </div>

    )
}

export default Project;