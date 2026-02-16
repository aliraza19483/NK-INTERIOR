import React,{useState} from "react";
function Header() {
  const [open ,setOpen]=useState(false);
  return (
    <div className="header">
      <div className="header-logo">
        <span className="logo-main">Elite </span> Interior
      </div>

      <div className="header-menu">
        <span className="header-home">Home</span>
        <span className="header-about">About</span>
        <span className="header-design">Design-Idea</span>
        <span className="header-contact">Contact</span>
      </div>

      <div className="header-icon">
        <img src="src/assets/HeaderIcons/profile.png" alt="profile" 
        onClick={()=>setOpen(!open)}
        />
        {open &&(
          <div className="profile-dropdown">
            <span>Home</span>
            <span>About</span>
            <span>Design-Idea</span>
            <span>Contact</span>
          </div>
        )}


      </div>
    </div>
  );
}

export default Header;
