import React from 'react';
import './GuestMessages.css';
import { Heart } from 'lucide-react';

// Import your background image from your assets folder
import guestBg from '../../../assets/img/GuestMessages.avif'; // Update path as needed

const GuestMessages = () => {
  const testimonials = [
    {
      id: 1,
      name: "Karan Gupta",
      role: "Groom",
      message: '"True love is the most beautiful thing to witness, especially when it is yours. You make me believe in love and happiness". Thanks 1Vivah...Keep it up.'
    },
    {
      id: 2,
      name: "Pareeniti Agrawal",
      role: "Bride",
      message: '"On our behalf and on behalf of our families we thank you for being a part of one of our most beautiful memories and helping us to make our dream come true".'
    }
  ];

  return (
    <section 
      className="vivah-guest-section" 
      style={{ backgroundImage: `url(${guestBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="vivah-guest-overlay"></div>

      <div className="vivah-guest-container">
        
        {/* Section Heading */}
        <div className="vivah-guest-header">
          <h2>Guest Messages</h2>
          <div className="vivah-guest-divider">
            <span className="divider-icon">
                <Heart size={16} fill="#e11d48" color="#e11d48" />
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="vivah-guest-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="vivah-guest-card">
              <h3 className="guest-name">{item.name}</h3>
              <span className="guest-role">{item.role}</span>
              <p className="guest-message">{item.message}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuestMessages;