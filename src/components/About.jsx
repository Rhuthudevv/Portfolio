import { useEffect, useRef } from 'react';
import { FiUser, FiMapPin, FiCalendar } from 'react-icons/fi';
import './About.css';

export default function About() {
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

  const highlights = [
    { icon: <FiUser />, label: 'Role', value: 'AI & Data Science Student' },
    { icon: <FiMapPin />, label: 'Location', value: 'Kozhikode, Kerala, India' },
    { icon: <FiCalendar />, label: 'Experience', value: 'Data Analyst Intern' },
  ];

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Get to Know Me</span>
          <h2 className="section__title">About Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p className="about__paragraph">
              I'm a driven BTech student specializing in <strong>Artificial Intelligence and Data Science</strong> at 
              Dhanalakshmi Srinivasan Engineering College, Tiruchirappalli. With a CGPA of <strong>8.0</strong>, 
              I'm passionate about building practical AI solutions that make a real difference.
            </p>
            <p className="about__paragraph">
              My expertise spans <strong>machine learning</strong>, <strong>deep learning</strong>, and <strong>data analytics</strong>. 
              I've built projects ranging from healthcare analytics systems to personalized learning platforms 
              and mental health tracking models — all driven by my desire to solve real-world problems.
            </p>
            <p className="about__paragraph">
              I bring a combination of strong problem-solving skills, critical thinking, and adaptability 
              to every project. Currently seeking internship opportunities to apply and expand my technical expertise.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div className="about__highlight-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <span className="about__highlight-label">{item.label}</span>
                  <span className="about__highlight-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
