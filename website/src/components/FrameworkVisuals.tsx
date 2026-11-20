import React, { useState } from 'react';
import { Shield, Layers, PieChart, GitBranch, ArrowUpRight } from 'lucide-react';

export const FrameworkVisuals: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<'swot' | 'porter' | 'bcg' | 'lifecycle'>('swot');

  return (
    <div className="frameworks-container">
      {/* Framework Selector Tabs */}
      <div className="framework-tabs-strip" role="tablist">
        <button
          type="button"
          className={`framework-tab-pill ${activeFramework === 'swot' ? 'active' : ''}`}
          onClick={() => setActiveFramework('swot')}
        >
          <Shield size={16} />
          <span>SWOT Matrix</span>
        </button>
        <button
          type="button"
          className={`framework-tab-pill ${activeFramework === 'porter' ? 'active' : ''}`}
          onClick={() => setActiveFramework('porter')}
        >
          <Layers size={16} />
          <span>Porter's 5 Forces</span>
        </button>
        <button
          type="button"
          className={`framework-tab-pill ${activeFramework === 'bcg' ? 'active' : ''}`}
          onClick={() => setActiveFramework('bcg')}
        >
          <PieChart size={16} />
          <span>BCG Matrix</span>
        </button>
        <button
          type="button"
          className={`framework-tab-pill ${activeFramework === 'lifecycle' ? 'active' : ''}`}
          onClick={() => setActiveFramework('lifecycle')}
        >
          <GitBranch size={16} />
          <span>Product Lifecycle</span>
        </button>
      </div>

      {/* SWOT Matrix 2x2 Grid */}
      {activeFramework === 'swot' && (
        <div className="swot-grid">
          <div className="swot-card strength">
            <div className="swot-tag">STRENGTHS (INTERNAL)</div>
            <h4 className="swot-title">Market Dominance &amp; Specialty Engine</h4>
            <ul className="swot-list">
              <li><strong>#1 in Indian Pharma Market:</strong> 7.90% market share, ₹19,290 Cr domestic formulation revenue growing at 14% YoY.</li>
              <li><strong>$1.42B Global Specialty Business:</strong> Blockbuster brand Ilumya (tildrakizumab) alongside Cequa, Winlevi, and Odomzo commanding high margins.</li>
              <li><strong>Complete Backward API Integration:</strong> In-house API synthesis across 43 facilities guarantees cost resilience and supply continuity.</li>
              <li><strong>Robust Balance Sheet:</strong> Net cash positive position with strong operating cash flow generation exceeding ₹10,000 Cr.</li>
            </ul>
          </div>

          <div className="swot-card weakness">
            <div className="swot-tag">WEAKNESSES (INTERNAL)</div>
            <h4 className="swot-title">US Generic Exposure &amp; FDA Concentration</h4>
            <ul className="swot-list">
              <li><strong>US Generic Price Erosion:</strong> Persistent price deflation in commoditized generics keeps US growth in single digits.</li>
              <li><strong>Regulatory Compliance Vulnerability:</strong> Periodic US FDA inspection Form 483s and import alerts (Halol facility) create margin drag.</li>
              <li><strong>High Specialty SG&amp;A:</strong> Commercializing innovative biologics requires heavy direct-to-consumer detailing and clinical trials.</li>
              <li><strong>Founder Transition Risk:</strong> Transitioning executive leadership from Dilip Shanghvi to Kirti Ganorkar after 40+ years.</li>
            </ul>
          </div>

          <div className="swot-card opportunity">
            <div className="swot-tag">OPPORTUNITIES (EXTERNAL)</div>
            <h4 className="swot-title">Biosimilars, GLP-1 &amp; Pharmerging Scale</h4>
            <ul className="swot-list">
              <li><strong>Next-Gen Biologics &amp; Biosimilars:</strong> Exploiting patent cliff of major biologic therapies in immunology and oncology.</li>
              <li><strong>GLP-1 Metabolic Pipeline:</strong> Advancing proprietary candidate GL0034 into clinical trials for obesity and Type-2 diabetes.</li>
              <li><strong>Pharmerging Market Expansion:</strong> Double-digit penetration in Romania, Russia, South Africa, and Latin America.</li>
              <li><strong>Strategic In-Licensing:</strong> Partnerships with European biotechs (Fibromun, Nidlegy) to bolster late-stage specialty assets.</li>
            </ul>
          </div>

          <div className="swot-card threat">
            <div className="swot-tag">THREATS (EXTERNAL)</div>
            <h4 className="swot-title">Price Controls &amp; Geopolitical Fragmentation</h4>
            <ul className="swot-list">
              <li><strong>Domestic NLEM Price Ceilings:</strong> Mandatory price capping by India's NPPA on essential medicines restricts realization growth.</li>
              <li><strong>US Regulatory &amp; Hatch-Waxman Litigation:</strong> Protracted patent infringement defenses from multinational originator pharma.</li>
              <li><strong>Currency Volatility in Emerging Markets:</strong> Exposure to the Ruble, Leu, Rand, and Real affecting foreign exchange translation.</li>
              <li><strong>Aggressive Indian Peer Consolidation:</strong> Torrent, JB Chemicals, and Dr. Reddy's aggressively targeting acute and chronic therapies.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Porter's 5 Forces Diagram */}
      {activeFramework === 'porter' && (
        <div className="porter-diagram">
          <div className="porter-center-box">
            <span className="porter-level high">HIGH</span>
            <h4 className="porter-name">Competitive Rivalry</h4>
            <p className="porter-desc">
              Intense competition in generics across India and US from Abbott, Mankind, Dr. Reddy's, Cipla, and Zydus. Mitigated by Sun's 7.9% market lead and specialty brand moat.
            </p>
          </div>

          <div className="porter-spokes-grid">
            <div className="porter-spoke-card">
              <span className="porter-level low">LOW</span>
              <h5 className="spoke-title">Threat of New Entrants</h5>
              <p className="spoke-text">
                Extreme capital expenditures ($1B+ facilities), stringent US FDA cGMP requirements, clinical trial gestation periods, and massive physician sales forces block new entrants.
              </p>
            </div>

            <div className="porter-spoke-card">
              <span className="porter-level moderate">MODERATE</span>
              <h5 className="spoke-title">Bargaining Power of Buyers</h5>
              <p className="spoke-text">
                High in the US due to retail consortiums (Red Oak, ClarisONE, Wbad) commanding bulk purchasing discounts; very low in India due to doctor prescription brand loyalty.
              </p>
            </div>

            <div className="porter-spoke-card">
              <span className="porter-level low-mod">LOW TO MODERATE</span>
              <h5 className="spoke-title">Bargaining Power of Suppliers</h5>
              <p className="spoke-text">
                Sun Pharma synthesizes the majority of its own Key Starting Materials (KSMs) and APIs in-house, significantly shielding operations from raw chemical supplier leverage.
              </p>
            </div>

            <div className="porter-spoke-card">
              <span className="porter-level low">LOW</span>
              <h5 className="spoke-title">Threat of Substitutes</h5>
              <p className="spoke-text">
                Prescription pharmaceuticals lack direct medical substitutes; once prescribed for chronic indications (cardiovascular, psychiatric), patient switching costs remain high.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BCG Matrix 2x2 Grid */}
      {activeFramework === 'bcg' && (
        <div className="bcg-matrix-grid">
          <div className="bcg-cell star">
            <div className="bcg-header">
              <span className="bcg-badge">STARS (HIGH GROWTH / HIGH SHARE)</span>
              <ArrowUpRight size={18} />
            </div>
            <h4 className="bcg-title">Global Specialty Portfolio</h4>
            <p className="bcg-desc">
              <strong>Ilumya, Cequa, Winlevi, Leqselvi:</strong> Growing at 17.1% YoY to $1.2B+. High capital investment fueled by high market growth in dermatology and ophthalmology.
            </p>
          </div>

          <div className="bcg-cell cow">
            <div className="bcg-header">
              <span className="bcg-badge">CASH COWS (LOW GROWTH / HIGH SHARE)</span>
              <span className="bcg-icon">₹</span>
            </div>
            <h4 className="bcg-title">India Formulations &amp; Legacy US Generics</h4>
            <p className="bcg-desc">
              <strong>Domestic Chronic &amp; Acute Portfolios:</strong> Generate massive, reliable cash flows with 76.5% gross margins. Minimal reinvestment needed; finances specialty R&amp;D.
            </p>
          </div>

          <div className="bcg-cell question">
            <div className="bcg-header">
              <span className="bcg-badge">QUESTION MARKS (HIGH GROWTH / LOW SHARE)</span>
              <span className="bcg-icon">?</span>
            </div>
            <h4 className="bcg-title">Novel Biologics &amp; GLP-1 Metabolic Candidates</h4>
            <p className="bcg-desc">
              <strong>GL0034 &amp; European Oncology Assets (Fibromun, Nidlegy):</strong> High-growth global TAMs requiring heavy clinical trials; potential to become future Stars or exit.
            </p>
          </div>

          <div className="bcg-cell dog">
            <div className="bcg-header">
              <span className="bcg-badge">DOGS (LOW GROWTH / LOW SHARE)</span>
              <span className="bcg-icon">✕</span>
            </div>
            <h4 className="bcg-title">Non-Core Third-Party Commoditized APIs</h4>
            <p className="bcg-desc">
              <strong>Low-margin merchant APIs:</strong> High price erosion from Chinese synthetic competitors; retained primarily for captive internal supply security rather than profit.
            </p>
          </div>
        </div>
      )}

      {/* Product Lifecycle Curve */}
      {activeFramework === 'lifecycle' && (
        <div className="lifecycle-container">
          <div className="lifecycle-stages-row">
            <div className="lifecycle-stage-box">
              <span className="stage-num">01</span>
              <h5 className="stage-name">R&amp;D / Clinical</h5>
              <p className="stage-text">GL0034 (GLP-1), Fibromun, Nidlegy, 552 ANDAs pending approval.</p>
              <span className="stage-pill">Phase 2 / Phase 3</span>
            </div>

            <div className="lifecycle-stage-box">
              <span className="stage-num">02</span>
              <h5 className="stage-name">Introduction</h5>
              <p className="stage-text">Leqselvi (deuruxolitinib for alopecia areata), Unloxcyt.</p>
              <span className="stage-pill">Launch Phase</span>
            </div>

            <div className="lifecycle-stage-box active-growth">
              <span className="stage-num">03</span>
              <h5 className="stage-name">Rapid Growth</h5>
              <p className="stage-text">Ilumya (tildrakizumab, $600M+), Cequa, Winlevi acne therapy.</p>
              <span className="stage-pill highlight">+17.1% YoY</span>
            </div>

            <div className="lifecycle-stage-box">
              <span className="stage-num">04</span>
              <h5 className="stage-name">Maturity</h5>
              <p className="stage-text">India formulations (Volini, Revital, Pantocid, Gemer, Rosuvas).</p>
              <span className="stage-pill">Cash Generator</span>
            </div>

            <div className="lifecycle-stage-box">
              <span className="stage-num">05</span>
              <h5 className="stage-name">Decline / Extension</h5>
              <p className="stage-text">Older US oral solid generics; extended via complex depot injections.</p>
              <span className="stage-pill">Lifecycle Reformulation</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
