import React from 'react';

const projects = [
  {
    title: "E-commerce Site",
    description: "Laravel + MySQL арқылы жасалған интернет-дүкен.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    liveLink: "https://your-ecommerce-site.com",
    githubLink: "https://github.com/atyng/ecommerce"
  },
  {
    title: "Blog Platform",
    description: "Қолданушы логин/CRUD жүйесімен Laravel блог жүйесі.",
    technologies: ["Laravel", "Blade", "Railway"],
    liveLink: "",
    githubLink: "https://github.com/atyng/blog"
  },
  {
    title: "Simple JS Calculator",
    description: "Жай калькулятор. HTML/CSS/JS негізінде.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://atyng-calc.vercel.app",
    githubLink: "https://github.com/atyng/calc"
  },
  {
    title: "Cat Order Website",
    description: "Laravel арқылы жасалған мысықтарға тапсырыс беру платформасы.",
    technologies: ["Laravel", "MySQL", "Blade"],
    liveLink: "",
    githubLink: "https://github.com/atyng/cat-order"
  },
  {
    title: "Dua Collection Website",
    description: "Пайдаланушыға әртүрлі дұғаларды оқуға мүмкіндік беретін сайт.",
    technologies: ["Laravel", "Bootstrap", "PHP"],
    liveLink: "",
    githubLink: "https://github.com/atyng/duas"
  }
];

function Projects() {
  return (
    <div className="py-5 px-3" style={{ backgroundColor: '#f9fafb' }}>
      <h3 className="text-center fw-bold mb-5" style={{ color: '#1a202c' }}>
        💼 My Projects
      </h3>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow-sm h-100 rounded-4 p-3"
              style={{
                backgroundColor: '#ffffff',
                transition: '0.3s ease',
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold" style={{ color: '#1a202c' }}>
                    {project.title}
                  </h5>
                  <p className="text-muted">{project.description}</p>
                  <div className="mb-3">
                    <span
                      className="badge"
                      style={{
                        backgroundColor: '#e0f2fe',
                        color: '#0284c7',
                        padding: '6px 10px',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                      }}
                    >
                      {project.technologies.join(', ')}
                    </span>
                  </div>
                </div>
                <div>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="btn btn-sm me-2"
                      style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
