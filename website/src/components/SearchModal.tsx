import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import reportData from '../data/reportData.json';
import type { SectionItem } from './PartSection';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: SectionItem, partId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectSection }) => {
  const [query, setQuery] = useState('');
  const [selectedPartFilter, setSelectedPartFilter] = useState<'all' | 'qualitative' | 'quantitative' | 'financial'>('all');

  if (!isOpen) return null;

  // Flatten all sections
  const allSections: Array<{ sec: SectionItem; partId: string; partNum: string; partTitle: string }> = [];
  reportData.forEach((part) => {
    part.sections.forEach((sec) => {
      allSections.push({
        sec: sec as unknown as SectionItem,
        partId: part.id,
        partNum: part.num,
        partTitle: part.title,
      });
    });
  });

  const filtered = allSections.filter((item) => {
    const matchesPart = selectedPartFilter === 'all' || item.partId === selectedPartFilter;
    const q = query.toLowerCase().trim();
    if (!q) return matchesPart;
    const matchesTitle = item.sec.title.toLowerCase().includes(q);
    const matchesContent = item.sec.content.toLowerCase().includes(q);
    return matchesPart && (matchesTitle || matchesContent);
  });

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Top search input */}
        <div className="search-input-wrapper">
          <Search size={22} className="search-icon-inside" />
          <input
            type="text"
            className="search-text-input"
            placeholder="Search report by keyword (e.g. 'Ganorkar', 'Ilumya', 'Gross Margin', 'Porter', 'TAM')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button type="button" className="search-clear-btn" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
          <button type="button" className="search-close-btn" onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="search-filters-row">
          <span className="filters-label">Filter Part:</span>
          <button
            type="button"
            className={`filter-pill ${selectedPartFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedPartFilter('all')}
          >
            All (62)
          </button>
          <button
            type="button"
            className={`filter-pill ${selectedPartFilter === 'qualitative' ? 'active' : ''}`}
            onClick={() => setSelectedPartFilter('qualitative')}
          >
            01 Qualitative (24)
          </button>
          <button
            type="button"
            className={`filter-pill ${selectedPartFilter === 'quantitative' ? 'active' : ''}`}
            onClick={() => setSelectedPartFilter('quantitative')}
          >
            02 Quantitative (19)
          </button>
          <button
            type="button"
            className={`filter-pill ${selectedPartFilter === 'financial' ? 'active' : ''}`}
            onClick={() => setSelectedPartFilter('financial')}
          >
            03 Financial (19)
          </button>
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {filtered.length === 0 ? (
            <div className="search-empty-state">
              <BookOpen size={36} className="empty-icon" />
              <p>No sections found matching "{query}". Try searching for another topic or metric.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.sec.id}
                className="search-result-row"
                onClick={() => {
                  onSelectSection(item.sec, item.partId);
                  onClose();
                }}
                role="button"
                tabIndex={0}
              >
                <div className="result-part-col">
                  <span className="result-part-badge">PART {item.partNum}</span>
                </div>
                <div className="result-info-col">
                  <h4 className="result-title">{item.sec.title}</h4>
                  <p className="result-excerpt">
                    {item.sec.content.slice(0, 140).replace(/[\*\#\|]/g, '')}...
                  </p>
                </div>
                <div className="result-action-col">
                  <span className="jump-arrow">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="search-modal-footer">
          <span>Showing {filtered.length} of 62 total report subsections</span>
          <span className="esc-hint">Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
