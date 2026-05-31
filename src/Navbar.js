import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { portraits } from './images';

// Social media links configuration
const socialLinks = {
  email: {
    url: "mailto:cskrishna9306@gmail.com",
    icon: "fa fa-envelope",
    tooltip: "Send an email to me"
  },
  instagram: {
    url: "https://www.instagram.com/_saaiii/",
    icon: "fab fa-instagram",
    tooltip: "Follow me on Instagram"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/sai-chaparala-71817b206",
    icon: "fab fa-linkedin-in",
    tooltip: "Connect with me on LinkedIn"
  },
  github: {
    url: "https://github.com/cskrishna9306",
    icon: "fab fa-github",
    tooltip: "Check out my GitHub"
  },
  resume: {
    url: "https://sai-chaparala-resume.s3.amazonaws.com/resume.pdf",
    icon: "fa fa-file-pdf",
    tooltip: "View my resume"
  }
};

const navLinks = [
  { path: "/", label: "/", tooltip: "Home" },
  { path: "/aboutMe", label: "whoami", tooltip: "About me" },
  { path: "/interests", label: "interests.txt", tooltip: "Interests" },
  { path: "/skills", label: "lib", tooltip: "Skills" },
  { path: "/projects", label: "git", tooltip: "Projects" }
];

function Navbar() {
  // Initialize a variable "click" that stores the current state value and its corresponding setter function "setClick" that allows us to update the "click" state variable
  const [click, setClick] = useState(false);
  
  // Handles the state value for the "click" variable: true -> false, false -> true
  // const handleClick = () => setClick(!click);
  
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
            {navLinks.map(({ path, label, tooltip }) => (
              <Link
                key={path}
                to={path}
                className='tooltip-target'
                data-tooltip={tooltip}
                style={{ textDecoration: 'none' }}
                onClick={closeMobileMenu}
                aria-label={tooltip}
              >
                <li>
                  {label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Social Handles in Navigation bar*/}
            <ul className='navbar-socials'>
              {Object.entries(socialLinks).map(([key, { url, icon, tooltip }]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='tooltip-target'
                    data-tooltip={tooltip}
                    aria-label={tooltip}
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              ))}
            </ul>
      </nav>
  );
}

export default Navbar;
