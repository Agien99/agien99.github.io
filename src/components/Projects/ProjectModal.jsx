import { useEffect, useRef } from 'react';
import './ProjectModal.css';
import './ProjectCaseStudy.css';

function SectionHeading({ index, children }) {
  return (
    <div className="project-detail-heading">
      <span>{String(index).padStart(2, '0')}</span>
      <h3>{children}</h3>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const isSuccessful = ['Completed', 'Live'].includes(project.status);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('.project-modal-close')?.focus();

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const controls = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href]')];
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div ref={dialogRef} className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`project-dialog-${project.id}`}>
        <button type="button" className="project-modal-close" onClick={onClose} aria-label="Close project details">×</button>

        {project.detailImage && (
          <div className={`project-modal-hero ${project.type === 'mobile' ? 'project-modal-hero-mobile' : ''}`}>
            <img src={project.detailImage} alt={`${project.title} interface overview`} />
            <div className="project-modal-hero-overlay" />
          </div>
        )}

        <div className="project-modal-content">
          <header className="project-modal-header">
            <div className="project-modal-heading">
              <div className="project-modal-category-row">
                <span className="project-modal-code">{'{ }'}</span>
                <p className="project-modal-category">{project.category}</p>
              </div>
              <h2 id={`project-dialog-${project.id}`}>{project.title}</h2>
            </div>
            <span className={`project-modal-status ${isSuccessful ? 'project-modal-status-success' : 'project-modal-status-development'}`}>
              <span className="project-modal-status-dot" />{project.status}
            </span>
          </header>

          <section className="project-detail-section">
            <SectionHeading index={1}>Project Overview</SectionHeading>
            <p>{project.overview}</p>
            <div className="project-case-summary">
              <div className="project-case-summary-item">
                <strong>Objective</strong><p>{project.objective}</p>
              </div>
              <div className="project-case-summary-item">
                <strong>Scope</strong><p>{project.scope}</p>
              </div>
              <div className="project-case-summary-item">
                <strong>Impact</strong><p>{project.impact}</p>
              </div>
            </div>
          </section>

          <section className="project-detail-section">
            <SectionHeading index={2}>My Role</SectionHeading>
            <p className="project-role">{project.role}</p>
          </section>

          <section className="project-detail-section">
            <SectionHeading index={3}>Core Features</SectionHeading>
            <div className="project-feature-grid">
              {project.features.map((feature) => (
                <div className="project-feature-item" key={feature}>
                  <span className="project-feature-check">✓</span><p>{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <SectionHeading index={4}>Technology Stack</SectionHeading>
            <div className="project-modal-technologies">
              {project.fullTechnologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </section>

          <section className="project-detail-section">
            <SectionHeading index={5}>Process Flow</SectionHeading>
            <p className="project-flow-intro">Follow the major steps, then view the corresponding screens and what happens at each stage.</p>
            <div className="project-workflow project-workflow-wrap">
              {project.workflow.map((step, index) => (
                <div className="workflow-step" key={`${step}-${index}`}>
                  <div className="workflow-number">{String(index + 1).padStart(2, '0')}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {project.screenshots.length > 0 && (
            <section className="project-detail-section">
              <SectionHeading index={6}>Screen-by-Screen Walkthrough</SectionHeading>
              <p className="project-flow-intro">Application screens are paired with an explanation of their role in the end-to-end process.</p>
              <div className={`project-case-walkthrough ${project.type === 'mobile' ? 'project-case-walkthrough-mobile' : ''}`}>
                {project.screenshots.map((screen, index) => (
                  <article className="project-case-screen" key={`${project.id}-${screen.image}`}>
                    <div className={`project-case-screen-image ${project.type === 'mobile' ? 'project-case-screen-image-mobile' : ''}`}>
                      <img src={screen.image} alt={`${project.title}: ${screen.label}`} loading="lazy" />
                    </div>
                    <div className="project-case-screen-copy">
                      <div className="project-case-screen-overline">
                        <span>STEP {String(index + 1).padStart(2, '0')}</span>
                        {screen.sample && <span className="project-case-sample-badge">Sample data · Source-guided UI</span>}
                      </div>
                      <h4>{screen.label}</h4>
                      <p>{screen.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="project-detail-section">
            <SectionHeading index={7}>Technical Coding</SectionHeading>
            <p className="project-flow-intro">A selected implementation excerpt from the project repository, with context on the engineering decision.</p>
            <div className="project-code-panel">
              <div className="project-code-header">
                <span>{project.codePath}</span><span>{project.codeLanguage}</span>
              </div>
              <pre tabIndex={0}><code>{project.codeSnippet}</code></pre>
            </div>
            <p className="project-code-note">{project.codeExplanation}</p>
          </section>

          <section className="project-detail-section">
            <SectionHeading index={8}>Technical Highlights</SectionHeading>
            <div className="project-highlight-list">
              {project.highlights.map((highlight) => (
                <div className="project-highlight-item" key={highlight}>
                  <span>→</span><p>{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="project-case-footer">
            <div><span>Project Status</span><strong className={isSuccessful ? 'project-case-status-ok' : ''}>{project.status}</strong></div>
            {project.liveDemo && (
              <a className="project-modal-button" href={project.liveDemo} target="_blank" rel="noreferrer">
                View Live Application <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;