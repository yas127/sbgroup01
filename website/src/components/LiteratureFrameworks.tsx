import { useState } from 'react';
import { STRATEGIC_FRAMEWORKS } from '../data/researchData';
import { Layers, PieChart, Shield, GitBranch, Briefcase } from 'lucide-react';

export function LiteratureFrameworks() {
  const [activeTab, setActiveTab] = useState<'porter' | 'bcg' | 'swot' | 'lifecycle' | 'ma'>('porter');

  return (
    <section id="frameworks" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="frameworks-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">03 / STRATEGIC MANAGEMENT FRAMEWORKS</span>
          <h2 id="frameworks-heading">Theoretical Frameworks &amp; Analysis.</h2>
          <p className="section-header-lead">
            Applying classical strategic management frameworks to decode Sun Pharma&apos;s competitive moats, portfolio balance, and market dynamics.
          </p>
        </div>

        {/* Framework Tabs Navigation */}
        <div className="framework-tabs" role="tablist" aria-label="Strategic Frameworks">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'porter'}
            className={`framework-tab-btn ${activeTab === 'porter' ? 'active' : ''}`}
            onClick={() => setActiveTab('porter')}
          >
            <Layers size={16} />
            <span>Porter&apos;s 5 Forces</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'bcg'}
            className={`framework-tab-btn ${activeTab === 'bcg' ? 'active' : ''}`}
            onClick={() => setActiveTab('bcg')}
          >
            <PieChart size={16} />
            <span>BCG Matrix</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'swot'}
            className={`framework-tab-btn ${activeTab === 'swot' ? 'active' : ''}`}
            onClick={() => setActiveTab('swot')}
          >
            <Shield size={16} />
            <span>SWOT Analysis</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'lifecycle'}
            className={`framework-tab-btn ${activeTab === 'lifecycle' ? 'active' : ''}`}
            onClick={() => setActiveTab('lifecycle')}
          >
            <GitBranch size={16} />
            <span>Product Lifecycle</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'ma'}
            className={`framework-tab-btn ${activeTab === 'ma' ? 'active' : ''}`}
            onClick={() => setActiveTab('ma')}
          >
            <Briefcase size={16} />
            <span>M&amp;A Strategy</span>
          </button>
        </div>

        {/* Tab 1: Porter's 5 Forces */}
        {activeTab === 'porter' && (
          <div className="framework-pane animate-fade-in" role="tabpanel">
            <div className="framework-intro-box">
              <span className="eyebrow dark">INDUSTRY STRUCTURE ANALYSIS</span>
              <h3>Porter&apos;s Five Forces: Pharmaceutical Industry Pressures</h3>
              <p>
                Evaluating how buyer consolidation, API backward integration, patent barriers, and generic rivalry dictate economic profit margins for Sun Pharma.
              </p>
            </div>

            <div className="porter-grid">
              {STRATEGIC_FRAMEWORKS.portersFiveForces.map((force) => (
                <div key={force.title} className="card-mono porter-card">
                  <div className="porter-card-top">
                    <h4>{force.title}</h4>
                    <span className="badge-mono">{force.intensity}</span>
                  </div>

                  {/* Monochromatic Intensity Bar */}
                  <div className="porter-bar-wrapper">
                    <div className="porter-bar-track">
                      <div className="porter-bar-fill" style={{ width: `${force.score}%` }} />
                    </div>
                    <span className="porter-score-text">{force.score} / 100 Pressure</span>
                  </div>

                  <p className="porter-analysis-text">{force.analysis}</p>
                  
                  <div className="porter-implication-box">
                    <strong>Strategic Implication:</strong>
                    <span>{force.implication}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: BCG Growth-Share Matrix */}
        {activeTab === 'bcg' && (
          <div className="framework-pane animate-fade-in" role="tabpanel">
            <div className="framework-intro-box">
              <span className="eyebrow dark">PORTFOLIO BALANCE</span>
              <h3>Boston Consulting Group (BCG) Growth-Share Matrix</h3>
              <p>
                Mapping Sun Pharma&apos;s diversified portfolio across market growth rates and relative market share to examine capital redeployment.
              </p>
            </div>

            <div className="bcg-grid-2x2">
              {STRATEGIC_FRAMEWORKS.bcgMatrix.map((quad) => (
                <div key={quad.quadrant} className="card-mono bcg-card">
                  <div className="bcg-quad-badge font-heading">{quad.quadrant}</div>
                  <div className="bcg-share-subtitle">{quad.share}</div>
                  
                  <div className="bcg-products-list">
                    <strong>Representative Assets:</strong>
                    <div className="bcg-tags-row">
                      {quad.products.map((p) => (
                        <span key={p} className="badge-mono">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bcg-strategy-box">
                    <strong>Capital Strategy:</strong>
                    <p>{quad.strategy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: SWOT Analysis */}
        {activeTab === 'swot' && (
          <div className="framework-pane animate-fade-in" role="tabpanel">
            <div className="framework-intro-box">
              <span className="eyebrow dark">STRATEGIC SYNTHESIS</span>
              <h3>SWOT Matrix: Internal Capabilities vs. External Environment</h3>
              <p>
                An exhaustive inventory of core institutional advantages, operational vulnerabilities, market expansion vectors, and systemic threats.
              </p>
            </div>

            <div className="swot-grid">
              <div className="card-mono swot-col">
                <div className="swot-tag font-stats">01 / STRENGTHS</div>
                <h4>Internal Capabilities</h4>
                <ul className="swot-items-list">
                  {STRATEGIC_FRAMEWORKS.swotAnalysis.strengths.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card-mono swot-col">
                <div className="swot-tag font-stats">02 / WEAKNESSES</div>
                <h4>Internal Constraints</h4>
                <ul className="swot-items-list">
                  {STRATEGIC_FRAMEWORKS.swotAnalysis.weaknesses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card-mono swot-col">
                <div className="swot-tag font-stats">03 / OPPORTUNITIES</div>
                <h4>Market Tailwinds</h4>
                <ul className="swot-items-list">
                  {STRATEGIC_FRAMEWORKS.swotAnalysis.opportunities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card-mono swot-col">
                <div className="swot-tag font-stats">04 / THREATS</div>
                <h4>External Headwinds</h4>
                <ul className="swot-items-list">
                  {STRATEGIC_FRAMEWORKS.swotAnalysis.threats.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Product Lifecycle */}
        {activeTab === 'lifecycle' && (
          <div className="framework-pane animate-fade-in" role="tabpanel">
            <div className="framework-intro-box">
              <span className="eyebrow dark">THERAPEUTIC MATURITY</span>
              <h3>Product Lifecycle (PLC) Framework</h3>
              <p>
                Categorizing Sun Pharma&apos;s molecules along the lifecycle continuum to ensure continuous pipeline replenishment.
              </p>
            </div>

            <div className="lifecycle-stages-grid">
              <div className="card-mono lifecycle-card">
                <span className="lifecycle-phase-tag font-stats">STAGE 01 / INTRODUCTION</span>
                <h4>Clinical Development</h4>
                <p className="lifecycle-desc">
                  Molecules completing clinical trials or navigating initial regulatory authorizations with high upfront R&amp;D investment.
                </p>
                <div className="lifecycle-assets">
                  <span className="badge-mono">Fibromun (Sarcoma Ph3)</span>
                  <span className="badge-mono">GL0034 (GLP-1 Ph2)</span>
                  <span className="badge-mono">Nidlegy (Melanoma EMA)</span>
                </div>
              </div>

              <div className="card-mono lifecycle-card featured-stage">
                <span className="lifecycle-phase-tag font-stats">STAGE 02 / RAPID GROWTH</span>
                <h4>Specialty Commercialization</h4>
                <p className="lifecycle-desc">
                  Patent-protected specialty biologics scaling doctor adoption, hospital formularies, and European/US market penetration.
                </p>
                <div className="lifecycle-assets">
                  <span className="badge-mono">ILUMYA (Psoriasis)</span>
                  <span className="badge-mono">WINLEVI (Acne)</span>
                  <span className="badge-mono">CEQUA (Dry Eye)</span>
                  <span className="badge-mono">LEQSELVI (Alopecia)</span>
                </div>
              </div>

              <div className="card-mono lifecycle-card">
                <span className="lifecycle-phase-tag font-stats">STAGE 03 / MATURITY</span>
                <h4>Branded Formulations Cash Flow</h4>
                <p className="lifecycle-desc">
                  Established market leadership with high brand recall, sticky physician prescribing habits, and minimal incremental capex.
                </p>
                <div className="lifecycle-assets">
                  <span className="badge-mono">India Cardiology</span>
                  <span className="badge-mono">Neuropsychiatry Brands</span>
                  <span className="badge-mono">Revital &amp; Volini (OTC)</span>
                </div>
              </div>

              <div className="card-mono lifecycle-card">
                <span className="lifecycle-phase-tag font-stats">STAGE 04 / DECLINE</span>
                <h4>Commoditized Generics</h4>
                <p className="lifecycle-desc">
                  Legacy generic oral solids subject to severe wholesale price deflation and crowded competition; candidates for batch optimization.
                </p>
                <div className="lifecycle-assets">
                  <span className="badge-mono">Older Oral Solids</span>
                  <span className="badge-mono">First-Gen Off-Patent APIs</span>
                  <span className="badge-mono">Legacy Antibiotics</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: M&A Strategy */}
        {activeTab === 'ma' && (
          <div className="framework-pane animate-fade-in" role="tabpanel">
            <div className="framework-intro-box">
              <span className="eyebrow dark">CAPITAL ALLOCATION &amp; VALUE CREATION</span>
              <h3>Landmark M&amp;A History &amp; Strategic Integration</h3>
              <p>
                How Dilip Shanghvi and the executive committee deployed disciplined capital to acquire manufacturing scale, distressed assets, and late-stage novel pipelines.
              </p>
            </div>

            <div className="ma-timeline-grid">
              <div className="card-mono ma-card">
                <div className="ma-top-row">
                  <span className="ma-year font-stats">2007–2010</span>
                  <span className="badge-mono">US$454M+ Control Stake</span>
                </div>
                <h4>Taro Pharmaceutical Industries (USA / Israel / Canada)</h4>
                <p>
                  Sun Pharma engaged in a multi-year contest to acquire controlling interest in Taro Pharma, securing a dominant US topical dermatology franchise. In 2024, Sun completed the take-private acquisition of all remaining minority shares for US$347 Million, fully integrating Taro&apos;s cash flows.
                </p>
              </div>

              <div className="card-mono ma-card featured-ma">
                <div className="ma-top-row">
                  <span className="ma-year font-stats">2014</span>
                  <span className="badge-mono dark">US$4.0 BILLION MEGA-MERGER</span>
                </div>
                <h4>Ranbaxy Laboratories Acquisition (Daiichi Sankyo Deal)</h4>
                <p>
                  A transformative landmark transaction that created India&apos;s largest pharmaceutical company and the 5th largest generic company globally. Added vast manufacturing infrastructure across 6 continents and expanded reach in emerging markets, despite requiring extensive post-merger regulatory remediation.
                </p>
              </div>

              <div className="card-mono ma-card">
                <div className="ma-top-row">
                  <span className="ma-year font-stats">2023</span>
                  <span className="badge-mono">US$576M Equity Value + CVR</span>
                </div>
                <h4>Concert Pharmaceuticals (Novel Alopecia JAK Inhibitor)</h4>
                <p>
                  Strategic buyout of US biotech Concert Pharmaceuticals to acquire deuruxolitinib (now LEQSELVI). Expanded Sun Pharma&apos;s presence in severe autoimmune dermatology, subsequently settling patent disputes with Incyte in July 2025 to solidify commercial exclusivity.
                </p>
              </div>

              <div className="card-mono ma-card">
                <div className="ma-top-row">
                  <span className="ma-year font-stats">2025</span>
                  <span className="badge-mono">Targeted Oncology Bolt-on</span>
                </div>
                <h4>Checkpoint Therapeutics (UNLOXCYT Immunotherapy)</h4>
                <p>
                  Added anti-PD-L1 monoclonal antibody cosibelimab (UNLOXCYT) for advanced cutaneous squamous cell carcinoma, illustrating Sun Pharma&apos;s strategy of acquiring de-risked specialty oncology assets rather than funding early discovery biology.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
