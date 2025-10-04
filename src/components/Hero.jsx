import React from "react";
import CTAButton from "./CTAButton";
import "./Hero.scss";

/*
Hero.jsx
- The top section of the homepage: headline, subheadline and CTAs.
- Use semantic headings and clear CTA text for conversions.
*/

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Left: text */}
        <div className="hero__content">
          <h1 className="hero__heading">
            Sell your home faster — with less hassle
          </h1>
          <p className="hero__subheading">
            Free valuation, fast contact, and transparent fees. Submit your property and we’ll contact you within 24 hours — no obligation.
          </p>

          <div className="hero__cta-group">
            {/* Primary CTA scrolls to form */}
            <CTAButton href="#sell">Get My Free Valuation</CTAButton>
            {/* Secondary CTA */}
            <a href="#how" className="hero__secondary-cta">
              How it works
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="hero__trust-strip">
            <div className="hero__trust-item">Average contact time: <strong className="hero__trust-highlight">3 hours</strong></div>
            <div className="hero__trust-divider">•</div>
            <div className="hero__trust-item">Over <strong className="hero__trust-highlight">400+</strong> sellers helped</div>
          </div>
        </div>

        {/* Right: illustrative image (replace with actual asset) */}
        <div className="hero__media">
          <div className="hero__media-placeholder">
            {/* Placeholder box — replace with <img src="/images/hero.jpg" alt="..." /> */}
            <img src="/images/heroimg.png" className="hero__media-img" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
}
