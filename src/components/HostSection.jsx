import React, { useState } from 'react';
import { Award, Star, ShieldCheck, MessageSquare, X } from 'lucide-react';
import './HostSection.css';

export default function HostSection({ host, rating, reviewCount }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setShowContactModal(false);
      setMessageText('');
    }, 2000);
  };

  return (
    <section className="host-section-container" aria-label="Host information">
      <h3>Meet your Host</h3>

      <div className="host-card-large">
        <div className="host-card-left">
          <img 
            src={host.avatar} 
            alt={host.name} 
            className="host-large-avatar"
          />
          <div className="host-name-title">{host.name}</div>
          {host.isSuperhost && (
            <div className="host-superhost-badge">
              <Award size={16} color="var(--primary)" />
              <span>Superhost</span>
            </div>
          )}

          <div className="host-stats-mini">
            <div className="stat-box">
              <strong>{reviewCount}</strong>
              <span>Reviews</span>
            </div>
            <div className="stat-box">
              <strong>{rating} ★</strong>
              <span>Rating</span>
            </div>
            <div className="stat-box">
              <strong>{host.yearsHosting}</strong>
              <span>Years</span>
            </div>
          </div>
        </div>

        <div className="host-card-right">
          <div className="host-bio">
            <p>{host.bio}</p>
          </div>

          {host.coHosts && host.coHosts.length > 0 && (
            <div className="cohosts-row">
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Co-hosts:</span>
              {host.coHosts.map((ch, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img src={ch.avatar} alt={ch.name} className="cohost-avatar" />
                  <span style={{ fontSize: '0.875rem' }}>{ch.name}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <div>Response rate: <strong style={{ color: 'var(--text-primary)' }}>{host.responseRate}</strong></div>
            <div>Response time: <strong style={{ color: 'var(--text-primary)' }}>{host.responseTime}</strong></div>
          </div>

          <button 
            type="button" 
            className="contact-host-btn"
            onClick={() => setShowContactModal(true)}
          >
            Message Host
          </button>
        </div>
      </div>

      {/* Contact Host Modal */}
      {showContactModal && (
        <div className="overlay-backdrop" onClick={() => setShowContactModal(false)}>
          <div 
            className="amenities-modal-content animate-slide-up" 
            style={{ maxWidth: '520px' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Message ${host.name}`}
          >
            <div className="modal-header-row">
              <h3>Contact {host.name}</h3>
              <button 
                type="button" 
                onClick={() => setShowContactModal(false)}
                aria-label="Close message form"
                style={{ padding: '6px', borderRadius: '50%' }}
              >
                <X size={20} />
              </button>
            </div>

            {sentSuccess ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <ShieldCheck size={48} color="#10B981" style={{ margin: '0 auto 12px auto' }} />
                <h4>Message sent to {host.name}!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                  Elena typically responds within an hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Ask Elena about dates, check-in instructions, or custom requests.
                </p>
                <textarea 
                  rows={5}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Hi Elena, I'm interested in booking Villa Azure Horizon..."
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <MessageSquare size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
