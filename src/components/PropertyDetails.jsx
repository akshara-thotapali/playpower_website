import React, { useState } from 'react';
import { Award, Sparkles, KeyRound, CalendarX, ShieldCheck, ChevronRight, BedDouble } from 'lucide-react';
import './PropertyDetails.css';

const ICON_MAP = {
  Award: Award,
  Sparkles: Sparkles,
  KeyRound: KeyRound,
  CalendarX: CalendarX
};

export default function PropertyDetails({ property }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { host, specs, highlights, description } = property;

  return (
    <div className="property-details-container">
      {/* Host Specs Header */}
      <div className="host-specs-header">
        <div className="host-specs-info">
          <h2>Entire villa hosted by {host.name}</h2>
          <p className="specs-subtitle">
            {specs.guests} guests · {specs.bedrooms} bedrooms · {specs.beds} beds · {specs.baths} baths
          </p>
        </div>

        <div className="host-avatar-ring">
          <img 
            src={host.avatar} 
            alt={`Host ${host.name}`} 
            className="host-avatar-img"
          />
          {host.isSuperhost && (
            <div className="superhost-badge-dot" title="Superhost">
              <Award size={12} />
            </div>
          )}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="highlights-list">
        {highlights.map((item) => {
          const IconComp = ICON_MAP[item.iconName] || Award;
          return (
            <div key={item.id} className="highlight-item">
              <div className="highlight-icon-box">
                <IconComp size={24} />
              </div>
              <div className="highlight-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Protection Assurance Banner */}
      <div className="protection-banner">
        <h3>
          Haven<span>Cover</span> Protection Included
        </h3>
        <p>
          Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
        </p>
      </div>

      {/* Description */}
      <div className="description-section">
        <p className={`description-text ${!isExpanded ? 'collapsed' : ''}`}>
          {description}
        </p>

        <button 
          type="button" 
          className="show-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight size={16} style={{ transform: isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
        </button>
      </div>

      {/* Sleeping Arrangements */}
      <div className="sleeping-arrangements-section">
        <h3>Where you'll sleep</h3>
        <div className="beds-grid">
          <div className="bed-card">
            <BedDouble size={24} />
            <h4>Bedroom 1 (Master)</h4>
            <p>1 king bed · Ocean Balcony</p>
          </div>
          <div className="bed-card">
            <BedDouble size={24} />
            <h4>Bedroom 2</h4>
            <p>1 king bed · Coastal View</p>
          </div>
          <div className="bed-card">
            <BedDouble size={24} />
            <h4>Bedroom 3 & 4</h4>
            <p>2 queen beds, 1 day bed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
