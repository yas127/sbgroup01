import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { Hero } from './components/Hero';
import { PartSection } from './components/PartSection';
import type { SectionItem, PartData } from './components/PartSection';
import { ManagementCards } from './components/ManagementCards';
import { FrameworkVisuals } from './components/FrameworkVisuals';
import { InteractiveCharts } from './components/InteractiveCharts';
import { DownloadSection } from './components/DownloadSection';
import { DataQualityModal } from './components/DataQualityModal';
import { SearchModal } from './components/SearchModal';
import reportData from './data/reportData.json';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import './App.css';

export function App() {
  const [activeSection, setActiveSection] = useState('roster');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const parts = reportData as unknown as PartData[];
  const qualitativePart = parts.find((p) => p.id === 'qualitative') || parts[0];
  const quantitativePart = parts.find((p) => p.id === 'quantitative') || parts[1];
  const financialPart = parts.find((p) => p.id === 'financial') || parts[2];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const sectionIds = ['roster', 'qualitative', 'quantitative', 'financial', 'downloads'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    handleSelectSection('qualitative');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFromSearch = (_section: SectionItem, partId: string) => {
    handleSelectSection(partId);
  };

  return (
    <div className="app-layout">
      {/* Left Vertical Rail */}
      <LeftSidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />

      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenSearch={() => setSearchModalOpen(true)}
        onToggleMobileNav={() => setMobileNavOpen(!mobileNavOpen)}
      />

      {/* Main Viewport */}
      <main className="main-viewport" role="main">
        {/* NON-NEGOTIABLE #1: HERO LOADED IMMEDIATELY ABOVE THE FOLD */}
        <Hero
          onExplore={handleExplore}
          onSelectSection={handleSelectSection}
        />

        {/* PART 01: QUALITATIVE RESEARCH */}
        <PartSection
          part={qualitativePart}
          customTopComponent={
            <div className="part-injected-widgets">
              <div className="injected-widget-section">
                <div className="widget-header">
                  <span className="widget-tag">EXECUTIVE LEADERSHIP APPRAISAL</span>
                  <h3 className="widget-title">C-Suite Governance Profiles: CEO, CFO &amp; COO</h3>
                  <p className="widget-desc">
                    Comprehensive evaluation of Sun Pharma's executive leadership transition from founder Dilip Shanghvi to Kirti Ganorkar, CFO Jayashree Satagopan, and COO Aalok Shanghvi.
                  </p>
                </div>
                <ManagementCards />
              </div>

              <div className="injected-widget-section">
                <div className="widget-header">
                  <span className="widget-tag">STRATEGIC MANAGEMENT THEORIES</span>
                  <h3 className="widget-title">Interactive Visual Frameworks</h3>
                  <p className="widget-desc">
                    Visual synthesis applying classical strategic frameworks: SWOT 2×2 Matrix, Porter's 5 Forces, BCG Growth-Share Matrix, and Product Lifecycle Stage Analysis.
                  </p>
                </div>
                <FrameworkVisuals />
              </div>
            </div>
          }
        />

        {/* PART 02: QUANTITATIVE RESEARCH */}
        <PartSection
          part={quantitativePart}
          customTopComponent={
            <div className="part-injected-widgets">
              <div className="injected-widget-section">
                <div className="widget-header">
                  <span className="widget-tag">EMPIRICAL DATA VISUALIZATIONS</span>
                  <h3 className="widget-title">Geographic Realization &amp; Shareholder Concentration</h3>
                  <p className="widget-desc">
                    Interactive breakdown of Sun Pharma's ₹58,220 Cr ($6.36B) consolidated FY26 turnover across India, the US, Emerging Markets, Rest of World, and API, plus equity ownership concentration.
                  </p>
                </div>
                <InteractiveCharts />
              </div>
            </div>
          }
        />

        {/* PART 03: FINANCIAL RESEARCH */}
        <PartSection
          part={financialPart}
          customTopComponent={
            <div className="part-injected-widgets">
              <div className="injected-widget-section">
                <div className="financial-data-audit-pill-banner" onClick={() => setAuditModalOpen(true)}>
                  <div className="banner-left">
                    <ShieldCheck size={20} className="banner-shield-icon" />
                    <div>
                      <strong>Data Quality Notice: Reliance &rarr; Sun Pharma Normalization</strong>
                      <span>
                        7 headings originally labeled "Reliance" in the source PDF were corrected to "Sun Pharma", and formula rendering artifacts on p. 131/135 were decoded and verified.
                      </span>
                    </div>
                  </div>
                  <span className="banner-link">View Audit Log &rarr;</span>
                </div>
              </div>
            </div>
          }
        />

        {/* DOWNLOAD REPORT ARTIFACTS SECTION */}
        <DownloadSection onOpenAuditModal={() => setAuditModalOpen(true)} />

        {/* Institutional Footer */}
        <footer className="site-footer" role="contentinfo">
          <div className="footer-content">
            <div className="footer-brand-col">
              <span className="footer-group-name">SIXFOLD // GROUP 01</span>
              <p className="footer-report-name">
                Sun Pharmaceutical Industries Limited · Comprehensive Institutional Equity &amp; Information Systems Dossier
              </p>
              <p className="footer-course">
                Introduction to Information Systems (1st Sem – 2026) · Bachelors of Management Studies (BMS)
              </p>
            </div>

            <div className="footer-roster-col">
              <span className="footer-col-title">GROUP 01 ROSTER (ASCENDING ROLL NO.)</span>
              <ul className="footer-roster-list">
                <li>1. Marula Dahiya (BMS26062)</li>
                <li>2. Omi Soni (BMS26070)</li>
                <li>3. Tishya Chandok (BMS26111)</li>
                <li>4. Yajat Acharya Srivastava (BMS26119)</li>
                <li>5. Sundram Kumar (BMS26124)</li>
                <li>6. Ansh Agarwal (BMS26130)</li>
              </ul>
            </div>

            <div className="footer-downloads-col">
              <span className="footer-col-title">REPORT DOWNLOADS</span>
              <a href="/downloads/iis.pdf" download="Sun_Pharma_IIS_Group01_Report.pdf" className="footer-file-link">
                &darr; iis.pdf (259 Pages · 15.4 MB)
              </a>
              <a href="/downloads/iis.docx" download="Sun_Pharma_IIS_Group01_Dossier.docx" className="footer-file-link">
                &darr; iis.docx (Word Dossier · 17.0 MB)
              </a>
              <button type="button" className="footer-audit-btn" onClick={() => setAuditModalOpen(true)}>
                Data-Quality Audit Trail
              </button>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>Group 01 | Sun Pharmaceuticals | Introduction to Information Systems, BMS 1st Sem 2026</span>
          </div>
        </footer>

        {/* Floating Back To Top Button */}
        {showBackToTop && (
          <button
            type="button"
            className="floating-back-to-top-btn"
            onClick={handleScrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        {/* Modals */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectSection={handleSelectFromSearch}
        />

        <DataQualityModal
          isOpen={auditModalOpen}
          onClose={() => setAuditModalOpen(false)}
        />
      </main>
    </div>
  );
}

export default App;
