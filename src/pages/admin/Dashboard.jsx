import React, { useState } from 'react';

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState('candidates');

  // Operational Metrics (Section 14.2)
  const metrics = [
    { title: 'Pending Candidate Approvals', count: '48', badge: 'Action Required', badgeBg: 'bg-warning text-dark' },
    { title: 'Trust Verification Vault', count: '19', badge: '12 Urgent', badgeBg: 'bg-danger' },
    { title: 'Provider Listings Active', count: '312', badge: '25 Categories', badgeBg: 'bg-info text-dark' },
    { title: '1Vivah Office Meetings Today', count: '8', badge: '16 Parties Paid', badgeBg: 'bg-success' },
  ];

  // 8 Creative Tabs Configuration
  const tabs = [
    {
      id: 'candidates',
      label: 'Candidate Queue',
      subtitle: 'Approvals & Hold Management',
      count: '48',
      badgeBg: 'bg-warning text-dark',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'trustVault',
      label: 'Trust Vault',
      subtitle: 'KYC & Police Verifications',
      count: '19',
      badgeBg: 'bg-danger',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'providers',
      label: 'Service Providers',
      subtitle: '25 Marketplace Categories',
      count: '312',
      badgeBg: 'bg-info text-dark',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7m8 0a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h6z" />
        </svg>
      )
    },
    {
      id: 'officeMeetings',
      label: 'Office Meetings',
      subtitle: 'Venue Bookings & Slots',
      count: '8',
      badgeBg: 'bg-success',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'subscriptions',
      label: 'Subscriptions',
      subtitle: 'Plans, Leases & Renewals',
      count: '142',
      badgeBg: 'bg-primary',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'leads',
      label: 'Lead Delivery',
      subtitle: 'Provider Inquiry Routing',
      count: '85',
      badgeBg: 'bg-secondary',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'reports',
      label: 'Flagged Content',
      subtitle: 'Abuse & Profile Audits',
      count: '5',
      badgeBg: 'bg-danger',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      id: 'systemLogs',
      label: 'System Logs',
      subtitle: 'Audit Trail & Role Access',
      count: 'Live',
      badgeBg: 'bg-dark text-white',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      <div className="p-4">
        {/* Operational Metrics Row */}
        <div className="row g-3 mb-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 shadow-sm rounded-3 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted small fw-semibold">{m.title}</span>
                    <span className={`badge ${m.badgeBg} rounded-pill small`}>{m.badge}</span>
                  </div>
                  <h2 className="fw-bold mb-0">{m.count}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 8 Interactive Creative Tabs Grid */}
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-body p-3 bg-white rounded-3">
            <div className="row g-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div key={tab.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <button
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`btn w-100 p-3 text-start rounded-3 border-0 h-100 ${isActive
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-light text-secondary'
                        }`}
                      style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                          <div className={`p-2 rounded-2 ${isActive ? 'bg-white bg-opacity-20 text-white' : 'bg-white text-primary shadow-sm'}`}>
                            {tab.icon}
                          </div>
                          <div>
                            <div className={`fw-bold mb-0 ${isActive ? 'text-white' : 'text-dark'}`} style={{ fontSize: '0.9rem' }}>
                              {tab.label}
                            </div>
                            <div className={`small ${isActive ? 'text-white-50' : 'text-muted'}`} style={{ fontSize: '0.75rem' }}>
                              {tab.subtitle}
                            </div>
                          </div>
                        </div>
                        <span className={`badge rounded-pill px-2 py-1 ${isActive ? 'bg-white text-primary' : `${tab.badgeBg}`}`}>
                          {tab.count}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}