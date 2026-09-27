import React, { useState } from 'react';
import { 
  Waves, Sun, Flame, Wifi, Laptop, Utensils, Volume2, Zap, Car, 
  Bath, ShowerHead, Sparkles, Shirt, Wind, BedDouble, SunDim, 
  Folder, ShieldCheck, Bell, HeartPulse, X, Check 
} from 'lucide-react';
import './Amenities.css';

const ICON_COMPONENTS = {
  Waves, Sun, Flame, Wifi, Laptop, Utensils, Volume2, Zap, Car,
  Bath, ShowerHead, Sparkles, Shirt, Wind, BedDouble, SunDim,
  Folder, ShieldCheck, Bell, HeartPulse
};

export default function Amenities({ amenities }) {
  const [showModal, setShowModal] = useState(false);

  // Take top 8 popular items for preview
  const popularCategory = amenities.find(c => c.category === 'Popular') || amenities[0];
  const previewItems = popularCategory.items.slice(0, 8);

  const getIcon = (iconName) => {
    const IconComp = ICON_COMPONENTS[iconName] || Check;
    return <IconComp size={22} color="var(--text-primary)" />;
  };

  return (
    <section className="amenities-section" aria-label="Property amenities">
      <h3>What this place offers</h3>

      <div className="amenities-grid">
        {previewItems.map((item, idx) => (
          <div key={idx} className="amenity-item">
            {getIcon(item.icon)}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <button 
        type="button" 
        className="show-all-amenities-btn"
        onClick={() => setShowModal(true)}
      >
        Show all 32 amenities
      </button>

      {/* Modal Dialog for All Amenities */}
      {showModal && (
        <div className="overlay-backdrop" onClick={() => setShowModal(false)}>
          <div 
            className="amenities-modal-content animate-slide-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="All property amenities"
          >
            <div className="modal-header-row">
              <h3>What this place offers</h3>
              <button 
                type="button" 
                onClick={() => setShowModal(false)}
                aria-label="Close amenities modal"
                style={{ padding: '6px', borderRadius: '50%' }}
              >
                <X size={20} />
              </button>
            </div>

            {amenities.map((cat, cIdx) => (
              <div key={cIdx} className="amenity-category-block">
                <h4>{cat.category}</h4>
                <div className="category-items-list">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="amenity-item">
                      {getIcon(item.icon)}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
