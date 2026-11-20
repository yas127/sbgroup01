import { AlertCircle, Target, HelpCircle, CheckSquare2 } from 'lucide-react';

export function ProblemAndObjectives() {
  const objectives = [
    {
      id: '01',
      title: 'Evaluate the Strategic Specialty Transformation',
      desc: 'Assess the capital allocation, clinical R&D productivity, and commercialization trajectory of Sun Pharma’s US$1.42B innovative medicines division (ILUMYA, WINLEVI, CEQUA, LEQSELVI) in de-risking from commodity generics.',
    },
    {
      id: '02',
      title: 'Quantify Geographic & Therapeutic Moats',
      desc: 'Analyze the revenue durability and margin contribution of Sun Pharma’s #1 domestic Indian branded formulation business (>8.5% share) alongside formulation sales in the US, emerging markets (~80 countries), and RoW.',
    },
    {
      id: '03',
      title: 'Audit Regulatory Compliance & Legal Contingencies',
      desc: 'Conduct an institutional forensic review of US FDA cGMP compliance records (Form 483s, warning letters, import alerts at Halol and Mohali) and material legal disputes (Cipher arbitration, opioid settlements, Taro class actions).',
    },
    {
      id: '04',
      title: 'Benchmark Against 13 Domestic & Global Peers',
      desc: 'Deliver a comparative strategic assessment against domestic competitors (Abbott India, Mankind, Cipla, Torrent, Zydus, Lupin, Dr. Reddy’s) and global generics titans (Teva, Sandoz, Viatris).',
    },
  ];

  return (
    <section id="objectives" className="section-spacing section-white reveal-on-scroll" aria-labelledby="problem-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">02 / PROBLEM STATEMENT &amp; OBJECTIVES</span>
          <h2 id="problem-heading">Problem Statement &amp; Research Scope.</h2>
          <p className="section-header-lead">
            Defining the central strategic challenge confronting global pharmaceutical manufacturers and articulating our research inquiry.
          </p>
        </div>

        {/* Central Problem Statement Banner */}
        <div className="problem-statement-banner">
          <div className="problem-banner-top">
            <span className="problem-icon">
              <AlertCircle size={22} />
            </span>
            <span className="problem-label">THE CENTRAL RESEARCH PROBLEM</span>
          </div>
          <h3 className="problem-title">
            The Generic Commoditization Trap vs. The Capital-Intensive Specialty Pivot
          </h3>
          <p className="problem-body">
            Over the past decade, Indian generic pharmaceutical manufacturers have suffered from persistent mid-single-digit price deflation in the United States—driven by the consolidation of pharmaceutical wholesalers into three monolithic purchasing consortia representing over 90% of US purchasing volume. Concurrently, intensifying US FDA cGMP regulatory inspections have triggered costly compliance remediations and delayed new ANDA approvals.
          </p>
          <p className="problem-body" style={{ marginTop: '12px' }}>
            The fundamental strategic question investigated in this research is: <strong>Can a large-scale Indian formulation manufacturer successfully escape the generic commoditization trap by transforming into a high-margin, patent-protected innovative specialty biopharma enterprise without compromising its cash-generating domestic foundations?</strong>
          </p>
        </div>

        {/* 4 Research Objectives Grid */}
        <div className="objectives-grid-header">
          <div className="eyebrow">FORMAL RESEARCH OBJECTIVES</div>
          <h3>Four Foundational Pillars of Inquiry</h3>
        </div>

        <div className="objectives-grid">
          {objectives.map((obj) => (
            <div key={obj.id} className="card-mono objective-card">
              <div className="objective-number font-stats">OBJECTIVE / {obj.id}</div>
              <h4 className="objective-title">{obj.title}</h4>
              <p className="objective-desc">{obj.desc}</p>
              <div className="objective-check">
                <CheckSquare2 size={16} />
                <span>Addressed in full in Group Dossier</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Questions & Hypotheses Box */}
        <div className="hypotheses-block">
          <div className="hypotheses-col">
            <div className="hypo-header">
              <HelpCircle size={18} />
              <h4>Core Research Questions</h4>
            </div>
            <ul className="hypo-list">
              <li>
                <strong>RQ1:</strong> How significantly does an increasing specialty mix (reaching 20.7% in FY2026) expand gross and operating margins relative to pure-play generic peers?
              </li>
              <li>
                <strong>RQ2:</strong> To what extent does backward vertical integration across 14 dedicated API facilities buffer against chemical commodity volatility and Chinese supply bottlenecks?
              </li>
              <li>
                <strong>RQ3:</strong> What are the recurring structural drivers of US FDA inspection findings at large-scale Indian manufacturing facilities, and how effective are remediation protocols?
              </li>
            </ul>
          </div>

          <div className="hypotheses-col">
            <div className="hypo-header">
              <Target size={18} />
              <h4>Core Research Hypotheses</h4>
            </div>
            <ul className="hypo-list">
              <li>
                <strong>H1:</strong> Enterprises with high chronic therapeutic domestic exposure (&gt;30% of sales) achieve substantially lower earnings volatility than peers dependent on seasonal acute therapies.
              </li>
              <li>
                <strong>H2:</strong> Disciplined sub-US$1B bolt-on acquisitions (Concert, Checkpoint) generate superior risk-adjusted returns compared to dilutive mega-mergers in specialty commercialization.
              </li>
              <li>
                <strong>H3:</strong> Proprietary delivery technologies (nanomicellar NCELL in CEQUA) create durable intellectual property moats that resist conventional generic erosion post-patent expiry.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
