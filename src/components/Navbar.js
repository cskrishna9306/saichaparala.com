import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Initialize a variable "click" that stores the current state value and its corresponding setter function "setClick" that allows us to update the "click" state variable
  const [click, setClick] = useState(false);
  // Handles the state value for the "click" variable: true -> false, false -> true
  const handleClick = () => setClick(!click);
  // Sets the state of the "click" variable to be false
  const closeMobileMenu = () => setClick(false);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            /
          </Link> */}

          {/* TODO: Need to work on menu icon upon screen resize */}
          {/* <div>
            {click && 
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>}
          </div> */}
          
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
            {/* Navbar link to the Projects.js page */}
            <li>
              <Link to='/projects' className='nav-item' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            {/* <li>
              <Link
                to='/socials'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Socials
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
