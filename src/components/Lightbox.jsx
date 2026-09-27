import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ images, currentIndex, onIndexChange, onClose }) {
  const previousFocusRef = useRef(document.activeElement);
  const closeBtnRef = useRef(null);

  const total = images.length;
  const currentImage = images[currentIndex] || images[0];

  useEffect(() => {
    // Focus lock
    closeBtnRef.current?.focus();
    document.body.classList.add('scroll-locked');

    return () => {
      document.body.classList.remove('scroll-locked');
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  const handlePrev = () => {
    onIndexChange((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onIndexChange((currentIndex + 1) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, total, onClose]);

  return (
    <div 
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo lightbox: ${currentImage.title}`}
    >
      {/* Top Bar */}
      <div className="lightbox-header">
        <div className="lightbox-counter">
          {currentIndex + 1} / {total}
        </div>

        <button 
          ref={closeBtnRef}
          type="button" 
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close single photo lightbox"
        >
          <X size={18} />
          <span>Close</span>
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="lightbox-stage">
        <button 
          type="button" 
          className="lightbox-nav-btn prev"
          onClick={handlePrev}
          aria-label="Previous image (Left arrow)"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="lightbox-img-wrapper">
          <img 
            key={currentImage.id || currentIndex}
            src={currentImage.url} 
            alt={currentImage.alt || currentImage.title}
            className="lightbox-active-img" 
          />
        </div>

        <button 
          type="button" 
          className="lightbox-nav-btn next"
          onClick={handleNext}
          aria-label="Next image (Right arrow)"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Footer Info */}
      <div className="lightbox-footer">
        <div className="lightbox-title">{currentImage.title}</div>
        <div className="lightbox-category">{currentImage.category}</div>
      </div>
    </div>
  );
}
