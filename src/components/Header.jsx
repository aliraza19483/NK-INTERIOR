import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">
        <span className="logo-main">Elite </span> Interior
      </div>

      <div className="header-menu">
        <span className="header-link">Home</span>
        <span className="header-link">About</span>
        <span className="header-link">Design-Idea</span>
        <span className="header-link">Contact</span>
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
          <span className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</span>
          <span className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</span>
          <span className="mobile-link" onClick={() => setIsMenuOpen(false)}>Design-Idea</span>
          <span className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
