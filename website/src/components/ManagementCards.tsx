import React from 'react';
import { UserCheck, Award, Briefcase, AlertCircle, ThumbsUp, Calendar } from 'lucide-react';

export const ManagementCards: React.FC = () => {
  const executives = [
    {
      role: 'Chief Executive Officer / Managing Director',
      name: 'Kirti Ganorkar',
      tenure: '30 Years at Sun Pharma (Joined 1996) · MD Effective 1 Sept 2025',
      experience:
        'Led Sun Pharma\'s core India formulations business from June 2019, cementing #1 domestic ranking (7.90% market share). Succeeded founder Dilip Shanghvi in planned leadership succession.',
      strengths: [
        'Unrivalled mastery of Indian pharmaceutical distribution and acute/chronic prescriber networks',
        'Proven commercial track record sustaining 13%+ domestic formulation CAGR',
        'Deep institutional continuity and cross-functional leadership spanning three decades',
      ],
      weaknesses: [
        'Historically focused predominantly on domestic commercial markets rather than international regulatory diplomacy',
        'Facing simultaneous challenges of US generic price deflation and biosimilar capital allocation',
      ],
      publicSentiment:
        'Strongly positive across equity analysts and industry press; viewed as the quintessential internal operational heir capable of maintaining Sun\'s domestic dominance.',
    },
    {
      role: 'Chief Financial Officer (CFO)',
      name: 'Jayashree Satagopan',
      tenure: 'Associated since May 2025 · Formally Appointed CFO 1 July 2025',
      experience:
        'Qualified CA, Cost & Management Accountant, and Company Secretary (B.Com Madras University). Prior CFO at Coromandel International with senior global financial roles at Henkel and Asian Paints.',
      strengths: [
        'Rigorous capital allocation discipline with multi-industry manufacturing experience',
        'Strengthened treasury operations, FX risk hedging, and ESG accounting integration',
        'Transparent investor relations communication and conservative balance sheet stewardship',
      ],
      weaknesses: [
        'Relatively recent appointment in the pharmaceutical sector compared to Sun Pharma\'s long-tenured veteran bench',
        'Tasked with managing complex US FDA compliance expenditures and ongoing litigation liabilities',
      ],
      publicSentiment:
        'High institutional confidence; widely respected for corporate governance rigor, financial compliance, and conservative accounting practices.',
    },
    {
      role: 'Chief Operating Officer (COO)',
      name: 'Aalok Shanghvi',
      tenure: '20 Years at Sun Pharma (Joined 2006) · COO Effective February 2025',
      experience:
        'Whole-time Director since June 2023. Spearheaded Emerging Markets across 80+ countries since 2014, expanding to oversee global generic R&D, global operations, and API business units.',
      strengths: [
        'Direct architect of Sun Pharma\'s multi-geography footprint in Eastern Europe, LATAM, and Africa',
        'End-to-end integration of supply chain, 43 manufacturing sites, and active pharmaceutical ingredient synthesis',
        'Pioneered emerging market expansion that now yields over ₹11,070 Cr annually ($1.26B)',
      ],
      weaknesses: [
        'Navigating geopolitical volatility and currency devaluation in emerging territories (Russia, Romania, Brazil)',
        'Balancing legacy generic manufacturing compliance with new innovative biologic sterile requirements',
      ],
      publicSentiment:
        'Regarded as a dynamic second-generation operational leader combining strategic foresight with hands-on global supply chain execution.',
    },
  ];

  return (
    <div className="management-profiles-grid">
      {executives.map((exec) => (
        <div key={exec.name} className="exec-profile-card">
          <div className="exec-header">
            <div className="exec-badge-row">
              <span className="exec-role-badge">{exec.role}</span>
              <span className="exec-icon-wrap">
                <UserCheck size={18} />
              </span>
            </div>
            <h3 className="exec-name">{exec.name}</h3>
            <div className="exec-tenure">
              <Calendar size={14} className="exec-meta-icon" />
              <span>{exec.tenure}</span>
            </div>
          </div>

          <div className="exec-body">
            <div className="exec-section-block">
              <span className="exec-label">
                <Briefcase size={14} className="exec-sub-icon" /> Background &amp; Experience
              </span>
              <p className="exec-text">{exec.experience}</p>
            </div>

            <div className="exec-section-block">
              <span className="exec-label positive">
                <Award size={14} className="exec-sub-icon" /> Core Strengths
              </span>
              <ul className="exec-list">
                {exec.strengths.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="exec-section-block">
              <span className="exec-label warning">
                <AlertCircle size={14} className="exec-sub-icon" /> Strategic Challenges &amp; Limitations
              </span>
              <ul className="exec-list">
                {exec.weaknesses.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>

            <div className="exec-section-block sentiment-box">
              <span className="exec-label sentiment">
                <ThumbsUp size={14} className="exec-sub-icon" /> Public &amp; Investor Sentiment
              </span>
              <p className="exec-text italic">{exec.publicSentiment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
