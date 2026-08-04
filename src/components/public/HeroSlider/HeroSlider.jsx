import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

import slide1 from '../../../assets/img/1Vivahhero4.avif';
import slide2 from '../../../assets/img/1Vivahhero1.avif';
import slide3 from '../../../assets/img/1Vivahhero2.avif';
import slide4 from '../../../assets/img/1Vivahhero3.avif';

const HeroSlider = () => {
  const slides = [
    { image: slide1, title: "Finding LIFE PARTNER", subtitle: "Welcome to 1Vivah" },
    { image: slide2, title: "Finding LIFE PARTNER", subtitle: "Welcome to 1Vivah" },
    { image: slide3, title: "Finding LIFE PARTNER", subtitle: "Welcome to 1Vivah" },
    { image: slide4, title: "Finding LIFE PARTNER", subtitle: "Welcome to 1Vivah" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [formData, setFormData] = useState({
    lookingFor: 'Select',
    minAge: 'Min',
    maxAge: 'Max',
    religion: 'Any',
    caste: '',
    subCaste: '',
    maritalStatus: 'Marital Status (Any)'
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search criteria:", formData);
  };

  const ages = [];
  for (let i = 18; i <= 60; i++) {
    ages.push(i);
  }

  return (
    
    <section className="vivah-hero-section">
       
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`vivah-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="vivah-hero-overlay"></div>
        </div>
      ))}

      <div className="vivah-hero-content-wrapper">
        <div className="vivah-hero-text">
          <h1 className="vivah-hero-title">{slides[currentIndex].title}</h1>
        </div>

        {/* Form Container positioned neatly over the slide */}
        <div className="vivah-search-box">
          <form onSubmit={handleSearch}>
            
            <div className="vivah-form-row">
              <div className="vivah-form-group field-looking">
                <label>I'm looking for a</label>
                <select name="lookingFor" value={formData.lookingFor} onChange={handleInputChange}>
                  <option value="Select">Select</option>
                  <option value="Bride">👰 BRIDE</option>
                  <option value="Groom">👨 GROOM</option>
                </select>
              </div>

              <div className="vivah-form-group field-aged">
                <label>Aged</label>
                <div className="age-select-wrapper">
                  <select name="minAge" value={formData.minAge} onChange={handleInputChange}>
                    <option value="Min">Min</option>
                    {ages.map(age => <option key={`min-${age}`} value={age}>{age}</option>)}
                  </select>
                  <span className="age-to">to</span>
                  <select name="maxAge" value={formData.maxAge} onChange={handleInputChange}>
                    <option value="Max">Max</option>
                    {ages.map(age => <option key={`max-${age}`} value={age}>{age}</option>)}
                    <option value="60+">60+</option>
                  </select>
                </div>
              </div>

              <div className="vivah-form-group field-religion">
                <label>of Religion:</label>
                <select name="religion" value={formData.religion} onChange={handleInputChange}>
                  <option value="Any">Any</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Christian-All">Christian-All</option>
                  <option value="Christian-Catholic">Christian-Catholic</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Inter-Religion">Inter-Religion</option>
                  <option value="Jain-All">Jain-All</option>
                  <option value="Jain-Digambar">Jain-Digambar</option>
                  <option value="Jain-Others">Jain-Others</option>
                  <option value="Jewish">Jewish</option>
                  <option value="Muslim-All">Muslim-All</option>
                  <option value="Muslim-Shia">Muslim-Shia</option>
                  <option value="Muslim-Sunni">Muslim-Sunni</option>
                  <option value="Muslim-Others">Muslim-Others</option>
                  <option value="Parsi">Parsi</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Sindhi">Sindhi</option>
                </select>
              </div>
            </div>

            <div className="vivah-form-row">
              <div className="vivah-form-group field-caste">
                <input 
                  type="text" 
                  name="caste" 
                  placeholder="Caste" 
                  value={formData.caste} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="vivah-form-group field-subcaste">
                <input 
                  type="text" 
                  name="subCaste" 
                  placeholder="Sub Caste" 
                  value={formData.subCaste} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="vivah-form-group field-marital">
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
                  <option value="Marital Status (Any)">Marital Status (Any)</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Divorced & Kids">Divorced & Kids</option>
                  <option value="Single">Single</option>
                  <option value="Seperated">Seperated</option>
                  <option value="Seperated & Kids">Seperated & Kids</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Widowed & Kids">Widowed & Kids</option>
                </select>
              </div>

              <div className="vivah-form-group field-submit">
                <button type="submit" className="vivah-find-btn">Find Now</button>
              </div>
            </div>

          </form>
        </div>
      </div>

      <button className="vivah-slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="vivah-slider-btn next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

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