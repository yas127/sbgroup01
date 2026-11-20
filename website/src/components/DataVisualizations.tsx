import { useState } from 'react';
import { REVENUE_SEGMENTS, SPECIALTY_PRODUCTS, PEER_BENCHMARK } from '../data/researchData';
import { BarChart3, PieChart as PieIcon, Layers, FileSpreadsheet, Info } from 'lucide-react';

export function DataVisualizations() {
  const [activeChartTab, setActiveChartTab] = useState<'geo' | 'specialty' | 'peers' | 'pipeline'>('geo');
  const [currencyMode, setCurrencyMode] = useState<'INR' | 'USD'>('INR');
  const [selectedGeoIndex, setSelectedGeoIndex] = useState<number>(0);
  const [peerCategoryFilter, setPeerCategoryFilter] = useState<'All' | 'Domestic Peer' | 'Global Generic' | 'Specialty Rival'>('All');
  const [selectedSpecialtyProduct, setSelectedSpecialtyProduct] = useState<number>(0);

  const selectedGeo = REVENUE_SEGMENTS[selectedGeoIndex];
  const selectedProduct = SPECIALTY_PRODUCTS[selectedSpecialtyProduct];

  const filteredPeers = peerCategoryFilter === 'All' 
    ? PEER_BENCHMARK 
    : PEER_BENCHMARK.filter(p => p.category === peerCategoryFilter);

  // Distinguishable palette shades for formulation segments
  const GEO_BAR_COLORS = [
    '#000000', // Pure Black - India Formulations (33.1%)
    '#494D54', // Slate Grey - US Formulations (28.9%)
    '#AA9371', // Muted Taupe - Emerging Markets (18.1%)
    '#D6C6AC', // Warm Beige - Rest of World (14.2%)
    '#797E88', // Refined Slate - Active Pharma Ingredients (5.7%)
  ];

  return (
    <section id="visualizations" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="data-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">05 / DATA ANALYSIS &amp; VISUAL FINDINGS</span>
          <h2 id="data-heading">Empirical Data &amp; Visual Analytics.</h2>
          <p className="section-header-lead">
            Interactive, monochromatic data visualizations directly translated from Sun Pharma&apos;s FY2026 audited reports, SEC filings, and regulatory databases.
          </p>
        </div>

        {/* Chart View Switcher Navigation */}
        <div className="chart-navigation-bar">
          <div className="chart-tab-group" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeChartTab === 'geo'}
              className={`chart-nav-btn ${activeChartTab === 'geo' ? 'active' : ''}`}
              onClick={() => setActiveChartTab('geo')}
            >
              <BarChart3 size={16} />
              <span>Geographic Formulation Sales</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeChartTab === 'specialty'}
              className={`chart-nav-btn ${activeChartTab === 'specialty' ? 'active' : ''}`}
              onClick={() => setActiveChartTab('specialty')}
            >
              <Layers size={16} />
              <span>Specialty Portfolio ($1.42B)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeChartTab === 'peers'}
              className={`chart-nav-btn ${activeChartTab === 'peers' ? 'active' : ''}`}
              onClick={() => setActiveChartTab('peers')}
            >
              <FileSpreadsheet size={16} />
              <span>Peer Benchmark Matrix</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeChartTab === 'pipeline'}
              className={`chart-nav-btn ${activeChartTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveChartTab('pipeline')}
            >
              <PieIcon size={16} />
              <span>Clinical R&amp;D Pipeline</span>
            </button>
          </div>

          {activeChartTab === 'geo' && (
            <div className="currency-toggle-wrapper">
              <span className="currency-label">Currency Unit:</span>
              <div className="currency-toggle-buttons">
                <button
                  type="button"
                  className={`curr-btn ${currencyMode === 'INR' ? 'active' : ''}`}
                  onClick={() => setCurrencyMode('INR')}
                >
                  ₹ INR Billions
                </button>
                <button
                  type="button"
                  className={`curr-btn ${currencyMode === 'USD' ? 'active' : ''}`}
                  onClick={() => setCurrencyMode('USD')}
                >
                  $ USD Billions
                </button>
              </div>
            </div>
          )}
        </div>

        {/* VIEW 1: GEOGRAPHIC FORMULATION SALES */}
        {activeChartTab === 'geo' && (
          <div className="chart-panel animate-fade-in">
            <div className="chart-panel-header">
              <div>
                <span className="eyebrow dark">FY2026 CONSOLIDATED REVENUE BREAKDOWN</span>
                <h3>Consolidated Formulation Sales by Geography</h3>
                <p>
                  Total FY2026 Revenue: <strong>₹582.20 Billion</strong> (US$6.36 Billion at reported ₹91.49/USD rate).
                </p>
              </div>
            </div>

            <div className="geo-chart-layout">
              {/* Interactive Visual Bar Comparison */}
              <div className="geo-chart-bars card-mono">
                <div className="chart-bars-container">
                  {REVENUE_SEGMENTS.map((segment, idx) => {
                    const isSelected = idx === selectedGeoIndex;
                    const maxVal = 192.90;
                    const barHeightPct = (segment.valueInr / maxVal) * 100;
                    const displayVal = currencyMode === 'INR' 
                      ? `₹${segment.valueInr.toFixed(1)}B` 
                      : `$${segment.valueUsd.toFixed(2)}B`;
                    const barColor = GEO_BAR_COLORS[idx % GEO_BAR_COLORS.length];

                    return (
                      <div 
                        key={segment.name} 
                        className={`chart-bar-column ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedGeoIndex(idx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${segment.name}`}
                      >
                        <div className="bar-value-top font-stats">{displayVal}</div>
                        <div className="bar-track">
                          <div 
                            className="bar-fill" 
                            style={{ 
                              height: `${barHeightPct}%`,
                              backgroundColor: barColor,
                              boxShadow: isSelected ? '0 0 0 2px var(--color-pure-black)' : 'none',
                            }} 
                          />
                        </div>
                        <div className="bar-pct-tag font-stats">{segment.percentage}%</div>
                        <div className="bar-name-label">
                          <span className="bar-legend-dot" style={{ backgroundColor: barColor }} aria-hidden="true" />
                          <span>{segment.name.replace(' Formulations', '')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Segment Drill-Down Detail Card */}
              <div className="geo-detail-card card-mono">
                <span className="eyebrow">SELECTED GEOGRAPHIC REGION</span>
                <h4 className="geo-detail-title">{selectedGeo.name}</h4>
                
                <div className="geo-stat-highlight-row">
                  <div>
                    <span className="geo-stat-label">Reported Revenue (INR)</span>
                    <div className="geo-stat-val font-stats">₹{selectedGeo.valueInr.toFixed(2)} Billion</div>
                  </div>
                  <div>
                    <span className="geo-stat-label">USD Equivalent</span>
                    <div className="geo-stat-val font-stats">${selectedGeo.valueUsd.toFixed(2)} Billion</div>
                  </div>
                  <div>
                    <span className="geo-stat-label">Sales Share</span>
                    <div className="geo-stat-val font-stats">{selectedGeo.percentage}%</div>
                  </div>
                </div>

                <div className="divider-mono" style={{ margin: '18px 0' }} />

                <p className="geo-detail-desc">{selectedGeo.description}</p>

                <div className="geo-pros-cons-grid">
                  <div className="geo-pro-box">
                    <strong>Competitive Strengths:</strong>
                    <p>{selectedGeo.strengths}</p>
                  </div>
                  <div className="geo-con-box">
                    <strong>Operational &amp; Regulatory Risks:</strong>
                    <p>{selectedGeo.risks}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Data Explanation */}
            <div className="chart-academic-takeaway">
              <Info size={18} />
              <div>
                <strong>Academic Data Takeaway:</strong>
                <p>
                  India formulations remains Sun Pharma&apos;s highest-margin, lowest-volatility cash generator, accounting for <strong>33.1%</strong> of total sales. Simultaneously, the United States market (<strong>28.9%</strong>) is increasingly anchored by high-barrier specialty biologics (ILUMYA, CEQUA, WINLEVI) rather than pure commoditized generics, significantly mitigating developed-market generic price erosion.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: SPECIALTY INNOVATIVE PORTFOLIO */}
        {activeChartTab === 'specialty' && (
          <div className="chart-panel animate-fade-in">
            <div className="chart-panel-header">
              <div>
                <span className="eyebrow dark">PATENT-PROTECTED MEDICINES</span>
                <h3>Innovative Specialty Portfolio: US$1.42 Billion Annual Revenue</h3>
                <p>
                  Representing <strong>20.7% of consolidated sales</strong> in FY2026, the specialty division commands differentiated pricing power across dermatology, ophthalmology, and oncology.
                </p>
              </div>
            </div>

            <div className="specialty-explorer-layout">
              {/* Product Selector List */}
              <div className="specialty-picker-list">
                {SPECIALTY_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.name}
                    type="button"
                    className={`specialty-picker-item ${idx === selectedSpecialtyProduct ? 'active' : ''}`}
                    onClick={() => setSelectedSpecialtyProduct(idx)}
                  >
                    <div className="picker-item-top">
                      <span className="picker-item-name">{prod.name}</span>
                      <span className="badge-mono">{prod.stage}</span>
                    </div>
                    <span className="picker-item-indication">{prod.indication}</span>
                  </button>
                ))}
              </div>

              {/* Product Deep-Dive Card */}
              <div className="specialty-detail-card card-mono">
                <div className="specialty-detail-top">
                  <div>
                    <span className="badge-mono" style={{ marginBottom: '8px' }}>
                      {selectedProduct.therapeuticArea} · {selectedProduct.stage}
                    </span>
                    <h3 className="specialty-product-title">{selectedProduct.name}</h3>
                    <p className="specialty-generic-name font-heading">
                      Generic Active Entity: {selectedProduct.genericName}
                    </p>
                  </div>
                </div>

                <div className="divider-mono" style={{ margin: '16px 0' }} />

                <div className="specialty-info-section">
                  <h4>Clinical Indication &amp; Mechanism of Action</h4>
                  <p>{selectedProduct.description}</p>
                </div>

                <div className="specialty-info-section" style={{ marginTop: '16px' }}>
                  <h4>Commercial &amp; Competitive Landscape</h4>
                  <p>{selectedProduct.competitiveContext}</p>
                </div>
              </div>
            </div>

            {/* Academic Data Explanation */}
            <div className="chart-academic-takeaway">
              <Info size={18} />
              <div>
                <strong>Academic Data Takeaway:</strong>
                <p>
                  Sun Pharma&apos;s specialty strategy focuses on high-prevalence dermatology and ophthalmology disorders with established prescription pathways. By acquiring late-stage clinical assets (Concert for LEQSELVI, Checkpoint for UNLOXCYT) and in-licensing novel dermatological entities (WINLEVI from Cassiopea), Sun Pharma successfully avoided the high-failure risks of early-stage discovery chemistry while capturing commercial specialty returns.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: PEER BENCHMARK MATRIX */}
        {activeChartTab === 'peers' && (
          <div className="chart-panel animate-fade-in">
            <div className="chart-panel-header">
              <div>
                <span className="eyebrow dark">COMPETITIVE POSITIONING MATRIX</span>
                <h3>Direct Peer Group Benchmarking</h3>
                <p>
                  Benchmarking Sun Pharma against leading Indian domestic manufacturers, global generics multinational corporations, and specialty rivals.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="peer-filter-group">
                {(['All', 'Domestic Peer', 'Global Generic', 'Specialty Rival'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`peer-filter-btn ${peerCategoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setPeerCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Peer Comparison Table */}
            <div className="peer-table-wrapper card-mono">
              <table className="peer-data-table">
                <thead>
                  <tr>
                    <th>Company / Competitor</th>
                    <th>Classification</th>
                    <th>Approx. Revenue</th>
                    <th>Key Advantages</th>
                    <th>Operational Disadvantages</th>
                    <th>Sun Pharma Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPeers.map((peer) => (
                    <tr key={peer.name}>
                      <td className="peer-name-cell font-stats">{peer.name}</td>
                      <td>
                        <span className="badge-mono">{peer.category}</span>
                      </td>
                      <td className="font-stats">{peer.revenue}</td>
                      <td className="peer-desc-cell">{peer.keyStrengths}</td>
                      <td className="peer-desc-cell">{peer.keyDisadvantages}</td>
                      <td className="peer-advantage-cell">{peer.sunAdvantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Academic Data Explanation */}
            <div className="chart-academic-takeaway">
              <Info size={18} />
              <div>
                <strong>Academic Data Takeaway:</strong>
                <p>
                  Compared to domestic competitors like Abbott India and Mankind Pharma which lack meaningful US or innovative pipeline exposure, Sun Pharma combines massive domestic chronic dominance (#1 share) with a diversified global formulation presence across 100+ nations. Against global giants like Teva and Viatris burdened by past acquisition debt, Sun Pharma operates with a virtually net-debt-free balance sheet and superior ~27% operating margins.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: CLINICAL R&D PIPELINE */}
        {activeChartTab === 'pipeline' && (
          <div className="chart-panel animate-fade-in">
            <div className="chart-panel-header">
              <div>
                <span className="eyebrow dark">RESEARCH &amp; DEVELOPMENT REINVESTMENT</span>
                <h3>2,800+ R&amp;D Scientists &amp; US FDA Filings Engine</h3>
                <p>
                  Sun Pharma reinvests approximately <strong>5.5% to 6.0% of annual revenue</strong> (₹2,500–₹3,000+ Crore) into R&amp;D across formulations, novel delivery systems, and clinical trials.
                </p>
              </div>
            </div>

            <div className="pipeline-stats-grid">
              <div className="card-mono pipeline-stat-box">
                <div className="pipeline-stat-num font-stats">552</div>
                <div className="pipeline-stat-label">Approved US ANDAs</div>
                <p>Cumulative Abbreviated New Drug Applications approved by the US FDA.</p>
              </div>

              <div className="card-mono pipeline-stat-box">
                <div className="pipeline-stat-num font-stats">122</div>
                <div className="pipeline-stat-label">ANDAs Awaiting FDA Approval</div>
                <p>Including 28 tentative approvals representing near-term generic launches.</p>
              </div>

              <div className="card-mono pipeline-stat-box">
                <div className="pipeline-stat-num font-stats">57</div>
                <div className="pipeline-stat-label">Approved US NDAs</div>
                <p>New Drug Applications approved, with 13 additional NDAs currently under review.</p>
              </div>

              <div className="card-mono pipeline-stat-box">
                <div className="pipeline-stat-num font-stats">14</div>
                <div className="pipeline-stat-label">Dedicated API Plants</div>
                <p>&gt;400 active pharmaceutical ingredients synthesized internally across state-of-the-art sites.</p>
              </div>
            </div>

            {/* Pipeline Stage Visualizer */}
            <div className="pipeline-stage-visualizer card-mono" style={{ marginTop: '24px' }}>
              <div className="eyebrow">CLINICAL DEVELOPMENT PIPELINE STATUS (MAY 2026 DISCLOSURE)</div>
              
              <div className="pipeline-items-table">
                <div className="pipeline-row">
                  <div className="pipe-asset font-heading">ILUMYA (sBLA)</div>
                  <div className="pipe-therapy">Rheumatology / Dermatology</div>
                  <div className="pipe-ind">Psoriatic Arthritis</div>
                  <div className="pipe-stage-tag"><span className="badge-mono">FDA sBLA Filed</span></div>
                  <div className="pipe-notes">Target decision milestone following successful clinical efficacy readouts.</div>
                </div>

                <div className="pipeline-row">
                  <div className="pipe-asset font-heading">Fibromun (L19-TNF)</div>
                  <div className="pipe-therapy">Oncology</div>
                  <div className="pipe-ind">Soft Tissue Sarcoma &amp; Glioblastoma</div>
                  <div className="pipe-stage-tag"><span className="badge-mono">Phase 2 / Phase 3 Planned</span></div>
                  <div className="pipe-notes">Targeted fully-human immunocytokine delivering TNF directly to tumor vasculature.</div>
                </div>

                <div className="pipeline-row">
                  <div className="pipe-asset font-heading">GL0034</div>
                  <div className="pipe-therapy">Metabolism / Endocrinology</div>
                  <div className="pipe-ind">Type 2 Diabetes Mellitus</div>
                  <div className="pipe-stage-tag"><span className="badge-mono">Phase 2 In Progress</span></div>
                  <div className="pipe-notes">Novel in-house GLP-1 receptor agonist; topline trial readouts expected in calendar 2027.</div>
                </div>

                <div className="pipeline-row">
                  <div className="pipe-asset font-heading">Nidlegy (L19-IL2 + L19-TNF)</div>
                  <div className="pipe-therapy">Oncology</div>
                  <div className="pipe-ind">Locally Advanced Melanoma</div>
                  <div className="pipe-stage-tag"><span className="badge-mono">Phase 3 Complete</span></div>
                  <div className="pipe-notes">Centralized European Medicines Agency (EMA) registration filing planned.</div>
                </div>

                <div className="pipeline-row">
                  <div className="pipe-asset font-heading">MM-II</div>
                  <div className="pipe-therapy">Pain Management</div>
                  <div className="pipe-ind">Osteoarthritis Associated Knee Pain</div>
                  <div className="pipe-stage-tag"><span className="badge-mono">Phase 2 Completed</span></div>
                  <div className="pipe-notes">Liposomal intra-articular formulation; commercial partnering discussions underway.</div>
                </div>
              </div>
            </div>

            {/* Academic Data Explanation */}
            <div className="chart-academic-takeaway">
              <Info size={18} />
              <div>
                <strong>Academic Data Takeaway:</strong>
                <p>
                  Sun Pharma&apos;s R&amp;D allocation maintains an optimal dual balance: high-volume ANDA filings (122 pending) sustain commercial generic presence in wholesale channels, while clinical Phase 2/3 capital is concentrated in high-unmet-need oncology and incretin metabolic candidates with blockbuster potential.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
