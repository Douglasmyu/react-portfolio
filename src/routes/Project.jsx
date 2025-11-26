import React from 'react';
import info from '../info.json';

import HandyVision from '../assets/HandyVision.png'

const imageMap = {
    HandyVision: HandyVision,
}
function Project() {
    return (
        <div id = "project-section" className = "content-item">
            <h1 id = "project-content-header" className = "Content-Item-Header">Projects</h1>
            <div id ="project-item-container" className = "content-item-body">
                <ul>
                    {/* info/projects/title */}
                    {info.projects.map(item => (
                        <li>
                            <h3>
                                <a href ={item.link} target='_blank' >{item.title}</a>
                            </h3>
                            <p className ="project-date">{item.date}</p>
                            <p className = "project-skills">Skills: {item.skills}</p>
                            <p className = "project-Summary">{item.summary}</p>

                        </li>
                    ))}
                </ul>
            </div>  
        </div>
    )
}

export default Project;