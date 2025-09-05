import React from 'react';
import '../css/Projects.css';

function Projects() {
  // Sample project data - replace with your actual GitHub projects
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A responsive portfolio website built with React showcasing my skills, projects, and experience. Features modern UI/UX design with smooth animations and mobile-first approach.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5"],
      githubUrl: "https://github.com/cskrishna9306/saichaparala.com",
      demoUrl: "https://saichaparala.com",
      featured: true
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/cskrishna9306/ecommerce-platform",
      demoUrl: null,
      featured: false
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Integrates with multiple weather APIs.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/cskrishna9306/weather-dashboard",
      demoUrl: "https://weather-demo.saichaparala.com",
      featured: false
    },
    {
      id: 4,
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com/cskrishna9306/task-manager",
      demoUrl: null,
      featured: true
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
