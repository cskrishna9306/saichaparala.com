import React from 'react';
import '../css/AboutMe.css'
import capitol from '../images/capitol.jpeg'

function AboutMe() {
  return (
    <div className='about-me'>
        <h1>About Me</h1>
        <p>Hello! I'm a recent graduate from the University of Wisconsin - Madison, currently pursuing my Master's in Computer Science and Engineering at the University of California - San Diego. 
          I’m an enthusiastic tech savvy who is inspired by the rapid growth of modern-day technology. 
          In particular, I'm intrigued by the variety of services offered by various cloud providers with my passion lying in cloud infrastructure</p>
        <p>I'm actively seeking internships in this field for Summer 2025 to gain hands-on experience and contribute to cutting-edge projects. 
          With a solid foundation in software development, database management, and cloud architecture, I'm eager to leverage my skills and knowledge to drive impactful solutions in the tech industry.</p>
        {/* <div className="row">
          <div className='column'>
            <img src={image1} alt='pic'/>
            <img src={image2} alt='pic'/>
          </div> */}
          <img src={capitol} alt='pic' />
        {/* </div> */}
    </div>
  )
}

export default AboutMe;