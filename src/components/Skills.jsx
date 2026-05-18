import { useEffect, useRef } from 'react';
import { SiPython, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiGit } from 'react-icons/si';
import { FiBarChart2, FiEye, FiDatabase, FiTrendingUp, FiZap, FiLayers, FiTarget, FiShield, FiCheckCircle } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import './Skills.css';

const technicalSkills = [
  { name: 'Python', icon: <SiPython />, level: 90, color: '#3776ab' },
  { name: 'Machine Learning', icon: <FiZap />, level: 85, color: '#6c63ff' },
  { name: 'Deep Learning', icon: <FiLayers />, level: 80, color: '#a855f7' },
  { name: 'Data Analysis', icon: <FiBarChart2 />, level: 88, color: '#00d4aa' },
  { name: 'Data Visualization', icon: <FiEye />, level: 85, color: '#ff6b9d' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85, color: '#f89939' },
  { name: 'Pandas', icon: <SiPandas />, level: 88, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy />, level: 86, color: '#4dabcf' },
  { name: 'Jupyter Notebook', icon: <SiJupyter />, level: 90, color: '#f37626' },
  { name: 'Git', icon: <SiGit />, level: 80, color: '#f05032' },
];

const softSkills = [
  { name: 'Problem-Solving', icon: <FiTarget />, level: 'Expert' },
  { name: 'Critical Thinking', icon: <FaBrain />, level: 'Expert' },
  { name: 'Adaptability', icon: <FiTrendingUp />, level: 'Expert' },
  { name: 'Work Ethic', icon: <FiShield />, level: 'Expert' },
  { name: 'Attention to Detail', icon: <FiCheckCircle />, level: 'Expert' },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('section--visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">My Expertise</span>
          <h2 className="section__title">Skills & Technologies</h2>
        </div>

        <div className="skills__grid">
          <div className="skills__column">
            <h3 className="skills__column-title">
              <span className="skills__column-dot skills__column-dot--tech"></span>
              Technical Skills
            </h3>
            <div className="skills__tech-grid">
              {technicalSkills.map((skill, i) => (
                <div className="skills__tech-card" key={i} style={{ '--skill-color': skill.color, animationDelay: `${i * 0.05}s` }}>
                  <div className="skills__tech-icon">{skill.icon}</div>
                  <span className="skills__tech-name">{skill.name}</span>
                  <div className="skills__tech-bar">
                    <div className="skills__tech-fill" style={{ width: `${skill.level}%`, background: skill.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__column">
            <h3 className="skills__column-title">
              <span className="skills__column-dot skills__column-dot--soft"></span>
              Soft Skills
            </h3>
            <div className="skills__soft-grid">
              {softSkills.map((skill, i) => (
                <div className="skills__soft-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="skills__soft-icon">{skill.icon}</div>
                  <div className="skills__soft-info">
                    <span className="skills__soft-name">{skill.name}</span>
                    <span className="skills__soft-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
