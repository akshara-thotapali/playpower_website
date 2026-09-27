import React, { useState } from 'react';
import { Star, ChevronDown, Minus, Plus, CheckCircle, ShieldCheck, X } from 'lucide-react';
import './BookingCard.css';

export default function BookingCard({ pricing, rating, reviewCount }) {
  const [checkInDate, setCheckInDate] = useState('2026-10-12');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-17');
  const [nights, setNights] = useState(5);
  
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);

  const [showGuestPopover, setShowGuestPopover] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalGuests = adults + children;

  // Calculate pricing
  const baseTotal = nights * pricing.nightlyRate;
  const taxAmount = Math.round(baseTotal * (pricing.occupancyTaxPercent / 100));
  const grandTotal = baseTotal + pricing.cleaningFee + pricing.serviceFee + taxAmount;

  const handleNightChange = (newNights) => {
    if (newNights >= 1 && newNights <= 30) {
      setNights(newNights);
    }
  };

  const handleReserve = () => {
    setShowConfirmation(true);
  };

  return (
    <aside className="booking-card-wrapper" aria-label="Reservation and pricing sidebar">
      <div className="booking-card">
        {/* Header Price & Rating */}
        <div className="booking-card-header">
          <div className="price-display">
            <span className="price-amount">{pricing.currency}{pricing.nightlyRate.toLocaleString()}</span>
            {pricing.originalRate && (
              <span className="original-price">{pricing.currency}{pricing.originalRate.toLocaleString()}</span>
            )}
            <span className="price-unit">night</span>
          </div>

          <div className="header-rating">
            <Star size={14} fill="var(--primary)" color="var(--primary)" />
            <span>{rating}</span>
            <span style={{ color: 'var(--text-tertiary)' }}>({reviewCount})</span>
          </div>
        </div>

        {/* Inputs Matrix */}
        <div className="booking-picker-box">
          <div className="dates-grid-picker">
            <div 
              className="picker-cell"
              onClick={() => setShowDatePicker(!showDatePicker)}
              role="button"
              tabIndex={0}
            >
              <span className="picker-label">Check-in</span>
              <span className="picker-value">{checkInDate}</span>
            </div>

            <div 
              className="picker-cell"
              onClick={() => setShowDatePicker(!showDatePicker)}
              role="button"
              tabIndex={0}
            >
              <span className="picker-label">Checkout</span>
              <span className="picker-value">{checkOutDate}</span>
            </div>
          </div>

          <div 
            className="guest-cell"
            onClick={() => setShowGuestPopover(!showGuestPopover)}
            role="button"
            tabIndex={0}
          >
            <div>
              <div className="picker-label">Guests</div>
              <div className="picker-value">
                {totalGuests} guest{totalGuests > 1 ? 's' : ''}{infants > 0 ? `, ${infants} infant` : ''}
              </div>
            </div>
            <ChevronDown size={18} style={{ transform: showGuestPopover ? 'rotate(180deg)' : 'none' }} />
          </div>

          {/* Date Picker Popover */}
          {showDatePicker && (
            <div className="date-picker-popover">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Select Stay Length</span>
                <button type="button" onClick={() => setShowDatePicker(false)}>
                  <X size={16} />
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span style={{ fontSize: '0.875rem' }}>Number of nights:</span>
                <div className="counter-controls">
                  <button 
                    type="button" 
                    className="counter-btn"
                    onClick={() => handleNightChange(nights - 1)}
                    disabled={nights <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span style={{ fontWeight: 700 }}>{nights}</span>
                  <button 
                    type="button" 
                    className="counter-btn"
                    onClick={() => handleNightChange(nights + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Guest Selector Popover */}
          {showGuestPopover && (
            <div className="guest-popover">
              <div className="guest-row">
                <div>
                  <div className="guest-row-title">Adults</div>
                  <div className="guest-row-subtitle">Age 13+</div>
                </div>
                <div className="counter-controls">
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    disabled={adults <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{adults}</span>
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setAdults(Math.min(pricing.maxGuests - children, adults + 1))}
                    disabled={totalGuests >= pricing.maxGuests}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="guest-row">
                <div>
                  <div className="guest-row-title">Children</div>
                  <div className="guest-row-subtitle">Ages 2–12</div>
                </div>
                <div className="counter-controls">
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    disabled={children <= 0}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{children}</span>
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setChildren(Math.min(pricing.maxGuests - adults, children + 1))}
                    disabled={totalGuests >= pricing.maxGuests}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="guest-row">
                <div>
                  <div className="guest-row-title">Infants</div>
                  <div className="guest-row-subtitle">Under 2</div>
                </div>
                <div className="counter-controls">
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    disabled={infants <= 0}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{infants}</span>
                  <button 
                    type="button" 
                    className="counter-btn" 
                    onClick={() => setInfants(infants + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div style={{ textAlign: 'right', marginTop: '8px' }}>
                <button 
                  type="button" 
                  onClick={() => setShowGuestPopover(false)}
                  style={{ textDecoration: 'underline', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Primary Action Button */}
        <button type="button" className="reserve-btn" onClick={handleReserve}>
          Reserve
        </button>

        <p className="charge-note">You won't be charged yet</p>

        {/* Pricing Calculation Breakdown */}
        <div className="pricing-breakdown">
          <div className="breakdown-row underline-item">
            <span>{pricing.currency}{pricing.nightlyRate.toLocaleString()} × {nights} nights</span>
            <span>{pricing.currency}{baseTotal.toLocaleString()}</span>
          </div>

          <div className="breakdown-row underline-item">
            <span>Cleaning fee</span>
            <span>{pricing.currency}{pricing.cleaningFee}</span>
          </div>

          <div className="breakdown-row underline-item">
            <span>HavenScape service fee</span>
            <span>{pricing.currency}{pricing.serviceFee}</span>
          </div>

          <div className="breakdown-row underline-item">
            <span>Occupancy taxes ({pricing.occupancyTaxPercent}%)</span>
            <span>{pricing.currency}{taxAmount}</span>
          </div>

          <div className="breakdown-divider" />

          <div className="breakdown-total">
            <span>Total before taxes</span>
            <span>{pricing.currency}{grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="overlay-backdrop" onClick={() => setShowConfirmation(false)}>
          <div 
            className="amenities-modal-content animate-slide-up" 
            style={{ maxWidth: '540px' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Reservation confirmed"
          >
            <div className="modal-header-row">
              <h3>Reservation Held!</h3>
              <button type="button" onClick={() => setShowConfirmation(false)} style={{ padding: '6px', borderRadius: '50%' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <CheckCircle size={56} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Your stay at Villa Azure Horizon is requested</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
                Confirmation Code: <strong style={{ color: 'var(--text-primary)' }}>HVN-2026-MAL-9824</strong>
              </p>

              <div style={{
                backgroundColor: 'var(--background)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '0.9rem'
              }}>
                <div><strong>Dates:</strong> {checkInDate} to {checkOutDate} ({nights} nights)</div>
                <div><strong>Guests:</strong> {totalGuests} Guests ({adults} Adults, {children} Children)</div>
                <div><strong>Total Amount:</strong> {pricing.currency}{grandTotal.toLocaleString()}</div>
                <div><strong>Host:</strong> Elena Rostova</div>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => setShowConfirmation(false)}
              style={{
                backgroundColor: 'var(--primary)',
                color: '#fff',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '1rem',
                width: '100%'
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
