import { KEY_METRICS } from '../data/researchData';
import { TrendingUp, Award, Building2, FlaskConical, Globe, ShieldCheck } from 'lucide-react';

export function StatsHighlight() {
  const getIcon = (idx: number) => {
    switch (idx % 6) {
      case 0: return <TrendingUp size={20} strokeWidth={2} />;
      case 1: return <Award size={20} strokeWidth={2} />;
      case 2: return <FlaskConical size={20} strokeWidth={2} />;
      case 3: return <ShieldCheck size={20} strokeWidth={2} />;
      case 4: return <Building2 size={20} strokeWidth={2} />;
      case 5: return <Globe size={20} strokeWidth={2} />;
      default: return <TrendingUp size={20} strokeWidth={2} />;
    }
  };

  return (
    <section className="stats-highlight-section reveal-on-scroll" aria-label="Key Performance Metrics">
      <div className="container">
        <div className="stats-header-row">
          <div>
            <span className="eyebrow dark">AUDITED FINANCIAL &amp; OPERATIONAL BENCHMARKS</span>
            <h2 className="stats-section-title">Institutional Scale in Numbers.</h2>
          </div>
          <p className="stats-section-meta">
            Extracted from Sun Pharma FY2026 audited financial disclosures and CRISIL ratings rationale.
          </p>
        </div>

        <div className="stats-grid">
          {KEY_METRICS.map((metric, idx) => (
            <div key={metric.label} className="stat-card">
              <div className="stat-card-top">
                <span className="stat-icon-wrapper" aria-hidden="true">
                  {getIcon(idx)}
                </span>
                <span className="stat-card-num font-stats">0{idx + 1}</span>
              </div>
              <div className="stat-value-display font-stats">{metric.value}</div>
              <div className="stat-label-title">{metric.label}</div>
              <p className="stat-sublabel-text">{metric.sublabel}</p>
              <div className="stat-trend-tag font-stats">
                <span>{metric.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
