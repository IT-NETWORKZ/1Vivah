import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe, Share2, HelpCircle, ShieldCheck } from 'lucide-react';
import './PFooter.css';

const PFooter = () => {
  return (
    <footer className="vivah-footer">
      <div className="vivah-footer-container">
        
        {/* 4-Column Links Section */}
        <div className="vivah-footer-grid">
          
          {/* Column 1: Need help? */}
          <div className="vivah-footer-col">
            <h3>
              <HelpCircle size={16} className="col-heading-icon" /> Need help?
            </h3>
            <ul>
              <li><Link to="/login">Member Login</Link></li>
              <li><Link to="/register">Sign up</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="vivah-footer-col">
            <h3>
              <Globe size={16} className="col-heading-icon" /> Company
            </h3>
            <ul>
              <li>
                <Link to="/about">
                  About Us <Phone size={13} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                </Link>
              </li>
              <li><Link to="/feedback">Feedback & Suggestions</Link></li>
              <li><Link to="/advertise">Advertise with us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Privacy & you */}
          <div className="vivah-footer-col">
            <h3>
              <ShieldCheck size={16} className="col-heading-icon" /> Privacy & you
            </h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/fraud-alerts">Fraud Alerts</Link></li>
              <li><Link to="/terms">Terms of use</Link></li>
              <li><Link to="/third-party-terms">Third party terms of use</Link></li>
            </ul>
          </div>

          {/* Column 4: Vendors */}
          <div className="vivah-footer-col">
            <h3>
              <Share2 size={16} className="col-heading-icon" /> Vendors
            </h3>
            <ul>
              <li><Link to="/vendors/event-management">Event Management</Link></li>
              <li><Link to="/vendors/catering">Catering and Decoration</Link></li>
              <li><Link to="/vendors/fireworks">Fireworks Dealers</Link></li>
              <li><Link to="/vendors/florist">Florist and Flowers +</Link></li>
            </ul>
          </div>

        </div>

        {/* Social Media SVG Icons Bar */}
        <div className="vivah-footer-socials">
          {/* Facebook */}
          <a href="#facebook" aria-label="Facebook" className="social-icon fb">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Twitter / X */}
          <a href="#twitter" aria-label="Twitter" className="social-icon tw">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#instagram" aria-label="Instagram" className="social-icon ig">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Google Plus / Google */}
          <a href="#google" aria-label="Google" className="social-icon gp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.6 3.6 1.8 7.4l3.7 2.9C6.4 7.3 9 5 12 5zm6.5 7c0-.4 0-.8-.1-1.2H12v2.3h3.6c-.2 1-.8 1.9-1.7 2.5l2.7 2.1c1.6-1.5 2.7-3.7 2.7-5.7zM5.5 10.3H1.8C1.3 11.5 1 12.8 1 14.2s.3 2.7.8 3.9l3.7-2.9c-.2-.6-.3-1.3-.3-2 0-.7.1-1.4.3-2.9zm6.5 8.7c-3 0-5.6-2.3-6.5-5.3L1.8 17c1.8 3.8 5.6 6.4 10.2 6.4 2.8 0 5.3-1 7.2-2.7l-2.7-2.1c-1 .7-2.3 1.2-4.5 1.2z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="#youtube" aria-label="YouTube" className="social-icon yt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default PFooter;