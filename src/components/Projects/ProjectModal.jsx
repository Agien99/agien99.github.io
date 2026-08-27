import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >

        {/* =========================
            CLOSE BUTTON
        ========================= */}

        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        {/* =========================
            HERO IMAGE
        ========================= */}

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
          </div>
        )}

        {/* =========================
            CONTENT
        ========================= */}

        <div className="project-modal-content">

          {/* =========================
              HEADER
          ========================= */}

          <div className="project-modal-header">

            <div>
              <p className="project-modal-category">
                {project.category}
              </p>

              <h2>
                {project.title}
              </h2>
            </div>

            <span
              className={`project-modal-status ${
                project.status === 'Completed'
                  ? 'project-modal-status-completed'
                  : 'project-modal-status-development'
              }`}
            >
              <span className="project-modal-status-dot"></span>

              {project.status}
            </span>

          </div>

          {/* =========================
              PROJECT OVERVIEW
          ========================= */}

          {project.overview && (
            <section className="project-detail-section">

              <h3>
                Project Overview
              </h3>

              <p>
                {project.overview}
              </p>

            </section>
          )}

          {/* =========================
              MY ROLE
          ========================= */}

          {project.role && (
            <section className="project-detail-section">

              <h3>
                My Role
              </h3>

              <p className="project-role">
                {project.role}
              </p>

            </section>
          )}

          {/* =========================
              CORE FEATURES
          ========================= */}

          {project.features && project.features.length > 0 && (
            <section className="project-detail-section">

              <h3>
                Core Features
              </h3>

              <div className="project-feature-grid">

                {project.features.map((feature) => (
                  <div
                    className="project-feature-item"
                    key={feature}
                  >
                    <span>✓</span>

                    <p>
                      {feature}
                    </p>
                  </div>
                ))}

              </div>

            </section>
          )}

          {/* =========================
              TECH STACK
          ========================= */}

          {project.fullTechnologies &&
            project.fullTechnologies.length > 0 && (
              <section className="project-detail-section">

                <h3>
                  Tech Stack
                </h3>

                <div className="project-modal-technologies">

                  {project.fullTechnologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </section>
            )}

          {/* =========================
              WORKFLOW
          ========================= */}

          {project.workflow &&
            project.workflow.length > 0 && (
              <section className="project-detail-section">

                <h3>
                  Workflow
                </h3>

                <div className="project-workflow">

                  {project.workflow.map((step, index) => (
                    <div
                      className="workflow-step"
                      key={`${step}-${index}`}
                    >
                      <div className="workflow-number">
                        {index + 1}
                      </div>

                      <p>
                        {step}
                      </p>

                      {index < project.workflow.length - 1 && (
                        <span className="workflow-arrow">
                          →
                        </span>
                      )}
                    </div>
                  ))}

                </div>

              </section>
            )}

          {/* =========================
              SCREENSHOTS
          ========================= */}

          {project.screenshots &&
            project.screenshots.length > 0 && (
              <section className="project-detail-section">

                <h3>
                  Screenshots
                </h3>

                <div
                  className={`project-screenshot-grid ${
                    project.type === 'mobile'
                      ? 'project-screenshot-grid-mobile'
                      : ''
                  }`}
                >

                  {project.screenshots.map((screenshot) => (
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
                  ))}

                </div>

              </section>
            )}

          {/* =========================
              TECHNICAL HIGHLIGHTS
          ========================= */}

          {project.highlights &&
            project.highlights.length > 0 && (
              <section className="project-detail-section">

                <h3>
                  Technical Highlights
                </h3>

                <div className="project-highlight-list">

                  {project.highlights.map((highlight) => (
                    <div
                      className="project-highlight-item"
                      key={highlight}
                    >
                      <span>→</span>

                      <p>
                        {highlight}
                      </p>
                    </div>
                  ))}

                </div>

              </section>
            )}

          {/* =========================
              SYSTEM DESIGN / ERD
          ========================= */}

          {project.erd && (
            <section className="project-detail-section">

              <h3>
                System Design
              </h3>

              <div className="project-erd">

                <img
                  src={project.erd}
                  alt={`${project.title} ERD`}
                />

              </div>

            </section>
          )}

          {/* =========================
              PROJECT STATUS
          ========================= */}

          {project.status && (
            <section className="project-detail-section">

              <h3>
                Project Status
              </h3>

              <p
                className={`project-status-text ${
                  project.status === 'Completed'
                    ? 'project-status-text-completed'
                    : ''
                }`}
              >
                {project.status}
              </p>

            </section>
          )}

          {/* =========================
              ACTIONS
          ========================= */}

          {project.github && (
            <div className="project-modal-actions">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-modal-button"
              >
                View GitHub Repository
              </a>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;