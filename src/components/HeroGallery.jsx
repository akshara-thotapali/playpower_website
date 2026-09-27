import React from 'react';
import { Grid } from 'lucide-react';
import './HeroGallery.css';

export default function HeroGallery({ images, onOpenPhotoTour, onOpenLightbox }) {
  if (!images || images.length === 0) return null;

  const mainImage = images[0];
  const subImages = images.slice(1, 5);

  return (
    <section className="hero-gallery-container" aria-label="Photo gallery hero">
      <div className="hero-gallery-grid">
        {/* Main large photo */}
        <div 
          className="hero-main-photo-wrapper"
          onClick={() => onOpenPhotoTour(0)}
          role="button"
          tabIndex={0}
          aria-label={`Open photo gallery, main view: ${mainImage.title}`}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(0)}
        >
          <img 
            src={mainImage.url} 
            alt={mainImage.alt || mainImage.title} 
            className="gallery-img"
          />
        </div>

        {/* 4 smaller photos */}
        <div className="hero-sub-grid">
          {subImages.map((img, idx) => (
            <div 
              key={img.id || idx}
              className="hero-sub-photo-wrapper"
              onClick={() => onOpenPhotoTour(idx + 1)}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${idx + 2}: ${img.title}`}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenPhotoTour(idx + 1)}
            >
              <img 
                src={img.url} 
                alt={img.alt || img.title} 
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating button */}
      <button 
        type="button" 
        className="show-all-photos-btn"
        onClick={() => onOpenPhotoTour(0)}
        aria-label="Show all photos in photo tour"
      >
        <Grid size={16} />
        <span>Show all {images.length} photos</span>
      </button>
    </section>
  );
}
