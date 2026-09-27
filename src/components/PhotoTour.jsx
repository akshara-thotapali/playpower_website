import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import './PhotoTour.css';

export default function PhotoTour({ images, initialCategory = 'All', onClose, onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('scroll-locked');
    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Extract unique categories
  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Group images by category when 'All' is selected
  const groupedImages = activeCategory === 'All'
    ? categories.filter(c => c !== 'All').map(cat => ({
        category: cat,
        items: images.filter(img => img.category === cat)
      })).filter(group => group.items.length > 0)
    : [{ category: activeCategory, items: filteredImages }];

  return (
    <div 
      className="photo-tour-overlay"
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
    >
      {/* Sticky Header */}
      <div className="photo-tour-header">
        <button 
          type="button" 
          className="tour-close-btn"
          onClick={onClose}
          aria-label="Close photo tour"
        >
          <ChevronLeft size={18} />
          <span>Back to listing</span>
        </button>

        {/* Category Filter Tabs */}
        <div className="tour-category-pills" role="tablist">
          {categories.map((cat) => (
            <button 
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button 
          type="button" 
          onClick={onClose} 
          aria-label="Close photo tour"
          style={{ padding: '8px', borderRadius: '50%' }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Body Feed */}
      <div className="photo-tour-body">
        {groupedImages.map((group) => (
          <div key={group.category} className="tour-section-group">
            <h3 className="tour-section-title">{group.category}</h3>

            <div className="tour-images-masonry">
              {group.items.map((img) => {
                // Find global index in full images array
                const globalIndex = images.findIndex(i => i.id === img.id);
                return (
                  <div 
                    key={img.id}
                    className="tour-photo-card"
                    onClick={() => onSelectImage(globalIndex >= 0 ? globalIndex : 0)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo full screen: ${img.title}`}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectImage(globalIndex)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt || img.title} 
                      className="tour-photo-img" 
                    />
                    <div className="tour-photo-caption">
                      <h4>{img.title}</h4>
                      <p>{img.category}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
