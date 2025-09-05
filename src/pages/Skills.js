import React from 'react';
import '../css/Skills.css'
import { technology } from '../images'

function Skills() {
  return (
    <div className='skills'>
      <h1>ls -la</h1>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.html5} alt="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <img src={technology.css3} alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <img src={technology.javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <img src={technology.dart} alt="Dart" />
              <span>Dart</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Backend</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.c} alt="C" />
              <span>C</span>
            </div>
            <div className="tech-item">
              <img src={technology.cpp} alt="C++" />
              <span>C++</span>
            </div>
            <div className="tech-item">
              <img src={technology.java} alt="Java" />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <img src={technology.python} alt="Python" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <img src={technology.bash} alt="Bash" />
              <span>Bash</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Frameworks & Tools</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.flutter} alt="Flutter" />
              <span>Flutter</span>
            </div>
            <div className="tech-item">
              <img src={technology.react} alt="React" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <img src={technology.docker} alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="tech-item">
              <img src={technology.mysql} alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="tech-item">
              <img src={technology.postgresql} alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <img src={technology.postman} alt="Postman" />
              <span>Postman</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Hyperscalers</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.aws} alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="tech-item">
              <img src={technology.gcp} alt="Google Cloud Platform" />
              <span>Google Cloud</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Certifications</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.awsSaa} alt="AWS SAA" />
              <span>AWS SAA</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Operating Systems</h2>
          <div className="technologies">
            <div className="tech-item">
              <img src={technology.apple} alt="macOS" style={{background: "white", borderRadius: "10%"}} />
              <span>macOS</span>
            </div>
            <div className="tech-item">
              <img src={technology.windows11} alt="Windows" />
              <span>Windows</span>
            </div>
            <div className="tech-item">
              <img src={technology.linux} alt="Linux" />
              <span>Linux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
