import React, { useState, useEffect } from 'react';
import { Compass, Globe, Menu, User, Sparkles, Heart, HelpCircle, LogIn } from 'lucide-react';
import SearchBar from './SearchBar';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <a href="#" className="header-brand" aria-label="HavenScape Home">
          <Compass className="brand-icon" strokeWidth={2.5} />
          <span>HavenScape</span>
        </a>

        {/* Search Bar */}
        <SearchBar />

        {/* User Controls */}
        <div className="header-user-nav">
          <button type="button" className="host-link">
            HavenScape your home
          </button>
          
          <button type="button" className="globe-btn" aria-label="Choose a language and currency">
            <Globe size={18} />
          </button>

          <button 
            type="button" 
            className="user-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Main user menu"
          >
            <Menu size={18} />
            <div className="user-avatar-placeholder">
              <User size={18} />
            </div>
          </button>

          {/* Menu Dropdown */}
          {menuOpen && (
            <div className="menu-dropdown" role="menu">
              <button className="menu-item" role="menuitem">
                <LogIn size={16} /> Sign up
              </button>
              <button className="menu-item" role="menuitem">
                Log in
              </button>
              <div className="menu-divider" />
              <button className="menu-item" role="menuitem">
                <Sparkles size={16} /> HavenScape your home
              </button>
              <button className="menu-item" role="menuitem">
                <Heart size={16} /> Wishlists
              </button>
              <button className="menu-item" role="menuitem">
                <HelpCircle size={16} /> Help Center
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
