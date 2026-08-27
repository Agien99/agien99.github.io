import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
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
    title: 'Frameworks & Platforms',
    skills: [
      'Laravel',
      'Python Flask',
      'CodeIgniter 4',
      'Oracle APEX',
      'Flutter',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Oracle SQL',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'GitLab',
      'Laragon',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'AdminLTE',
    ],
  },
  {
    title: 'Other Technical Skills',
    skills: [
      'REST API',
      'MVC',
      'CRUD',
      'Role-Based Access Control',
      'Workflow Development',
      'IoT / ESP32',
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">Skills</p>

          <h2>
            Technologies I use
            <span> to build software.</span>
          </h2>

          <p className="skills-intro">
            My technical experience spans full-stack web development,
            enterprise application development, databases, APIs,
            deployment tools, and modern development workflows.
          </p>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div
              className="skill-card"
              key={group.title}
            >
              <div className="skill-card-header">
                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;