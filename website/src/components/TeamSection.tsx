import { useState } from 'react';
import { TEAM_MEMBERS } from '../data/researchData';
import type { TeamMember } from '../types/research';
import { ArrowUpRight, Award, BookOpen, X } from 'lucide-react';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="section-spacing section-cream reveal-on-scroll" aria-labelledby="team-heading">
      <div className="container">
        <div className="section-header-block">
          <div className="section-top-flex">
            <div>
              <span className="eyebrow">10 / THE PEOPLE BEHIND THE WORK</span>
              <h2 id="team-heading">Meet Sixfold.</h2>
            </div>
            <span className="team-count-badge font-stats">06 / 06 MEMBERS</span>
          </div>
          <p className="section-header-lead">
            The collaborative research collective behind this 360° equity and information systems dossier for Introduction to Information Systems, BMS Class of 2026.
          </p>
        </div>

        {/* 6-Member Balanced Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={member.rollNumber} 
              className="card-mono team-card"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              aria-label={`View profile for ${member.name}`}
            >
              <div className="team-card-top">
                <span className="team-member-number font-stats">0{idx + 1} / 06</span>
                <span className="team-card-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              {/* Minimalist Monochromatic Avatar / Photo */}
              <div className="team-avatar-wrapper">
                <div className={`team-avatar-ring ${member.image ? 'has-photo' : ''}`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-avatar-img"
                      loading="lazy" 
                    />
                  ) : (
                    <div className="team-avatar-initials font-stats">{member.initials}</div>
                  )}
                </div>
              </div>

              <div className="team-member-info">
                <span className="team-roll-pill font-stats">{member.rollNumber}</span>
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role">{member.role}</div>
                <p className="team-member-summary">{member.summary}</p>
              </div>

              <div className="team-card-footer">
                <span className="team-view-profile-text">
                  View Research Contribution <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Deep-Dive Modal */}
      {selectedMember && (
        <div 
          className="modal-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="member-modal-title"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="modal-container member-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile modal"
            >
              <X size={20} />
            </button>

            <div className="member-modal-header">
              <div className={`member-modal-avatar-ring ${selectedMember.image ? 'has-photo' : ''}`}>
                {selectedMember.image ? (
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="member-modal-avatar-img"
                  />
                ) : (
                  <div className="member-modal-avatar font-stats">{selectedMember.initials}</div>
                )}
              </div>
              <div>
                <span className="badge-mono" style={{ marginBottom: '6px' }}>
                  GROUP 01 · {selectedMember.rollNumber}
                </span>
                <h3 id="member-modal-title" className="member-modal-name">
                  {selectedMember.name}
                </h3>
                <div className="member-modal-role font-stats">{selectedMember.role}</div>
              </div>
            </div>

            <div className="divider-mono" style={{ margin: '20px 0' }} />

            <div className="member-modal-body">
              <div className="member-modal-section">
                <div className="modal-section-title">
                  <BookOpen size={16} />
                  <span>Research Specialization &amp; Focus Area</span>
                </div>
                <p className="member-focus-text font-serif">{selectedMember.focusArea}</p>
              </div>

              <div className="member-modal-section" style={{ marginTop: '16px' }}>
                <div className="modal-section-title">
                  <Award size={16} />
                  <span>Academic Contribution to Dossier</span>
                </div>
                <p>{selectedMember.summary}</p>
              </div>

              <div className="member-modal-academic-meta">
                <span><strong>Program:</strong> Bachelors of Management Studies (BMS)</span>
                <span><strong>Course:</strong> Introduction to Information Systems (IIS)</span>
                <span><strong>Cohort:</strong> 1st Semester · Class of 2026</span>
              </div>
            </div>

            <div className="member-modal-footer">
              <button 
                type="button" 
                className="btn btn-black"
                style={{ width: '100%' }}
                onClick={() => setSelectedMember(null)}
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
