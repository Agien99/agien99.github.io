import { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projects = [
  {
  id: 1,
  title: 'Wellness Cafe Point of Sale System',
  type: 'mixed',
  category: 'Freelance · Full-Stack',
  status: 'In Development',

  description:
    'An integrated cafe POS and ordering system that connects counter sales, customer ordering, payment processing, kitchen operations, inventory, loyalty, reporting, and audit tracking within a single platform.',

  images: [
    '/images/projects/project_1/overview_1.jpg',
    '/images/projects/project_1/overview_2.jpg',
  ],

  technologies: [
    'Laravel',
    'MySQL',
    'JavaScript',
  ],

  detailImage:
    '/images/projects/project_1/detail_main.jpg',

  overview:
    'An integrated cafe point-of-sale and ordering platform designed to connect counter sales, customer QR ordering, kitchen preparation, payment processing, inventory management, loyalty, reporting, and audit tracking within a single system.',

  role:
    'Full-Stack Developer',

  features: [
    'POS counter ordering',
    'Customer QR ordering',
    'Kitchen Display System',
    'Customer order-status tracking',
    'Product and category management',
    'Table management',
    'Inventory auto-deduction',
    'Purchase order management',
    'Customer and loyalty management',
    'Payment handling',
    'Refund workflow',
    'Reporting and analytics',
    'Audit logging',
  ],

  fullTechnologies: [
    'Laravel 13',
    'PHP',
    'MySQL',
    'JavaScript',
    'HTML',
    'CSS',
    'Laravel Sanctum',
    'Chart.js',
  ],

  workflow: [
    'Customer places order',
    'Pending payment',
    'Payment confirmed',
    'Kitchen queue',
    'Preparing',
    'Ready',
    'Completed',
  ],

  screenshots: [
    {
      image:
        '/images/projects/project_1/screenshots/pos.jpg',
      label:
        'Point of Sale',
    },
    {
      image:
        '/images/projects/project_1/screenshots/ordering.jpg',
      label:
        'Customer Ordering',
    },
    {
      image:
        '/images/projects/project_1/screenshots/kitchen.jpg',
      label:
        'Kitchen Display',
    },
    {
      image:
        '/images/projects/project_1/screenshots/order-status.jpg',
      label:
        'Order Status Tracking',
    },
    {
      image:
        '/images/projects/project_1/screenshots/inventory.jpg',
      label:
        'Inventory Management',
    },
    {
      image:
        '/images/projects/project_1/screenshots/reporting.jpg',
      label:
        'Reporting & Analytics',
    },
  ],

  highlights: [
    'Role-based staff access',
    'Separate payment and kitchen states',
    'Payment-first kitchen workflow',
    'Atomic inventory deduction',
    'Live kitchen refresh',
    'Customer order-status polling',
    'Loyalty tier automation',
    'Soft delete support',
    'Audit trail for write operations',
  ],

//   erd:
//     '/images/projects/project_1/erd.jpg',

//   github:
//     'https://github.com/Agien99/wellness-cafe-api',
  },

  {
    id: 2,
    title: 'PuLaMi Institute Profiling System',
    type: 'web',
    category: 'Professional / University Project',
    status: 'Completed',

    description:
        'An institute profiling module developed to help students discover and review companies and schools for teaching and industrial training placements, with an emphasis on clear and accessible information presentation.',

    images: [
        '/images/projects/project_2/overview_1.jpg',
        '/images/projects/project_2/overview_2.jpg',
    ],

    technologies: [
        'CodeIgniter 4',
        'PHP',
        'PostgreSQL',
    ],
  },

  {
    id: 3,
    title: 'Notaku Sejarah',
    type: 'mobile',
    category: 'Mobile Application',
    status: 'Completed',

    description:
        'A cross-platform educational mobile application developed using Flutter, designed to support history learning through a structured and accessible digital experience.',

    images: [
        '/images/projects/project_3/overview_1.jpg',
        '/images/projects/project_3/overview_2.jpg',
    ],

    technologies: [
        'Flutter',
        'Dart',
    ],
  },

//   {
//     id: 4,
//     title: 'Project Four',
//     type: 'web',
//     category: 'Academic Project',
//     status: 'In Development',
//     description:
//       'A short overview of the project, its purpose, and the problem it was designed to solve.',
//     images: [
//       '/images/projects/project_4/overview_1.jpg',
//       '/images/projects/project_4/overview_2.jpg',
//     ],
//     technologies: [
//       'Technology',
//       'Database',
//       'Framework',
//     ],
//   },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">
            Projects
          </p>

          <h2>
            Selected work
            <span> and systems I've built.</span>
          </h2>

          <p className="projects-intro">
            A selection of software projects that demonstrate my experience
            in full-stack development, mobile application development,
            system design, business workflows, databases, and application
            development.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >

              <div
                className={`project-preview project-preview-${project.type}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                    setSelectedProject(project);
                    }
                }}
              >

                {/* =========================
                    WEB PROJECT
                ========================= */}

                {project.type === 'web' && (
                  <>
                    <div className="web-main-image">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} main preview`}
                      />
                    </div>

                    <div className="web-secondary-image">
                      <img
                        src={project.images[1]}
                        alt={`${project.title} secondary preview`}
                      />
                    </div>
                  </>
                )}

                {/* =========================
                    MOBILE PROJECT
                ========================= */}

                {project.type === 'mobile' && (
                  <div className="mobile-images">

                    <div className="mobile-device">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} mobile screen one`}
                      />
                    </div>

                    <div className="mobile-device mobile-device-secondary">
                      <img
                        src={project.images[1]}
                        alt={`${project.title} mobile screen two`}
                      />
                    </div>

                  </div>
                )}

                {/* =========================
                    MIXED PROJECT
                    LANDSCAPE + PORTRAIT
                ========================= */}

                {project.type === 'mixed' && (
                  <div className="mixed-images">

                    <div className="mixed-landscape">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} landscape preview`}
                      />
                    </div>

                    <div className="mixed-portrait">
                      <img
                        src={project.images[1]}
                        alt={`${project.title} portrait preview`}
                      />
                    </div>

                  </div>
                )}

                {/* =========================
                    HOVER OVERLAY
                ========================= */}

                <div className="project-preview-overlay">
                  <span>
                    Explore Project
                  </span>

                  <span className="project-preview-arrow">
                    ↗
                  </span>
                </div>

              </div>

              {/* =========================
                  PROJECT CONTENT
              ========================= */}

              <div className="project-content">

                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span
                    className={`project-status ${
                      project.status === 'Completed'
                        ? 'project-status-completed'
                        : 'project-status-development'
                    }`}
                  >
                    <span className="status-dot"></span>

                    {project.status}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="project-explore"
                  onClick={() => setSelectedProject(project)}
                  >
                  Explore Project
                  <span>→</span>
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>

      {selectedProject && selectedProject.id === 1 && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}

export default Projects;