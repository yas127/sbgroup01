import { RESEARCH_LIMITATIONS, LAWSUITS_AND_RISKS } from '../data/researchData';
import { AlertTriangle, Scale, ShieldAlert } from 'lucide-react';

export function ResearchLimitations() {
  return (
    <section id="limitations" className="section-spacing section-white reveal-on-scroll" aria-labelledby="limitations-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">08 / INTEGRITY &amp; RISK DISCLOSURE</span>
          <h2 id="limitations-heading">Research Limitations &amp; Legal Contingencies.</h2>
          <p className="section-header-lead">
            Maintaining transparent academic rigor by presenting data disclosure constraints, active legal proceedings, and regulatory contingencies.
          </p>
        </div>

        {/* 4 Academic Limitations Grid */}
        <div className="limitations-grid">
          {RESEARCH_LIMITATIONS.map((item, idx) => (
            <div key={item.title} className="card-mono limitation-card">
              <div className="limitation-top">
                <span className="limitation-icon">
                  <AlertTriangle size={18} />
                </span>
                <span className="limitation-num font-stats">LIMITATION / 0{idx + 1}</span>
              </div>
              <h4 className="limitation-title">{item.title}</h4>
              <p className="limitation-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Material Lawsuits & Regulatory Inquiries Audit */}
        <div className="lawsuits-audit-block" style={{ marginTop: '48px' }}>
          <div className="lawsuits-header">
            <div className="lawsuits-header-left">
              <Scale size={20} />
              <div>
                <span className="eyebrow dark">FORENSIC RISK AUDIT</span>
                <h3>Material Publicly Disclosed Legal Proceedings &amp; Settlements</h3>
              </div>
            </div>
            <p className="lawsuits-header-desc">
              Extracted from audited annual report contingent liability schedules and U.S. federal court records.
            </p>
          </div>

          <div className="lawsuits-table-wrapper card-mono">
            <table className="lawsuits-data-table">
              <thead>
                <tr>
                  <th>Proceeding / Dispute</th>
                  <th>Forum / Jurisdiction</th>
                  <th>Financial Quantum</th>
                  <th>Status &amp; Settlement</th>
                  <th>Material Summary</th>
                </tr>
              </thead>
              <tbody>
                {LAWSUITS_AND_RISKS.map((suit) => (
                  <tr key={suit.title}>
                    <td className="lawsuit-title-cell font-serif">{suit.title}</td>
                    <td className="lawsuit-forum-cell">{suit.courtOrForum}</td>
                    <td className="lawsuit-quantum-cell font-stats">{suit.financialMeasure}</td>
                    <td>
                      <span className="badge-mono">{suit.status}</span>
                    </td>
                    <td className="lawsuit-details-cell">{suit.keyDetails}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="regulatory-warning-note">
            <ShieldAlert size={18} />
            <span>
              <strong>Regulatory Inspection Tracking:</strong> Sun Pharma continues active remediation protocols under US FDA observation at its Halol (Gujarat) and Mohali (Punjab) facilities. The timeline for regulatory re-inspection and lifting of import alerts remains under regulatory discretion.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
