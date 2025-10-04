import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

/*
Layout.jsx
- Top-level page wrapper used on every page.
- Provides consistent header and footer and a main content container.
- Accepts children so pages decide what goes in the main area.
*/

export default function Layout({ children }) {
  return (
    // semantic <div> as page root. You could use <main> around children but header/footer are outside.
    <div className="layout">
      {/* Header at top (sticky behavior can be added) */}
      <Header />

      {/* Main content area grows to fill remaining vertical space */}
      <main className="layout__main">
        {children}
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
