import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">
            Hi, I'm Eurgien Anak Anthony.
          </p>

          <h1 className="hero-title">
            Software Engineer
            <span>& Full-Stack Developer</span>
          </h1>

          <p className="hero-description">
            I am a passionate and adaptable full-stack developer with hands-on experience in building modern web applications using Laravel, 
            CodeIgniter 4 (CI4), and Python Flask, supported by MySQL, Docker, and Laragon for efficient development and deployment. I specialize 
            in backend architecture, API integration, and system optimization, with a strong grasp of Git-based workflows and DevOps fundamentals. 
            I also develop cross-platform mobile applications using Flutter and Dart, delivering clean, responsive, and maintainable solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              View My Work
            </a>

            <a
              href="/resume/resume.pdf"
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-card">
            <div className="code-card-header">
              <span />
              <span />
              <span />
            </div>

            <div className="code-card-body">
              <p>
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
              </p>

              <p className="code-indent">
                name:{' '}
                <span className="code-string">"Eurgien"</span>,
              </p>

              <p className="code-indent">
                role:{' '}
                <span className="code-string">
                  "Software Engineer"
                </span>,
              </p>

              <p className="code-indent">
                focus: [
              </p>

              <p className="code-double-indent">
                <span className="code-string">
                  "Full-Stack Development"
                </span>,
              </p>

              <p className="code-double-indent">
                <span className="code-string">
                  "Enterprise Applications"
                </span>,
              </p>

              <p className="code-double-indent">
                <span className="code-string">
                  "System Design"
                </span>
              </p>

              <p className="code-indent">
                ]
              </p>

              <p>{'}'};</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;