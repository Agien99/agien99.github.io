import './Experience.css';

const experiences = [
  {
    period: 'October 2025 — Present',
    role: 'Digital Transformation Officer (F9)',
    company: 'Perbadanan Tabung Pembangunan Kemahiran (PTPK)',
    type: 'Contract for Service',
    description:
      'Contributing to the development and enhancement of MyPERKASATVET, a student loan management system developed using Oracle APEX.',
    responsibilities: [
      'Develop and enhance application modules using Oracle APEX.',
      'Implement and improve business workflows and system processes.',
      'Work with application data, SQL, and database-driven functionality.',
      'Collaborate with the development team to improve workflow and system usability.',
    ],
    technologies: [
      'Oracle APEX',
      'Oracle SQL',
      'PL/SQL',
      'JavaScript',
    ],
  },

  {
    period: 'August 2025 — September 2025',
    role: 'Student Work Scheme (Programmer)',
    company: 'Pusat Latihan Mengajar & Industri (PuLaMi), UPSI',
    type: 'Part-Time / University',
    description:
      'Worked on backend systems supporting placement management, institute profiling, and cloud-based learning.',
    responsibilities: [
      'Developed backend systems using CodeIgniter 4.',
      'Worked with PostgreSQL in development and production environments.',
      'Collaborated with academic and administrative teams.',
      'Improved workflows and overall system usability.',
    ],
    technologies: [
      'CodeIgniter 4',
      'PHP',
      'PostgreSQL',
      'JavaScript',
    ],
  },

  {
    period: 'February 2025 — July 2025',
    role: 'Full-Stack Developer',
    company: 'REDtone Sdn. Bhd.',
    type: 'Internship',
    description:
      'Developed a commission management system with workflow-driven functionality and role-based access.',
    responsibilities: [
      'Built a commission system using Python Flask, MySQL, and JavaScript.',
      'Implemented user roles, approval workflows, and commission status tagging.',
      'Used Docker and Laragon for development and deployment.',
      'Implemented a responsive administrative interface using AdminLTE.',
    ],
    technologies: [
      'Python',
      'Flask',
      'MySQL',
      'JavaScript',
      'Docker',
      'AdminLTE',
    ],
  },

  {
    period: 'July 2020 — November 2020 / May 2022 — August 2022',
    role: 'System Developer',
    company: 'Longi (Kuching) Sdn. Bhd.',
    type: 'Internship & Full-Time',
    description:
      'Worked on system development, web maintenance, and deployment responsibilities.',
    responsibilities: [
      'Developed and designed internal systems.',
      'Performed web maintenance.',
      'Handled system deployment tasks.',
      'Completed development tasks with minimal supervision.',
    ],
    technologies: [
      'Web Development',
      'System Development',
      'Deployment',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p className="section-label">Experience</p>

          <h2>
            Professional journey
            <span> and practical experience.</span>
          </h2>

          <p className="experience-intro">
            My experience spans enterprise application development,
            backend systems, workflow-driven applications, database
            development, and full-stack software engineering.
          </p>
        </div>

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <article
              className="experience-item"
              key={`${experience.company}-${index}`}
            >

              <div className="timeline-marker">
                <span></span>
              </div>

              <div className="experience-date">
                {experience.period}
              </div>

              <div className="experience-card">

                <div className="experience-card-header">

                  <div>
                    <h3>{experience.role}</h3>
                    <p className="experience-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="experience-type">
                    {experience.type}
                  </span>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="experience-responsibilities">
                  {experience.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;