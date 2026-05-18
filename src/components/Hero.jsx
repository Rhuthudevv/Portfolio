import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero--visible');
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Available for Internships
        </div>

        <h1 className="hero__title">
          <span className="hero__greeting">Hello, I'm</span>
          <span className="hero__name">Rhuthudev M K</span>
          <span className="hero__tagline">
            <span className="hero__tagline-accent">AI & Data Science</span> Enthusiast
          </span>
        </h1>

        <p className="hero__description">
          Driven BTech student specializing in Artificial Intelligence and Data Science 
          with strong foundations in machine learning, deep learning, and data analytics. 
          Passionate about solving real-world problems using data-driven approaches.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/Rhuthudevv" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub" id="hero-github">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/rhuthudev-m-k-5753a1377" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn" id="hero-linkedin">
            <FiLinkedin />
          </a>
          <a href="mailto:rhuthudev171f@gmail.com" className="hero__social-link" aria-label="Email" id="hero-email">
            <FiMail />
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <span>Scroll Down</span>
        <FiChevronDown className="hero__scroll-icon" />
      </a>
    </section>
  );
}
