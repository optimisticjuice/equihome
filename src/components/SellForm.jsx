import React, { useState } from "react";
import "./SellForm.scss";

/*
SellForm.jsx
- Core lead capture form for sellers.
- Controlled inputs: each input is tied to local state via useState.
- Validation: minimal inline checks (required + email pattern).
- Submission: POSTs to Formspree (or similar) via fetch.
- Accessibility: uses labels and aria-live for status messages.
- NOTE: Replace FORM_ENDPOINT with your actual Formspree or Netlify endpoint.
*/

const FORM_ENDPOINT = "REPLACE_WITH_FORMSPREE_ENDPOINT"; // <-- replace this

export default function SellForm() {
  // Form fields local state (controlled components)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errors, setErrors] = useState({}); // field-specific validation errors

  // Simple validators (very small, pure functions)
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    // very simple email regex for MVP
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email && !emailRegex.test(email)) e.email = "Please enter a valid email.";
    if (!phone.trim()) e.phone = "Phone is required.";
    if (!address.trim()) e.address = "Property address is required.";
    return e;
  };

  // Form submit handler
  const handleSubmit = async (ev) => {
    ev.preventDefault(); // prevent full page reload
    setErrorMsg(null);
    const v = validate();
    setErrors(v);

    // stop if validation errors exist
    if (Object.keys(v).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // build form payload for Formspree (or your endpoint)
    const payload = {
      name,
      email,
      phone,
      address,
      notes,
      // you can add hidden inputs like source=homepage to track leads
    };

    try {
      // POST as JSON — Formspree accepts form data in various formats; check docs
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // some form endpoints require Accept: application/json
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // error path: read body text if available
        const text = await res.text().catch(() => null);
        throw new Error(text || "Submission failed");
      }

      // success path
      setSuccess(true);
      // optional: clear fields or keep them (here we clear)
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setNotes("");
    } catch (err) {
      // show friendly message
      setErrorMsg("There was a problem submitting the form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sell" className="sell-form">
      <h2 className="sell-form__heading">Get a free valuation</h2>
      <p className="sell-form__description">Fill this quick form and we’ll contact you within 24 hours.</p>

      {/* aria-live region to announce success/failure to screen readers */}
      <div aria-live="polite" className="sell-form__status">
        {success ? "Form submitted successfully" : ""}
      </div>

      {success ? (
        // Show a friendly success state after a successful submission
        <div className="sell-form__success">
          <strong className="sell-form__success-title">Thanks — we’ll contact you shortly.</strong>
          <div className="sell-form__success-message">An agent will call within 24 hours.</div>
        </div>
      ) : (
        // The form itself
        <form onSubmit={handleSubmit} className="sell-form__form">
          {/* Name */}
          <div className="sell-form__field">
            <label htmlFor="name" className="sell-form__label">Full name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`sell-form__input${errors.name ? " sell-form__input--error" : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <div className="sell-form__error">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="sell-form__field">
            <label htmlFor="email" className="sell-form__label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`sell-form__input${errors.email ? " sell-form__input--error" : ""}`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <div className="sell-form__error">{errors.email}</div>}
          </div>

          {/* Phone */}
          <div className="sell-form__field">
            <label htmlFor="phone" className="sell-form__label">Phone</label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`sell-form__input${errors.phone ? " sell-form__input--error" : ""}`}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <div className="sell-form__error">{errors.phone}</div>}
          </div>

          {/* Address */}
          <div className="sell-form__field">
            <label htmlFor="address" className="sell-form__label">Property Address</label>
            <input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`sell-form__input${errors.address ? " sell-form__input--error" : ""}`}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && <div className="sell-form__error">{errors.address}</div>}
          </div>

          {/* Notes */}
          <div className="sell-form__field">
            <label htmlFor="notes" className="sell-form__label">Notes (optional)</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
              className="sell-form__textarea"
            />
          </div>

          {/* Error message area */}
          {errorMsg && <div className="sell-form__error-message">{errorMsg}</div>}

          {/* Submit button */}
          <div className="sell-form__actions">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`sell-form__submit${isSubmitting ? " sell-form__submit--loading" : ""}`}
            >
              {isSubmitting ? "Submitting..." : "Get my free valuation"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
