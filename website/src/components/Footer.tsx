import { TEAM_MEMBERS, COURSE_INFO } from '../data/researchData';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenDoc: () => void;
}

export function Footer({ onOpenDoc }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer reveal-on-scroll" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Wordmark & Core Mandate */}
          <div className="footer-brand-col">
            <div className="footer-brand-wordmark font-heading">SIXFOLD.</div>
            <div className="footer-course-tag">
              {COURSE_INFO.courseName} · {COURSE_INFO.groupNumber}
            </div>
            <p className="footer-description">
              A comprehensive 360° equity and information systems research dossier investigating Sun Pharmaceutical Industries Limited.
            </p>
            <div className="footer-doc-action">
              <button 
                type="button" 
                className="btn btn-outline-dark btn-sm"
                onClick={onOpenDoc}
              >
                <FileText size={14} />
                <span>Open Word Report (.docx)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Sixfold Researchers */}
          <div className="footer-team-col">
            <span className="footer-col-title font-stats">THE RESEARCH COLLECTIVE</span>
            <ul className="footer-members-list">
              {TEAM_MEMBERS.map((m) => (
                <li key={m.rollNumber}>
                  <span className="footer-member-name">{m.name}</span>
                  <span className="footer-member-roll font-stats">{m.rollNumber}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="footer-nav-col">
            <span className="footer-col-title font-stats">NAVIGATION</span>
            <ul className="footer-links-list">
              <li><a href="#about">Research Overview</a></li>
              <li><a href="#objectives">Problem &amp; Objectives</a></li>
              <li><a href="#frameworks">Strategic Frameworks</a></li>
              <li><a href="#visualizations">Data &amp; Charts</a></li>
              <li><a href="#findings">Empirical Findings</a></li>
              <li><a href="#recommendations">Recommendations</a></li>
              <li><a href="#limitations">Limitations &amp; Lawsuits</a></li>
              <li><a href="#team">Meet Sixfold</a></li>
              <li><a href="#quiz">Knowledge Challenge</a></li>
              <li><a href="#references">Bibliography</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Footer Bottom Row */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-copy">
            <span>© 2026 {COURSE_INFO.groupName} — Student-Designed Academic Showcase.</span>
            <span>Independent academic project for educational assessment · Not affiliated with or endorsed by Sun Pharmaceutical Industries Limited.</span>
          </div>

          <button 
            type="button" 
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
