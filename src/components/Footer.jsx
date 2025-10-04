import React from "react";
import "./Footer.scss";

/*
Footer.jsx
- Simple footer with links and contact info.
- Keep legal and contact info visible for trust.
*/

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__legal">
          © {year} EquiHome — licensed brokerage (example). All rights reserved.
        </div>

        <div className="footer__contact">
          <a href="mailto:hi@equihome.example" className="footer__contact-link">hi@equihome.example</a>
          <a href="tel:+1234567890" className="footer__contact-link">+1 (234) 567-890</a>
        </div>
      </div>
    </footer>
  );
}
