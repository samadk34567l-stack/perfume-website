import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>MAAZ SAFDER</h3>
            <p>Exquisite oriental and contemporary fragrances crafted to leave an unforgettable impression.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#featured">Bestsellers</a></li>
              <li><a href="#collections">Collections</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#featured">Men</a></li>
              <li><a href="#featured">Women</a></li>
              <li><a href="#featured">Unisex</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-item"><MapPin size={18} /> Karachi, Pakistan</div>
            <div className="contact-item"><Phone size={18} /> +92 300 0000000</div>
            <div className="contact-item"><Mail size={18} /> info@maazsafder.com</div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Maaz Safder Fragrances. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
