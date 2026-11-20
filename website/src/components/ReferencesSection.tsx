import { useState } from 'react';
import { ACADEMIC_REFERENCES } from '../data/researchData';
import { ExternalLink, BookMarked } from 'lucide-react';

export function ReferencesSection() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Financial Results', 'Regulatory & Ratings', 'Corporate Governance', 'Legal & Industry'];

  const filteredReferences = selectedCat === 'All'
    ? ACADEMIC_REFERENCES
    : ACADEMIC_REFERENCES.filter(r => r.category === selectedCat);

  return (
    <section id="references" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="ref-heading">
      <div className="container">
        <div className="section-header-block">
          <span className="eyebrow">12 / PRIMARY SOURCES &amp; BIBLIOGRAPHY</span>
          <h2 id="ref-heading">Academic References &amp; Citations.</h2>
          <p className="section-header-lead">
            Every analytical conclusion and data point in this dossier is anchored in verified corporate disclosures, regulatory registries, and judicial filings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="reference-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`ref-filter-btn ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* References Grid */}
        <div className="references-grid">
          {filteredReferences.map((ref) => (
            <div key={ref.title} className="card-mono reference-card">
              <div className="reference-top">
                <span className="badge-mono">{ref.category}</span>
                <span className="ref-org-text font-stats">{ref.organization}</span>
              </div>

              <h4 className="reference-title">{ref.title}</h4>
              <p className="reference-desc">{ref.description}</p>

              <div className="reference-bottom">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reference-external-link"
                  aria-label={`Open primary source for ${ref.title}`}
                >
                  <span>Access Primary Document</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="citation-standard-box">
          <BookMarked size={18} />
          <span>
            <strong>Citation Standard:</strong> Formatted in accordance with APA 7th Edition guidelines for corporate equity and information systems submissions.
          </span>
        </div>
      </div>
    </section>
  );
}
