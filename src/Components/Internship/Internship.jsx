import React, { useEffect, useRef, useState } from 'react';
import './Internship.css';

const Internship = () => {
  const timelineRef = useRef(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  const internships = [
    {
      id: 1,
      company: "Jorim Technology Pvt. Ltd.",
      role: "Web Developer Intern",
      period: "February 2024 - March 2024",
      description: "Worked on React-based applications, implemented responsive designs, and collaborated with the UX team.",
      skills: ["React", "JavaScript", "CSS", "Html" ,"Node.js","MongoDB"],
      side: "left"
    },
    {
      id: 2,
      company: "Kolozen Technologies",
      role: "Mobile Application Developement",
      period: "August 2024 - October 2024",
      description: "Developed Frontend for mobile applications and worked on CRUD operations on data transfer",
      skills: ["React Native","SpringBoot","MySql"],
      side: "right"
    }
  ];

    useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id && !animatedItems.includes(id)) {
            setAnimatedItems(prev => [...prev, id]);
          }
        }
      });
    }, observerOptions);

    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [animatedItems]);

  return (
    <div className="internship-section" id="internships">
      <h2 className="section-title">Internship Journey</h2>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>
        
        {internships.map((internship) => (
          <div 
            key={internship.id}
            className={`timeline-item ${internship.side} ${animatedItems.includes(internship.id.toString()) ? 'animate' : ''}`}
            data-id={internship.id}
          >
            <div className="timeline-content">
              <div className="timeline-date">{internship.period}</div>
              <h3 className="company-name">{internship.company}</h3>
              <h4 className="role-title">{internship.role}</h4>
              <p className="internship-description">{internship.description}</p>
              <div className="skills-container">
                {internship.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;