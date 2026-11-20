import React, { useState } from 'react';
import { Search, Menu, Download, FileText, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenSearch: () => void;
  onToggleMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenSearch,
  onToggleMobileNav,
}) => {
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'roster', label: 'Group Roster' },
    { id: 'qualitative', label: '01 Qualitative' },
    { id: 'quantitative', label: '02 Quantitative' },
    { id: 'financial', label: '03 Financial' },
    { id: 'downloads', label: 'Downloads' },
  ];

  return (
    <header className="site-header" role="banner">
      <div className="header-left">
        {/* Mobile Hamburger Button */}
        <button 
          type="button" 
          className="header-hamburger-btn"
          onClick={onToggleMobileNav}
          aria-label="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        {/* Wordmark replicating template "LOREM  vector / eps.10" */}
        <div className="header-brand" onClick={() => onSelectSection('roster')} role="button" tabIndex={0}>
          <span className="brand-title">SIXFOLD</span>
          <span className="brand-badge">GROUP 01</span>
          <span className="brand-subtitle">BMS · 1ST SEM 2026</span>
        </div>
      </div>

      {/* Desktop Top Links */}
      <nav className="header-nav" aria-label="Main Navigation">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              type="button"
              className={`header-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => onSelectSection(link.id)}
            >
              {link.label}
              {isActive && <span className="nav-active-pill" aria-hidden="true" />}
            </button>
          );
        })}

        {/* Download Dropdown */}
        <div className="header-download-dropdown-wrap">
          <button
            type="button"
            className="header-download-btn"
            onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
            aria-label="Download original report files"
          >
            <Download size={15} />
            <span>Download</span>
            <ChevronDown size={14} />
          </button>

          {downloadDropdownOpen && (
            <div className="download-popover-menu" onClick={() => setDownloadDropdownOpen(false)}>
              <a
                href="/downloads/iis.pdf"
                download="Sun_Pharma_IIS_Group01_Report.pdf"
                className="popover-item"
              >
                <FileText size={16} className="pdf-pop-ico" />
                <div className="pop-item-text">
                  <strong>iis.pdf</strong>
                  <span>259 Pages · 15.4 MB</span>
                </div>
              </a>
              <a
                href="/downloads/iis.docx"
                download="Sun_Pharma_IIS_Group01_Dossier.docx"
                className="popover-item"
              >
                <FileText size={16} className="docx-pop-ico" />
                <div className="pop-item-text">
                  <strong>iis.docx</strong>
                  <span>Word Dossier · 17.0 MB</span>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Search trigger */}
        <button
          type="button"
          className="header-search-btn"
          onClick={onOpenSearch}
          aria-label="Search report"
        >
          <Search size={16} />
          <span className="search-btn-label">Search</span>
        </button>
      </nav>
    </header>
  );
};
