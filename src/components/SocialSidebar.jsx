import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import './SocialSidebar.css';

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-sidebar__link" aria-label="Instagram">
        <FiInstagram />
      </a>
      <a href="https://www.linkedin.com/in/rhuthudev-m-k-5753a1377" target="_blank" rel="noopener noreferrer" className="social-sidebar__link" aria-label="LinkedIn">
        <FiLinkedin />
      </a>
      <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-sidebar__link" aria-label="Behance">
        <SiBehance />
      </a>
    </div>
  );
}
