import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects } from './projectData';
import './Projects.css';
import './ProjectCaseStudy.css';

function ProjectPreview({ project, index, onOpen }) {
  return (
    <button
      type="button"
      className={`project-preview project-preview-${project.type}`}
      onClick={onOpen}
      aria-label={`Explore ${project.title}`}
    >
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      {project.type === 'web' && (
        <>
          <div className="web-main-image">
            <img src={project.images[0]} alt={`${project.title} main screen`} loading="lazy" />
          </div>
          <div className="web-secondary-image">
            <img src={project.images[1]} alt={`${project.title} secondary screen`} loading="lazy" />
          </div>
        </>
      )}
      {project.type === 'mobile' && (
        <div className="mobile-images">
          <div className="mobile-device">
            <img src={project.images[0]} alt={`${project.title} mobile screen one`} loading="lazy" />
          </div>
          <div className="mobile-device mobile-device-secondary">
            <img src={project.images[1]} alt={`${project.title} mobile screen two`} loading="lazy" />
          </div>
        </div>
      )}
      {project.type === 'mixed' && (
        <div className="mixed-images">
          <div className="mixed-landscape">
            <img src={project.images[0]} alt={`${project.title} desktop screen`} loading="lazy" />
          </div>
          <div className="mixed-portrait">
            <img src={project.images[1]} alt={`${project.title} mobile screen`} loading="lazy" />
          </div>
        </div>
      )}
      {project.hasSamplePreview && (
        <span className="project-preview-sample-tag">Source-guided sample UI</span>
      )}
      <span className="project-preview-overlay" aria-hidden="true">
        <span className="project-preview-action">View Project <span>↗</span></span>
      </span>
    </button>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-section-label">
            <span className="projects-label-icon">{'{ }'}</span>
            <span>Featured Projects</span>
          </div>
          <div className="projects-header-row">
            <div>
              <h2>Selected work<span>{' '}and systems I've built.</span></h2>
              <p className="projects-intro">
                Five software case studies covering full-stack applications,
                enterprise workflows, educational technology and rider analytics.
                Explore each project's goals, implementation and illustrated process flow.
              </p>
            </div>
            <div className="projects-count" aria-label={`${projects.length} featured projects`}>
              <strong>{String(projects.length).padStart(2, '0')}</strong>
              <span>Featured Projects</span>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <ProjectPreview project={project} index={index} onOpen={() => setSelectedProject(project)} />
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${['Completed', 'Live'].includes(project.status) ? 'project-status-success' : 'project-status-development'}`}>
                    <span className="status-dot" />{project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-card-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <button type="button" className="project-explore" onClick={() => setSelectedProject(project)}>
                    <span>Explore</span><span className="project-explore-arrow">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Projects;