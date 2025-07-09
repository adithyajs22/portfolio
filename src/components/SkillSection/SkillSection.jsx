import React from 'react'
import "./SkillSection.css"
const SkillSection = () => {
  return (
    <section id ="skills"data-aos="zoom-out" className="section-wrapper">
  
   <div> 
    <h2>Frontend</h2>
    <div className="skills-marquee">
    <div className="marquee-content">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Vite</span>
    </div>
    </div>

<h2>Tools&Platforms</h2>
 <div className="skills-marquee">
  <div className="marquee-content">
    <span>Firebase</span>
    <span>SQL</span>
    <span>Git</span>
    <span>Figma</span>
    <span>Canva</span>
    <span>Github</span>
    <span>Vercel</span>
    </div>
     </div>
  </div>
   
    


    </section>
  )
}

export default SkillSection