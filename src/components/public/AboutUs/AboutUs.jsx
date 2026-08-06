import React from 'react';
import { Heart, MessageCircle, Key } from 'lucide-react';
import './AboutUs.css';

import user1 from '../../../assets/img/1Vivahhero1.avif'; 
import founderImg from '../../../assets/img/1Vivahhero2.avif'; 

const AboutUs = () => {
  return (
    <section className="vivah-about-section">
      <div className="vivah-about-container">
        
        {/* Section Heading */}
        <div className="vivah-about-header">
          <h2>About us</h2>
          <div className="vivah-about-divider">
            <span className="divider-icon">
              <Heart size={16} fill="#e11d48" color="#e11d48" />
            </span>
          </div>
          <p className="vivah-about-tagline">
            એક તમારા માટે યોગ્ય છે, એક વિવાહ પર તમારા માટે રાહ જોઈ રહ્યું છે.
          </p>
        </div>

        {/* Top 3-Column Content Section */}
        <div className="vivah-about-grid top-grid">
          
          {/* Column 1: Image stacked properly above its text */}
          <div className="vivah-about-col">
            <div className="vivah-col-image-wrap">
              <img src={user1} alt="Profile" />
              <span className="profile-caption">Naveen, 38</span>
            </div>
            <p className="col-text-spaced">
              Every person dreams for a perfect life partner. We help you to ensure that your marriage will be longer lasting.
            </p>
          </div>

          {/* Column 2: Center Text */}
          <div className="vivah-about-col">
            <p>
              Each one of us has different standards, idea and confidence. So the first thing Bride / Groom concerned about is, on what root they would make their choice. For this interaction is must. We allow the facility to chat with the person you are interested.
            </p>
          </div>

          {/* Column 3: Right Text */}
          <div className="vivah-about-col">
            <p>
              We understand your status in society. What's more important is your privacy. When you become a member, your personal information is kept confidential. We are here to serve you every step of the way. Your information is always safe with us!
            </p>
          </div>

        </div>

        {/* Feature Icons Row */}
        <div className="vivah-features-row">
          <div className="vivah-feature-item">
            <div className="vivah-icon-box">
              <Heart size={36} strokeWidth={1.8} />
            </div>
            <h3>Find your Better Half</h3>
          </div>

          <div className="vivah-feature-item">
            <div className="vivah-icon-box">
              <MessageCircle size={36} strokeWidth={1.8} />
            </div>
            <h3>Interact / Chat</h3>
          </div>

          <div className="vivah-feature-item">
            <div className="vivah-icon-box">
              <Key size={36} strokeWidth={1.8} />
            </div>
            <h3>Confidentiality Guaranteed</h3>
          </div>
        </div>

        {/* Bottom 2-Column Corporate Message Section */}
        <div className="vivah-about-grid bottom-grid">
          
          <div className="vivah-bottom-text">
            <p>
              We are a dynamic, multi-dimensional, transnational service organization, IT-NetworkZ Infosystems Pvt. Ltd. We have evolved a unique blend of service verticals which are structured to provide effective solutions to the youth, Corporate and Educational Institutions of India. 1Vivah.com is a web based marriage introduction service portal, pronounces as an Ek Vivah Dot Com. The target audience are men and women (Bride and Groom) specially living in India and then.
            </p>
          </div>

          <div className="vivah-bottom-founder-box">
            <div className="founder-text-content">
              <p>
                "To provide the best Matrimony solution to our society, we have taken this initiative to offer online Matrimony services for FREE. We are always available to serve our people as per their genuine needs. Here, I expect, eligible & interested candidates will take benefits from www.1vivah.com to find their soulmates".
              </p>
            </div>
            <div className="founder-img-wrap">
              <img src={founderImg} alt="Founder" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;