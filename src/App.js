import React, { useState, useEffect } from "react";
import "./styles.css";

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="logo">
        SLINGSHOT<span className="logo-highlight">EDGE</span>
      </div>
      <button className="nav-btn">Book Strategy Audit</button>
    </div>
  </nav>
);

const StatBanner = () => (
  <div className="damning-stat-container">
    <div className="stat-badge">INDUSTRY REALITY CHECK</div>
    <div className="stat-row">
      <div className="stat-number">40-60%</div>
      <div className="stat-context">
        of your qualified pipeline will end in{" "}
        <span className="text-white">"No Decision."</span>
      </div>
    </div>
    <p className="stat-sub">
      Deals aren't lost to competitors. They are lost to the Status Quo because
      your reps are pitching Logic to an Emotional brain.
    </p>
  </div>
);

const Hero = () => (
  <header className="hero">
    <StatBanner />
    <div className="hero-content">
      <h1>
        Stop Selling Logic to <br />
        <span className="gradient-text">The "Chimp" Brain.</span>
      </h1>
      <p className="hero-sub">
        Conventional wisdom says "Lead with ROI." Data shows that{" "}
        <strong>lowers win rates by 27%</strong>. We teach the{" "}
        <strong>Science of Influence</strong> to kill the "Maybe."
      </p>
    </div>
  </header>
);

const ClientLogos = () => (
  <section className="logo-section">
    <p className="logo-label">TRUSTED BY REVENUE LEADERS AT</p>
    <div className="logo-grid">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
        alt="Snowflake"
        className="client-logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
        alt="Salesforce"
        className="client-logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg"
        alt="HubSpot"
        className="client-logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
        alt="Oracle"
        className="client-logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
        alt="Zoom"
        className="client-logo"
      />
    </div>
  </section>
);

