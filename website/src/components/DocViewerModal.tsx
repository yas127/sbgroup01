import { FileText, Download, ExternalLink, X, CheckCircle, Info } from 'lucide-react';
import { COURSE_INFO, TEAM_MEMBERS } from '../data/researchData';

interface DocViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocViewerModal({ isOpen, onClose }: DocViewerModalProps) {
  if (!isOpen) return null;

  const docUrl = '/Sun_Pharma_IIS_Group01_Research_Dossier.docx';

  const handleOpenOfficeViewer = () => {
    if (window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost')) {
      const fullUrl = new URL(docUrl, window.location.href).href;
      window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(fullUrl)}`, '_blank', 'noopener,noreferrer');
    } else {
      // Direct open or fallback download
      window.open(docUrl, '_blank');
    }
  };

  return (
    <div 
      className="modal-backdrop" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Academic Research Document"
      onClick={onClose}
    >
      <div 
        className="modal-container doc-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close document modal"
        >
          <X size={20} />
        </button>

        <div className="doc-modal-header">
          <div className="doc-icon-badge">
            <FileText size={24} />
          </div>
          <div>
            <span className="badge-mono" style={{ marginBottom: '6px' }}>
              PRIMARY SOURCE OF TRUTH
            </span>
            <h3 className="doc-modal-title">Complete Research Dossier (.docx)</h3>
            <p className="doc-modal-subtitle font-heading">
              {COURSE_INFO.subjectCompany} · {COURSE_INFO.courseName}
            </p>
          </div>
        </div>

        <div className="divider-mono" style={{ margin: '18px 0' }} />

        <div className="doc-modal-body">
          <p className="doc-modal-intro">
            This digital presentation is accompanied by our group&apos;s complete, authoritative research document. 
            All quantitative analyses, qualitative leadership appraisals, Porter&apos;s 5 Forces, BCG Matrix, SWOT tables, 
            and litigation schedules were extracted directly from this master document.
          </p>

          <div className="doc-metadata-grid">
            <div className="doc-meta-item">
              <span className="doc-meta-label">Academic Program</span>
              <span className="doc-meta-val">{COURSE_INFO.program}</span>
            </div>
            <div className="doc-meta-item">
              <span className="doc-meta-label">Course &amp; Semester</span>
              <span className="doc-meta-val">{COURSE_INFO.courseName} ({COURSE_INFO.semester})</span>
            </div>
            <div className="doc-meta-item">
              <span className="doc-meta-label">Research Collective</span>
              <span className="doc-meta-val">{COURSE_INFO.groupName} ({COURSE_INFO.groupNumber})</span>
            </div>
            <div className="doc-meta-item">
              <span className="doc-meta-label">Subject Company</span>
              <span className="doc-meta-val">{COURSE_INFO.subjectCompany} (BSE: {COURSE_INFO.tickerBSE})</span>
            </div>
          </div>

          <div className="doc-authors-section">
            <span className="eyebrow dark">RESEARCH CONTRIBUTORS ({TEAM_MEMBERS.length} MEMBERS)</span>
            <div className="doc-authors-chips">
              {TEAM_MEMBERS.map((m) => (
                <span key={m.rollNumber} className="doc-author-chip font-stats">
                  {m.name} ({m.rollNumber})
                </span>
              ))}
            </div>
          </div>

          <div className="doc-notice-box">
            <Info size={16} />
            <span>
              The file is an authentic Microsoft Word document (.docx). You can download it directly to view on your device or inspect it online.
            </span>
          </div>

          <div className="doc-modal-actions-row">
            <a 
              href={docUrl} 
              download="Sun_Pharma_IIS_Group01_Research_Dossier.docx"
              className="btn btn-black"
              style={{ flex: 1 }}
            >
              <Download size={16} />
              <span>Download .docx File</span>
            </a>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleOpenOfficeViewer}
              style={{ flex: 1 }}
            >
              <ExternalLink size={16} />
              <span>Open Online Viewer</span>
            </button>
          </div>
        </div>

        <div className="doc-modal-footer">
          <CheckCircle size={15} />
          <span>Verified Academic Submission File · Preserved Integrity Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
