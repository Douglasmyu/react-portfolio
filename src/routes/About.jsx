import React from 'react';
import info from "../info.json";
import xp from "../xp.json";
// basically the home page

function About({ description}) {
  console.log(xp)
  return (
    <div>
    
      <section id = "about">
        <h1>About me</h1>
        <p>we need to add a timeline component to this for work experience</p>
        <p>{info.aboutme}</p>
        <div class = "timeline-sections">
          <h2>Work History</h2>
            <ul>
              {xp.work.map(item =>(
                <li>
                  {item.job}
                  <p>{item.positon}</p>
                  <p>{item.time}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
        </div>
      </section>
    </div>
  )
}

export default About;