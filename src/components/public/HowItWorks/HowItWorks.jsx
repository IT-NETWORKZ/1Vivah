import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  // Keeps track of which card is active (clicked or hovered)
  const [activeId, setActiveId] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Free Registration",
      text: "વપરાશકર્તા પ્રોફાઇલ બનાવવા અને અન્ય વપરાશકર્તા માટે પ્રોફાઇલ જાહેર કરવા માટે, તે મફત છે."
    },
    {
      id: 2,
      title: "Submit KYC",
      text: "આપણા આઈડી અને પુરાવા આપણ્યા પ્રોફાઇલલા મંજૂર કરવાનાસાબટી સબમિટ કરા."
    },
    {
      id: 3,
      title: "Find as per your choice",
      text: "सर्वोत्तम प्रोफाइल हजारो स्क्रिनिंग नंतर निवडले जातात आणि मंजुरीसाठी पाठविल्या जातात."
    },
    {
      id: 4,
      title: "Get marry soon, 1Vivah!",
      text: "एक विवाह सल्लागार આપલ્યા સ્વારસ્ય આહેત આણિ ત્યાંચ્યા અભિપ્રાય પ્રાપ્ત સંભાવના જોડતો."
    }
  ];

  return (
    <section className="vivah-how-section">
      <div className="vivah-how-container">
        
        {/* Section Heading */}
        <div className="vivah-how-header">
          <h2>How it Works</h2>
          <div className="vivah-how-divider">
            <span className="divider-icon">
                  <Heart size={16} fill="#e11d48" color="#e11d48" />
            </span>
          </div>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="vivah-how-grid">
          {steps.map((step) => {
            const isActive = activeId === step.id;
            return (
              <div 
                key={step.id} 
                className={`vivah-step-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(step.id)} // Hover animation trigger
                onClick={() => setActiveId(step.id)}     // Click state trigger
              >
                <div className="vivah-speech-bubble">
                  <p>{step.text}</p>
                </div>
                <h4 className="vivah-step-title">{step.title}</h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;