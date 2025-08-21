import React, { useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    if (isMenuOpen) {
      menuRef.current.style.right = "-350px";
    } else {
      menuRef.current.style.right = "0";
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div class="circle-wrapper">
    <h1 class="animated-text">MK</h1>
    <div class="circle"></div>
</div>


      {/* Toggle Hamburger Menu Icon */}
      {!isMenuOpen ? (
        <img src={menu_open} onClick={toggleMenu} alt="Open Menu" className='nav-mob-open' />
      ) : (
        <img src={menu_close} onClick={toggleMenu} alt="Close Menu" className="nav-mob-close" />
      )}

      {/* Navigation Menu */}
      <ul ref={menuRef} className='nav-menu'>
        <li className={menu === "home" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='home' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("home"); toggleMenu(); }}
          >
            Home
          </Link>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='about' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("about"); toggleMenu(); }}
          >
            About
          </Link>
        </li>

        <li className={menu === "skills" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='skills' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("skills"); toggleMenu(); }}
          >
            Skills
          </Link>
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='services' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("services"); toggleMenu(); }}
          >
            Services
          </Link>
        </li>

        <li className={menu === "internships" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='internships' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("internships"); toggleMenu(); }}
          >
            Internship
          </Link>
        </li>

        <li className={menu === "portfolio" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='work' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("portfolio"); toggleMenu(); }}
          >
            Projects
          </Link>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <Link 
            className='anchor-link' 
            to='contact' 
            smooth={true} 
            offset={-50} 
            duration={500}
            onClick={() => { setMenu("contact"); toggleMenu(); }}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Join button */}
      <div className="nav-connect">
        <Link 
          className='anchor-link' 
          to='contact' 
          smooth={true} 
          offset={-50} 
          duration={500}
          onClick={() => setMenu("contact")}
        >
          Join me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
