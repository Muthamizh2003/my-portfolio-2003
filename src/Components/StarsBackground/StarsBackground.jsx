import React, { useEffect, useRef } from 'react';
import './StarsBackground.css';

const StarsBackground = ({ starDensity = 0.0003, shootingStarInterval = 500 }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const createStars = () => {
      const container = containerRef.current;
      if (!container) return;
      
      // Clear previous stars
      container.innerHTML = '';
      
      // Calculate number of stars based on screen size and density
      const area = window.innerWidth * window.innerHeight;
      const numStars = Math.floor(area * starDensity);
      
      // Create stars for each layer (far, mid, close)
      createStarLayer(container, numStars * 0.5, 'far');
      createStarLayer(container, numStars * 0.35, 'mid');
      createStarLayer(container, numStars * 0.15, 'close');
    };
    
    const createStarLayer = (container, count, layer) => {
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = `star ${layer}-star`;
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size based on layer
        let size;
        if (layer === 'far') size = 1;
        else if (layer === 'mid') size = 1 + Math.random() * 1;
        else size = 2 + Math.random() * 1;
        
        // Random opacity for natural look
        const opacity = 0.5 + Math.random() * 0.5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = `${opacity}`;
        
        // Random animation delay for twinkling
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };
    
    // Create shooting stars at intervals
    let shootingStarIntervalId;
    const createShootingStar = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Random starting position (from top)
      const startX = Math.random() * window.innerWidth;
      
      // Random angle between 15-75 degrees
      const angle = 15 + Math.random() * 60;
      const angleRad = angle * (Math.PI / 180);
      
      // Calculate trajectory
      const length = window.innerHeight * 1.5 / Math.sin(angleRad);
      
      shootingStar.style.left = `${startX}px`;
      shootingStar.style.top = '-10px';
      shootingStar.style.transform = `rotate(${angle}deg)`;
      
      container.appendChild(shootingStar);
      
      // Remove after animation completes
      setTimeout(() => {
        if (shootingStar.parentNode === container) {
          container.removeChild(shootingStar);
        }
      }, 3000);
    };
    
    const startShootingStars = () => {
      // Initial delay
      setTimeout(() => {
        createShootingStar();
        shootingStarIntervalId = setInterval(createShootingStar, shootingStarInterval);
      }, Math.random() * shootingStarInterval);
    };
    
    // Initialize stars
    createStars();
    startShootingStars();
    
    // Handle window resize
    const handleResize = () => {
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (shootingStarIntervalId) {
        clearInterval(shootingStarIntervalId);
      }
    };
  }, [starDensity, shootingStarInterval]);
  
  return (
    <div 
      ref={containerRef}
      className="stars-background"
      aria-hidden="true"
    />
  );
};

export default StarsBackground;