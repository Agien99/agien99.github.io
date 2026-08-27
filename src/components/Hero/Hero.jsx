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
            I build reliable web applications and enterprise systems, 
            with experience across full-stack development, backend architecture, 
            databases, APIs, and modern development workflows.
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
          <div className="profile-image-container">
            <img
              src="/images/profile/eurgien-profile.PNG"
              alt="Eurgien Anak Anthony"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;