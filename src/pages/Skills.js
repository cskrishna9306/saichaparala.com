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
import aws_logo from '../images/technology/aws-logo.jpeg'
import gcp_logo from '../images/technology/gcp-logo.png'
import apple from '../images/technology/apple.svg'
import windows from '../images/technology/windows11.svg'
import linux from '../images/technology/linux.svg'

function Skills() {
  return (
    <div className='skills'>
      <h1>Technologies</h1>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={html} alt="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <img src={css} alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <img src={javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <img src={dart} alt="Dart" />
              <span>Dart</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Backend</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={c} alt="C" />
              <span>C</span>
            </div>
            <div className="tech-item">
              <img src={cpp} alt="C++" />
              <span>C++</span>
            </div>
            <div className="tech-item">
              <img src={java} alt="Java" />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <img src={python} alt="Python" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <img src={bash} alt="Bash" />
              <span>Bash</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Frameworks & Tools</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={flutter} alt="Flutter" />
              <span>Flutter</span>
            </div>
            <div className="tech-item">
              <img src={react} alt="React" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <img src={docker} alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="tech-item">
              <img src={mysql} alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <img src={postgresql} alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <img src={postman} alt="Postman" />
              <span>Postman</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Hyperscalers</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={aws_logo} alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="tech-item">
              <img src={gcp_logo} alt="Google Cloud Platform" />
              <span>Google Cloud</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Certifications</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={aws_saa} alt="AWS SAA" />
              <span>AWS SAA</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Operating Systems</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={apple} alt="macOS" style={{background: "white", borderRadius: "10%"}} />
              <span>macOS</span>
            </div>
            <div className="tech-item">
              <img src={windows} alt="Windows" />
              <span>Windows</span>
            </div>
            <div className="tech-item">
              <img src={linux} alt="Linux" />
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;