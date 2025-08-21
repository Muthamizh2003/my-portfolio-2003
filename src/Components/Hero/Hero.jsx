import React, { useState, useEffect } from 'react';
import './Hero.css';
import prof2 from '../../assets/prof2.png';
import prof1 from '../../assets/prof1.jpg';
import cvFile from '../../assets/MuthamizhKumaranResume.pdf';
import { Link } from 'react-scroll';

const Hero = () => {
  const [menu, setMenu] = useState("contact");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["A Software Developer", "A Competitive Programmer"];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div id="home" className='hero'>
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-front">
            <img src={prof2} alt="Front" />
          </div>
          <div className="flip-card-back">
            <img src={prof1} alt="Back" />
          </div>
        </div>
      </div>

      <h1><span>I'm Muthamizh Kumaran</span></h1>
      <h1 className="typing-line">{text}<span className="cursor">|</span></h1>

      <p>I love to code and do projects!!!</p>

      <div className="hero-action">
        <div className='hero-connect'>
          <Link 
            className='anchor-link' 
            to='contact' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => setMenu("contact")}
          >
            Contact me
          </Link>
        </div>
        <div className="hero-resume">
          <a href={cvFile} >
            My CV
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;

