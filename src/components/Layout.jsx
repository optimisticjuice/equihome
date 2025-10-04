/*
 * Layout.jsx
 * 
 * ARCHITECTURAL PATTERN: Layout Wrapper Component
 * This is a "presentational wrapper" that provides consistent page structure.
 * It's used once at the app root level and wraps all page content.
 * 
 * WHY THIS PATTERN:
 * - Ensures every page has the same header/footer without repetition
 * - Creates a "sticky footer" layout (footer always at bottom, even on short pages)
 * - Provides a single place to add app-wide features (navigation, announcements, etc.)
 * 
 * REACT CONCEPT: children prop
 * - {children} is a special prop that contains whatever is nested inside <Layout>
 * - Example: <Layout><HomePage /></Layout> - HomePage becomes "children"
 * - This makes Layout reusable for any page content
 */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss"; // Imports component-specific styles

/*
 * PROPS DESTRUCTURING: { children }
 * Instead of: function Layout(props) { const children = props.children; }
 * We destructure in the parameter: function Layout({ children })
 * This is a JavaScript ES6 feature for cleaner code
 */
export default function Layout({ children }) {
  return (
    // ROOT LAYOUT CONTAINER
    // BEM naming: "layout" is the block, layout__main is an element
    // This div uses flexbox (set in CSS) to create sticky footer behavior
    <div className="layout">
      
      {/* HEADER COMPONENT - Navigation and branding */}
      {/* Renders at the top of every page */}
      {/* Sticky positioning is handled in Header.scss */}
      <Header />

      {/* MAIN CONTENT AREA */}
      {/* Semantic <main> tag - tells browsers/screen readers this is primary content */}
      {/* flex: 1 in CSS makes this grow to fill space, pushing footer to bottom */}
      {/* {children} - This is where page-specific content gets rendered */}
      <main className="layout__main">
        {children}
      </main>

      {/* FOOTER COMPONENT - Copyright, contact info */}
      {/* Always renders at the bottom, after all content */}
      <Footer />
    </div>
  );
}
