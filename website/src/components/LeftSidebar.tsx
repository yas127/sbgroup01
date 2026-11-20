import React from 'react';

interface LeftSidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  activeSection,
  onSelectSection,
  mobileOpen,
  onCloseMobile,
}) => {
  const sections = [
    { id: 'roster', label: 'GROUP 01 // SIXFOLD', num: '00' },
    { id: 'qualitative', label: '01 QUALITATIVE', num: '01' },
    { id: 'quantitative', label: '02 QUANTITATIVE', num: '02' },
    { id: 'financial', label: '03 FINANCIAL', num: '03' },
    { id: 'downloads', label: 'DOWNLOAD FILES', num: '04' },
  ];

  return (
    <>
      {/* Desktop Left Rail */}
      <aside className="left-vertical-rail" aria-label="Section Navigation">
        <div className="rail-top-dot" aria-hidden="true" />
        
        <nav className="rail-nav">
          {sections.map((sec, index) => {
            const isActive = activeSection === sec.id;
            return (
              <React.Fragment key={sec.id}>
                {index > 0 && <div className="rail-divider" aria-hidden="true" />}
                <button
                  type="button"
                  className={`rail-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSection(sec.id)}
                  aria-label={`Jump to ${sec.label}`}
                >
                  <span className="rail-dot" />
                  <span className="rail-label">{sec.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </nav>

        <div className="rail-bottom-indicator" aria-hidden="true">
          <span className="rail-course-code">BMS '26</span>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">GROUP 01 // SIXFOLD</span>
          <button 
            type="button" 
            className="mobile-drawer-close"
            onClick={onCloseMobile}
            aria-label="Close Navigation"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-drawer-list">
          {sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              className={`mobile-drawer-item ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => {
                onSelectSection(sec.id);
                onCloseMobile();
              }}
            >
              <span className="mobile-item-num">{sec.num}</span>
              <span className="mobile-item-label">{sec.label}</span>
            </button>
          ))}
          <button
            type="button"
            className="mobile-drawer-item"
            onClick={() => {
              onSelectSection('sources');
              onCloseMobile();
            }}
          >
            <span className="mobile-item-num">04</span>
            <span className="mobile-item-label">SOURCES &amp; CITATIONS</span>
          </button>
        </nav>
      </div>
    </>
  );
};
