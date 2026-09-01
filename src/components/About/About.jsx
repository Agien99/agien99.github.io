import './About.css';

function About() {
  const highlights = [
    {
      number: '01',
      icon: '</>',
      title: 'Full-Stack Development',
      description:
        'Building complete web applications across frontend, backend, APIs, and databases.',
    },
    {
      number: '02',
      icon: 'DB',
      title: 'Enterprise Applications',
      description:
        'Developing workflow-driven systems designed around real organisational requirements.',
    },
    {
      number: '03',
      icon: '⌘',
      title: 'System Design',
      description:
        'Designing maintainable application structures, databases, modules, and business processes.',
    },
    {
      number: '04',
      icon: '↗',
      title: 'Continuous Learning',
      description:
        'Adapting to new technologies and continuously improving how I design and deliver software.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* SECTION HEADER */}
        <div className="about-header">
          <div className="about-section-label">
            <span className="about-label-icon">
              {'</>'}
            </span>

            <span>About Me</span>
          </div>

          <h2>
            Building practical software
            <span> for real-world problems.</span>
          </h2>

          <p className="about-header-description">
            I enjoy turning requirements and ideas into reliable,
            maintainable software solutions.
          </p>
        </div>


        {/* MAIN CONTENT */}
        <div className="about-content">

          {/* LEFT SIDE */}
          <div className="about-story">

            <div className="about-story-line"></div>

            <div className="about-story-content">
              <span className="about-story-label">
                My Approach
              </span>

              <p className="about-lead">
                I am a Software Engineer and Full-Stack Developer with
                hands-on experience developing web applications,
                enterprise systems, backend services, and
                database-driven solutions.
              </p>

              <p>
                My experience includes working with Laravel,
                CodeIgniter 4, Python Flask, Oracle APEX, MySQL,
                PostgreSQL, JavaScript, Docker, and Git-based
                development workflows.
              </p>

              <p>
                I enjoy designing maintainable systems, implementing
                business workflows, working with databases and APIs,
                and turning real-world requirements into practical
                software solutions.
              </p>

              <a
                href="#projects"
                className="about-project-link"
              >
                Explore my projects
                <span>→</span>
              </a>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="about-highlights">

            {highlights.map((item) => (
              <article
                className="about-card"
                key={item.number}
              >
                <div className="about-card-top">

                  <div className="about-card-icon">
                    {item.icon}
                  </div>

                  <span className="about-card-number">
                    {item.number}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;