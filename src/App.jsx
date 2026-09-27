import React, { useState } from 'react';
import Header from './components/Header';
import PropertyHeader from './components/PropertyHeader';
import HeroGallery from './components/HeroGallery';
import PropertyDetails from './components/PropertyDetails';
import Amenities from './components/Amenities';
import HostSection from './components/HostSection';
import BookingCard from './components/BookingCard';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';

import { propertyData } from './data/property';
import { Star } from 'lucide-react';
import './App.css';

export default function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Open photo tour view at index
  const handleOpenPhotoTour = (index = 0) => {
    setSelectedImageIndex(index);
    setShowPhotoTour(true);
  };

  // Open single image lightbox directly from photo tour
  const handleOpenLightbox = (index = 0) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  return (
    <div className="app-container">
      {/* Site Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="main-content">
        <div className="container">
          {/* Listing Title & Meta Row */}
          <PropertyHeader property={propertyData} />

          {/* 5-Photo Hero Grid */}
          <HeroGallery 
            images={propertyData.images}
            onOpenPhotoTour={handleOpenPhotoTour}
          />

          {/* 2-Column Desktop Grid Layout */}
          <div className="property-body-grid">
            {/* Left Column: Specs, Details, Amenities, Host, Reviews */}
            <div className="property-left-column">
              <PropertyDetails property={propertyData} />

              <Amenities amenities={propertyData.amenities} />

              <HostSection 
                host={propertyData.host} 
                rating={propertyData.rating}
                reviewCount={propertyData.reviewCount}
              />

              {/* Reviews Summary */}
              <section id="reviews" className="reviews-section" aria-label="Guest reviews">
                <div className="reviews-header-badge">
                  <Star size={24} fill="var(--primary)" color="var(--primary)" />
                  <span>{propertyData.rating} · {propertyData.reviewCount} reviews</span>
                </div>

                <div className="reviews-grid">
                  {propertyData.reviews.map((rev) => (
                    <div key={rev.id} className="review-card">
                      <div className="review-user-row">
                        <img src={rev.avatar} alt={rev.userName} className="review-user-avatar" />
                        <div>
                          <div className="review-user-name">{rev.userName}</div>
                          <div className="review-date">{rev.date}</div>
                        </div>
                      </div>
                      <p className="review-comment">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Sticky Booking Sidebar */}
            <div className="property-right-column">
              <BookingCard 
                pricing={propertyData.pricing}
                rating={propertyData.rating}
                reviewCount={propertyData.reviewCount}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Screen Photo Tour View */}
      {showPhotoTour && (
        <PhotoTour 
          images={propertyData.images}
          onClose={() => setShowPhotoTour(false)}
          onSelectImage={(idx) => handleOpenLightbox(idx)}
        />
      )}

      {/* Full Screen Lightbox Viewer */}
      {showLightbox && (
        <Lightbox 
          images={propertyData.images}
          currentIndex={selectedImageIndex}
          onIndexChange={(idx) => setSelectedImageIndex(idx)}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  );
}
