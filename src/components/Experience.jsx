import { useEffect, useRef } from 'react';
import { FiBriefcase, FiTrendingUp, FiDatabase, FiBarChart2 } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section--visible');
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Work History</span>
          <h2 className="section__title">Experience</h2>
        </div>

        <div className="experience__timeline">
          <div className="experience__line"></div>
          
          <div className="experience__item">
            <div className="experience__marker">
              <FiBriefcase />
            </div>
            <div className="experience__card">
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__role">Data Analyst Intern</h3>
                  <p className="experience__company">Maitexa Technologie, Kozhikode, Kerala</p>
                </div>
                <span className="experience__date">June 2025</span>
              </div>
              <ul className="experience__tasks">
                <li className="experience__task">
                  <FiTrendingUp className="experience__task-icon" />
                  <span>Assisted in analyzing datasets to extract meaningful insights for business decision-making</span>
                </li>
                <li className="experience__task">
                  <FiDatabase className="experience__task-icon" />
                  <span>Performed data cleaning and preprocessing for model training pipelines</span>
                </li>
                <li className="experience__task">
                  <FiBarChart2 className="experience__task-icon" />
                  <span>Supported visualization tasks for reporting and decision-making using analytical tools</span>
                </li>
              </ul>
              <div className="experience__tags">
                <span className="experience__tag">Data Analysis</span>
                <span className="experience__tag">Data Cleaning</span>
                <span className="experience__tag">Visualization</span>
                <span className="experience__tag">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
