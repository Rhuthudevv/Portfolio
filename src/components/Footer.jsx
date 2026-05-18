import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-name">Rhuthudev</span>
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>

          <div className="footer__socials">
            <a href="https://github.com/Rhuthudevv" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rhuthudev-m-k-5753a1377" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:rhuthudev171f@gmail.com" className="footer__social" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Rhuthudev M K. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
