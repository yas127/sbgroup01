import { FileText, ArrowRight } from 'lucide-react';

interface ConclusionProps {
  onOpenDoc: () => void;
}

export function Conclusion({ onOpenDoc }: ConclusionProps) {
  return (
    <section id="conclusion" className="section-spacing section-dark reveal-on-scroll" aria-labelledby="conclusion-heading">
      <div className="container">
        <div className="conclusion-inner-card">
          <span className="eyebrow dark">09 / STRATEGIC SYNTHESIS &amp; OUTLOOK</span>
          <h2 id="conclusion-heading" className="conclusion-title">
            The Verdict: Escaping the Generic Trap Through Disciplined Specialty Compounding.
          </h2>

          <div className="conclusion-text-grid">
            <p>
              Our comprehensive 360° equity and information systems investigation of Sun Pharmaceutical Industries Limited demonstrates that 
              the company has successfully engineered an escape velocity from the developed-market generic commoditization trap. 
              By strategically allocating operating cash flows from its virtually monopolistic Indian domestic chronic franchise 
              into a patent-protected innovative specialty pipeline—now generating <strong>US$1.42 Billion (20.7% of sales)</strong>—Sun Pharma has established a bifurcated competitive moat that few global rivals can replicate.
            </p>
            <p>
              Supported by a virtually debt-free balance sheet, 14 backward-integrated API manufacturing facilities, and a global research workforce of 
              over 2,800 scientists, Sun Pharma remains uniquely positioned to capture upcoming biologics patent expiries. 
              Its long-term valuation compounding will ultimately depend on institutionalizing zero-defect cGMP quality systems to resolve US FDA regulatory friction 
              and accelerating Phase 3 clinical readouts for next-generation oncology and metabolic assets.
            </p>
          </div>

          <div className="conclusion-quote-box">
            <p className="conclusion-quote">
              &ldquo;Scale alone is no longer a defense in global pharmaceuticals. The winners of the next decade will be those who bridge cost-efficient API synthesis with proprietary, patent-protected therapeutic innovation.&rdquo;
            </p>
            <span className="conclusion-citation">
              Group 01 Academic Conclusion · Introduction to Information Systems, BMS Class of 2026
            </span>
          </div>

          <div className="conclusion-actions-row">
            <button 
              type="button" 
              className="btn btn-white"
              onClick={onOpenDoc}
              aria-label="Download or view full academic document"
            >
              <FileText size={16} />
              <span>Access Complete Word Report (.docx)</span>
            </button>

            <a href="#team" className="btn btn-outline-dark">
              <span>Meet Sixfold Researchers</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
