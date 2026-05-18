import { useEffect, useRef } from 'react';
import { FiAward, FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';
import './Education.css';

export default function Education() {
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
    <section className="education section" id="education" ref={ref}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Academic Background</span>
          <h2 className="section__title">Education</h2>
        </div>

        <div className="education__card">
          <div className="education__icon-wrap">
            <FiBook />
          </div>

          <div className="education__content">
            <div className="education__top">
              <div>
                <h3 className="education__degree">BTech in Artificial Intelligence and Data Science</h3>
                <div className="education__details">
                  <span className="education__detail">
                    <FiMapPin className="education__detail-icon" />
                    Dhanalakshmi Srinivasan Engineering College, Tiruchirappalli, Tamil Nadu
                  </span>
                  <span className="education__detail">
                    <FiCalendar className="education__detail-icon" />
                    August 2023 – Present
                  </span>
                </div>
              </div>
              <div className="education__cgpa">
                <div className="education__cgpa-ring">
                  <svg viewBox="0 0 100 100" className="education__cgpa-svg">
                    <circle cx="50" cy="50" r="42" className="education__cgpa-bg" />
                    <circle cx="50" cy="50" r="42" className="education__cgpa-fill" strokeDasharray="264" strokeDashoffset="31" />
                  </svg>
                  <div className="education__cgpa-text">
                    <span className="education__cgpa-value">8.0</span>
                    <span className="education__cgpa-label">CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education__languages">
              <h4 className="education__lang-title">Languages</h4>
              <div className="education__lang-list">
                <span className="education__lang">
                  English <span className="education__lang-badge">Expert</span>
                </span>
                <span className="education__lang">Tamil</span>
                <span className="education__lang">Malayalam</span>
                <span className="education__lang">Hindi</span>
              </div>
            </div>

            <div className="education__hobbies">
              <h4 className="education__lang-title">Interests</h4>
              <div className="education__lang-list">
                <span className="education__hobby">📈 Digital Trading</span>
                <span className="education__hobby">✈️ Travelling</span>
                <span className="education__hobby">📚 Reading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
