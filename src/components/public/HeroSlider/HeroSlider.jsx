import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

// Import your 4 slider background images from your assets folder
// Make sure to place 4 images named slide1.jpg, slide2.jpg, slide3.jpg, slide4.jpg in your src/assets folder
import slide1 from '../../../assets/img/1Vivahhero4.avif';
import slide2 from '../../../assets/img/1Vivahhero1.avif';
import slide3 from '../../../assets/img/1Vivahhero2.avif';
import slide4 from '../../../assets/img/1Vivahhero3.avif';

const HeroSlider = () => {
  const slides = [
    {
      image: slide1,
      title: "Find Your Perfect Match",
      subtitle: "Begin Your Forever Journey Today",
      date: "Trusted Matrimony Platform"
    },
    {
      image: slide2,
      title: "A Celebration of Love",
      subtitle: "Connecting Elite Brides & Grooms",
      date: "100% Verified Profiles"
    },
    {
      image: slide3,
      title: "Where Hearts Meet",
      subtitle: "Discover Meaningful Relationships",
      date: "Secure & Confidential"
    },
    {
      image: slide4,
      title: "Your Dream Wedding Starts Here",
      subtitle: "Join Thousands of Happy Couples",
      date: "Begin Your Story"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="vivah-hero-section">
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`vivah-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="vivah-hero-overlay"></div>
        </div>
      ))}

      {/* Hero Content with Heart Frame Animation */}
      <div className="vivah-hero-content-wrapper">
        <div className="vivah-heart-frame">
          {/* Floating sparkle animation elements */}
          <div className="sparkle s1">✨</div>
          <div className="sparkle s2">💖</div>
          <div className="sparkle s3">✨</div>
          
          <div className="vivah-hero-text">
            <span className="vivah-sub-tag">{slides[currentIndex].subtitle}</span>
            <h1 className="vivah-hero-title">{slides[currentIndex].title}</h1>
            <p className="vivah-hero-date">{slides[currentIndex].date}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="vivah-slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={28} />
      </button>
      <button className="vivah-slider-btn next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="vivah-dots-container">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`vivah-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;