import { STRATEGIC_RECOMMENDATIONS } from '../data/researchData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Recommendations() {
  return (
    <section id="recommendations" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="rec-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">07 / ACTIONABLE STRATEGY</span>
          <h2 id="rec-heading">Strategic Recommendations.</h2>
          <p className="section-header-lead">
            Pragmatic, high-impact strategic initiatives supported by empirical research to sustain long-term earnings growth and regulatory resilience.
          </p>
        </div>

        <div className="recommendations-list">
          {STRATEGIC_RECOMMENDATIONS.map((rec) => (
            <div key={rec.id} className="card-mono rec-card">
              <div className="rec-card-header">
                <div className="rec-header-left">
                  <span className="rec-id font-stats">{rec.id}</span>
                  <span className="badge-mono">{rec.priority} Priority</span>
                  <span className="badge-mono dark">{rec.strategicPillar}</span>
                </div>
              </div>

              <h3 className="rec-title">{rec.title}</h3>
              <p className="rec-rationale">{rec.rationale}</p>

              <div className="rec-action-grid">
                <div className="rec-action-col">
                  <span className="rec-action-label">Actionable Implementation Plan:</span>
                  <ul className="rec-steps-list">
                    {rec.implementationPlan.map((step, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rec-impact-col">
                  <div className="rec-impact-box">
                    <span className="rec-impact-label">Expected Financial &amp; Operational Impact</span>
                    <p className="rec-impact-text font-serif">{rec.expectedImpact}</p>
                    <div className="rec-impact-arrow">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
