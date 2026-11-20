import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, DollarSign } from 'lucide-react';

export const InteractiveCharts: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'geo' | 'revenue' | 'eps' | 'margins' | 'shareholders'>('geo');

  // Geographic revenue data using the new exact color scheme
  const geoData = [
    { label: 'India Formulations', inr: '₹19,290 Cr', usd: '$2.20B', share: 33.1, color: '#DA7B93' },
    { label: 'US Formulations', inr: '₹16,660 Cr', usd: '$1.90B', share: 28.6, color: '#2F4454' },
    { label: 'Emerging Markets', inr: '₹11,070 Cr', usd: '$1.26B', share: 19.0, color: '#376E6F' },
    { label: 'Rest of World', inr: '₹8,480 Cr', usd: '$0.97B', share: 14.6, color: '#688998' },
    { label: 'API & Others', inr: '₹2,720 Cr', usd: '$0.31B', share: 4.7, color: '#4A2A33' },
  ];

  // 10-Year Consolidated Revenue Growth (₹ in Billions)
  const revenueHistory = [
    { year: 'FY16', val: 284.9, growth: '+4.2%' },
    { year: 'FY17', val: 315.8, growth: '+10.8%' },
    { year: 'FY18', val: 264.9, growth: '-16.1%' },
    { year: 'FY19', val: 290.7, growth: '+9.7%' },
    { year: 'FY20', val: 328.4, growth: '+13.0%' },
    { year: 'FY21', val: 335.0, growth: '+2.0%' },
    { year: 'FY22', val: 386.5, growth: '+15.4%' },
    { year: 'FY23', val: 432.8, growth: '+12.0%' },
    { year: 'FY24', val: 485.0, growth: '+12.1%' },
    { year: 'FY25', val: 538.4, growth: '+11.0%' },
    { year: 'FY26', val: 582.2, growth: '+8.1%' },
  ];

  // Margin Peer Comparison using the new palette
  const marginPeers = [
    { name: 'Sun Pharma', gross: 76.5, op: 27.8, color: '#DA7B93' },
    { name: 'Torrent Pharma', gross: 74.2, op: 31.2, color: '#376E6F' },
    { name: 'Mankind Pharma', gross: 69.8, op: 24.5, color: '#2F4454' },
    { name: 'Dr. Reddy\'s', gross: 66.4, op: 25.4, color: '#5D7D8F' },
    { name: 'Cipla', gross: 65.2, op: 24.1, color: '#8B6D7A' },
    { name: 'Zydus Lifesciences', gross: 64.0, op: 23.8, color: '#4A5862' },
    { name: 'Lupin', gross: 62.5, op: 18.2, color: '#3F4950' },
  ];

  return (
    <div className="charts-visual-wrapper">
      {/* Switcher Navigation */}
      <div className="charts-tab-strip" role="tablist">
        <button
          type="button"
          className={`chart-tab-btn ${activeChart === 'geo' ? 'active' : ''}`}
          onClick={() => setActiveChart('geo')}
        >
          <PieChart size={15} />
          <span>Geographic Revenue Mix</span>
        </button>
        <button
          type="button"
          className={`chart-tab-btn ${activeChart === 'revenue' ? 'active' : ''}`}
          onClick={() => setActiveChart('revenue')}
        >
          <TrendingUp size={15} />
          <span>10-Yr Revenue Growth</span>
        </button>
        <button
          type="button"
          className={`chart-tab-btn ${activeChart === 'margins' ? 'active' : ''}`}
          onClick={() => setActiveChart('margins')}
        >
          <BarChart3 size={15} />
          <span>Margin vs Competitors</span>
        </button>
        <button
          type="button"
          className={`chart-tab-btn ${activeChart === 'shareholders' ? 'active' : ''}`}
          onClick={() => setActiveChart('shareholders')}
        >
          <DollarSign size={15} />
          <span>Shareholder Equity Mix</span>
        </button>
      </div>

      {/* Chart 1: Geographic Revenue Mix */}
      {activeChart === 'geo' && (
        <div className="chart-panel">
          <div className="chart-header">
            <div>
              <h4 className="chart-title">Consolidated FY26 Geographic Revenue Breakdown</h4>
              <p className="chart-sub">Total Revenue: ₹58,220 Crore (US$6.36 Billion) · Audited FY26</p>
            </div>
            <span className="chart-badge">4 Reportable Geographies</span>
          </div>

          <div className="geo-chart-layout">
            <div className="geo-bars-column">
              {geoData.map((g) => (
                <div key={g.label} className="geo-row">
                  <div className="geo-row-header">
                    <span className="geo-name">{g.label}</span>
                    <span className="geo-values">
                      <strong>{g.share}%</strong> ({g.inr} / {g.usd})
                    </span>
                  </div>
                  <div className="geo-bar-track">
                    <div
                      className="geo-bar-fill"
                      style={{
                        width: `${g.share * 2.5}%`,
                        backgroundColor: g.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="chart-insight-box">
              <span className="insight-tag">KEY STRUCTURAL TAKEAWAY</span>
              <p className="insight-text">
                Sun Pharma is uniquely balanced: <strong>India Formulations (33.1%)</strong> delivers high-cash margin stability with zero FDA exposure, while the <strong>US (28.6%)</strong> is increasingly driven by high-margin innovative specialty medicines ($1.42B) which offset generic price erosion.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chart 2: 10-Yr Historical Revenue */}
      {activeChart === 'revenue' && (
        <div className="chart-panel">
          <div className="chart-header">
            <div>
              <h4 className="chart-title">10-Year Consolidated Revenue Growth (FY16 – FY26)</h4>
              <p className="chart-sub">Figures in ₹ Billion (INR) · Reflects organic growth &amp; Ranbaxy post-merger integration</p>
            </div>
            <span className="chart-badge">CAGR: +7.4%</span>
          </div>

          <div className="revenue-bars-grid">
            {revenueHistory.map((r) => {
              const heightPercent = (r.val / 600) * 100;
              return (
                <div key={r.year} className="hist-bar-col">
                  <span className="hist-bar-val">₹{r.val}B</span>
                  <div className="hist-bar-track">
                    <div
                      className="hist-bar-fill"
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                  <span className="hist-bar-year">{r.year}</span>
                  <span className={`hist-bar-growth ${r.growth.startsWith('-') ? 'neg' : 'pos'}`}>
                    {r.growth}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="chart-insight-box">
            <span className="insight-tag">GROWTH RECOVERY TRAJECTORY</span>
            <p className="insight-text">
              After absorbing US Halol warning letters and Ranbaxy facility remediations in FY18 (revenue dipped to ₹264.9B), Sun successfully pivoted to specialty biologics (Ilumya, Cequa), doubling consolidated revenue to <strong>₹582.2 Billion in FY26</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Chart 3: Margins vs Competitors */}
      {activeChart === 'margins' && (
        <div className="chart-panel">
          <div className="chart-header">
            <div>
              <h4 className="chart-title">Gross &amp; Operating Margin Benchmark vs Top Peers</h4>
              <p className="chart-sub">FY26 Audited Peer Comparison across Indian &amp; Global generic leaders</p>
            </div>
            <span className="chart-badge">Industry Leading Gross Margin</span>
          </div>

          <div className="margins-table-wrapper">
            <table className="peer-margins-table">
              <thead>
                <tr>
                  <th>PHARMACEUTICAL COMPANY</th>
                  <th>GROSS MARGIN %</th>
                  <th>OPERATING MARGIN (EBITDA) %</th>
                  <th>KEY MARGIN DRIVER</th>
                </tr>
              </thead>
              <tbody>
                {marginPeers.map((p) => (
                  <tr key={p.name} className={p.name === 'Sun Pharma' ? 'highlight-row' : ''}>
                    <td>
                      <span className="peer-color-dot" style={{ backgroundColor: p.color }} />
                      <strong>{p.name}</strong>
                    </td>
                    <td>
                      <div className="cell-bar-wrap">
                        <span>{p.gross}%</span>
                        <div className="micro-bar">
                          <div className="micro-fill" style={{ width: `${p.gross}%`, backgroundColor: p.color }} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="cell-bar-wrap">
                        <span>{p.op}%</span>
                        <div className="micro-bar">
                          <div className="micro-fill op" style={{ width: `${p.op * 2.5}%`, backgroundColor: p.color }} />
                        </div>
                      </div>
                    </td>
                    <td className="peer-driver">
                      {p.name === 'Sun Pharma'
                        ? 'High specialty contribution (Ilumya) + backward API integration'
                        : p.name === 'Torrent Pharma'
                        ? 'Dominated by high-margin chronic India & Brazil branded formulations'
                        : 'Broad US generic and domestic OTC formulation mix'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Chart 4: Shareholder Equity Mix */}
      {activeChart === 'shareholders' && (
        <div className="chart-panel">
          <div className="chart-header">
            <div>
              <h4 className="chart-title">Shareholder Ownership Concentration (Sept 30, 2026)</h4>
              <p className="chart-sub">Promoter &amp; Promoter Group vs. Public / Institutional Shareholders</p>
            </div>
            <span className="chart-badge">52.68% Promoter Ownership</span>
          </div>

          <div className="equity-split-layout">
            <div className="equity-split-card">
              <div className="equity-donut-visual">
                <div className="donut-segment promoter" style={{ '--slice': '52.68%' } as React.CSSProperties} />
                <div className="donut-center">
                  <span className="donut-pct">52.68%</span>
                  <span className="donut-label">Promoter</span>
                </div>
              </div>
              <div className="equity-details">
                <h5 className="equity-group-title">Promoter &amp; Promoter Group (52.68%)</h5>
                <ul className="equity-list">
                  <li><strong>Dilip S. Shanghvi (Founder):</strong> 9.60% (230.34M shares)</li>
                  <li><strong>Shanghvi Finance Pvt Ltd:</strong> 40.30% (966.86M shares)</li>
                  <li><strong>Other Family &amp; Entities:</strong> 2.78%</li>
                  <li className="equity-subtext">Zero shares pledged by promoters, reflecting pristine balance sheet governance.</li>
                </ul>
              </div>
            </div>

            <div className="equity-split-card">
              <div className="equity-donut-visual">
                <div className="donut-segment public" style={{ '--slice': '47.32%' } as React.CSSProperties} />
                <div className="donut-center">
                  <span className="donut-pct">47.32%</span>
                  <span className="donut-label">Public</span>
                </div>
              </div>
              <div className="equity-details">
                <h5 className="equity-group-title">Public &amp; Institutional (47.32%)</h5>
                <ul className="equity-list">
                  <li><strong>Foreign Portfolio Investors (FPIs):</strong> ~17.8%</li>
                  <li><strong>Domestic Mutual Funds &amp; DIIs:</strong> ~14.4%</li>
                  <li><strong>LIC of India:</strong> ~5.2%</li>
                  <li><strong>Retail Individual Investors:</strong> ~9.9%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
