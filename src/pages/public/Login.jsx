import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: 'Matchmaking Admin', role: 'admin' }, 'fake-jwt-token');
    navigate('/admin');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden p-3" 
         style={{ backgroundColor: '#F8FAF9' }}>
      
      {/* Soft Creative Pastel Ambient Lighting */}
      <div className="position-absolute rounded-circle opacity-50" 
           style={{ width: '40vw', height: '40vw', background: 'radial-gradient(circle, #FFD1D1 0%, rgba(255,255,255,0) 70%)', top: '-10%', left: '-5%', filter: 'blur(60px)' }} />
      <div className="position-absolute rounded-circle opacity-50" 
           style={{ width: '45vw', height: '45vw', background: 'radial-gradient(circle, #E0E7FF 0%, rgba(255,255,255,0) 70%)', bottom: '-15%', right: '-5%', filter: 'blur(70px)' }} />
      <div className="position-absolute rounded-circle opacity-40" 
           style={{ width: '30vw', height: '30vw', background: 'radial-gradient(circle, #FDE68A 0%, rgba(255,255,255,0) 70%)', top: '35%', right: '20%', filter: 'blur(80px)' }} />

      {/* Main Glassmorphic Light Card */}
      <div className="position-relative z-1 p-4 p-sm-5 rounded-4 shadow-lg border-0" 
           style={{ 
             maxWidth: 440, 
             width: '100%', 
             backgroundColor: 'rgba(255, 255, 255, 0.85)', 
             backdropFilter: 'blur(20px)', 
             WebkitBackdropFilter: 'blur(20px)',
             boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.12)' 
           }}>
        
        {/* Animated Brand Badge */}
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-4 mb-3 shadow-sm" 
               style={{ 
                 background: 'linear-gradient(135deg, #FF6B6B 0%, #4F46E5 100%)',
                 color: '#FFFFFF'
               }}>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h3 className="fw-bold mb-1" style={{ color: '#1E1B4B', letterSpacing: '-0.5px' }}>1Vivah Portal</h3>
          <span className="badge px-3 py-1.5 rounded-pill fw-medium" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5', fontSize: '0.75rem' }}>
            Enterprise Access
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Work Email Field */}
          <div className="mb-3">
            <label className="form-label small fw-semibold" style={{ color: '#475569' }}>Work Email</label>
            <div className="input-group rounded-3 overflow-hidden transition-all"
                 style={{ 
                   border: `1.5px solid ${focusedInput === 'email' ? '#4F46E5' : '#E2E8F0'}`,
                   boxShadow: focusedInput === 'email' ? '0 0 0 4px rgba(79, 70, 229, 0.1)' : 'none',
                   transition: 'all 0.2s ease-in-out'
                 }}>
              <span className="input-group-text border-0 bg-white" style={{ color: focusedInput === 'email' ? '#4F46E5' : '#94A3B8' }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <input
                type="email"
                className="form-control border-0 ps-0 shadow-none bg-white py-2.5"
                style={{ fontSize: '0.9rem' }}
                placeholder="admin@1vivah.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label small fw-semibold mb-0" style={{ color: '#475569' }}>Password</label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="small text-decoration-none fw-semibold" style={{ color: '#FF6B6B', fontSize: '0.8rem' }}>
                Forgot code?
              </a>
            </div>
            <div className="input-group rounded-3 overflow-hidden"
                 style={{ 
                   border: `1.5px solid ${focusedInput === 'password' ? '#4F46E5' : '#E2E8F0'}`,
                   boxShadow: focusedInput === 'password' ? '0 0 0 4px rgba(79, 70, 229, 0.1)' : 'none',
                   transition: 'all 0.2s ease-in-out'
                 }}>
              <span className="input-group-text border-0 bg-white" style={{ color: focusedInput === 'password' ? '#4F46E5' : '#94A3B8' }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control border-0 ps-0 shadow-none bg-white py-2.5"
                style={{ fontSize: '0.9rem' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                required
              />
              <button
                type="button"
                className="btn border-0 bg-white text-secondary px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l22 22"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Sunset Gradient Action Button */}
          <button 
            type="submit" 
            className="btn text-white w-100 py-3 fw-bold rounded-3 shadow mb-4 border-0"
            style={{ 
              background: 'linear-gradient(135deg, #FF6B6B 0%, #4F46E5 100%)',
              boxShadow: '0 8px 20px -6px rgba(255, 107, 107, 0.4)',
              fontSize: '0.95rem'
            }}
          >
            Sign In to Dashboard
          </button>

          {/* Registration Option */}
          <div className="text-center pt-3 border-top" style={{ borderColor: '#F1F5F9' }}>
            <p className="small mb-0" style={{ color: '#64748B' }}>
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="fw-semibold text-decoration-none ms-1"
                style={{ color: '#FF6B6B' }}
              >
                Register here
              </Link>
            </p>
          </div>

        </form>
      </div>

    </div>
  );
}