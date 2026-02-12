import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <span
          className="logo-main"
        >
          Azhar
        </span>
        <span className="logo-sub">Elite</span>
        <span className="logo-sub">Interior</span>
      </div>

      <div className="header-menu">
        <span className="header-home">Home</span>
        <span className="header-about">About</span>
        <span className="header-design">Design-Idea</span>
        <span className="header-contact">Contact</span>
      </div>

      <div className="header-icon">
        <img src="src/assets/HeaderIcons/profile.png" alt="profile" />
      </div>
    </div>
  );
}

export default Header;
