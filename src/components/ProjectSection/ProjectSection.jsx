import React from 'react';
import projects from '../../ProjectsData'; 

import './ProjectSection.css';

const ProjectSection = () => {
  return (
    <section id="projects" className="project-section" data-aos="zoom-in-down" >
      <h2>Projects</h2>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                  
                )}
                 {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                 View Project
                </a>
                )}  
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
