import React, { useState } from 'react';
import './MyWork.css';

const MyWork = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Website",
      description: "A full-stack Hotel Booking Website with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230301/pngtree-a-modern-reservation-system-for-booking-hotel-accommodations-through-an-online-website-photo-image_49742536.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      codeLink: "https://mern-booking-app-tt4x.onrender.com/",
      githubLink: "https://github.com/Muthamizh2003/mern-booking-app"
    },
    {
      id: 2,
      title: "Secure Notes App",
      description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
      image: "data:image/png;base64,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",
      tech: ["React", "SpringBoot", "MySql", "AWS"],
      codeLink: "http://secure-notes-app-v1.s3-website.ap-south-1.amazonaws.com",
      githubLink: "https://github.com/Muthamizh2003/Secure-Notes-App-Project"
    },
    {
      id: 3,
      title: "Blog App",
      description: "A blog App to interact with the world",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwnX4TzxmuGZLxHQqk6rufArI80qldMNuew&s",
      tech: ["React", "SpringBoot", "Postgres", "Docker"],
      codeLink: "https://blog-frontend-8d20.onrender.com/",
      githubLink: "https://github.com/Muthamizh2003/blog-app"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="my-work" id="work">
      <h2>My Projects</h2>
      <p className="section-subtitle">A selection of my recent work</p>
      
      <div className="projects-container">
        <div className="ipad">
          <div className="ipad-screen">
            <div className="project-display">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{projects[activeProject].title}</h3>
                <p>{projects[activeProject].description}</p>
                <div className="tech-stack">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="ipad-buttons">
            <button className="nav-button" onClick={prevProject}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="action-buttons">
              <a 
                href={projects[activeProject].codeLink} 
                className="action-button code-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
              <a 
                href={projects[activeProject].githubLink} 
                className="action-button github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                Code
              </a>
            </div>
            
            <button className="nav-button" onClick={nextProject}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div className="project-indicators">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`indicator ${index === activeProject ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;