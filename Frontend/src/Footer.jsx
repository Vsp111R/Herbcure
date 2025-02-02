import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-bg footer-text footer-padding">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">HerbCure</h3>
            <ul className="footer-list">
              <li><Link to="herbcure/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="herbcure/TermsAndConditions" className="footer-link">Terms And Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/features" className="footer-link">Features</Link></li>
              <li><Link to="herbcure/contactus" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-icons">
              <a href="#" aria-label="Facebook" className="footer-icon"><Facebook /></a>
              <a href="#" aria-label="Twitter" className="footer-icon"><Twitter /></a>
              <a href="#" aria-label="Instagram" className="footer-icon"><Instagram /></a>
              <a href="mailto:info@expensecalc.com" aria-label="Email" className="footer-icon"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HerbCure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
