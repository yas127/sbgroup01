import React from 'react';
import { FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

interface DownloadSectionProps {
  onOpenAuditModal: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="downloads" className="downloads-section-wrapper" aria-label="Original Report Downloads">
      <div className="downloads-container">
        <div className="downloads-header-row">
          <div>
            <span className="downloads-badge">OFFICIAL SUBMISSION ARCHIVES</span>
            <h2 className="downloads-title">DOWNLOAD ORIGINAL RESEARCH ARTIFACTS</h2>
            <p className="downloads-desc">
              Direct access to the complete 259-page evaluated academic PDF report and the comprehensive formatted Microsoft Word research dossier submitted for Introduction to Information Systems (BMS 2026).
            </p>
          </div>
          <button
            type="button"
            className="audit-log-pill-btn"
            onClick={onOpenAuditModal}
            aria-label="View Data Quality &amp; Correction Audit Log"
          >
            <ShieldCheck size={16} />
            <span>Data-Quality Audit Log</span>
          </button>
        </div>

        <div className="download-cards-grid">
          {/* Card 1: PDF Document */}
          <div className="download-artifact-card pdf-variant">
            <div className="artifact-top">
              <div className="artifact-icon-wrap pdf">
                <FileText size={26} />
              </div>
              <span className="artifact-type-tag">PRIMARY EVALUATION ARTIFACT</span>
            </div>

            <div className="artifact-center">
              <h3 className="artifact-filename">iis.pdf</h3>
              <p className="artifact-meta">
                259 Pages · 15.39 MB · PDF Document with 24 Embedded Visualizations
              </p>
              <ul className="artifact-bullets">
                <li><CheckCircle size={14} className="check-ico" /> Complete Qualitative, Quantitative &amp; Financial Research</li>
                <li><CheckCircle size={14} className="check-ico" /> 24 Extracted High-Resolution Empirical Charts &amp; Figures</li>
                <li><CheckCircle size={14} className="check-ico" /> Full References, Regulatory Filings &amp; Citations</li>
              </ul>
            </div>

            <div className="artifact-bottom">
              <a
                href="/downloads/iis.pdf"
                download="Sun_Pharma_IIS_Group01_Report.pdf"
                className="btn-artifact-download pdf-btn"
              >
                <Download size={18} />
                <span>DOWNLOAD IIS.PDF (15.4 MB)</span>
              </a>
            </div>
          </div>

          {/* Card 2: DOCX Document */}
          <div className="download-artifact-card docx-variant">
            <div className="artifact-top">
              <div className="artifact-icon-wrap docx">
                <FileText size={26} />
              </div>
              <span className="artifact-type-tag">SOURCE EDITORIAL DOSSIER</span>
            </div>

            <div className="artifact-center">
              <h3 className="artifact-filename">iis.docx</h3>
              <p className="artifact-meta">
                Full Word Dossier · 16.98 MB · Native Microsoft Word Archive
              </p>
              <ul className="artifact-bullets">
                <li><CheckCircle size={14} className="check-ico" /> Formatted Editorial Tables &amp; Academic Sections</li>
                <li><CheckCircle size={14} className="check-ico" /> Group 01 (SixFold) Full Course Dossier</li>
                <li><CheckCircle size={14} className="check-ico" /> Native Word Styles, Numbering &amp; XML Structure</li>
              </ul>
            </div>

            <div className="artifact-bottom">
              <a
                href="/downloads/iis.docx"
                download="Sun_Pharma_IIS_Group01_Dossier.docx"
                className="btn-artifact-download docx-btn"
              >
                <Download size={18} />
                <span>DOWNLOAD IIS.DOCX (17.0 MB)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
