import React, { useState } from 'react';
import { Search, Globe, X } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar({ onSearchChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Malibu, CA');
  const [dates, setDates] = useState('Oct 12 - Oct 17');
  const [guests, setGuests] = useState('4 guests');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleApplySearch = (e) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange({ location, dates, guests });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className="search-bar-container" 
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Search destinations, dates, and guests"
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
      >
        <button type="button" className="search-segment">
          {location}
        </button>
        <div className="search-divider" />
        <button type="button" className="search-segment">
          {dates}
        </button>
        <div className="search-divider" />
        <button type="button" className="search-segment muted">
          {guests}
        </button>
        <div className="search-submit-btn" aria-label="Perform search">
          <Search size={16} />
        </div>
      </div>

      {isOpen && (
        <div className="overlay-backdrop" onClick={handleClose}>
          <div 
            className="search-modal-card animate-slide-up" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Filter search criteria"
          >
            <div className="search-modal-header">
              <h3>Search Destination</h3>
              <button 
                type="button" 
                onClick={handleClose} 
                aria-label="Close search filters"
                style={{ padding: '6px', borderRadius: '50%' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleApplySearch} className="search-inputs-grid">
              <div className="input-field-group" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="search-location">Where to</label>
                <input 
                  id="search-location"
                  type="text" 
                  className="search-input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search destinations (e.g. Malibu, Maui, Aspen)"
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="search-dates">Dates</label>
                <input 
                  id="search-dates"
                  type="text" 
                  className="search-input"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Select dates"
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="search-guests">Who</label>
                <input 
                  id="search-guests"
                  type="text" 
                  className="search-input"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Add guests"
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button 
                  type="submit" 
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#fff',
                    padding: '12px 28px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Search size={18} />
                  Update Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
