import React from 'react';
import '../css/Skills.css'
import html from '../images/technology/html5.svg'
import css from '../images/technology/css3.svg'
import javascript from '../images/technology/javascript.svg'
import dart from '../images/technology/dart.svg'
import c from '../images/technology/c.svg'
import cpp from '../images/technology/cplusplus.svg'
import java from '../images/technology/java.svg'
import python from '../images/technology/python.svg'
import bash from '../images/technology/bash.svg'
import flutter from '../images/technology/flutter.svg'
import docker from '../images/technology/docker.svg'
import mysql from '../images/technology/mysql.svg'
import postgresql from '../images/technology/postgresql.svg'
import postman from '../images/technology/postman.svg'
import react from '../images/technology/react.svg'
import aws_saa from '../images/technology/aws-saa.png'
import apple from '../images/technology/apple.svg'
import windows from '../images/technology/windows11.svg'
import linux from '../images/technology/linux.svg'

function Skills() {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <ul>
        <li>
          <h2>Frontend</h2>
          <div className='container'>
              {/* <video src={html}></video> */}
              {/* <video playsinline autoplay loop style={{"max-height": "99%", "max-width": "99%", "min-width": "auto"}} src={html}></video> */}
              <img src={html}></img>
              <img src={css}></img>
              <img src={javascript}></img>
              <img src={dart}></img>
          </div>
          {/* <div className='container'>
            <img src={dart}></img>
          </div> */}
        </li>
        <li>
          <h2>Backend</h2>
          <div className='container'>
            <img src={c}></img>
            <img src={cpp}></img>
            <img src={java}></img>
          </div>
          <div className='container'>
          <img src={python}></img>
          <img src={bash}></img>
          </div>
        </li>
        <li>
          <h2>Frameworks & Tools</h2>
          <div className='container'>
            <img src={flutter}></img>
            <img src={react}></img>
            <img src={docker}></img>
          </div>
          <div className='container'>
            <img src={mysql}></img>
            <img src={postgresql}></img>
            <img src={postman}></img>
          </div>
        </li>
        <li>
          <h2>Certifications</h2>
          <div className='container'>
            <img src={aws_saa}></img>
          </div>
        </li>
        <li>
          <h2>Operating Systems</h2>
          <div className='container'>
            <img src={apple} style={{background: "white", borderRadius: "10%"}}></img>
            <img src={windows}></img>
            <img src={linux}></img>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;