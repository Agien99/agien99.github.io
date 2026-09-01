import {
  useEffect
} from 'react';

import './ProjectModal.css';

function ProjectModal({
  project,
  onClose
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow =
      'hidden';

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        '';

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [onClose]);


  if (!project) {
    return null;
  }


  const isSuccessful =
    project.status === 'Completed' ||
    project.status === 'Live';


  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
    >

      <div
        className="project-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>


        {/* HERO */}

        {project.detailImage && (
          <div
            className={`project-modal-hero ${
              project.type === 'mobile'
                ? 'project-modal-hero-mobile'
                : ''
            }`}
          >
            <img
              src={project.detailImage}
              alt={`${project.title} project preview`}
            />

            <div className="project-modal-hero-overlay"></div>
          </div>
        )}


        {/* CONTENT */}

        <div className="project-modal-content">

          {/* HEADER */}

          <header className="project-modal-header">

            <div className="project-modal-heading">

              <div className="project-modal-category-row">

                <span className="project-modal-code">
                  {'{ }'}
                </span>

                <p className="project-modal-category">
                  {project.category}
                </p>

              </div>

              <h2>
                {project.title}
              </h2>

            </div>


            <span
              className={`project-modal-status ${
                isSuccessful
                  ? 'project-modal-status-success'
                  : 'project-modal-status-development'
              }`}
            >
              <span className="project-modal-status-dot"></span>

              {project.status}
            </span>

          </header>


          {/* OVERVIEW */}

          {project.overview && (
            <section className="project-detail-section">

              <div className="project-detail-heading">
                <span>
                  01
                </span>

                <h3>
                  Project Overview
                </h3>
              </div>

              <p>
                {project.overview}
              </p>

            </section>
          )}


          {/* ROLE */}

          {project.role && (
            <section className="project-detail-section">

              <div className="project-detail-heading">
                <span>
                  02
                </span>

                <h3>
                  My Role
                </h3>
              </div>

              <p className="project-role">
                {project.role}
              </p>

            </section>
          )}


          {/* FEATURES */}

          {project.features &&
            project.features.length > 0 && (
              <section className="project-detail-section">

                <div className="project-detail-heading">
                  <span>
                    03
                  </span>

                  <h3>
                    Core Features
                  </h3>
                </div>

                <div className="project-feature-grid">

                  {project.features.map(
                    (feature) => (
                      <div
                        className="project-feature-item"
                        key={feature}
                      >
                        <span className="project-feature-check">
                          ✓
                        </span>

                        <p>
                          {feature}
                        </p>
                      </div>
                    )
                  )}

                </div>

              </section>
            )}


          {/* TECH STACK */}

          {project.fullTechnologies &&
            project.fullTechnologies.length > 0 && (
              <section className="project-detail-section">

                <div className="project-detail-heading">
                  <span>
                    04
                  </span>

                  <h3>
                    Tech Stack
                  </h3>
                </div>

                <div className="project-modal-technologies">

                  {project.fullTechnologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </section>
            )}


          {/* WORKFLOW */}

          {project.workflow &&
            project.workflow.length > 0 && (
              <section className="project-detail-section">

                <div className="project-detail-heading">
                  <span>
                    05
                  </span>

                  <h3>
                    Workflow
                  </h3>
                </div>

                <div className="project-workflow">

                  {project.workflow.map(
                    (step, index) => (
                      <div
                        className="workflow-step"
                        key={`${step}-${index}`}
                      >

                        <div className="workflow-number">
                          {String(index + 1).padStart(
                            2,
                            '0'
                          )}
                        </div>

                        <p>
                          {step}
                        </p>

                        {index <
                          project.workflow.length - 1 && (
                          <span className="workflow-arrow">
                            →
                          </span>
                        )}

                      </div>
                    )
                  )}

                </div>

              </section>
            )}


          {/* SCREENSHOTS */}

          {project.screenshots &&
            project.screenshots.length > 0 && (
              <section className="project-detail-section">

                <div className="project-detail-heading">
                  <span>
                    06
                  </span>

                  <h3>
                    Screenshots
                  </h3>
                </div>

                <div
                  className={`project-screenshot-grid ${
                    project.type === 'mobile'
                      ? 'project-screenshot-grid-mobile'
                      : ''
                  }`}
                >

                  {project.screenshots.map(
                    (screenshot) => (
                      <div
                        className={`project-screenshot ${
                          project.type === 'mobile'
                            ? 'project-screenshot-mobile'
                            : ''
                        }`}
                        key={screenshot.image}
                      >

                        <div className="project-screenshot-image">
                          <img
                            src={screenshot.image}
                            alt={screenshot.label}
                          />
                        </div>

                        <p>
                          {screenshot.label}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>
            )}


          {/* TECHNICAL HIGHLIGHTS */}

          {project.highlights &&
            project.highlights.length > 0 && (
              <section className="project-detail-section">

                <div className="project-detail-heading">
                  <span>
                    07
                  </span>

                  <h3>
                    Technical Highlights
                  </h3>
                </div>

                <div className="project-highlight-list">

                  {project.highlights.map(
                    (highlight) => (
                      <div
                        className="project-highlight-item"
                        key={highlight}
                      >
                        <span>
                          →
                        </span>

                        <p>
                          {highlight}
                        </p>
                      </div>
                    )
                  )}

                </div>

              </section>
            )}


          {/* ERD */}

          {project.erd && (
            <section className="project-detail-section">

              <div className="project-detail-heading">
                <span>
                  08
                </span>

                <h3>
                  System Design
                </h3>
              </div>

              <div className="project-erd">

                <img
                  src={project.erd}
                  alt={`${project.title} ERD`}
                />

              </div>

            </section>
          )}


          {/* STATUS */}

          {project.status && (
            <section className="project-detail-section">

              <div className="project-detail-heading">
                <span>
                  //
                </span>

                <h3>
                  Project Status
                </h3>
              </div>

              <p
                className={`project-status-text ${
                  isSuccessful
                    ? 'project-status-text-success'
                    : ''
                }`}
              >
                {project.status}
              </p>

            </section>
          )}


          {/* ACTIONS */}

          {(project.liveDemo ||
            project.github) && (
            <div className="project-modal-actions">

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-button"
                >
                  View Live Website

                  <span>
                    ↗
                  </span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-button project-modal-button-secondary"
                >
                  View GitHub Repository

                  <span>
                    ↗
                  </span>
                </a>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectModal;