import React from "react";
import "./PricingCard.scss";

/*
PricingCard.jsx
- Small card component to show pricing tiers.
- Props:
  - title (string)
  - price (string; e.g., "Free" or "$999")
  - features (array of strings)
  - ctaHref (string)
*/

export default function PricingCard({ title, price, features = [], ctaHref }) {
  return (
    <div className="pricing-card">
      <h3 className="pricing-card__title">{title}</h3>
      <div className="pricing-card__price">{price}</div>

      <ul className="pricing-card__features">
        {features.map((f, i) => (
          <li key={i} className="pricing-card__feature">
            <span className="pricing-card__feature-icon">•</span>
            <span className="pricing-card__feature-text">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="pricing-card__cta"
      >
        Get this
      </a>
    </div>
  );
}
