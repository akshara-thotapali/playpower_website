import React from 'react';
import { Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-columns-grid">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">HavenCover Protection</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Hosting</h4>
            <ul>
              <li><a href="#">HavenScape your home</a></li>
              <li><a href="#">Cover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Host responsibly</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>HavenScape</h4>
            <ul>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Gift cards</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#">Malibu Luxury Homes</a></li>
              <li><a href="#">Maui Coastal Villas</a></li>
              <li><a href="#">Aspen Mountain Chalets</a></li>
              <li><a href="#">Amalfi Cliffside Retreats</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-links-inline">
            <span>© 2026 HavenScape, Inc.</span>
            <span>·</span>
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#">Sitemap</a>
            <span>·</span>
            <a href="#">Company Details</a>
          </div>

          <div className="footer-social-group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
              <Globe size={16} />
              <span>English (US)</span>
            </div>
            <div style={{ fontWeight: 600 }}>$ USD</div>
            {/* Custom SVG Social Icons */}
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
