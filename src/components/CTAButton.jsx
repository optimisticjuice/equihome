import React from "react";
import "./CTAButton.scss";

/*
CTAButton.jsx
- Reusable primary CTA used across header, hero, pricing etc.
- Props:
  - href: anchor target (string). If provided, renders as <a>.
  - onClick: click handler (optional).
  - children: button text or elements.
- This keeps CTA styling consistent across the app.
*/

export default function CTAButton({ href, onClick, children }) {
  // If href provided, render anchor for in-page navigation or external links.
  if (href) {
    return (
      <a
        href={href}
        className="cta-button"
      >
        {children}
      </a>
    );
  }

  // Otherwise render a normal button element.
  return (
    <button
      onClick={onClick}
      className="cta-button"
    >
      {children}
    </button>
  );
}
