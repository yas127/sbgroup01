import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/researchData';
import { Check, X, ArrowRight, RotateCcw } from 'lucide-react';

export function InteractiveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="section-spacing section-white reveal-on-scroll" aria-labelledby="quiz-heading">
      <div className="container">
        <div className="section-header-block center">
          <span className="eyebrow">11 / INTERACTIVE CHALLENGE</span>
          <h2 id="quiz-heading">Test Your Research Knowledge.</h2>
          <p className="section-header-lead">
            Five quick academic comprehension questions drawn directly from our group&apos;s primary research document.
          </p>
        </div>

        <div className="quiz-card-wrapper card-mono">
          {!isCompleted ? (
            <div className="quiz-active-box">
              <div className="quiz-progress-row">
                <span className="quiz-step-tag font-stats">
                  QUESTION 0{currentIndex + 1} / 0{QUIZ_QUESTIONS.length}
                </span>
                <span className="quiz-live-score font-stats">
                  Current Score: {score}
                </span>
              </div>

              <div className="quiz-progress-bar-track">
                <div 
                  className="quiz-progress-bar-fill" 
                  style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h3 className="quiz-question-title">{currentQ.question}</h3>

              <div className="quiz-options-list">
                {currentQ.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  let stateClass = '';
                  if (selectedOption !== null) {
                    if (idx === currentQ.correctIndex) stateClass = 'correct';
                    else if (idx === selectedOption) stateClass = 'incorrect';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={selectedOption !== null}
                      className={`quiz-option-btn ${stateClass}`}
                      onClick={() => handleSelect(idx)}
                    >
                      <span className="option-letter font-stats">{letter}</span>
                      <span className="option-text">{opt}</span>
                      {selectedOption !== null && idx === currentQ.correctIndex && (
                        <Check size={18} className="option-icon" />
                      )}
                      {selectedOption !== null && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <X size={18} className="option-icon" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="quiz-feedback-box animate-fade-in">
                  <div className="feedback-explanation">
                    <strong>
                      {selectedOption === currentQ.correctIndex ? '✓ Correct Answer' : '✕ Academic Clarification'}
                    </strong>
                    <p>{currentQ.explanation}</p>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-black quiz-next-btn"
                    onClick={handleNext}
                  >
                    <span>
                      {currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Complete Challenge'}
                    </span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="quiz-results-box animate-fade-in">
              <span className="badge-mono dark" style={{ marginBottom: '16px' }}>CHALLENGE COMPLETED</span>
              <div className="quiz-score-display font-stats">
                {score} / {QUIZ_QUESTIONS.length}
              </div>
              <h3 className="quiz-results-title">
                {score === QUIZ_QUESTIONS.length
                  ? 'Flawless Comprehension!'
                  : score >= 3
                  ? 'Strong Research Grasp!'
                  : 'Review the Dossier!'}
              </h3>
              <p className="quiz-results-desc">
                {score === QUIZ_QUESTIONS.length
                  ? 'You demonstrated comprehensive mastery over Sun Pharma’s FY26 financial data, specialty transition, and corporate milestones.'
                  : 'You have a good foundational grasp of the research. Explore the visual data analysis sections or review the original Word document.'}
              </p>
              <div className="quiz-results-actions">
                <button 
                  type="button" 
                  className="btn btn-black"
                  onClick={handleReset}
                >
                  <RotateCcw size={15} />
                  <span>Retake Challenge</span>
                </button>
                <a href="#visualizations" className="btn btn-outline">
                  <span>Revisit Data &amp; Charts</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
