import React from "react";
import "./TestimonialCard.scss";

/*
TestimonialCard.jsx
- Simple presentational component for testimonials.
- Props:
  - photo (src string)
  - name (string)
  - quote (string)
- Keep pure (no side effects) — presentational components should only render props.
*/

export default function TestimonialCard({ photo, name, quote }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__inner">
        <div className="testimonial-card__photo">
          {/* Replace with <img src={photo} alt={name} /> in real code */}
          <span className="testimonial-card__photo-placeholder">img</span>
        </div>
        <div className="testimonial-card__content">
          <div className="testimonial-card__name">{name}</div>
          <div className="testimonial-card__quote">"{quote}"</div>
        </div>
      </div>
    </div>
  );
}
