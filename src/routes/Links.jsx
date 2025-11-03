import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";




// contacts page with all the links
function Links(){

    const linkIcons= []
    return(
        <section>
            <h1>Connect with me!</h1>
            <ul>
                <a href="https://github.com/Douglasmyu"><FaGithub /> Github</a>
                <a href="https://www.linkedin.com/in/douglas-yu-51614b165/"><FaLinkedin /> LinkedIn</a>
                <a href=" "><PiReadCvLogoFill /> Resume</a>
                <a href=" "><MdEmail /> Email</a>
                 
            </ul>
        </section>        
    )
}

export default Links;