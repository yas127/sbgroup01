import { Database, SearchCheck, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Primary Filing Extraction',
      desc: 'Systematic extraction of audited financial statements, segmental notes, and investor presentations from Sun Pharma (FY2026/FY2025), SEBI, and NSE filings.',
    },
    {
      num: '02',
      title: 'Currency Normalization',
      desc: 'Standardized foreign exchange conversions using the company’s reported FY2026 rate of ₹91.49 per US Dollar, reconciling ₹582.20B with US$6.36B consolidated revenue.',
    },
    {
      num: '03',
      title: 'Regulatory & Forensic Audit',
      desc: 'Independent cross-referencing of US FDA cGMP inspection databases for Halol and Mohali, alongside federal court dockets (Cipher, Taro class actions, Opiates MDL 2804).',
    },
    {
      num: '04',
      title: 'Peer Group Matrix Mapping',
      desc: 'Standardized benchmarking against 13 leading Indian domestic peers (Abbott, Mankind, Cipla, Torrent) and global generic multinationals (Teva, Sandoz, Viatris).',
    },
  ];

  return (
    <section id="methodology" className="section-spacing section-white reveal-on-scroll" aria-labelledby="methodology-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">04 / RESEARCH DESIGN &amp; METHODOLOGY</span>
          <h2 id="methodology-heading">Empirical Research Architecture.</h2>
          <p className="section-header-lead">
            Adhering to rigorous academic standards: primary document verification, zero fabricated metrics, and transparent data disclosure.
          </p>
        </div>

        {/* Process Flow Diagram / 4-Step Pipeline */}
        <div className="methodology-pipeline-grid">
          {steps.map((step) => (
            <div key={step.num} className="card-mono method-step-card">
              <div className="method-step-num font-stats">{step.num}</div>
              <h4 className="method-step-title">{step.title}</h4>
              <p className="method-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Sources of Truth Architecture Grid */}
        <div className="methodology-sources-box">
          <div className="sources-box-header">
            <span className="eyebrow dark">SOURCES OF TRUTH ARCHITECTURE</span>
            <h3>Authoritative Academic Verification Layers</h3>
          </div>

          <div className="sources-layers-grid">
            <div className="source-layer-card">
              <div className="layer-icon">
                <Database size={20} />
              </div>
              <div className="layer-info">
                <h4>Regulatory &amp; Audited Disclosures</h4>
                <p>
                  Sun Pharmaceutical Industries Ltd FY2026 &amp; FY2025 Audited Consolidated Results, Annual Reports, and quarterly SEBI Clause 41 financial statements.
                </p>
              </div>
            </div>

            <div className="source-layer-card">
              <div className="layer-icon">
                <SearchCheck size={20} />
              </div>
              <div className="layer-info">
                <h4>Credit Rating Agency Evaluations</h4>
                <p>
                  CRISIL Ratings Rationale (March 2026) confirming corporate debt-free status, bank facility ratings, and liquidity buffers.
                </p>
              </div>
            </div>

            <div className="source-layer-card">
              <div className="layer-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="layer-info">
                <h4>Regulatory Compliance Databases</h4>
                <p>
                  U.S. Food &amp; Drug Administration (FDA) CDER database: 552 approved ANDAs, tentative approvals, Form 483 warning letters, and import alerts.
                </p>
              </div>
            </div>

            <div className="source-layer-card">
              <div className="layer-icon">
                <FileCheck size={20} />
              </div>
              <div className="layer-info">
                <h4>Judicial Dockets &amp; Settlements</h4>
                <p>
                  U.S. District Court for the Southern District of New York (Cipher arbitration award), West Virginia state dockets, and Taro shareholder litigation filings.
                </p>
              </div>
            </div>
          </div>

          <div className="methodology-integrity-note">
            <CheckCircle2 size={18} />
            <span>
              <strong>Methodological Integrity Guarantee:</strong> All financial values, percentages, facility numbers, and legal settlements represent verified data directly extracted from the primary research document. No speculative or illustrative figures are included.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
