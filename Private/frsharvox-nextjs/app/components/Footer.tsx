'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <Image 
                src="/frsharvox-logo.png" 
                className="footer-logo-img" 
                alt="FRSHAR Vox"
                width={60}
                height={60}
              />
            </div>
            <p>Revolutionizing communication with offline-first technology and retro design aesthetics.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('about')}><i className="fas fa-chevron-right"></i> About</a></li>
              <li><a onClick={() => scrollToSection('event')}><i className="fas fa-chevron-right"></i> Event</a></li>
              <li><a onClick={() => scrollToSection('features')}><i className="fas fa-chevron-right"></i> Features</a></li>
              <li><a onClick={() => scrollToSection('launch')}><i className="fas fa-chevron-right"></i> Register</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> Marina, Dubai, UAE</a></li>
              <li><a href="mailto:info@frsharvox.com"><i className="fas fa-envelope"></i> info@frsharvox.com</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 FRSHAR Vox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

