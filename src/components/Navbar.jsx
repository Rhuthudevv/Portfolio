import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        
        {/* Left Logo */}
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="navbar__logo-text" style={{ marginLeft: '10px', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>RHUTHUDEV</span>
        </a>

        {/* Center Pill Nav */}
        <div className="navbar__center-pill">
          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                  {activeSection === href.slice(1) && <span className="navbar__active-dot"></span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Action Button */}
        <a href="#contact" className="navbar__cta" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
          Start a project
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="nav-toggle"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
}
