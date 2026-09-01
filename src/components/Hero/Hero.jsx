import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-main">

          {/* LEFT */}
          <div className="hero-content">

            <div className="hero-intro">
              <span className="hero-intro-dot"></span>
              Hi, I'm
            </div>

            <h1 className="hero-name">
              Eurgien Anak
              <span> Anthony</span>
            </h1>

            <h2 className="hero-role">
              Software Engineer & Full-Stack Developer
            </h2>

            <p className="hero-description">
              I build reliable web applications and enterprise systems,
              with experience across full-stack development, backend
              architecture, databases, APIs, and modern development
              workflows.
            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="hero-button hero-button-primary"
              >
                View My Work
                <span className="button-arrow">→</span>
              </a>

              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-button hero-button-secondary"
              >
                View Resume
              </a>

              <a
                href="/resume/cover-letter.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-button hero-button-secondary"
              >
                View Cover Letter
              </a>

            </div>
          </div>


          {/* RIGHT */}
          <div className="hero-visual">

            <div className="profile-orbit">

              {/* Background glow */}
              <div className="profile-glow"></div>

              {/* Rings */}
              <div className="profile-ring profile-ring-outer"></div>
              <div className="profile-ring profile-ring-inner"></div>

              {/* Decorative dots */}
              <div className="profile-dot profile-dot-1"></div>
              <div className="profile-dot profile-dot-2"></div>
              <div className="profile-dot profile-dot-3"></div>

              {/* Developer decorations */}
              <div className="floating-tech floating-tech-code">
                &lt;/&gt;
              </div>

              <div className="floating-tech floating-tech-db">
                DB
              </div>

              <div className="floating-tech floating-tech-web">
                WEB
              </div>

              {/* Profile */}
              <div className="profile-image-wrapper">
                <img
                  src="/images/profile/eurgien-profile.png"
                  alt="Eurgien Anak Anthony"
                  className="profile-image"
                />
              </div>

            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="hero-stats">

          <div className="hero-stat">

            <div className="hero-stat-icon">
              <span>⌘</span>
            </div>

            <div className="hero-stat-content">
              <span className="hero-stat-label">
                Experience
              </span>

              <strong>
                1+ Years
              </strong>

              <small>
                Professional Experience
              </small>
            </div>

          </div>


          <div className="hero-stat">

            <div className="hero-stat-icon">
              <span>▦</span>
            </div>

            <div className="hero-stat-content">
              <span className="hero-stat-label">
                Projects
              </span>

              <strong>
                3+ Completed
              </strong>

              <small>
                Web & Mobile Projects
              </small>
            </div>

          </div>


          <div className="hero-stat">

            <div className="hero-stat-icon">
              <span>⌖</span>
            </div>

            <div className="hero-stat-content">
              <span className="hero-stat-label">
                Location
              </span>

              <strong>
                Selangor, Malaysia
              </strong>

              <small>
                Based in Malaysia
              </small>
            </div>

          </div>

        </div>


        {/* SCROLL */}
        <a
          href="#about"
          className="hero-scroll"
          aria-label="Scroll to About section"
        >
          <span className="hero-scroll-mouse">
            <span></span>
          </span>

          <span>Scroll Down</span>

          <span className="hero-scroll-arrow">
            ↓
          </span>
        </a>

      </div>
    </section>
  );
}

export default Hero;