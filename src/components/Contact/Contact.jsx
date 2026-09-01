import './Contact.css';

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">

          <div className="contact-section-label">
            <span className="contact-label-icon">
              {'@'}
            </span>

            <span>
              Contact
            </span>
          </div>

          <h2>
            Let's connect
            <span>
              {' '}and build something meaningful.
            </span>
          </h2>

          <p className="contact-intro">
            I am open to software engineering opportunities,
            collaboration, and discussions related to web
            development, enterprise systems, backend development,
            and software solutions.
          </p>

        </div>


        {/* CONTACT PANEL */}

        <div className="contact-panel">

          {/* LEFT */}

          <div className="contact-message">

            <span className="contact-message-label">
              GET IN TOUCH
            </span>

            <h3>
              Have an opportunity or
              <span> project in mind?</span>
            </h3>

            <p>
              Whether you're looking for a software developer,
              discussing a potential project, or simply want to
              connect professionally, feel free to reach out.
            </p>

            <a
              href="mailto:eurgien99@gmail.com"
              className="contact-primary-button"
            >
              <span className="contact-button-icon">
                ✉
              </span>

              Send me an email

              <span className="contact-button-arrow">
                →
              </span>
            </a>

          </div>


          {/* RIGHT */}

          <div className="contact-methods">

            {/* EMAIL */}

            <a
              href="mailto:eurgien99@gmail.com"
              className="contact-method"
            >

              <div className="contact-method-icon">
                @
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  Email
                </span>

                <strong>
                  eurgien99@gmail.com
                </strong>

                <small>
                  For opportunities and collaboration
                </small>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/eurgien-anthony"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >

              <div className="contact-method-icon">
                in
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  LinkedIn
                </span>

                <strong>
                  Eurgien Anthony
                </strong>

                <small>
                  Connect with me professionally
                </small>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>


            {/* GITHUB - KEEP DISABLED FOR NOW */}

            {/*
            <a
              href="https://github.com/Agien99"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >

              <div className="contact-method-icon">
                GH
              </div>

              <div className="contact-method-content">

                <span className="contact-method-label">
                  GitHub
                </span>

                <strong>
                  Agien99
                </strong>

                <small>
                  Explore my repositories
                </small>

              </div>

              <span className="contact-method-arrow">
                ↗
              </span>

            </a>
            */}

          </div>

        </div>


        {/* BOTTOM INFO */}

        <div className="contact-bottom">

          <div className="contact-bottom-item">

            <span className="contact-bottom-icon">
              ⌖
            </span>

            <div>
              <span className="contact-bottom-label">
                Based in
              </span>

              <p>
                Petaling Jaya, Selangor, Malaysia
              </p>
            </div>

          </div>


          <div className="contact-bottom-item">

            <span className="contact-bottom-icon">
              {'</>'}
            </span>

            <div>
              <span className="contact-bottom-label">
                Portfolio
              </span>

              <a
                href="https://agien99.github.io"
                target="_blank"
                rel="noreferrer"
              >
                agien99.github.io
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;