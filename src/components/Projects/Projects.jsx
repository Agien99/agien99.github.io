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

    // erd:
    //   '/images/projects/project_1/erd.jpg',

    // github:
    //   'https://github.com/Agien99/wellness-cafe-api',
  },

  {
    id: 2,
    title: 'PuLaMi Institute Profiling System',
    type: 'web',
    category: 'Professional / University Project',
    status: 'Live',

    description:
      'An institute profiling module developed to help students discover and review companies and schools for teaching and industrial training placements through a clean and accessible web interface.',

    images: [
      '/images/projects/project_2/overview_1.jpg',
      '/images/projects/project_2/overview_2.jpg',
    ],

    technologies: [
      'CodeIgniter 4',
      'PHP',
      'PostgreSQL',
    ],

    detailImage:
      '/images/projects/project_2/detail_main.jpg',

    overview:
      'The PuLaMi Institute Profiling System is a web-based institute profiling module developed to help students explore companies and schools available for teaching and industrial training placements. The module focuses on presenting institutional information in a clear, structured, and user-friendly way to support students during placement research and decision-making.',

    role:
      'Backend / Full-Stack Developer',

    features: [
      'Institute and organisation profiling',
      'Teaching training placement information',
      'Industrial training placement information',
      'Institution detail pages',
      'Structured institute information presentation',
      'Student-friendly browsing experience',
    ],

    fullTechnologies: [
      'CodeIgniter 4',
      'PHP',
      'PostgreSQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    workflow: [
      'Browse institute profiles',
      'Select training category',
      'Explore available institutions',
      'Open institution profile',
      'Review placement information',
    ],

    screenshots: [
      {
        image:
          '/images/projects/project_2/screenshots/latihan-mengajar.jpg',
        label:
          'Teaching Training Listing',
      },
      {
        image:
          '/images/projects/project_2/screenshots/latihan-mengajar-detail.jpg',
        label:
          'Institute Profile Detail',
      },
    ],

    highlights: [
      'Built using CodeIgniter 4 with PostgreSQL',
      'Focused on structured institute profiling',
      'Designed for teaching and industrial training discovery',
      'Supports clear presentation of placement information',
      'Developed as part of the PuLaMi system environment',
    ],

    // github:
    //   'https://github.com/Agien99/pulami_institute_profiling',

    liveDemo:
      'https://profiling.upsi.edu.my',
  },

  {
    id: 3,
    title: 'Notaku Sejarah',
    type: 'mobile',
    category: 'Mobile Application',
    status: 'Completed',

    description:
      'A cross-platform educational mobile application developed using Flutter, designed to support history learning through structured notes, quizzes, progress tracking, and revision activities.',

    images: [
      '/images/projects/project_3/overview_1.jpg',
      '/images/projects/project_3/overview_2.jpg',
    ],

    technologies: [
      'Flutter',
      'Dart',
    ],

    detailImage:
      '/images/projects/project_3/detail_main.jpg',

    overview:
      'Notaku Sejarah is an educational mobile application designed to support secondary school history learning through digital notes, chapter-based quizzes, quiz records, and result tracking. The application provides students with a structured way to review learning materials and test their understanding of selected topics.',

    role:
      'Mobile Application Developer',

    features: [
      'History notes by form and chapter',
      'Chapter-based quizzes',
      'Multiple-choice quiz questions',
      'Quiz result tracking',
      'Quiz attempt history',
      'Structured revision content',
      'Credits and application information',
    ],

    fullTechnologies: [
      'Flutter',
      'Dart',
    ],

    workflow: [
      'Select learning section',
      'Choose form / chapter',
      'Read notes or start quiz',
      'Answer quiz questions',
      'Submit quiz',
      'View result',
      'Review quiz history',
    ],

    screenshots: [
      {
        image:
          '/images/projects/project_3/screenshots/nota.jpg',
        label:
          'Nota Tab',
      },
      {
        image:
          '/images/projects/project_3/screenshots/kuiz.jpg',
        label:
          'Kuiz Tab',
      },
      {
        image:
          '/images/projects/project_3/screenshots/kredit.jpg',
        label:
          'Kredit Tab',
      },
      {
        image:
          '/images/projects/project_3/screenshots/question.jpg',
        label:
          'Chapter Quiz Question',
      },
      {
        image:
          '/images/projects/project_3/screenshots/quiz-history.jpg',
        label:
          'Quiz History',
      },
      {
        image:
          '/images/projects/project_3/screenshots/quiz-result.jpg',
        label:
          'Quiz Result',
      },
      {
        image:
          '/images/projects/project_3/screenshots/note-sample.jpg',
        label:
          'Tingkatan 1 Note Sample',
      },
    ],

    highlights: [
      'Cross-platform application built using Flutter',
      'Structured separation between notes and quizzes',
      'Chapter-based learning flow',
      'Quiz result tracking',
      'Quiz attempt history',
      'Reusable Flutter screen structure',
    ],

    // github:
    //   'https://github.com/Agien99/Notaku_Sejarah',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getStatusClass = (status) => {
    if (
      status === 'Completed' ||
      status === 'Live'
    ) {
      return 'project-status-success';
    }

    return 'project-status-development';
  };

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="projects-container">

        {/* HEADER */}

        <div className="projects-header">

          <div className="projects-section-label">
            <span className="projects-label-icon">
              {'{ }'}
            </span>

            <span>
              Featured Projects
            </span>
          </div>

          <div className="projects-header-row">

            <div>
              <h2>
                Selected work
                <span>
                  {' '}and systems I've built.
                </span>
              </h2>

              <p className="projects-intro">
                A selection of software projects demonstrating
                full-stack development, mobile development,
                business workflows, databases, system design,
                and practical application development.
              </p>
            </div>

            <div className="projects-count">
              <strong>
                {String(projects.length).padStart(2, '0')}
              </strong>

              <span>
                Featured Projects
              </span>
            </div>

          </div>

        </div>


        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
            >

              {/* PREVIEW */}

              <div
                className={`project-preview project-preview-${project.type}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    setSelectedProject(project);
                  }
                }}
              >

                <div className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </div>


                {/* WEB */}

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


                {/* MOBILE */}

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


                {/* MIXED */}

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


                {/* HOVER */}

                <div className="project-preview-overlay">

                  <div className="project-preview-action">
                    <span>
                      View Project
                    </span>

                    <span>
                      ↗
                    </span>
                  </div>

                </div>

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span
                    className={`project-status ${getStatusClass(
                      project.status
                    )}`}
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

                <div className="project-card-bottom">

                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  <button
                    type="button"
                    className="project-explore"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                  >
                    <span>
                      Explore
                    </span>

                    <span className="project-explore-arrow">
                      →
                    </span>
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* MODAL */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}

    </section>
  );
}

export default Projects;