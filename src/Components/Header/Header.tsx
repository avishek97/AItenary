// Header.jsx
import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Explore");

  const navItems = [
    {
        name: 'Explore',
        path: '/explore'
    },
    {
        name: 'Account',
        path: '/account'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
  ];

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">✈</span>
          <h2 className="title">AItenary</h2>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={() => (activeTab === item.name ? "active-link" : "")}
              onClick={() => {    
                setActiveTab(item.name);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="right-section">
          {/* Heart */}
          <button className="icon-btn">❤</button>

          {/* Profile */}
          <div className="profile">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
            />
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;