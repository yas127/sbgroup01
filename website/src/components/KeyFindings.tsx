import { CheckCircle2, TrendingUp, ShieldCheck, Factory, HeartHandshake, FileWarning } from 'lucide-react';

export function KeyFindings() {
  const findings = [
    {
      num: '01',
      title: 'Domestic Chronic Monopoly Power',
      highlight: '#1 in India (>8.5% Market Share)',
      desc: 'Sun Pharma dominates high-margin chronic therapies—particularly cardiology, neuropsychiatry, and diabetology—supported by an unmatched field force of over 13,000 medical representatives and generation-spanning doctor prescription loyalty.',
      icon: <CheckCircle2 size={22} />,
    },
    {
      num: '02',
      title: 'Successful Specialty Biologics Pivot',
      highlight: 'US$1.42B Revenue (20.7% of Sales)',
      desc: 'By pioneering differentiated innovative therapies (ILUMYA, WINLEVI, CEQUA, LEQSELVI), Sun Pharma has effectively broken out of the commoditized generic pricing trap, elevating EBITDA margins and securing patent protection runways through 2035+.',
      icon: <TrendingUp size={22} />,
    },
    {
      num: '03',
      title: 'Backward Vertical Integration Shield',
      highlight: '14 Dedicated Chemical API Facilities',
      desc: 'Synthesizing over 400 active pharmaceutical ingredients internally across 14 dedicated plants insulates formulation production against raw chemical commodity inflation and Chinese Key Starting Material (KSM) export disruptions.',
      icon: <Factory size={22} />,
    },
    {
      num: '04',
      title: 'Zero-Net-Debt Financial Fortress',
      highlight: '₹582.20B Revenue / +13.4% Profit Growth',
      desc: 'Generating strong free cash flows with negligible net debt affords Sun Pharma rare strategic flexibility to self-fund ₹2,500–₹3,000+ Crore in annual R&D and execute opportunistic bolt-on clinical acquisitions without shareholder dilution.',
      icon: <ShieldCheck size={22} />,
    },
    {
      num: '05',
      title: 'Disciplined Bolt-On M&A Strategy',
      highlight: 'From $4B Ranbaxy to Targeted Biotech Assets',
      desc: 'Moving past the integration challenges of the historic 2014 Ranbaxy mega-merger, Sun Pharma has refined an agile bolt-on playbook (Concert Pharma for LEQSELVI, Checkpoint for UNLOXCYT) acquiring late-stage, de-risked clinical pipelines.',
      icon: <HeartHandshake size={22} />,
    },
    {
      num: '06',
      title: 'Regulatory Compliance as Primary Risk',
      highlight: 'Halol & Mohali FDA Inspection Remediation',
      desc: 'The single most critical operational constraint on US formulation expansion remains resolving outstanding US FDA Form 483 inspection observations and import alerts through rigorous automated Quality-by-Design (QbD) compliance systems.',
      icon: <FileWarning size={22} />,
    },
  ];

  return (
    <section id="findings" className="section-spacing section-white reveal-on-scroll" aria-labelledby="findings-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">06 / MAJOR FINDINGS &amp; INSIGHTS</span>
          <h2 id="findings-heading">Core Academic Discoveries.</h2>
          <p className="section-header-lead">
            Synthesized empirical conclusions addressing the primary research objectives and evaluating Sun Pharma&apos;s competitive advantage.
          </p>
        </div>

        <div className="findings-grid">
          {findings.map((item) => (
            <div key={item.num} className="card-mono finding-card">
              <div className="finding-card-header">
                <span className="finding-num font-stats">{item.num}</span>
                <span className="finding-icon-wrap">{item.icon}</span>
              </div>
              <div className="finding-highlight font-stats">{item.highlight}</div>
              <h3 className="finding-title">{item.title}</h3>
              <p className="finding-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
