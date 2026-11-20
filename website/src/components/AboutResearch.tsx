import { History, Target, Cpu, ShieldAlert } from 'lucide-react';

export function AboutResearch() {
  return (
    <section id="about" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">01 / CONTEXT &amp; BACKGROUND</span>
          <h2 id="about-heading">The Research Context.</h2>
          <p className="section-header-lead">
            Understanding the strategic, operational, and information systems evolution of India&apos;s leading pharmaceutical conglomerate.
          </p>
        </div>

        {/* 2-Column Editorial Storytelling Grid */}
        <div className="about-editorial-grid">
          <div className="about-narrative-col">
            <h3 className="about-subheading">From a Five-Molecule Venture to a Global Biopharma Conglomerate</h3>
            <p>
              Sun Pharmaceutical Industries Limited was established in 1983 in Vapi, Gujarat, by Dilip Shanghvi. 
              Starting with just five psychiatric formulations and a two-person commercial team, the enterprise deliberately bypassed crowded acute-therapy segments to dominate specialized chronic medicine categories, initially in psychiatry and later expanding into cardiology with Monotrate and Angize in 1988.
            </p>
            <p>
              Following its public incorporation in March 1993 and listing on the BSE and NSE (SUNPHARMA), the company executed one of Indian corporate history&apos;s most disciplined M&amp;A compounding strategies. Key acquisitions include controlling stakes in Taro Pharmaceutical Industries (2007–2010), the historic US$4.0 Billion acquisition of Ranbaxy Laboratories in 2014, Concert Pharmaceuticals in 2023, and Checkpoint Therapeutics in 2025.
            </p>
            <p>
              Today, Sun Pharma generates over <strong>₹582.20 Billion (US$6.36 Billion)</strong> in consolidated annual sales, operating across more than 100 countries with an active portfolio spanning over 2,000 molecules.
            </p>

            <div className="about-quote-box">
              <p className="about-quote-text">
                &ldquo;The strategic priority is clear: de-risking from commoditized generic price erosion by building a proprietary US$1.42B innovative medicines franchise with long-term patent protection.&rdquo;
              </p>
              <span className="about-quote-author">Group 01 Research Dossier · Academic Findings</span>
            </div>
          </div>

          <div className="about-features-col">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <History size={20} />
              </div>
              <div className="about-feature-content">
                <h4>Multi-Decade Strategic Trajectory</h4>
                <p>
                  Tracing four decades from Vapi inception to global specialty leadership, demonstrating how disciplined capital allocation compound enterprise value.
                </p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Cpu size={20} />
              </div>
              <div className="about-feature-content">
                <h4>Information Systems &amp; cGMP Control</h4>
                <p>
                  Analyzing how ERP systems, automated electronic batch records (eBR), and supply chain visibility platforms coordinate 43 manufacturing sites worldwide.
                </p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Target size={20} />
              </div>
              <div className="about-feature-content">
                <h4>The Specialty Innovation Pivot</h4>
                <p>
                  Assessing the transition from commoditized generic oral pills into biologics and novel therapies: ILUMYA (psoriasis), WINLEVI (acne), and CEQUA (dry eye).
                </p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <ShieldAlert size={20} />
              </div>
              <div className="about-feature-content">
                <h4>Regulatory Compliance &amp; Risk Vigilance</h4>
                <p>
                  An objective examination of US FDA regulatory inspections, import alerts at Halol and Mohali, antitrust settlements, and remediation investments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Strategic Milestones */}
        <div className="milestones-block">
          <div className="milestones-header">
            <span className="eyebrow">HISTORICAL MILESTONES</span>
            <h3>Four Decades of Strategic Compounding</h3>
          </div>

          <div className="milestones-timeline-grid">
            <div className="timeline-node">
              <span className="timeline-year font-stats">1983</span>
              <div className="timeline-badge font-stats">FOUNDED IN VAPI</div>
              <p>Dilip Shanghvi establishes Sun Pharma with 5 psychiatric medicines and a 2-person marketing team.</p>
            </div>

            <div className="timeline-node">
              <span className="timeline-year font-stats">1994</span>
              <div className="timeline-badge font-stats">INITIAL PUBLIC OFFERING</div>
              <p>Incorporated as a public limited company and listed on the BSE and NSE to fund modern API infrastructure.</p>
            </div>

            <div className="timeline-node">
              <span className="timeline-year font-stats">2007</span>
              <div className="timeline-badge font-stats">TARO PHARMA ACQUISITION</div>
              <p>Acquires controlling stake in Taro Pharmaceutical Industries, securing a dominant US dermatology and topical generics franchise.</p>
            </div>

            <div className="timeline-node">
              <span className="timeline-year font-stats">2014</span>
              <div className="timeline-badge font-stats">US$4B RANBAXY MERGER</div>
              <p>Mega-merger creating India&apos;s largest and the world&apos;s 5th largest generic company, expanding global manufacturing across 6 continents.</p>
            </div>

            <div className="timeline-node">
              <span className="timeline-year font-stats">2023–26</span>
              <div className="timeline-badge font-stats">SPECIALTY BIOLOGICS ERA</div>
              <p>Concert buyout ($576M) for LEQSELVI, Checkpoint buyout for UNLOXCYT, and Innovative Medicines reaching US$1.42B (20.7% of sales).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
