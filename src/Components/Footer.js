import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Bassi <span className="ft-sign">&</span> Dhesi Services
            </p>
            <p className="ft-description">
              Professional cleaning and construction services tailored for your
              residential and commercial needs. From post-construction cleanups
              to full-scale renovations, we deliver quality, safety, and
              satisfaction.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Our Services</p>
          <ul className="ft-list-items">
            <li><a href="#services">Post-Construction Cleaning</a></li>
            <li><a href="#services">General Contracting</a></li>
            <li><a href="#services">Interior Renovation</a></li>
            <li><a href="#services">Commercial Cleaning</a></li>
            <li><a href="#services">Move-In/Move-Out Cleaning</a></li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li><Link to={"/legal"}>About Us</Link></li>
            <li><Link to={"/legal"}>Privacy Policy</Link></li>
            <li><Link to={"/legal"}>Terms of Service</Link></li>
            <li><Link to={"/legal"}>Service Guarantee</Link></li>
            <li><Link to={"/legal"}>FAQs</Link></li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Contact Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:info@bhassidhesiservices.com">
                info@bhassidhesiservices.com
              </a>
            </li>
            <li><a href="tel:+16043334455"></a></li>
            <li><a href="tel:+16043336677"></a></li>
            <li>184 Falshire Close NE, Calgary, Alberta T3J 2Z9</li>
          </ul>

          {/* Embedded Google Map */}
          <div className="ft-map-container" style={{ marginTop: "1rem" }}>
            <iframe
              title="Bhassi & Dhesi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.094113372165!2d-113.93621562342472!3d51.09605604380174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165a7e05b2365%3A0x9d91be77e3939e3f!2s184%20Falshire%20Close%20NE%2C%20Calgary%2C%20AB%20T3J%202Z9%2C%20Canada!5e0!3m2!1sen!2sus!4v1715144219153!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© {new Date().getFullYear()} Bhassi & Dhesi Services. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a href="https://linkedin.com/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/" title="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