// NEW: Science Explainer Component
const ScienceExplainer = () => {
  const [activeTab, setActiveTab] = useState("chimp");

  return (
    <section className="science-section">
      <div className="section-header">
        <h2>Why You Are Losing Deals</h2>
        <p>The "Chimp Paradox" in B2B Sales.</p>
      </div>

      <div className="science-container">
        <div className="science-tabs">
          <button
            className={`science-tab ${activeTab === "logic" ? "active" : ""}`}
            onClick={() => setActiveTab("logic")}
          >
            🛑 Conventional Wisdom
          </button>
          <button
            className={`science-tab ${activeTab === "chimp" ? "active" : ""}`}
            onClick={() => setActiveTab("chimp")}
          >
            🚀 Slingshot Science
          </button>
        </div>

        <div className="science-content">
          {activeTab === "logic" ? (
            <div className="content-box logic-box">
              <h3>The "Human" Approach</h3>
              <ul>
                <li>❌ "Here is our ROI and feature list."</li>
                <li>❌ "We are better than the competitor."</li>
                <li>❌ Appeals to Logic (The Neocortex).</li>
              </ul>
              <div className="result-msg fail">
                <strong>RESULT:</strong> The buyer feels no urgency. They decide
                to "think about it." (Status Quo Wins)
              </div>
            </div>
          ) : (
            <div className="content-box chimp-box">
              <h3>The "Chimp" Approach</h3>
              <ul>
                <li>✅ "Here is the cost of staying the same."</li>
                <li>✅ "Your current safety is an illusion."</li>
                <li>✅ Appeals to Survival (The Limbic System).</li>
              </ul>
              <div className="result-msg success">
                <strong>RESULT:</strong> The buyer feels "Loss Aversion." They
                MUST act to stay safe. (You Win)
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Calculator = () => {
  const [revenue, setRevenue] = useState(5000000);
  const [winRate, setWinRate] = useState(20);
  const [discount, setDiscount] = useState(15);
  const [displayGap, setDisplayGap] = useState(0);

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    notation: "compact",
  });

  const preciseCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const pipeline = revenue / (winRate / 100);
  const improvementWinRate = 1.15;
  const newWinRate = winRate * improvementWinRate;
  const improvementDiscount = 0.8;
  const newDiscount = discount * improvementDiscount;
  const revenueFromBetterWinRate = pipeline * (newWinRate / 100);
  const discountSavedPercent = discount - newDiscount;
  const revenueFromMarginProtection =
    revenueFromBetterWinRate * (discountSavedPercent / 100);
  const totalFutureRevenue =
    revenueFromBetterWinRate + revenueFromMarginProtection;
  const totalGap = totalFutureRevenue - revenue;

  useEffect(() => {
    const timer = setTimeout(() => setDisplayGap(totalGap), 300);
    return () => clearTimeout(timer);
  }, [totalGap]);

  return (
    <div className="widget-wrapper">
      <div className="widget-container">
        <div className="inputs-section">
          <div className="header">
            <h2>Quantify The "Cost of Inaction"</h2>
            <p>See exactly what the Status Quo is costing you right now.</p>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Annual Revenue</label>
              <span className="highlight-val">
                {preciseCurrency.format(revenue)}
              </span>
            </div>
            <input
              type="range"
              min="1000000"
              max="50000000"
              step="500000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Current Win Rate</label>
              <span className="highlight-val">{winRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              value={winRate}
              onChange={(e) => setWinRate(Number(e.target.value))}
            />
            <div className="benchmark-pill">
              <span className="pill-icon">📈</span>
              <span className="pill-text">
                <strong>Benchmark:</strong> Killing the "Maybe" lifts win rates
                ~17%.
              </span>
            </div>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Avg. Discount Given</label>
              <span className="highlight-val warning-text">{discount}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
            <div className="benchmark-pill">
              <span className="pill-icon">🛡️</span>
              <span className="pill-text">
                <strong>Benchmark:</strong> We reduce discounting by ~22%.
              </span>
            </div>
          </div>
        </div>

        <div className="results-section">
          <div className="breakdown-header">YOUR COST OF INACTION</div>

          <div className="result-card loss-card">
            <div className="result-label fail-text">
              Revenue Leaking Annually
            </div>
            <div className="result-value loss">
              -{preciseCurrency.format(displayGap)}
            </div>
            <p className="result-sub">Money lost to "No Decision"</p>
          </div>

          <div className="connector-arrow">↓ THE SLINGSHOT EFFECT ↓</div>

          <div className="result-card main-result">
            <div className="result-label success-text">Recoverable Revenue</div>
            <div className="result-value gain">
              +{preciseCurrency.format(displayGap)}
            </div>
            <p className="result-sub">By aligning with the "Chimp" Brain</p>
          </div>

          <div className="breakdown-grid">
            <div className="mini-card">
              <span className="mini-label">Win Rate Lift</span>
              <span className="mini-val">
                +{currency.format(revenueFromBetterWinRate - revenue)}
              </span>
            </div>
            <div className="mini-card">
              <span className="mini-label">Margin Saved</span>
              <span className="mini-val">
                +{currency.format(revenueFromMarginProtection)}
              </span>
            </div>
          </div>

          <button
            className="cta-button"
            onClick={() => alert("Redirect to Slingshot University Page")}
          >
            Fix The Leak
          </button>
        </div>
      </div>
    </div>
  );
};

// NEW: Program Tracks Component
const ProgramTracks = () => (
  <section className="tracks-section">
    <div className="section-header">
      <h2>How We Close The Gap</h2>
      <p>Slingshot University: A hybrid approach to behavioral change.</p>
    </div>
    <div className="tracks-grid">
      <div className="track-card">
        <div className="track-icon">🧠</div>
        <h3>The Science</h3>
        <p>Workshops on "The Chimp Paradox" and decision psychology.</p>
      </div>
      <div className="track-card">
        <div className="track-icon">🛠️</div>
        <h3>The Tools</h3>
        <p>Playbooks for "Killing the Maybe" and "Cause to Act" messaging.</p>
      </div>
      <div className="track-card">
        <div className="track-icon">📱</div>
        <h3>The Habit</h3>
        <p>Online reinforcement to turn theory into muscle memory.</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials-section">
    <div className="section-header">
      <h2>Social Proof</h2>
    </div>
    <div className="testimonial-grid">
      <div className="test-card">
        <div className="quote">
          "We stopped pitching ROI and started pitching 'Safety.' The difference
          was night and day."
        </div>
        <div className="author">
          <div className="avatar">VP</div>
          <div>
            <div className="name">Jason D.</div>
            <div className="role">VP of Sales, SaaS Co.</div>
          </div>
        </div>
      </div>
      <div className="test-card">
        <div className="quote">
          "Slingshot University isn't just training; it's a rewiring of how our
          reps communicate value."
        </div>
        <div className="author">
          <div className="avatar">CR</div>
          <div>
            <div className="name">Sarah M.</div>
            <div className="role">CRO, TechEnterprise</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ScienceExplainer />
      <section className="calculator-section">
        <Calculator />
      </section>
      <ProgramTracks />
      <Testimonials />
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Slingshot Edge. The Science of Influence.</p>
        </div>
      </footer>
    </div>
  );
}
