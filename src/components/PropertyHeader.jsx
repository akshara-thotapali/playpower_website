import React, { useState } from 'react';
import { Star, Share, Heart, Award, Check } from 'lucide-react';
import './PropertyHeader.css';

export default function PropertyHeader({ property }) {
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!');
  };

  const handleToggleSave = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    showToast(newState ? 'Saved to your Wishlist!' : 'Removed from Wishlist');
  };

  return (
    <section className="property-header-section" aria-label="Property summary header">
      <h1 className="property-title-h1">{property.title}</h1>

      <div className="property-meta-row">
        <div className="property-meta-left">
          {property.isGuestFavorite && (
            <div className="badge-favorite">
              <Award size={16} />
              <span>{property.badgeText}</span>
            </div>
          )}

          <div className="rating-badge">
            <Star size={16} className="star-icon" />
            <span>{property.rating}</span>
          </div>

          <span className="dot-separator">•</span>

          <a href="#reviews" className="review-link">
            {property.reviewCount} reviews
          </a>

          <span className="dot-separator">•</span>

          <span className="location-link">{property.location}</span>
        </div>

        <div className="property-actions-right">
          <button type="button" className="action-btn" onClick={handleShare} aria-label="Share property listing">
            <Share size={16} />
            <span>Share</span>
          </button>

          <button 
            type="button" 
            className="action-btn" 
            onClick={handleToggleSave} 
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          >
            <Heart size={16} className={isSaved ? 'heart-active' : ''} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="toast-notification" role="status">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Check size={16} color="#10B981" />
            {toastMessage}
          </div>
        </div>
      )}
    </section>
  );
}
