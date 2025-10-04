/*
 * Header.jsx
 * 
 * NAVIGATION COMPONENT WITH MOBILE MENU
 * Provides site-wide navigation with responsive behavior:
 * - Desktop: horizontal nav bar with links and CTA button
 * - Mobile: hamburger menu that expands to show navigation
 * 
 * REACT STATE MANAGEMENT PATTERN:
 * Uses useState hook to toggle mobile menu visibility
 * This demonstrates local component state (state that doesn't need to be shared)
 * 
 * KEY CONCEPTS:
 * - useState: React hook for adding state to functional components
 * - Conditional rendering: {condition && <Element>} pattern
 * - Event handlers: onClick to respond to user interactions
 * - Responsive design: Different UI based on screen size (via CSS media queries)
 */

import React, { useState } from "react";
import CTAButton from "./CTAButton";
import "./Header.scss";

export default function Header() {
  /*
   * useState HOOK - Managing Mobile Menu State
   * 
   * SYNTAX: const [value, setValue] = useState(initialValue);
   * - First item (open): the current state value
   * - Second item (setOpen): function to update the state
   * - useState(false): initial state is false (menu closed)
   * 
   * WHY THIS WORKS:
   * - When setOpen is called, React re-renders the component with new state
   * - The component "remembers" the state between renders
   * - Each component instance has its own independent state
   * 
   * ALTERNATIVE APPROACH (without hooks):
   * - Class components used this.state and this.setState
   * - Hooks are modern, cleaner, and don't require classes
   */
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        
        {/* LOGO SECTION */}
        {/* Contains brand name and tagline */}
        <div className="header__logo">
          <span className="header__brand">EquiHome</span>
          <span className="header__tagline">Sell faster. Close easier.</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        {/* This nav is hidden on mobile via CSS (display: none) */}
        {/* At tablet breakpoint, it becomes visible (display: flex) */}
        {/* Using CSS instead of JavaScript for this keeps performance high */}
        <nav className="header__nav">
          {/* Anchor links with href="#section" scroll to page sections */}
          {/* These work because App.jsx has elements with matching id attributes */}
          <a href="#how" className="header__link">How it works</a>
          <a href="#pricing" className="header__link">Pricing</a>
          <a href="#about" className="header__link">About</a>
          
          {/* Component composition: reusing CTAButton for consistent styling */}
          <CTAButton href="#sell">Get Free Valuation</CTAButton>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        {/* Visible only on mobile (hidden on desktop via CSS) */}
        <div className="header__mobile-toggle">
          <button
            /*
             * EVENT HANDLER: onClick with arrow function
             * 
             * SYNTAX: onClick={() => someFunction()}
             * - Arrow function: () => creates an inline function
             * - !open: logical NOT operator (flips true to false, false to true)
             * - setOpen(!open): updates state, triggering re-render
             * 
             * WHY ARROW FUNCTION:
             * We need to CALL setOpen with a parameter, not just reference it
             * onClick={setOpen} would pass the click event to setOpen (wrong!)
             * onClick={() => setOpen(!open)} calls it correctly with our value
             */
            onClick={() => setOpen(!open)}
            
            /* ACCESSIBILITY: aria-label */
            /* Screen readers announce this when button is focused */
            /* Important because the button only shows icons (no text) */
            aria-label="Toggle menu"
            
            className="header__menu-button"
          >
            {/*
             * CONDITIONAL RENDERING: Ternary Operator
             * 
             * SYNTAX: condition ? valueIfTrue : valueIfFalse
             * - Shows "✕" (close icon) when menu is open
             * - Shows "☰" (hamburger icon) when menu is closed
             * 
             * JSX evaluates JavaScript expressions inside {}
             * This updates automatically when 'open' state changes
             */}
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/*
       * CONDITIONAL RENDERING: && Operator
       * 
       * PATTERN: {condition && <Element>}
       * - If condition is true, Element is rendered
       * - If condition is false, nothing is rendered (null)
       * 
       * HOW IT WORKS:
       * - JavaScript && (logical AND) returns first falsy value OR last value
       * - false && <div> returns false, React renders nothing
       * - true && <div> returns <div>, React renders it
       * 
       * WHY NOT if/else:
       * - Can't use if statements directly in JSX (not expressions)
       * - Could use ternary (? :) but {open && ...} is cleaner when there's no "else"
       */}
      {open && (
        <div className="header__mobile-menu">
          <div className="header__mobile-links">
            {/* Same navigation links as desktop, styled differently */}
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
