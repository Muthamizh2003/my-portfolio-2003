import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "React.js", level: "Advanced" },
  { name: "Spring", level: "Intermediate" },
  { name: "Spring JDBC", level: "Intermediate" },
  { name: "Spring Hibernate", level: "Intermediate" },
  { name: "Algorithms", level: "Intermediate" },
  { name: "Data Structures", level: "Intermediate" },
  { name: "Python", level: "Beginner" },
  { name: "AWS", level: "Beginner" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },
];

const Skills = () => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const bubbleSize = 120;
    const padding = 20;

    const generateNonOverlappingPositions = () => {
      const newPositions = [];
      const maxAttempts = 100;

      skills.forEach((skill, index) => {
        let attempts = 0;
        let placed = false;
        
        while (!placed && attempts < maxAttempts) {
          attempts++;
          
          const top = Math.random() * (containerHeight - bubbleSize);
          const left = Math.random() * (containerWidth - bubbleSize);
          
          let overlapping = false;
          
          for (const existingPos of newPositions) {
            const dx = (existingPos.left + bubbleSize/2) - (left + bubbleSize/2);
            const dy = (existingPos.top + bubbleSize/2) - (top + bubbleSize/2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < bubbleSize + padding) {
              overlapping = true;
              break;
            }
          }
          
          if (!overlapping) {
            newPositions.push({ top, left });
            placed = true;
          }
        }
        
        if (!placed) {
          let bestPosition = { top: 0, left: 0, overlap: Infinity };
          
          const gridSize = 10;
          for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
              const top = (i / gridSize) * (containerHeight - bubbleSize);
              const left = (j / gridSize) * (containerWidth - bubbleSize);
              
              let totalOverlap = 0;
              for (const existingPos of newPositions) {
                const dx = (existingPos.left + bubbleSize/2) - (left + bubbleSize/2);
                const dy = (existingPos.top + bubbleSize/2) - (top + bubbleSize/2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                const overlap = bubbleSize + padding - distance;
                if (overlap > 0) {
                  totalOverlap += overlap;
                }
              }
              
              if (totalOverlap < bestPosition.overlap) {
                bestPosition = { top, left, overlap: totalOverlap };
              }
            }
          }
          
          newPositions.push({ top: bestPosition.top, left: bestPosition.left });
        }
      });
      
      setPositions(newPositions);
    };

    generateNonOverlappingPositions();
    
    const handleResize = () => {
      generateNonOverlappingPositions();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="skills-section" id="skills">
      <h2 className="neon-title">My Skills</h2>
      <p className="section-subtitle neon-subtitle">Technologies and tools I work with</p>
      
      <div className="skills-container neon-container" ref={containerRef}>
        {skills.map((skill, index) => {
          const pos = positions[index];
          if (!pos) return null;

          const animationDelay = Math.random() * 2 + "s";

          return (
            <div
              key={index}
              className="skill-bubble neon-bubble"
              style={{
                top: `${pos.top}px`,
                left: `${pos.left}px`,
                animationDelay,
                '--neon-color': getNeonColor(skill.level),
              }}
              data-level={skill.level.toLowerCase()}
            >
              <div className="bubble-content">
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="neon-glow"></div>
            </div>
          );
        })}
        
        {/* Background grid for cyberpunk effect */}
        <div className="cyber-grid"></div>
      </div>
    </div>
  );
};

// Helper function to assign neon colors based on skill level
const getNeonColor = (level) => {
  switch(level.toLowerCase()) {
    case 'advanced': return '#00f3ff'; // Cyan
    case 'intermediate': return '#ff00ff'; // Magenta
    case 'beginner': return '#ffb347'; // Orange
    default: return '#00f3ff';
  }
};

export default Skills;