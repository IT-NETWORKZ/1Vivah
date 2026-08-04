import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

  // Form State containing all fields
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    maritalStatus: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    birthState: '',
    birthCity: '',
    birthName: '',
    birthTime: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    manglik: 'No',
    profileFor: '',

    // Religion & Ethnicity
    religion: '',
    motherTongue: '',
    caste: '',
    subCaste: '',
    gotra: '',

    // Current Location
    country: 'India',
    state: '',
    city: '',

    // Legal Documents & Gallery
    proofOfIdentityType: '',
    proofOfIdentityFile: null,
    proofOfAddressType: '',
    proofOfAddressFile: null,
    biodataFile: null,
    kundliFile: null,
    image1: null,
    image2: null,

    // Education Info
    highestQualification: '',
    passoutYear: '',
    studiedFrom: '',

    // Relative Info
    specifyRelation: '',
    relativeMobile: '',
    maternalUncleName: '',

    // Lifestyle
    height: '',
    dietaryHabits: '',
    smoking: '',
    drinking: '',
    weekendSpending: '',
    workAfterMarriage: '',
    hobby: '',

    // Work Details
    orgName: '',
    industry: '',
    designation: '',
    incomeType: 'Annual',
    currency: 'INR',
    salaryLac: '',
    totalExperience: '',

    // Verification
    verificationType: 'On Mobile',
    otp: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Focus Styles Helper
  const getInputGroupStyle = (fieldName) => ({
    border: `1.5px solid ${focusedInput === fieldName ? '#4F46E5' : '#E2E8F0'}`,
    boxShadow: focusedInput === fieldName ? '0 0 0 3px rgba(79, 70, 229, 0.1)' : 'none',
    transition: 'all 0.2s ease-in-out'
  });

  // OTP Handlers
  const handleSendOtp = () => {
    if (formData.verificationType === 'On Mobile' && !formData.mobileNo) {
      alert('Please enter your mobile number first.');
      return;
    }
    if (formData.verificationType === 'On Mail (link)' && !formData.email) {
      alert('Please enter your email address first.');
      return;
    }
    setOtpSent(true);
    alert(`Verification code sent via ${formData.verificationType}! (Demo Code: 1234)`);
  };

  const handleVerifyOtp = () => {
    if (formData.otp === '1234') {
      setIsOtpVerified(true);
      alert('Verification successful!');
    } else {
      alert('Invalid code. Please enter 1234.');
    }
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!isOtpVerified) {
      alert('Please verify your mobile or email OTP before completing registration.');
      return;
    }
    alert('Registration successfully completed!');
    console.log('Registration Data:', formData);
    navigate('/login');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden py-4 px-2" 
         style={{ backgroundColor: '#F8FAF9' }}>
      
      {/* Soft Creative Pastel Ambient Lighting Flares */}
      <div className="position-absolute rounded-circle opacity-50" 
           style={{ width: '50vw', height: '50vw', background: 'radial-gradient(circle, #FFD1D1 0%, rgba(255,255,255,0) 70%)', top: '-10%', left: '-5%', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div className="position-absolute rounded-circle opacity-50" 
           style={{ width: '55vw', height: '55vw', background: 'radial-gradient(circle, #E0E7FF 0%, rgba(255,255,255,0) 70%)', bottom: '-15%', right: '-5%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Main Glassmorphic Card Container - Set to 90% Width */}
      <div className="position-relative z-1 p-3 p-md-4 rounded-4 shadow-sm border-0 bg-white" 
           style={{ 
             width: '90%', 
             backgroundColor: 'rgba(255, 255, 255, 0.95)', 
             backdropFilter: 'blur(15px)', 
             WebkitBackdropFilter: 'blur(15px)' 
           }}>
        
        {/* Animated Brand Header */}
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center p-2 rounded-3 mb-2 shadow-sm" 
               style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #4F46E5 100%)', color: '#FFFFFF' }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: '#1E1B4B' }}>1Vivah Registration</h3>
          <p className="text-muted small mb-2" style={{ color: '#64748B' }}>
            Provide your membership details — It's free! Designed for urban, independent Indians.
          </p>
          <span className="badge px-3 py-1 rounded-pill fw-normal" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5', fontSize: '0.75rem' }}>
            * Marked fields are mandatory
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* ==================== 1. PERSONAL INFORMATION ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>👤</span> Personal Information
            </h6>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">First Name *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('firstName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="firstName" required placeholder="First Name" value={formData.firstName} onChange={handleChange} onFocus={() => setFocusedInput('firstName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Middle Name *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('middleName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="middleName" required placeholder="Middle Name" value={formData.middleName} onChange={handleChange} onFocus={() => setFocusedInput('middleName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Last Name *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('lastName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="lastName" required placeholder="Last Name" value={formData.lastName} onChange={handleChange} onFocus={() => setFocusedInput('lastName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Marital Status *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('maritalStatus')}>
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="maritalStatus" required value={formData.maritalStatus} onChange={handleChange} onFocus={() => setFocusedInput('maritalStatus')} onBlur={() => setFocusedInput(null)}>
                    <option value="">Select</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Awaiting Divorce">Awaiting Divorce</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <label className="form-label small fw-semibold text-secondary mb-1">Date Of Birth *</label>
                <div className="d-flex gap-2">
                  <select className="form-select form-select-sm border py-1.5 rounded-2" name="dobDay" required value={formData.dobDay} onChange={handleChange}>
                    <option value="">DD</option>
                    {[...Array(31)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                  </select>
                  <select className="form-select form-select-sm border py-1.5 rounded-2" name="dobMonth" required value={formData.dobMonth} onChange={handleChange}>
                    <option value="">MM</option>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, idx) => <option key={m} value={idx + 1}>{m}</option>)}
                  </select>
                  <select className="form-select form-select-sm border py-1.5 rounded-2" name="dobYear" required value={formData.dobYear} onChange={handleChange}>
                    <option value="">YYYY</option>
                    {[...Array(60)].map((_, i) => {
                      const yr = 2008 - i;
                      return <option key={yr} value={yr}>{yr}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Birth State</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('birthState')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="birthState" placeholder="State" value={formData.birthState} onChange={handleChange} onFocus={() => setFocusedInput('birthState')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Birth City *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('birthCity')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="birthCity" required placeholder="Birth City" value={formData.birthCity} onChange={handleChange} onFocus={() => setFocusedInput('birthCity')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Birth Name</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('birthName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="birthName" placeholder="Birth Name" value={formData.birthName} onChange={handleChange} onFocus={() => setFocusedInput('birthName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Birth Time</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('birthTime')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="birthTime" placeholder="Ex. 01:30 PM" value={formData.birthTime} onChange={handleChange} onFocus={() => setFocusedInput('birthTime')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Email Address *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('email')}>
                  <input type="email" className="form-control form-control-sm border-0 bg-white py-1.5" name="email" required placeholder="Email Id" value={formData.email} onChange={handleChange} onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Password *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('password')}>
                  <input type="password" className="form-control form-control-sm border-0 bg-white py-1.5" name="password" required placeholder="••••••••" value={formData.password} onChange={handleChange} onFocus={() => setFocusedInput('password')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Confirm Password *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('confirmPassword')}>
                  <input type="password" className="form-control form-control-sm border-0 bg-white py-1.5" name="confirmPassword" required placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} onFocus={() => setFocusedInput('confirmPassword')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Mobile No *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('mobileNo')}>
                  <input type="tel" className="form-control form-control-sm border-0 bg-white py-1.5" name="mobileNo" required placeholder="XXX.XXX.XXXX" value={formData.mobileNo} onChange={handleChange} onFocus={() => setFocusedInput('mobileNo')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary d-block mb-1">Manglik</label>
                <div className="form-check form-check-inline mt-1">
                  <input className="form-check-input" type="radio" name="manglik" id="manglikYes" value="Yes" checked={formData.manglik === 'Yes'} onChange={handleChange} />
                  <label className="form-check-label small" htmlFor="manglikYes">Yes</label>
                </div>
                <div className="form-check form-check-inline mt-1">
                  <input className="form-check-input" type="radio" name="manglik" id="manglikNo" value="No" checked={formData.manglik === 'No'} onChange={handleChange} />
                  <label className="form-check-label small" htmlFor="manglikNo">No</label>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Profile For *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('profileFor')}>
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="profileFor" required value={formData.profileFor} onChange={handleChange} onFocus={() => setFocusedInput('profileFor')} onBlur={() => setFocusedInput(null)}>
                    <option value="">Select profile for</option>
                    <option value="Self">Self</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Relative">Relative</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 2. RELIGION & ETHNICITY ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>📖</span> Religion & Ethnicity
            </h6>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Religion *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('religion')}>
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="religion" required value={formData.religion} onChange={handleChange} onFocus={() => setFocusedInput('religion')} onBlur={() => setFocusedInput(null)}>
                    <option value="">Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Christian">Christian</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Mother Tongue *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('motherTongue')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="motherTongue" required placeholder="Ex. Hindi, English" value={formData.motherTongue} onChange={handleChange} onFocus={() => setFocusedInput('motherTongue')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Caste *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('caste')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="caste" required placeholder="Enter Caste" value={formData.caste} onChange={handleChange} onFocus={() => setFocusedInput('caste')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary mb-1">Sub Caste *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('subCaste')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="subCaste" required placeholder="Sub Caste" value={formData.subCaste} onChange={handleChange} onFocus={() => setFocusedInput('subCaste')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary mb-1">Gotra</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('gotra')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="gotra" placeholder="Gotra" value={formData.gotra} onChange={handleChange} onFocus={() => setFocusedInput('gotra')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 3. CURRENT LOCATION ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>📍</span> Current Location
            </h6>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Country *</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="country" required value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="UAE">UAE</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">State *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('state')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="state" required placeholder="Select State" value={formData.state} onChange={handleChange} onFocus={() => setFocusedInput('state')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">City *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('city')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="city" required placeholder="Enter City" value={formData.city} onChange={handleChange} onFocus={() => setFocusedInput('city')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 4. LEGAL DOCUMENTS & GALLERY ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-1 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>🛡️</span> Legal Documents & Verification Vault
            </h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
              As per Information Technology Act, 2000, users upload identity & address proofs for authentication.
            </p>

            <div className="row g-3 mb-2">
              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Proof of Identity *</label>
                <select className="form-select form-select-sm border mb-1.5 rounded-2 py-1" name="proofOfIdentityType" required value={formData.proofOfIdentityType} onChange={handleChange}>
                  <option value="">Select Document Type</option>
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="Passport">Passport</option>
                  <option value="Voter ID">Voter ID</option>
                </select>
                <input type="file" className="form-control form-control-sm py-1" name="proofOfIdentityFile" required accept=".gif,.png,.jpg,.jpeg" onChange={handleChange} />
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Proof of Address *</label>
                <select className="form-select form-select-sm border mb-1.5 rounded-2 py-1" name="proofOfAddressType" required value={formData.proofOfAddressType} onChange={handleChange}>
                  <option value="">Select Document Type</option>
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="Electricity Bill">Electricity Bill</option>
                  <option value="Driving License">Driving License</option>
                </select>
                <input type="file" className="form-control form-control-sm py-1" name="proofOfAddressFile" required accept=".gif,.png,.jpg,.jpeg" onChange={handleChange} />
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Biodata *</label>
                <input type="file" className="form-control form-control-sm py-1" name="biodataFile" required accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleChange} />
                <span className="text-muted d-block mt-0.5" style={{ fontSize: '0.7rem' }}>Max 500 KB</span>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Kundli / Horoscope</label>
                <input type="file" className="form-control form-control-sm py-1" name="kundliFile" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleChange} />
                <span className="text-muted d-block mt-0.5" style={{ fontSize: '0.7rem' }}>Max 500 KB</span>
              </div>
            </div>

            <hr className="my-3" style={{ borderColor: '#E2E8F0' }} />

            {/* Gallery Uploads */}
            <p className="fw-semibold small mb-2" style={{ color: '#1E1B4B' }}>🖼️ Gallery Uploads (.jpg, .png)</p>
            
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary mb-1">Image 1 *</label>
                <input type="file" className="form-control form-control-sm py-1" name="image1" required accept=".jpg,.jpeg,.png,.gif" onChange={handleChange} />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary mb-1">Image 2 *</label>
                <input type="file" className="form-control form-control-sm py-1" name="image2" required accept=".jpg,.jpeg,.png,.gif" onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* ==================== 5. EDUCATION INFO ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>🎓</span> Education Info
            </h6>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Highest Qualification *</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="highestQualification" required value={formData.highestQualification} onChange={handleChange}>
                    <option value="">Select Qualification</option>
                    <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="MBBS">MBBS</option>
                    <option value="B.Com">B.Com</option>
                    <option value="M.Com">M.Com</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Year of Passout</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="passoutYear" value={formData.passoutYear} onChange={handleChange}>
                    <option value="">YYYY</option>
                    {[...Array(40)].map((_, i) => {
                      const yr = 2026 - i;
                      return <option key={yr} value={yr}>{yr}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Studied From *</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="studiedFrom" required value={formData.studiedFrom} onChange={handleChange}>
                    <option value="">Select Institute / College</option>
                    <option value="IIT / NIT / IIIT">IIT / NIT / IIIT</option>
                    <option value="IIM">IIM</option>
                    <option value="State University">State University</option>
                    <option value="Private College">Private College</option>
                    <option value="Abroad University">Abroad University</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 6. RELATIVE INFO ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>👨‍👩‍👧</span> Relative Info
            </h6>
            
            <div className="p-2.5 rounded-2 mb-3 small border" style={{ backgroundColor: '#EEF2FF', color: '#334155', fontSize: '0.8rem' }}>
              <strong style={{ color: '#4F46E5' }}>Note for Bride:</strong> Direct mobile is private.<br />
              <strong style={{ color: '#FF6B6B' }}>Note for Groom:</strong> Direct contact visible to verified candidates.
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Specify Relation *</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="specifyRelation" required value={formData.specifyRelation} onChange={handleChange}>
                    <option value="">Specify Relation</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Uncle">Uncle</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Mobile Number *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('relativeMobile')}>
                  <input type="tel" className="form-control form-control-sm border-0 bg-white py-1.5" name="relativeMobile" required placeholder="XXX.XXX.XXXX" value={formData.relativeMobile} onChange={handleChange} onFocus={() => setFocusedInput('relativeMobile')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Maternal Uncle / Surname *</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('maternalUncleName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="maternalUncleName" required placeholder="Uncle Name / Surname" value={formData.maternalUncleName} onChange={handleChange} onFocus={() => setFocusedInput('maternalUncleName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 7. LIFESTYLE ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>🍸</span> Lifestyle
            </h6>

            <div className="row g-3">
              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Height *</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="height" required value={formData.height} onChange={handleChange}>
                    <option value="">Select Height</option>
                    <option value="5ft 0in">5ft 0in</option>
                    <option value="5ft 2in">5ft 2in</option>
                    <option value="5ft 5in">5ft 5in</option>
                    <option value="5ft 8in">5ft 8in</option>
                    <option value="6ft 0in">6ft 0in</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Dietary habits</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="dietaryHabits" value={formData.dietaryHabits} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Eggetarian">Eggetarian</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Smoking</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="smoking" value={formData.smoking} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="No">No</option>
                    <option value="Occasionally">Occasionally</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <label className="form-label small fw-semibold text-secondary mb-1">Drinking</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="drinking" value={formData.drinking} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="No">No</option>
                    <option value="Drinks Socially">Drinks Socially</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Weekend Spending</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="weekendSpending" value={formData.weekendSpending} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="With Family">With Family</option>
                    <option value="Outing with Friends">Outing with Friends</option>
                    <option value="Relaxing at Home">Relaxing at Home</option>
                    <option value="Traveling">Traveling</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Work after marriage</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="workAfterMarriage" value={formData.workAfterMarriage} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Decided">Not Decided</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Hobby</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('hobby')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="hobby" placeholder="Ex. Drawing, Music" value={formData.hobby} onChange={handleChange} onFocus={() => setFocusedInput('hobby')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 8. WORK DETAILS ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-1 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>💼</span> Work Details
            </h6>
            <small className="text-muted d-block mb-3" style={{ fontSize: '0.78rem' }}>(Optional For Bride & Mandatory For Groom *)</small>

            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Organisation Name</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('orgName')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="orgName" placeholder="Company Name" value={formData.orgName} onChange={handleChange} onFocus={() => setFocusedInput('orgName')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Industry</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="industry" value={formData.industry} onChange={handleChange}>
                    <option value="">Industries</option>
                    <option value="IT & Software">IT & Software</option>
                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Healthcare / Medical">Healthcare / Medical</option>
                    <option value="Education / Academic">Education / Academic</option>
                    <option value="Government / PSU">Government / PSU</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary mb-1">Designation</label>
                <div className="rounded-2 overflow-hidden" style={getInputGroupStyle('designation')}>
                  <input type="text" className="form-control form-control-sm border-0 bg-white py-1.5" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} onFocus={() => setFocusedInput('designation')} onBlur={() => setFocusedInput(null)} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary d-block mb-1">Income</label>
                <div className="d-flex align-items-center gap-2">
                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="incomeType" id="annual" value="Annual" checked={formData.incomeType === 'Annual'} onChange={handleChange} />
                    <label className="form-check-label small" htmlFor="annual">Annual</label>
                  </div>
                  <select className="form-select form-select-sm border rounded-2 py-1" name="currency" style={{ width: '85px' }} value={formData.currency} onChange={handleChange}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                  <select className="form-select form-select-sm border rounded-2 py-1 flex-fill" name="salaryLac" value={formData.salaryLac} onChange={handleChange}>
                    <option value="">Salary (Lac)</option>
                    <option value="3 - 5 Lacs">3 - 5 Lacs</option>
                    <option value="5 - 10 Lacs">5 - 10 Lacs</option>
                    <option value="10 - 15 Lacs">10 - 15 Lacs</option>
                    <option value="15 - 25 Lacs">15 - 25 Lacs</option>
                    <option value="25+ Lacs">25+ Lacs</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label small fw-semibold text-secondary mb-1">Total Experience</label>
                <div className="rounded-2 overflow-hidden border">
                  <select className="form-select form-select-sm border-0 bg-white py-1.5" name="totalExperience" value={formData.totalExperience} onChange={handleChange}>
                    <option value="">Experience (In Year)</option>
                    <option value="0 - 2 Years">0 - 2 Years</option>
                    <option value="2 - 5 Years">2 - 5 Years</option>
                    <option value="5 - 10 Years">5 - 10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 9. VERIFICATION DETAILS ==================== */}
          <div className="p-3.5 p-md-4 rounded-3 mb-4 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#E2E8F0' }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#1E1B4B' }}>
              <span>🔐</span> Verification Details
            </h6>

            <div className="row g-3 align-items-end">
              <div className="col-12 col-md-4">
                <label className="form-label small fw-semibold text-secondary d-block mb-1">Verification Method *</label>
                <div className="form-check form-check-inline mt-1">
                  <input className="form-check-input" type="radio" name="verificationType" id="verifyMobile" value="On Mobile" checked={formData.verificationType === 'On Mobile'} onChange={handleChange} />
                  <label className="form-check-label small" htmlFor="verifyMobile">On Mobile</label>
                </div>
                <div className="form-check form-check-inline mt-1">
                  <input className="form-check-input" type="radio" name="verificationType" id="verifyMail" value="On Mail (link)" checked={formData.verificationType === 'On Mail (link)'} onChange={handleChange} />
                  <label className="form-check-label small" htmlFor="verifyMail">On Mail</label>
                </div>
              </div>

              {/* COMPACT SECTION BUTTON */}
              <div className="col-12 col-md-3">
                <button 
                  type="button" 
                  className="btn btn-sm text-white w-100 py-1.5 fw-semibold rounded-2 border-0 shadow-sm" 
                  style={{ 
                    background: 'linear-gradient(135deg, #FF6B6B 0%, #4F46E5 100%)'
                  }}
                  onClick={handleSendOtp}
                >
                  {otpSent ? 'Resend OTP' : 'Send Verification OTP'}
                </button>
              </div>

              {/* COMPACT INPUT & VERIFY BUTTON */}
              <div className="col-12 col-md-5">
                <label className="form-label small fw-semibold text-secondary mb-1">Enter Verification OTP</label>
                <div className="input-group input-group-sm">
                  <input 
                    type="text" 
                    className="form-control border" 
                    name="otp" 
                    placeholder="1234" 
                    value={formData.otp} 
                    onChange={handleChange} 
                  />
                  <button 
                    type="button" 
                    className="btn btn-sm btn-dark fw-semibold px-3" 
                    onClick={handleVerifyOtp}
                  >
                    Verify
                  </button>
                </div>
                {isOtpVerified && (
                  <span className="text-success small fw-bold mt-1 d-block" style={{ fontSize: '0.75rem' }}>✓ Verification Complete</span>
                )}
              </div>
            </div>
          </div>

          {/* COMPACT SUBMIT BUTTON */}
          <div className="d-flex justify-content-center mb-3">
            <button 
              type="submit" 
              className="btn btn-sm text-white px-5 py-2 fw-bold rounded-2 shadow-sm border-0"
              style={{ 
                background: 'linear-gradient(135deg, #FF6B6B 0%, #4F46E5 100%)',
                fontSize: '0.95rem'
              }}
            >
              Complete Registration
            </button>
          </div>

          {/* Login Option Navigation */}
          <div className="text-center pt-2 border-top" style={{ borderColor: '#F1F5F9' }}>
            <p className="mb-0 small" style={{ color: '#64748B' }}>
              Already registered?{' '}
              <Link 
                to="/login" 
                className="fw-semibold text-decoration-none ms-1"
                style={{ color: '#FF6B6B' }}
              >
                Sign In to your account
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}