import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import capitol from './images/capitol.jpg'

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
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className='navbar-icon'>
              <img src={capitol} alt="icon" />
              <text>Sai Chaparala</text>
            </div>
          </Link>
          {/* Links to different pages */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <ul className='nav-menu'> */}
            
            {/* Navbar link to the Home page */}
            <li>
              <Link to='/' className='nav-item' onClick={closeMobileMenu}>
                <i className="navbar-logo">
                /
                </i>
              </Link>
            </li>
            {/* Navbar link to the AboutMe.js page */}
            <li>
              <Link to='/aboutMe' className='nav-item' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            {/* Navbar link to the Interests.js page */}
            <li>
              <Link to='/interests' className='nav-item' onClick={closeMobileMenu}>
                Interests
              </Link>
            </li>
            {/* Navbar link to the Music.js page */}
            <li>
              <Link to='/music' className='nav-item' onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            {/* Navbar link to the Skills.js page */}
            <li>
              <Link to='/skills' className='nav-item' onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            {/* Navbar link to the Projects.js page */}
            <li>
              <Link to='/projects' className='nav-item' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>
          {/* Social Handles in Navigation bar*/}
          <div className='nav-socials'>
            <ul>
              <li>
                <a href="mailto:cskrishna9306@gmail.com"><i class="fa fa-envelope"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/_saaiii/"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sai-chaparala-71817b206"><i class="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="https://github.com/cskrishna9306"><i class="fab fa-github"></i></a>
              </li>
            </ul>
          </div>
      </nav>
  );
}

export default Navbar;
