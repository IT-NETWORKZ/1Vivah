import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import './Navbar.css';

// Import your logo from the assets folder (adjust the path to match where your logo is stored)
import logoImage from '../../../assets/img/1Vivah_logo.jpg'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`vivah-navbar-wrapper ${scrolled ? 'vivah-scrolled' : ''}`}>
      <div className="vivah-nav-container">
        
        {/* Brand Logo from Assets */}
        <a href="#home" className="vivah-brand">
          <img 
            src={logoImage} 
            alt="1Vivah Elite Matrimony" 
            className="vivah-logo-img" 
          />
        </a>

        {/* Navigation Links */}
        <nav className={`vivah-nav-links ${mobileMenuOpen ? 'vivah-mobile-open' : ''}`}>
          {/* <a href="#home" className="vivah-link active" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#profiles" className="vivah-link" onClick={() => setMobileMenuOpen(false)}>Profiles</a>
          <a href="#couples" className="vivah-link" onClick={() => setMobileMenuOpen(false)}>Couples</a>
          <a href="#story" className="vivah-link" onClick={() => setMobileMenuOpen(false)}>Story</a>
          <a href="#services" className="vivah-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#blog" className="vivah-link" onClick={() => setMobileMenuOpen(false)}>Blog</a> */}

          {/* Mobile Auth Actions */}
          <div className="vivah-mobile-auth-actions">
    
            <Link to="/login" className="vivah-btn vivah-btn-login">
              <LogIn size={16} /> Login
            </Link>
            <Link to="/register" className="vivah-btn vivah-btn-register" >
              <UserPlus size={16} /> Register
            </Link>
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="vivah-desktop-auth">
        
          <Link to="/login" className="vivah-btn vivah-btn-login" >
              <LogIn size={16} /> Login
            </Link>
            <Link to="/register" className="vivah-btn vivah-btn-register">
              <UserPlus size={16} /> Register
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="vivah-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;