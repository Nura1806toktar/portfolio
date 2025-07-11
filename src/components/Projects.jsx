import React from 'react';

function Projects({ language }) {
const translations = {
kk: {
title: "💼 Менің жобаларым",
projects: [
{
title: "🛒 Продажа — алғашқы сайтым",
description: "Бұл менің алғашқы статикалық сайтым. Тек HTML, CSS арқылы жасалған. GitHub-та жарияланған.",
technologies: ["HTML", "CSS"],
liveLink: "",
githubLink: "https://github.com/atyng/first-html-site"
},
{
title: "🐱 Cat Order Website",
description: "Мысықтарға арналған тапсырыс беру платформасы. Laravel, Blade, CSS және JavaScript қолданылды. GitHub-та жарияланған.",
technologies: ["Laravel", "Blade", "CSS", "JavaScript"],
liveLink: "",
githubLink: "https://github.com/atyng/cat-order"
},
{
title: "🛍 E-commerce Site (интернет-дүкен)",
description: "Laravel + MySQL арқылы жасалған интернет-дүкен. Болашақта толықтай Live нұсқасын іске асырамын.",
technologies: ["Laravel", "MySQL", "Bootstrap"],
liveLink: "",
githubLink: "https://github.com/atyng/ecommerce"
},
{
title: "📿 Dua Collection Website",
description: "Таңғы және кешкі дұғаларды оқуға мүмкіндік беретін сайт. Laravel, Tailwind және Bootstrap қолданылды.",
technologies: ["Laravel", "Tailwind", "Bootstrap"],
liveLink: "https://duas.vercel.app",
githubLink: "https://github.com/atyng/duas"
},
{
title: "🧮 Simple JS Calculator",
description: "Жай калькулятор. HTML, CSS және JavaScript негізінде жасалды.",
technologies: ["HTML", "CSS", "JavaScript"],
liveLink: "https://atyng-calc.vercel.app",
githubLink: "https://github.com/atyng/calc"
}
]
},
en: {
title: "💼 My Projects",
projects: [
{
title: "🛒 Sales — my first website",
description: "My first static site using only HTML and CSS. Published on GitHub.",
technologies: ["HTML", "CSS"],
liveLink: "",
githubLink: "https://github.com/atyng/first-html-site"
},
{
title: "🐱 Cat Order Website",
description: "Platform for ordering cats built with Laravel, Blade, CSS and JavaScript. Available on GitHub.",
technologies: ["Laravel", "Blade", "CSS", "JavaScript"],
liveLink: "",
githubLink: "https://github.com/atyng/cat-order"
},
{
title: "🛍 E-commerce Site",
description: "An online store built with Laravel + MySQL. I plan to launch it live in the future.",
technologies: ["Laravel", "MySQL", "Bootstrap"],
liveLink: "",
githubLink: "https://github.com/atyng/ecommerce"
},
{
title: "📿 Dua Collection Website",
description: "A site for reading morning and evening duas. Built with Laravel, Tailwind and Bootstrap.",
technologies: ["Laravel", "Tailwind", "Bootstrap"],
liveLink: "https://duas.vercel.app",
githubLink: "https://github.com/atyng/duas"
},
{
title: "🧮 Simple JS Calculator",
description: "A simple calculator built with HTML, CSS and JavaScript.",
technologies: ["HTML", "CSS", "JavaScript"],
liveLink: "https://atyng-calc.vercel.app",
githubLink: "https://github.com/atyng/calc"
}
]
}
};

const t = translations[language];

return (
<div className="py-5 px-3" style={{ backgroundColor: '#f9fafb' }}>
<h3 className="text-center fw-bold mb-5" style={{ color: '#1a202c' }}>
{t.title}
</h3>
<div className="row g-4">
{t.projects.map((project, index) => (
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
<a href={project.githubLink} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer" >
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