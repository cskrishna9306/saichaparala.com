import React from 'react';
import '../css/Projects.css';

function Projects() {
  // Sample project data - replace with your actual GitHub projects
  const projects = [
    {
      id: 1,
      name: "saichaparala.com",
      description: "My personal portfolio website built with React and deployed on AWS Amplify. Features a CLI-inspired design with interactive components, responsive layouts, and smooth animations. Demonstrates expertise in frontend development, UI/UX design, and cloud deployment.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5", "AWS Amplify"],
      demoUrl: null,
      githubUrl: "https://github.com/cskrishna9306/saichaparala.com",
      featured: true
    },
    {
      id: 2,
      name: "AimBot",
      description: "An LLM-powered esports management platform for VCT team management. Leverages AWS Bedrock and OpenSearch to provide intelligent player analysis and strategic recommendations. Uses RAG to process esports data and offer data-driven insights for team optimization.",
      technologies: ["AWS Bedrock", "AWS OpenSearch", "AWS S3", "Python", "LLM", "RAG"],
      githubUrl: "https://github.com/cskrishna9306/AimBot",
      demoUrl: "https://devpost.com/software/aimbot?_gl=1*1kr50na*_gcl_au*MTU1MDI0NjM1Ni4xNzU1NzUxMDEw*_ga*MTkzMjYzNTAwNS4xNzQ0NzUxMjU0*_ga_0YHJK3Y10M*czE3NTcxMTY4NjkkbzE4JGcxJHQxNzU3MTE2ODg1JGo0NCRsMCRoMA..",
      featured: true
    },
    {
      id: 3,
      name: "cubic-vs-bbr",
      description: "A network performance analysis tool comparing TCP Cubic and BBR congestion control algorithms. Uses iperf3 and Python scripts for data collection and statistical analysis to evaluate throughput, latency, and fairness characteristics across different network conditions.",
      technologies: ["iperf3","Python", "TCP Cubic", "TCP BBR", "bash"],
      githubUrl: "https://github.com/cskrishna9306/cubic-vs-bbr",
      demoUrl: null,
      featured: false
    },
    {
      id: 4,
      name: "XQuery Processor",
      description: "A fully functional XQuery compiler built from scratch using ANTLR4 and Java. Implements lexical analysis, parsing, semantic analysis, and code generation for XML query processing. Supports complex XQuery expressions with schema validation and optimization.",
      technologies: ["Java", "Antlr4"],
      githubUrl: "https://github.com/cskrishna9306/XQuery-Processor",
      demoUrl: null,
      featured: true
    },
    {
      id: 5,
      name: "wiscobadminton.com",
      description: "Official website for the UW-Madison Badminton Club featuring event schedules and membership information. Built with HTML/CSS and deployed on AWS Amplify, serving as the primary communication hub for club members and demonstrating real-world web development skills.",
      technologies: ["HTML", "CSS", "AWS Amplify"],
      githubUrl: "https://github.com/cskrishna9306/wiscobadminton.com",
      demoUrl: null,
      featured: false
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>git log --oneline</h1>
        <p>Here are some of the projects I've worked on. Each project represents a learning journey and showcases different aspects of my technical skills.</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <i className="fab fa-github"></i>
                View Code
              </a>
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
