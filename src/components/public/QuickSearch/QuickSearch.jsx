import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import './QuickSearch.css';

const QuickSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Single');

  const maritalStatuses = [
    'Single', 'Divorced', 'Divorced & Kids', 'Widowed', 'Widowed & Kids', 'Seperated', 'Seperated & Kids'
  ];

  const religions = ['Buddhist', 'Christian-All', 'Christian-Catholic', 'Hindu', 'Inter-Religion', 'Jain', 'Muslim', 'Sikh', 'Parsi'];
  const castes = ['Iyer', 'Kamma', 'Kayastha', 'Kumaoni', 'Kurmi', 'Brahmin', 'Rajput', 'Maratha'];
  const subCastes = ['Lingayat', 'Maheshwari', 'Maratha', 'Mudaliar', 'Nadar', 'Vokkaliga', 'Reddy'];
  const languages = ['Assamese', 'Bengali', 'Gujarati', 'Hindi', 'Kannada', 'Malayalam', 'Marathi', 'Punjabi', 'Tamil', 'Telugu'];

  return (
    <section className="vivah-quicksearch-section">
      <div className="vivah-quicksearch-container">
        
        {/* Heart Divider placed before Quick Search button */}
        <div className="vivah-how-divider">
          <span className="divider-icon">
            <Heart size={16} fill="#e11d48" color="#e11d48" />
          </span>
        </div>

        {/* Toggle Button */}
        <div className="vivah-quicksearch-toggle-wrap">
          <button 
            className="vivah-quicksearch-btn" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Search size={18} />
            <span>Quick Search</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expandable Panel */}
        {isOpen && (
          <div className="vivah-quicksearch-panel">
            
            {/* Marital Status Filter Links */}
            <div className="vivah-status-links">
              {maritalStatuses.map((status, index) => (
                <React.Fragment key={status}>
                  <button 
                    className={`status-link ${selectedStatus === status ? 'active' : ''}`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </button>
                  {index < maritalStatuses.length - 1 && <span className="status-separator">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* 4 Cards Grid */}
            <div className="vivah-cards-grid">
              
              {/* Card 1: Religion */}
              <div className="vivah-qs-card">
                <div className="qs-card-header">
                  <div className="qs-avatar-circle"></div>
                  <h3>Religion</h3>
                </div>
                <div className="qs-scroll-list">
                  {religions.map((item, idx) => (
                    <div key={idx} className="qs-list-item">{item}</div>
                  ))}
                </div>
              </div>

              {/* Card 2: Caste */}
              <div className="vivah-qs-card">
                <div className="qs-card-header">
                  <div className="qs-avatar-circle"></div>
                  <h3>Caste</h3>
                </div>
                <div className="qs-scroll-list">
                  {castes.map((item, idx) => (
                    <div key={idx} className="qs-list-item">{item}</div>
                  ))}
                </div>
              </div>

              {/* Card 3: Sub Caste */}
              <div className="vivah-qs-card">
                <div className="qs-card-header">
                  <div className="qs-avatar-circle"></div>
                  <h3>Sub Caste</h3>
                </div>
                <div className="qs-scroll-list">
                  {subCastes.map((item, idx) => (
                    <div key={idx} className="qs-list-item">{item}</div>
                  ))}
                </div>
              </div>

              {/* Card 4: Language */}
              <div className="vivah-qs-card">
                <div className="qs-card-header">
                  <div className="qs-avatar-circle"></div>
                  <h3>Language</h3>
                </div>
                <div className="qs-scroll-list">
                  {languages.map((item, idx) => (
                    <div key={idx} className="qs-list-item">{item}</div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default QuickSearch;