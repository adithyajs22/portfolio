import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import './ContactSection.css'; 

const ContactSection = () => {
  return (
    <section id = "contacts"> <div className='contact'>
        <div className="contact-text">
        <h2>Contact</h2>
        <p>“Got a project, collaboration, or opportunity in mind? I’d love to hear from you!”</p>
        </div>
        <div className='buttn'>
        <a href="mailto:adithyajs22@gmail.com?subject=Let%27s%20Connect&body=Hey%20Adithya,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out."
            className="btn-filled"  
            target="_blank"
>
  <IoMailOutline size={25} /> Say Hello
</a>

          <a href="https://www.linkedin.com/in/adithya-js-180646290/" rel="noopener noreferrer" target="_blank" className="btn-outlined">
           <FaLinkedin size={25}/> Message on LinkedIn
        </a></div>

        
        </div></section>
   
  )
}

export default ContactSection