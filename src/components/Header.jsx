import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  function About() {


  }

  return (
    <nav className="header">
      <div className="header-logo">
        <span className="logo-main">NK </span>CONTRACTOR
      </div>

      <div className="header-menu">
        <button onClick={() => { document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) }}>Home</button>
        <button onClick={() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>About</button>
        <button onClick={() => { document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }) }}>Portfolio</button>
        <button onClick={() => { document.getElementById('design-idea').scrollIntoView({ behavior: 'smooth' }) }}>Design-Idea</button>
        <button onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact</button>
      </div>

      <div className="header-actions">
        {/* Profile/Profile Icon */}
        <div className="header-icon">
          <img
            src="src/assets/HeaderIcons/profile.png"
            alt="profile"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          />
          {isProfileOpen && (
            <div className="profile-dropdown">
              <span>My Dashboard</span>
              <span>Settings</span>
              <span className="logout">Logout</span>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <span className="mobile-link" onClick={() => { document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Home</span>
          <span className="mobile-link" onClick={() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>About</span>
          <span className="mobile-link" onClick={() => { document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Portfolio</span>
          <span className="mobile-link" onClick={() => { document.getElementById('design-idea').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Design-Idea</span>
          <span className="mobile-link" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
