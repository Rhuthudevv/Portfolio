import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const categories = ['All', 'Data Science', 'Machine Learning', 'AI Apps'];

const projects = [
  {
    title: 'Healthcare Report Explainer',
    category: 'AI Apps',
    description: 'An AI-based system that interprets medical reports and provides simplified explanations.',
    tags: ['Python', 'NLP', 'Healthcare AI'],
    imageGradient: 'linear-gradient(135deg, #111 0%, #222 100%)',
    github: 'https://github.com/Rhuthudevv/Healthcare-Report-Explainer',
  },
  {
    title: 'AI Personalized Learning',
    category: 'Machine Learning',
    description: 'Recommendation system adapting content based on user performance patterns.',
    tags: ['Machine Learning', 'EdTech'],
    imageGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
    github: 'https://github.com/Rhuthudevv',
  },
  {
    title: 'Mental Health Tracking',
    category: 'Data Science',
    description: 'Predictive model using inputs like mood and sleep to detect early signs of issues.',
    tags: ['Scikit-learn', 'Predictive Modeling'],
    imageGradient: 'linear-gradient(135deg, #151515 0%, #252525 100%)',
    github: 'https://github.com/Rhuthudevv/Mental-Health-Tracker',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section--visible');
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="section__container">

        <div className="projects__header">
          <span className="projects__breadcrumb">HOME &gt; <span className="projects__breadcrumb-highlight">PROJECTS</span></span>
          <h2 className="projects__title">MY PROJECTS</h2>
        </div>

        <div className="projects__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeCategory === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, i) => (
            <div className="projects__card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="projects__card-image" style={{ background: project.imageGradient }}>
                {/* Placeholder for actual project images */}
                <div className="projects__card-image-placeholder">
                  {project.category}
                </div>
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map(tag => (
                    <span className="projects__card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
