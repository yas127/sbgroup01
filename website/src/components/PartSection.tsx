import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, ExternalLink, ArrowRight, ArrowLeft, X, Image as ImageIcon } from 'lucide-react';

export interface SectionItem {
  id: string;
  title: string;
  titleModifiedFromReliance?: boolean;
  content: string;
  tables: Array<{ header: string[]; rows: string[][] }>;
  sources: string[];
  image: string | null;
}

export interface PartData {
  id: string;
  num: string;
  title: string;
  sections: SectionItem[];
}

interface PartSectionProps {
  part: PartData;
  customTopComponent?: React.ReactNode;
}

export const PartSection: React.FC<PartSectionProps> = ({ part, customTopComponent }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeModalSection, setActiveModalSection] = useState<SectionItem | null>(null);

  // Group sections in chunks of 2 for template dual-card carousel
  const totalSections = part.sections.length;

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? totalSections - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev === totalSections - 1 ? 0 : prev + 1));
  };

  const activeSec1 = part.sections[carouselIndex] || part.sections[0];
  const activeSec2 = part.sections[(carouselIndex + 1) % totalSections] || part.sections[0];

  const handleOpenSection = (sec: SectionItem) => {
    setActiveModalSection(sec);
  };

  const handleModalPrev = () => {
    if (!activeModalSection) return;
    const currentIdx = part.sections.findIndex((s) => s.id === activeModalSection.id);
    const newIdx = currentIdx === 0 ? totalSections - 1 : currentIdx - 1;
    setActiveModalSection(part.sections[newIdx]);
  };

  const handleModalNext = () => {
    if (!activeModalSection) return;
    const currentIdx = part.sections.findIndex((s) => s.id === activeModalSection.id);
    const newIdx = (currentIdx + 1) % totalSections;
    setActiveModalSection(part.sections[newIdx]);
  };

  return (
    <section id={part.id} className="part-section-container" aria-label={`Part ${part.num}: ${part.title}`}>
      {/* Big Outlined Numeral from Template (e.g., 01, 02, 03) */}
      <div className="part-watermark-numeral" aria-hidden="true">
        {part.num}
      </div>

      <div className="part-header-wrapper">
        <div className="part-eyebrow-row">
          <span className="part-badge">PART {part.num}</span>
          <span className="part-count-badge">{totalSections} SUBSECTIONS</span>
        </div>
        <h2 className="part-display-title">
          <span className="part-title-num">{part.num}</span> {part.title}
        </h2>
        <p className="part-subtitle-desc">
          Extracted directly from the university research dossier. Browse featured subsections via the card carousel below or open any topic for complete analytical text, empirical tables, and primary citations.
        </p>
      </div>

      {/* Featured Dual Card Carousel Replicating Template 02/03 Cards */}
      <div className="part-carousel-block">
        <div className="part-carousel-track">
          {/* Card 1: Dark Card */}
          <div
            className="template-card card-dark-mode"
            onClick={() => handleOpenSection(activeSec1)}
            role="button"
            tabIndex={0}
          >
            <div className="template-card-top">
              <span className="card-sec-badge">TOPIC #{carouselIndex + 1}</span>
              {activeSec1.image && (
                <span className="card-img-indicator" title="Contains original PDF figure">
                  <ImageIcon size={14} /> PDF Figure
                </span>
              )}
            </div>

            <div className="template-card-center">
              <h3 className="template-card-title">{activeSec1.title}</h3>
              <p className="template-card-excerpt">
                {activeSec1.content.slice(0, 160).replace(/\*\*/g, '')}...
              </p>
            </div>

            <div className="template-card-bottom">
              <div className="template-card-meta">
                <span>{activeSec1.sources.length} Verified Sources</span>
                {activeSec1.tables.length > 0 && <span>· {activeSec1.tables.length} Empirical Table(s)</span>}
              </div>
              <button
                type="button"
                className="btn-card-read"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenSection(activeSec1);
                }}
              >
                READ SECTION
              </button>
            </div>
          </div>

          {/* Card 2: Peach Card */}
          <div
            className="template-card card-peach-mode"
            onClick={() => handleOpenSection(activeSec2)}
            role="button"
            tabIndex={0}
          >
            <div className="template-card-top">
              <span className="card-sec-badge dark-badge">TOPIC #{((carouselIndex + 1) % totalSections) + 1}</span>
              {activeSec2.image && (
                <span className="card-img-indicator dark-badge" title="Contains original PDF figure">
                  <ImageIcon size={14} /> PDF Figure
                </span>
              )}
            </div>

            <div className="template-card-center">
              <h3 className="template-card-title dark-text">{activeSec2.title}</h3>
              <p className="template-card-excerpt dark-sub">
                {activeSec2.content.slice(0, 160).replace(/\*\*/g, '')}...
              </p>
            </div>

            <div className="template-card-bottom">
              <div className="template-card-meta dark-meta">
                <span>{activeSec2.sources.length} Sources</span>
                {activeSec2.tables.length > 0 && <span>· {activeSec2.tables.length} Table(s)</span>}
              </div>
              <button
                type="button"
                className="btn-card-read dark-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenSection(activeSec2);
                }}
              >
                READ SECTION
              </button>
            </div>
          </div>
        </div>

        {/* Circular Arrow Navigation Controls */}
        <div className="part-carousel-arrows">
          <button
            type="button"
            className="part-arrow-btn"
            onClick={handlePrevCarousel}
            aria-label="Previous carousel topic"
          >
            <ChevronLeft size={22} />
          </button>
          <span className="part-carousel-status">
            {carouselIndex + 1} / {totalSections}
          </span>
          <button
            type="button"
            className="part-arrow-btn"
            onClick={handleNextCarousel}
            aria-label="Next carousel topic"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Custom injected components (Management Cards, Framework Grids, Charts) */}
      {customTopComponent && <div className="part-custom-block">{customTopComponent}</div>}

      {/* Complete Subsections Grid / Index */}
      <div className="subsections-directory">
        <div className="directory-header">
          <h3 className="directory-title">
            <BookOpen size={18} className="dir-icon" />
            <span>ALL {totalSections} SUBSECTIONS IN PART {part.num}</span>
          </h3>
          <span className="directory-hint">Click any panel for complete research text &amp; figures</span>
        </div>

        <div className="subsections-grid">
          {part.sections.map((sec, idx) => (
            <div
              key={sec.id}
              className={`subsection-tile ${sec.titleModifiedFromReliance ? 'tile-modified' : ''}`}
              onClick={() => handleOpenSection(sec)}
              role="button"
              tabIndex={0}
            >
              <div className="tile-top">
                <span className="tile-idx">{part.num}.{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                {sec.image && <span className="tile-fig-pill">FIGURE</span>}
                {sec.titleModifiedFromReliance && <span className="tile-fixed-pill">RELIANCE CORRECTION</span>}
              </div>
              <h4 className="tile-title">{sec.title}</h4>
              <p className="tile-snippet">
                {sec.content.slice(0, 95).replace(/[\*\#\|]/g, '')}...
              </p>
              <div className="tile-footer">
                <span className="tile-sources-count">{sec.sources.length} sources</span>
                <span className="tile-action">Open &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION READER MODAL */}
      {activeModalSection && (
        <div className="section-reader-backdrop" onClick={() => setActiveModalSection(null)}>
          <div className="section-reader-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <div className="modal-title-wrap">
                <span className="modal-part-label">PART {part.num} // DOSSIER DEEP DIVE</span>
                <h3 className="modal-sec-title">{activeModalSection.title}</h3>
                {activeModalSection.titleModifiedFromReliance && (
                  <span className="modal-fix-note">
                    Note: Heading originally labeled "Reliance" in source PDF has been corrected to "Sun Pharma".
                  </span>
                )}
              </div>
              <button
                type="button"
                className="modal-close-icon"
                onClick={() => setActiveModalSection(null)}
                aria-label="Close reader"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-body-scroll">
              {/* Embedded PDF Figure if present */}
              {activeModalSection.image && (
                <div className="modal-figure-box">
                  <div className="figure-caption">
                    <ImageIcon size={16} />
                    <span>Original PDF Extracted Figure · {activeModalSection.title}</span>
                  </div>
                  <img
                    src={activeModalSection.image}
                    alt={`Figure for ${activeModalSection.title}`}
                    className="modal-extracted-img"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Empirical Tables from PDF */}
              {activeModalSection.tables.length > 0 && (
                <div className="modal-tables-box">
                  {activeModalSection.tables.map((tbl, tIdx) => (
                    <div key={tIdx} className="modal-table-container">
                      <div className="table-tag">EMPIRICAL DATA TABLE #{tIdx + 1}</div>
                      <table className="modal-rendered-table">
                        <thead>
                          <tr>
                            {tbl.header.map((h, hIdx) => (
                              <th key={hIdx}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tbl.rows.map((r, rIdx) => (
                            <tr key={rIdx}>
                              {r.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}

              {/* Research Text Content */}
              <div className="modal-prose">
                {activeModalSection.content.split('\n\n').map((para, pIdx) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return (
                      <h4 key={pIdx} className="prose-subheading">
                        {para.replace(/\*\*/g, '')}
                      </h4>
                    );
                  }
                  if (para.trim().startsWith('- ') || para.trim().startsWith('• ')) {
                    const listItems = para.split('\n').map((li) => li.replace(/^[-•]\s*/, ''));
                    return (
                      <ul key={pIdx} className="prose-bullet-list">
                        {listItems.map((item, lIdx) => (
                          <li key={lIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={pIdx} className="prose-paragraph">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Clickable Citations & Sources */}
              {activeModalSection.sources.length > 0 && (
                <div className="modal-sources-block">
                  <h5 className="sources-heading">
                    <ExternalLink size={15} /> VERIFIED CITATIONS &amp; REGULATORY FILINGS
                  </h5>
                  <ul className="sources-links-list">
                    {activeModalSection.sources.map((src, sIdx) => (
                      <li key={sIdx}>
                        <a href={src} target="_blank" rel="noopener noreferrer" className="source-anchor">
                          <span className="source-num">[{sIdx + 1}]</span>
                          <span className="source-url-text">{src}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom Prev / Next Navigation */}
            <div className="modal-footer-nav">
              <button type="button" className="modal-nav-step-btn" onClick={handleModalPrev}>
                <ArrowLeft size={16} />
                <span>Previous Topic</span>
              </button>
              <span className="modal-counter">
                {part.sections.findIndex((s) => s.id === activeModalSection.id) + 1} of {totalSections}
              </span>
              <button type="button" className="modal-nav-step-btn" onClick={handleModalNext}>
                <span>Next Topic</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
