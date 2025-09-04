import React from 'react';
import '../css/AboutMe.css'
import capitol from '../images/portraits/capitol.jpg'
import { socialLinks } from '../config/socialLinks'

function AboutMe() {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <p>
        Hello! I'm a recent graduate from the <b>University of Wisconsin - Madison</b>, currently pursuing my Master's in Computer Science and Engineering at the <b>University of California - San Diego</b>. 
        I’m an enthusiastic tech savvy who is inspired by the rapid growth of modern-day technology. 
        In particular, I'm intrigued by the variety of services offered by various cloud providers with my passion lying in <b>cloud infrastructure</b>.
      </p>
      <p>
        I'm actively seeking full-time opportunities starting Summer/Fall 2026 to apply my expertise and contribute to innovative projects. 
        With a solid foundation in cloud computing, AI/ML Ops, and database management, I'm eager to leverage my skills and knowledge to drive impactful solutions in the tech industry.
      </p>
      
      <div className="resume-section">
        <a 
          href={socialLinks.resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button"
        >
          <i className="fa fa-file-pdf"></i>
          View Resume
        </a>
      </div>
      
      <img src={capitol} alt='pic' />
    </div>
  )
}

export default AboutMe;