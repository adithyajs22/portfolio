import React from 'react'
import  './HomeSection.css'

const HomeSection = () => {
  return (
    <section id = "home" className='hero'>
      <div className="profile-wrapper">
        <img src='/me.jpg' className='profile'></img>
      </div>
    <div className="hero-content">
      <h1>Hello</h1>
      <h2>I'm <span>Adithya J S</span></h2>
      <h1  className="right-floating-label"><strong>Frontend Developer & Tech Enthusiast</strong> </h1>
      <p>I’m currently a Computer Science student passionate about building clean, accessible web experiences.</p>
    <p>I design and build modern web apps with React, Vite, and a focus on usability.</p>
      <div className='herocontent'>
       <a className="btn-outlined" href="/resume.pdf" target="_blank" >My Resume</a>
       <a className="btn-filled" href="#contacts">Got a project?</a>
      </div>
      <div className='hero-icons'>
        <a className="githublogo" href="https://github.com/adithyajs22"target='_blank'>
        <img src="./github.svg" alt="Github" />
        </a>
         <a  className="linkedinlogo"href="https://www.linkedin.com/in/adithya-js-180646290"target='_blank'>
        <img src="./linkedin.svg" alt="Linkedin" />
        </a>
       
      </div>
      
    </div>
    </section>
    
  )
}

export default HomeSection