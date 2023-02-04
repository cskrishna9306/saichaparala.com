import React from 'react'
import './Introduction.css'
// import Footer from './Footer'
import image1 from '../images/Image 3.jpg'
import image2 from '../images/Image 5.jpg'

function Introduction() {
  return (
    <div className='about-me-container'>
        <h1>About Me</h1>
        <p>Hello! I’m an enthusiastic tech savvy who is inspired by the rapid growth of modern-day technologies. I’m actively looking for 
Summer 2023 SWE/SDE Internships to gain real time exposure in my career field. My key areas of interest include software 
development, database management systems, mobile app development, and AI</p>
        {/* <image  */}
        {/* <p>Hello! I’m an enthusiastic tech savvy who is inspired by the rapid growth of modern-day technologies. I’m actively looking for 
Summer 2023 SWE/SDE Internships to gain real time exposure in my career field. My key areas of interest include software 
development, database management systems, mobile app development, and AI</p> */}
    {/* <Footer /> */}
      <div className="row">
        <div className='column'>
      <img src={image1} alt='pic'/>
      <img src={image2} alt='pic'/>
      </div>
      </div>
    </div>
    // <div className='about-me-container' />

    // </div>
    // <Footer />
  )
}

export default Introduction