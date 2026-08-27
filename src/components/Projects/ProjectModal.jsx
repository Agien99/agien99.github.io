import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="project-modal-hero">
          <img
            src={project.detailImage}
            alt={`${project.title} project preview`}
          />
        </div>

        <div className="project-modal-content">
          <div className="project-modal-header">
            <div>
              <p className="project-modal-category">
                {project.category}
              </p>

              <h2>{project.title}</h2>
            </div>

            <span className="project-modal-status">
              <span className="project-modal-status-dot"></span>
              {project.status}
            </span>
          </div>

          <section className="project-detail-section">
            <h3>Project Overview</h3>

            <p>
              {project.overview}
            </p>
          </section>

          <section className="project-detail-section">
            <h3>My Role</h3>

            <p className="project-role">
              {project.role}
            </p>
          </section>

          <section className="project-detail-section">
            <h3>Core Features</h3>

            <div className="project-feature-grid">
              {project.features.map((feature) => (
                <div className="project-feature-item" key={feature}>
                  <span>✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h3>Tech Stack</h3>

            <div className="project-modal-technologies">
              {project.fullTechnologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h3>Order Workflow</h3>

            <div className="project-workflow">
              {project.workflow.map((step, index) => (
                <div className="workflow-step" key={step}>
                  <div className="workflow-number">
                    {index + 1}
                  </div>

                  <p>{step}</p>

                  {index < project.workflow.length - 1 && (
                    <span className="workflow-arrow">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h3>Screenshots</h3>

            <div className="project-screenshot-grid">
              {project.screenshots.map((screenshot) => (
                <div
                  className="project-screenshot"
                  key={screenshot.image}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.label}
                  />

                  <p>{screenshot.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h3>Technical Highlights</h3>

            <div className="project-highlight-list">
              {project.highlights.map((highlight) => (
                <div
                  className="project-highlight-item"
                  key={highlight}
                >
                  <span>→</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          {project.erd && (
            <section className="project-detail-section">
              <h3>System Design</h3>

              <div className="project-erd">
                <img
                  src={project.erd}
                  alt={`${project.title} ERD`}
                />
              </div>
            </section>
          )}

          <section className="project-detail-section">
            <h3>Project Status</h3>

            <p className="project-status-text">
              {project.status}
            </p>
          </section>

          <div className="project-modal-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-modal-button"
              >
                View GitHub Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;