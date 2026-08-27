import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-label">About Me</p>

          <h2>
            Building practical software
            <span> for real-world problems.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Software Engineer and Full-Stack Developer with hands-on
              experience developing web applications, enterprise systems,
              backend services, and database-driven solutions.
            </p>

            <p>
              My experience includes working with Laravel, CodeIgniter 4,
              Python Flask, Oracle APEX, MySQL, PostgreSQL, JavaScript, Docker,
              and Git-based development workflows.
            </p>

            <p>
              I enjoy designing maintainable systems, implementing business
              workflows, working with databases and APIs, and turning real-world
              requirements into practical software solutions.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-card">
              <span className="about-card-number">01</span>
              <h3>Full-Stack Development</h3>
              <p>
                Building complete web applications across frontend, backend,
                APIs, and databases.
              </p>
            </div>

            <div className="about-card">
              <span className="about-card-number">02</span>
              <h3>Enterprise Applications</h3>
              <p>
                Developing workflow-driven systems designed around real
                organisational requirements.
              </p>
            </div>

            <div className="about-card">
              <span className="about-card-number">03</span>
              <h3>System Design</h3>
              <p>
                Designing maintainable application structures, databases,
                modules, and business processes.
              </p>
            </div>

            <div className="about-card">
              <span className="about-card-number">04</span>
              <h3>Continuous Learning</h3>
              <p>
                Adapting to new technologies and improving how I design,
                develop, and deliver software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;