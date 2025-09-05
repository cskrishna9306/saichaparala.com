import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { portraits } from './images';

// Social media links configuration
const socialLinks = {
  email: {
    url: "mailto:cskrishna9306@gmail.com",
    icon: "fa fa-envelope"
  },
  instagram: {
    url: "https://www.instagram.com/_saaiii/",
    icon: "fab fa-instagram"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/sai-chaparala-71817b206",
    icon: "fab fa-linkedin-in"
  },
  github: {
    url: "https://github.com/cskrishna9306",
    icon: "fab fa-github"
  },
  resume: {
    url: "https://sai-chaparala-resume.s3.amazonaws.com/resume.pdf",
    icon: "fa fa-file-pdf"
  }
};

function Navbar() {
  // Initialize a variable "click" that stores the current state value and its corresponding setter function "setClick" that allows us to update the "click" state variable
  const [click, setClick] = useState(false);
  // Handles the state value for the "click" variable: true -> false, false -> true
  const handleClick = () => setClick(!click);
  // Sets the state of the "click" variable to be false
  const closeMobileMenu = () => setClick(false);

  return (
      <nav className='navbar'>
          {/* TODO: Need to work on menu icon upon screen resize */}
          {/* <div>
            {click && 
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>}
          </div> */}
          {/* <Link to='/' style={{ textDecoration: 'none'}}> */}
          <div className='navbar-icon'>
            <Link to='/' style={{ textDecoration: 'none', display: "flex"}}>
              <div className='navbar-icon-container'>
                <img src={portraits.capitol} alt="icon" />
              </div>
              <text>Sai Chaparala</text>
            </Link>
          </div>

          {/* Links to different pages */}
          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          {/* <ul className='nav-menu'> */}
            
            {/* Navbar link to the Home page */}
            <Link to='/' style={{textDecoration: 'none'}} onClick={closeMobileMenu}>
              <li>
                /
              </li>
            </Link>
            {/* Navbar link to the AboutMe.js page */}
            <Link to='/aboutMe' style={{textDecoration: 'none'}} onClick={closeMobileMenu}>
              <li>
                whoami
              </li>
            </Link>
            {/* Navbar link to the Interests.js page */}
            <Link to='/interests' style={{textDecoration: 'none'}} onClick={closeMobileMenu}>
              <li>
                interests.txt
              </li>
            </Link>
            {/* Navbar link to the Skills.js page */}
            <Link to='/skills' style={{textDecoration: 'none'}} onClick={closeMobileMenu}>
              <li>
                lib
              </li>
            </Link>
            {/* Navbar link to the Projects.js page */}
            <Link to='/projects' style={{textDecoration: 'none'}} onClick={closeMobileMenu}>
              <li>
                git
              </li>
            </Link>
          </ul>

          {/* Social Handles in Navigation bar*/}
            <ul className='navbar-socials'>
              {Object.entries(socialLinks).map(([key, { url, icon }]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                </li>
              ))}
            </ul>
      </nav>
  );
}

export default Navbar;
