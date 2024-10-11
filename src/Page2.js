import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './page2.css';
import screenshot1 from './Screenshot 2024-10-07 173804.png';
import screenshot2 from './Screenshot 2024-10-07 173945.png';
import backgroundImage from './pexels-olly-3782817.jpg';

const Page2 = () => {
  const navigate = useNavigate();

  const handleImplementClick = () => {
    navigate('/Page4');
  };

  const handleViewClick = () => {
    navigate('/Page3');
  };

  useEffect(() => {
    const box = document.querySelector('.solar-info-box');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(box);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page2-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Solar Panels</b></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  aria-current="page" 
                  to="/" 
                  style={{ color: 'white' }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/about" 
                  style={{ color: 'white' }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Background Image with no padding */}
      <div className="background-image">
        {/* Box with the statement */}
        <div className="statement-box">
          <p>What would you like to do?</p>
        </div>
      </div>

      {/* New Solar Info Box */}
      <div className="solar-info-box">
        <p>Welcome to our Solar System Solution Platform! Whether you're just curious about how solar systems are implemented in different house sizes or you're ready to take the leap into solar energy, we've got you covered. Explore how solar can be applied to various marla-sized homes, or enter your specific details like budget, house size, and electricity needs to receive a personalized solution. Our system will recommend the optimal number of solar panels, batteries, wires, and frames, offering both high-quality and standard options to suit your requirements. Let us help you take the first step towards an energy-efficient future!</p>
      </div>

      {/* Screenshot Divs */}
      <div className="screenshot-container">
        <div className="screenshot">
          <img src={screenshot1} alt="Screenshot 1" className="screenshot-image" />
        </div>
        <div className="screenshot">
          <img src={screenshot2} alt="Screenshot 2" className="screenshot-image" />
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="btn-implement" onClick={handleImplementClick}>Want to Implement</button>
        <button className="btn-view" onClick={handleViewClick}>Just Viewing</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h4>Contact Information</h4>
        <div className="footer-columns">
          <div className="footer-content">
            <h5>Kashan Saeed</h5>
            <p>Email: kashanmiankhel@gmail.com</p>
            <p>Phone: +92 333 1530855</p>
          </div>
          <div className="footer-content">
            <h5>Khadeen Faiz</h5>
            <p>Email: khadeenfaiz@gmail.com</p>
            <p>Phone: +92 318 9177303</p>
          </div>
          <div className="footer-content">
            <h5>Ikrama Shah</h5>
            <p>Email: ikramashah@gmail.com</p>
            <p>Phone: +92 315 5529798</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Solar Panels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page2;