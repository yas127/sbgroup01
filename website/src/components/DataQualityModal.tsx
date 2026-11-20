import React from 'react';
import { X, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface DataQualityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataQualityModal: React.FC<DataQualityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const relianceCorrections = [
    {
      originalHeading: 'Reliance Historical Revenue Growth',
      correctedHeading: 'Sun Pharma Historical Revenue Growth',
      section: 'Part 03: Financial Research',
      page: 'p. 187',
      reason: 'Template artifact in source Word/PDF document mistakenly labeled Reliance instead of Sun Pharma.',
    },
    {
      originalHeading: 'Reliance Historical E.P.S. Growth',
      correctedHeading: 'Sun Pharma Historical E.P.S. Growth',
      section: 'Part 03: Financial Research',
      page: 'p. 198',
      reason: 'Heading corrected to match actual Sun Pharma per-share earnings data.',
    },
    {
      originalHeading: 'Reliance Historical Gross Margin %',
      correctedHeading: 'Sun Pharma Historical Gross Margin %',
      section: 'Part 03: Financial Research',
      page: 'p. 207',
      reason: 'Data represents Sun Pharma 10-year consolidated gross margin expansion from 73.1% to 76.5%.',
    },
    {
      originalHeading: 'Reliance Historical Operating Margin %',
      correctedHeading: 'Sun Pharma Historical Operating Margin %',
      section: 'Part 03: Financial Research',
      page: 'p. 214',
      reason: 'Heading corrected to reflect Sun Pharma\'s operating profit recovery from 21.2% to 27.8%.',
    },
    {
      originalHeading: 'Reliance Historical Valuation on a P/E and PEG Basis',
      correctedHeading: 'Sun Pharma Historical Valuation on a P/E and PEG Basis',
      section: 'Part 03: Financial Research',
      page: 'p. 219',
      reason: 'Evaluates Sun Pharma\'s price-to-earnings multiple (36.73x in FY26) and PEG ratio.',
    },
    {
      originalHeading: 'Reliance Valuation on a P/R Basis',
      correctedHeading: 'Sun Pharma Valuation on a P/R Basis',
      section: 'Part 03: Financial Research',
      page: 'p. 224',
      reason: 'Calculates Price-to-Revenue / Price-to-Sales (7.00x–7.21x) for Sun Pharma.',
    },
    {
      originalHeading: 'Reliance Seasonality',
      correctedHeading: 'Sun Pharma Seasonality',
      section: 'Part 03: Financial Research',
      page: 'p. 230',
      reason: 'Analyzes quarterly formulation demand cycles (recurring Q3-to-Q4 drop) for Sun Pharma.',
    },
  ];

  const formulaCorrections = [
    {
      page: 'p. 131',
      garbled: 'grow from US 126.0 billion by 93. 6𝑏𝑖𝑙𝑙𝑖𝑜𝑛𝑖𝑛2024𝑡𝑜𝑈𝑆 2033',
      decoded: 'grow from US$93.6 billion in 2024 to US$126.0 billion by 2033 (CAGR ~3.4%)',
      metric: 'US Generics Market TAM',
    },
    {
      page: 'p. 131',
      garbled: 'grow from US 57.7 27. 2𝑏𝑖𝑙𝑙𝑖𝑜𝑛𝑖𝑛2024𝑡𝑜𝑈𝑆 billion by 2032',
      decoded: 'grow from US$27.2 billion in 2024 to US$57.7 billion by 2032 (CAGR ~9.8%)',
      metric: 'Global Psoriasis Treatment TAM (Ilumya driver)',
    },
    {
      page: 'p. 131',
      garbled: 'exceed US 121 billion in 2. 6 𝑡𝑟𝑖𝑙𝑙𝑖𝑜𝑛 𝑏𝑦 2030. 𝑃ℎ𝑎𝑟𝑚𝑒𝑟 𝑔𝑖𝑛𝑔... 𝑈𝑆',
      decoded: 'exceed US$2.6 trillion by 2030. Pharmerging markets expected to add ~US$121 billion',
      metric: 'Global Medicine Spending (IQVIA Forecast)',
    },
    {
      page: 'p. 131',
      garbled: 'Emerging Markets sales grew 7.0%... 1, 114𝑚𝑖𝑙𝑙𝑖𝑜𝑛... 847',
      decoded: 'Emerging Markets sales: US$1,114 million; Rest of World: US$847 million in FY25',
      metric: 'FY25 Segmental Geographic Sales',
    },
    {
      page: 'p. 131',
      garbled: 'API market grow from US 238.3 billion by 163. 5𝑏𝑖𝑙𝑙𝑖𝑜𝑛𝑖𝑛2024𝑡𝑜𝑈𝑆 2029',
      decoded: 'grow from US$163.5 billion in 2024 to US$238.3 billion by 2029 (CAGR 7.8%)',
      metric: 'Global Active Pharmaceutical Ingredients (API) TAM',
    },
    {
      page: 'p. 135',
      garbled: 'US formulation sales: 1, 904𝑚𝑖𝑙𝑙𝑖𝑜𝑛(𝑎𝑏𝑜𝑢𝑡₹16, 660𝑐𝑟𝑜𝑟𝑒)𝑖𝑛𝐹𝑌26, 𝑑𝑜𝑤𝑛... 1,921 million',
      decoded: 'US formulation sales: US$1,904 million (about ₹16,660 crore) in FY26, down 0.9% from US$1,921 million in FY25',
      metric: 'FY26 US Formulation Realization',
    },
    {
      page: 'p. 135',
      garbled: 'Rest of World sales: 969𝑚𝑖𝑙𝑙𝑖𝑜𝑛(𝑎𝑏𝑜𝑢𝑡₹8, 480𝑐𝑟𝑜𝑟𝑒)𝑖𝑛𝐹𝑌26... Q4 FY26 220 million',
      decoded: 'Rest of World sales: US$969 million (about ₹8,480 crore) in FY26, up 14.4%; Q4 FY26 sales were US$220 million',
      metric: 'FY26 Rest of World Regional Turnover',
    },
  ];

  return (
    <div className="audit-modal-backdrop" onClick={onClose}>
      <div className="audit-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="audit-modal-header">
          <div className="audit-title-block">
            <span className="audit-tag">
              <ShieldCheck size={16} /> DATA INTEGRITY AUDIT TRAIL
            </span>
            <h3 className="audit-heading">Data-Quality &amp; Source Document Normalization Log</h3>
            <p className="audit-sub">
              Full transparency of all normalized headings and verified mathematical formula corrections made between the source PDF text layer and this presentation website.
            </p>
          </div>
          <button type="button" className="audit-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="audit-modal-scroll">
          {/* Section 1: Reliance -> Sun Pharma */}
          <div className="audit-category-section">
            <h4 className="audit-cat-title">
              <AlertTriangle size={18} className="warn-ico" />
              1. Correction of Legacy "Reliance" Headings to "Sun Pharma" (7 Occurrences)
            </h4>
            <p className="audit-cat-desc">
              In Part 03 (Financial Research), seven section titles originally carried the word "Reliance" as a leftover template heading from a prior report draft, despite all underlying financial data (EPS, operating margin, P/E multiples, seasonality) relating exclusively to Sun Pharmaceutical Industries Limited. Each heading has been normalized to "Sun Pharma":
            </p>

            <div className="audit-table-wrap">
              <table className="audit-table">
                <thead>
                  <tr>
                    <th>PAGE</th>
                    <th>SOURCE HEADING (IN PDF)</th>
                    <th>NORMALIZED DISPLAY HEADING</th>
                    <th>DATA SUBJECT &amp; CONTEXT</th>
                  </tr>
                </thead>
                <tbody>
                  {relianceCorrections.map((item, idx) => (
                    <tr key={idx}>
                      <td className="page-td"><strong>{item.page}</strong></td>
                      <td className="strikethrough-td"><del>{item.originalHeading}</del></td>
                      <td className="corrected-td"><strong>{item.correctedHeading}</strong></td>
                      <td className="context-td">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Decoded Formulas */}
          <div className="audit-category-section">
            <h4 className="audit-cat-title">
              <CheckCircle size={18} className="check-ico" />
              2. Restoration of Garbled Formula &amp; Currency Strings (7 Occurrences)
            </h4>
            <p className="audit-cat-desc">
              During PDF export, certain mathematical equation fonts (italicized Cambria Math glyphs) rendered out-of-order in the raw text extraction layer. These were cross-checked directly against the rendered PDF visual page layouts and corrected to verified numbers:
            </p>

            <div className="audit-table-wrap">
              <table className="audit-table">
                <thead>
                  <tr>
                    <th>PAGE</th>
                    <th>METRIC DOMAIN</th>
                    <th>RAW GARBLED PDF STRING</th>
                    <th>VERIFIED DECODED VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  {formulaCorrections.map((f, idx) => (
                    <tr key={idx}>
                      <td className="page-td"><strong>{f.page}</strong></td>
                      <td><strong>{f.metric}</strong></td>
                      <td className="garbled-td"><code>{f.garbled}</code></td>
                      <td className="decoded-td"><span className="val-badge">{f.decoded}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="audit-modal-footer">
          <span className="audit-footer-note">
            All primary data points cross-verified against Sun Pharma FY2026 Annual Report, Investor Presentations &amp; IQVIA MAT Data.
          </span>
          <button type="button" className="btn-audit-dismiss" onClick={onClose}>
            Close Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};
