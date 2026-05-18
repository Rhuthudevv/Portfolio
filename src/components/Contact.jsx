import { useEffect, useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rhuthudev171f@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'rhuthudev171f@gmail.com', href: 'mailto:rhuthudev171f@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 9497693587', href: 'tel:+919497693587' },
    { icon: <FiMapPin />, label: 'Location', value: 'Kozhikode, Kerala, India', href: null },
    { icon: <FiGithub />, label: 'GitHub', value: 'github.com/Rhuthudevv', href: 'https://github.com/Rhuthudevv' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Rhuthudev M K', href: 'https://www.linkedin.com/in/rhuthudev-m-k-5753a1377' },
  ];

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Let's Connect</span>
          <h2 className="section__title">Get in Touch</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              I'm always open to discussing new opportunities, internships, or interesting AI projects. 
              Feel free to reach out!
            </p>

            <div className="contact__cards">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href || '#'}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__card"
                  id={`contact-${item.label.toLowerCase()}`}
                >
                  <div className="contact__card-icon">{item.icon}</div>
                  <div>
                    <span className="contact__card-label">{item.label}</span>
                    <span className="contact__card-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__form-label">Name</label>
              <input
                type="text"
                id="contact-name"
                className="contact__form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__form-label">Email</label>
              <input
                type="email"
                id="contact-email"
                className="contact__form-input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">Message</label>
              <textarea
                id="contact-message"
                className="contact__form-input contact__form-textarea"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="contact__form-btn" id="contact-submit">
              {submitted ? '✓ Opening Mail Client' : <><FiSend /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
