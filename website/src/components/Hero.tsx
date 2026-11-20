import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Users, GraduationCap } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onSelectSection }) => {
  // Group members in STRICT ascending roll-no order
  const groupMembers = [
    { no: 1, name: 'Marula Dahiya', roll: 'BMS26062', role: 'Qualitative & Governance Research' },
    { no: 2, name: 'Omi Soni', roll: 'BMS26070', role: 'Market Structure & Industry Dynamics' },
    { no: 3, name: 'Tishya Chandok', roll: 'BMS26111', role: 'Competitive Benchmarking & Frameworks' },
    { no: 4, name: 'Yajat Acharya Srivastava', roll: 'BMS26119', role: 'Financial Modeling & Valuation Analysis' },
    { no: 5, name: 'Sundram Kumar', roll: 'BMS26124', role: 'Quantitative Operations & Supply Chain' },
    { no: 6, name: 'Ansh Agarwal', roll: 'BMS26130', role: 'Risk Forensics & Synthesis Lead' },
  ];

  // Carousel card data replicating the 02 / 03 cards in the template
  const carouselCards = [
    {
      num: '01',
      title: 'QUALITATIVE RESEARCH',
      subtitle: 'Management (CEO/CFO/COO), SWOT, Porter\'s 5 Forces, BCG & M&A Strategy',
      stat: '24 Subsections',
      statLabel: 'pp. 4–129 in IIS Report',
      sectionId: 'qualitative',
      theme: 'dark', // #1E1E1E
    },
    {
      num: '02',
      title: 'QUANTITATIVE RESEARCH',
      subtitle: 'TAM Growth, Market Share, Geographic Mix, ASP, Cost of Production & LTVC',
      stat: '₹58,220 Cr',
      statLabel: 'Consolidated FY26 Revenue',
      sectionId: 'quantitative',
      theme: 'peach', // #F28C6E
    },
    {
      num: '03',
      title: 'FINANCIAL RESEARCH',
      subtitle: 'Guidance Accuracy, 10-Yr Margin Analysis, Valuation (P/E, PEG, P/R) & Red Flags',
      stat: '36.73x P/E',
      statLabel: 'Historical Valuation Multiple',
      sectionId: 'financial',
      theme: 'dark',
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev === 0 ? carouselCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev === carouselCards.length - 1 ? 0 : prev + 1));
  };

  const currentCard = carouselCards[activeCardIndex];
  const nextCard = carouselCards[(activeCardIndex + 1) % carouselCards.length];

  return (
    <section className="hero-viewport" id="roster" aria-label="Hero & Group Information">
      {/* 3D Flowing Glossy Liquid Blob SVG replicating the template */}
      <div className="liquid-blob-container" aria-hidden="true">
        <svg
          className="liquid-blob-svg"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobGradPrimary" x1="10%" y1="20%" x2="90%" y2="80%">
              <stop offset="0%" stopColor="#1C3334" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#2F4454" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#376E6F" stopOpacity="0.90" />
              <stop offset="85%" stopColor="#DA7B93" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2E151B" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="blobGradHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#DA7B93" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#376E6F" stopOpacity="0" />
            </linearGradient>
            <filter id="blobGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="35" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="blobShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="25" stdDeviation="40" floodColor="#0E191A" floodOpacity="0.7" />
            </filter>
          </defs>

          {/* Organic 3D wave path flowing horizontally */}
          <g filter="url(#blobShadow)">
            <path
              className="blob-path-animated"
              d="M-80,480 C120,290 320,620 540,380 C740,160 920,490 1140,320 C1320,180 1460,420 1560,350 L1560,920 L-80,920 Z"
              fill="url(#blobGradPrimary)"
            />
            {/* Top specular glossy wave */}
            <path
              className="blob-path-highlight"
              d="M-60,470 C140,285 330,605 540,370 C740,155 930,480 1140,310 C1310,175 1450,410 1550,345 L1550,520 C1430,590 1280,380 1120,490 C900,640 710,320 520,530 C300,750 110,430 -60,610 Z"
              fill="url(#blobGradHighlight)"
            />
          </g>
        </svg>
      </div>

      {/* Top Dotted Row from template */}
      <div className="hero-dotted-row top" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`dot-t-${i}`} className="template-dot" />
        ))}
      </div>

      {/* MAIN HERO CONTENT CONTAINER (ABOVE THE FOLD) */}
      <div className="hero-main-layout">
        {/* Left Column: Heading, Academic Metadata & STRICT Group Roster */}
        <div className="hero-left-column">
          {/* Academic Eyebrow Strip */}
          <div className="hero-academic-tag">
            <span className="tag-pill-solid">GROUP 01</span>
            <span className="tag-group-name">SIXFOLD</span>
            <span className="tag-dot-sep">·</span>
            <span className="tag-course">
              <GraduationCap size={14} className="inline-icon" />
              Introduction to Information Systems (1st Sem – 2026) · BMS
            </span>
          </div>

          {/* Big Condensed Headline (replicates template "WEB DESIGN" with Lavender + White) */}
          <h1 className="hero-condensed-heading">
            <span className="heading-word-lavender">SUN</span>{' '}
            <span className="heading-word-white">PHARMA</span>
          </h1>

          <p className="hero-lead-description">
            A comprehensive 259-page institutional research dossier analyzing Sun Pharmaceutical
            Industries Limited's business architecture, operational leadership transition, financial
            valuation, and competitive dominance across domestic formulations and international specialty markets.
          </p>

          {/* NON-NEGOTIABLE REQUIREMENT #1: Clean Roster strictly in ascending roll-no order */}
          <div className="hero-roster-card" role="region" aria-label="Group 01 Student Roster">
            <div className="roster-card-header">
              <div className="roster-header-title">
                <Users size={16} className="roster-icon" />
                <span>GROUP 01 — SIXFOLD ROSTER</span>
              </div>
              <span className="roster-header-badge">6 MEMBERS · ASCENDING ROLL NO.</span>
            </div>

            <div className="roster-table-wrapper">
              <table className="roster-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '44px' }}>#</th>
                    <th scope="col">STUDENT NAME</th>
                    <th scope="col">ROLL NUMBER</th>
                    <th scope="col" className="hide-on-mobile">CORE RESEARCH DOMAIN</th>
                  </tr>
                </thead>
                <tbody>
                  {groupMembers.map((member) => (
                    <tr key={member.roll} className="roster-row">
                      <td className="roster-index">{member.no}</td>
                      <td className="roster-name">
                        <strong>{member.name}</strong>
                      </td>
                      <td className="roster-roll">
                        <span className="roll-badge">{member.roll}</span>
                      </td>
                      <td className="roster-role hide-on-mobile">{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Primary Action Button & Download Quick Links */}
          <div className="hero-cta-bar">
            <button
              type="button"
              className="btn-coral-cta"
              onClick={onExplore}
              aria-label="Explore the research report"
            >
              <span>EXPLORE REPORT</span>
              <ArrowDown size={17} />
            </button>

            <div className="hero-download-quick-links">
              <a
                href="/downloads/iis.pdf"
                download="Sun_Pharma_IIS_Group01_Report.pdf"
                className="btn-hero-download"
                title="Download complete 259-page evaluated PDF report"
              >
                <span>PDF (15.4 MB)</span>
              </a>
              <a
                href="/downloads/iis.docx"
                download="Sun_Pharma_IIS_Group01_Dossier.docx"
                className="btn-hero-download docx"
                title="Download original Microsoft Word research dossier"
              >
                <span>DOCX (17.0 MB)</span>
              </a>
            </div>

            <div className="hero-quick-meta">
              <span className="meta-stat">259 PAGES</span>
              <span className="meta-sep">/</span>
              <span className="meta-stat">3 RESEARCH PARTS</span>
              <span className="meta-sep">/</span>
              <span className="meta-stat">62 SUBSECTIONS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Section Cards & Outlined Numerals from Template */}
        <div className="hero-right-column">
          {/* Big Outlined Numerals floating above cards (02 / 03) */}
          <div className="outlined-numerals-strip" aria-hidden="true">
            <span className="numeral-ghost">{currentCard.num}</span>
            <span className="numeral-ghost secondary">{nextCard.num}</span>
          </div>

          {/* Featured Cards Pair: Dark Card + Peach Card */}
          <div className="featured-cards-carousel">
            {/* Card 1: Main Active Card */}
            <div 
              className={`carousel-card ${currentCard.theme === 'peach' ? 'card-peach' : 'card-dark'}`}
              onClick={() => onSelectSection(currentCard.sectionId)}
              role="button"
              tabIndex={0}
            >
              <div className="card-top-indicator">
                <span className="card-num-badge">PART {currentCard.num}</span>
                <div className="card-spinner" aria-hidden="true" />
              </div>

              <div className="card-body">
                <h3 className="card-title">{currentCard.title}</h3>
                <p className="card-subtitle">{currentCard.subtitle}</p>
              </div>

              <div className="card-footer">
                <div className="card-metric-block">
                  <span className="card-metric-value">{currentCard.stat}</span>
                  <span className="card-metric-label">{currentCard.statLabel}</span>
                </div>
                <button
                  type="button"
                  className="card-cta-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSection(currentCard.sectionId);
                  }}
                >
                  VIEW PART
                </button>
              </div>
            </div>

            {/* Card 2: Peeking Next Card */}
            <div 
              className={`carousel-card peeking ${nextCard.theme === 'peach' ? 'card-peach' : 'card-dark'}`}
              onClick={handleNextCard}
              role="button"
              tabIndex={0}
              aria-label="View next section card"
            >
              <div className="card-top-indicator">
                <span className="card-num-badge">PART {nextCard.num}</span>
                <div className="card-spinner" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{nextCard.title}</h3>
                <p className="card-subtitle">{nextCard.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Circular Navigation Arrow Buttons (replicating template exactly) */}
          <div className="carousel-nav-controls">
            <button
              type="button"
              className="circular-arrow-btn"
              onClick={handlePrevCard}
              aria-label="Previous featured card"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              className="circular-arrow-btn"
              onClick={handleNextCard}
              aria-label="Next featured card"
            >
              <ChevronRight size={20} />
            </button>

            <div className="carousel-dots-indicator">
              {carouselCards.map((c, i) => (
                <span
                  key={c.num}
                  className={`indicator-dot ${i === activeCardIndex ? 'active' : ''}`}
                  onClick={() => setActiveCardIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Card Summary Pill replicating template "LOREM IPSUM" */}
          <div className="card-summary-pill">
            <span className="pill-tag">FEATURED DOSSIER FOCUS</span>
            <span className="pill-text">
              {activeCardIndex === 0
                ? 'Leadership Transition: Dilip Shanghvi to Kirti Ganorkar (MD) & Jayashree Satagopan (CFO)'
                : activeCardIndex === 1
                ? '7.90% Domestic Market Share, ₹19,290 Cr India Formulation & $1.2B Global Specialty'
                : '10-Year Margin Expansion, FY26 P/E of 36.73x and FY25 Guidance Beat of +2.9pp'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Dotted Row from template */}
      <div className="hero-dotted-row bottom" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`dot-b-${i}`} className="template-dot" />
        ))}
      </div>
    </section>
  );
};
