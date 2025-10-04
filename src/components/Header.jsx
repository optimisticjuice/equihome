import React, { useState } from "react";
import CTAButton from "./CTAButton";
import "./Header.scss";

/*
Header.jsx
- Shows logo, nav links and a primary call-to-action.
- Example of simple responsive state: mobile menu toggle using useState.
- useState is used to manage UI state in functional components.
*/

export default function Header() {
  // mobile menu open/closed state
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo area */}
        <div className="header__logo">
          {/* A simple text logo; replace with <img> if you have one */}
          <span className="header__brand">EquiHome</span>
          <span className="header__tagline">Sell faster. Close easier.</span>
        </div>

        {/* Desktop nav (hidden on small screens) */}
        <nav className="header__nav">
          <a href="#how" className="header__link">How it works</a>
          <a href="#pricing" className="header__link">Pricing</a>
          <a href="#about" className="header__link">About</a>
          {/* Primary CTA uses our reusable button */}
          <CTAButton href="#sell">Get Free Valuation</CTAButton>
        </nav>

        {/* Mobile menu button */}
        <div className="header__mobile-toggle">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="header__menu-button"
          >
            {/* Simple icon text; replace with svg if desired */}
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="header__mobile-menu">
          <div className="header__mobile-links">
            <a href="#how" className="header__mobile-link">How it works</a>
            <a href="#pricing" className="header__mobile-link">Pricing</a>
            <a href="#about" className="header__mobile-link">About</a>
            <CTAButton href="#sell">Get Free Valuation</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
