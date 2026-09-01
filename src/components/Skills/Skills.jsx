import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'Languages',
    icon: '</>',
    description:
      'Programming and scripting languages used across backend, frontend, database, and mobile development.',
    skills: [
      'PHP',
      'Python',
      'JavaScript',
      'SQL',
      'Dart',
      'C++',
    ],
  },
  {
    number: '02',
    title: 'Frameworks & Platforms',
    icon: '{}',
    description:
      'Frameworks and platforms used to build web applications, enterprise systems, and mobile applications.',
    skills: [
      'Laravel',
      'Python Flask',
      'CodeIgniter 4',
      'Oracle APEX',
      'Flutter',
    ],
  },
  {
    number: '03',
    title: 'Databases',
    icon: 'DB',
    description:
      'Relational database technologies used for application development and data-driven systems.',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Oracle SQL',
    ],
  },
  {
    number: '04',
    title: 'DevOps & Tools',
    icon: '>_',
    description:
      'Tools used for source control, local environments, collaboration, containerisation, and development workflows.',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'GitLab',
      'Laragon',
    ],
  },
  {
    number: '05',
    title: 'Frontend',
    icon: 'UI',
    description:
      'Frontend technologies and UI tools used to build responsive and practical interfaces.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'AdminLTE',
    ],
  },
  {
    number: '06',
    title: 'Other Technical Skills',
    icon: '++',
    description:
      'Additional concepts and development practices used when designing and delivering software systems.',
    skills: [
      'REST API',
      'MVC',
      'CRUD',
      'Role-Based Access Control',
      'Workflow Development',
      'IoT / ESP32',
    ],
    wide: true,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills"
    >
      <div className="skills-container">

        {/* HEADER */}

        <div className="skills-header">

          <div className="skills-section-label">
            <span className="skills-label-icon">
              {'</>'}
            </span>

            <span>
              Technical Stack
            </span>
          </div>

          <h2>
            Technologies I use
            <span>
              {' '}to build software.
            </span>
          </h2>

          <p className="skills-intro">
            My technical experience spans full-stack web development,
            enterprise application development, databases, APIs,
            deployment tools, and modern development workflows.
          </p>

        </div>


        {/* STACK GRID */}

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <article
              className={`skill-card ${
                group.wide
                  ? 'skill-card-wide'
                  : ''
              }`}
              key={group.title}
            >

              <div className="skill-card-header">

                <div className="skill-card-title">

                  <div className="skill-card-icon">
                    {group.icon}
                  </div>

                  <div>
                    <span className="skill-card-number">
                      {group.number}
                    </span>

                    <h3>
                      {group.title}
                    </h3>
                  </div>

                </div>

                <span className="skill-count">
                  {String(group.skills.length).padStart(2, '0')}
                </span>

              </div>


              <p className="skill-description">
                {group.description}
              </p>


              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    <span className="skill-tag-dot"></span>

                    {skill}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;