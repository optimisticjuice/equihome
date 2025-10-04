import '../styles/App.scss'
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";
import SellForm from "../components/SellForm";
// NOTE: make sure you import your compiled SASS somewhere in your entry file, e.g.:
// import "./styles/styles.scss";

/*
App.jsx
- Top-level single-page MVP.
- Uses semantic classNames (no Tailwind). Style everything from styles.scss.
- Inline comments explain the purpose of each section and the CSS hooks to style.
*/

export default function App() {
  // sample data for testimonials and pricing; for MVP this is hardcoded
  const testimonials = [
    { name: "Jenny K.", quote: "Sold in 7 days and got a fair price." },
    { name: "Marcus L.", quote: "Fast, clear process — no surprises." },
    { name: "Priya S.", quote: "Helpful team and quick valuation." }
  ];

  const pricing = [
    { title: "Basic", price: "Free", features: ["Free valuation", "Standard listing"], ctaHref: "#sell" },
    { title: "Premium", price: "$499", features: ["Featured listing", "Professional photos"], ctaHref: "#sell" }
  ];

  return (
    // Layout wraps header/footer and centers content
    <Layout>
      {/* HERO (top) */}
      {/* Hero component should render the hero area. It should use semantic class names too. */}
      <Hero />

      {/* HOW IT WORKS - simple static section */}
      {/* Use .section for vertical spacing and .container to center content */}
      <section id="how" className="section">
        <div className="container">
          <h2 className="heading-xl">How it works</h2>
          {/* Use .list--spaced for nicely spaced list items */}
          <ol className="list list--spaced">
            <li>Submit property details with a few quick fields.</li>
            <li>We contact you within 24 hours for a valuation call.</li>
            <li>Choose an option and move forward — simple and transparent.</li>
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section section--light">
        <div className="container">
          <h2 className="heading-xl">What sellers say</h2>

          {/* grid--responsive-3 will show 1 column on small screens and 3 on wider screens */}
          <div className="grid grid--responsive-3 gap--md mt--sm">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} quote={t.quote} photo={null} />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="heading-xl">Pricing & Services</h2>

          {/* grid--responsive-2 shows 1 column on mobile, 2 on wider screens */}
          <div className="grid grid--responsive-2 gap--md mt--sm">
            {pricing.map((p, i) => (
              <PricingCard key={i} title={p.title} price={p.price} features={p.features} ctaHref={p.ctaHref} />
            ))}
          </div>
        </div>
      </section>

      {/* SELL FORM (core conversion area) */}
      {/* We use a two-column layout: left = form + intro, right = supporting content */}
      <section className="section">
        <div className="container grid grid--responsive-2 gap--lg items-start">
          <div>
            <h2 className="heading-xl">Ready to sell?</h2>
            <p className="text-muted">Start here with a free, no-obligation valuation.</p>

            {/* SellForm is the form component we built.
                Ensure SellForm uses matching semantic classNames for form elements. */}
            <div className="mt--sm">
              <SellForm />
            </div>
          </div>

          {/* Right column: optional supporting content */}
          <aside className="sidebar">
            <div className="card">
              <h3 className="card__title">Why choose us</h3>
              <ul className="list list--tight">
                <li>Fast contact</li>
                <li>Transparent fees</li>
                <li>Local expertise</li>
              </ul>
            </div>

            <div className="card mt--sm">
              <h3 className="card__title">FAQ</h3>
              <div className="text-sm text-muted">We’ll never charge to value your property.</div>
            </div>
          </aside>
        </div>
      </section>

      {/* ABOUT / CONTACT short */}
      <section id="about" className="section section--light">
        <div className="container">
          <h2 className="heading-xl">About us</h2>
          <p className="text-muted">We're a small local team focused on fast, transparent home sales.</p>
        </div>
      </section>
    </Layout>
  );
}
