import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>
            Let's connect
            <span> and build something meaningful.</span>
          </h2>

          <p className="contact-intro">
            I am open to software engineering opportunities, collaboration,
            and discussions related to web development, enterprise systems,
            backend development, and software solutions.
          </p>
        </div>

        <div className="contact-grid">

          <a
            href="mailto:eurgien99@gmail.com"
            className="contact-card"
          >
            <span className="contact-card-label">Email</span>

            <h3>eurgien99@gmail.com</h3>

            <p>
              Send me an email regarding opportunities, collaboration,
              or software development discussions.
            </p>

            <span className="contact-link">
              Send Email →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/eurgien-anthony"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-label">LinkedIn</span>

            <h3>Eurgien Anthony</h3>

            <p>
              Connect with me professionally and view my career experience
              and professional updates.
            </p>

            <span className="contact-link">
              View LinkedIn →
            </span>
          </a>

          {/* <a
            href="https://github.com/Agien99"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-label">GitHub</span>

            <h3>Agien99</h3>

            <p>
              Explore my repositories, development work, and selected
              software projects.
            </p>

            <span className="contact-link">
              View GitHub →
            </span>
          </a> */}

        </div>

        <div className="contact-bottom">
          <div>
            <span className="contact-bottom-label">
              Based in
            </span>

            <p>
              Petaling Jaya, Selangor, Malaysia
            </p>
          </div>

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
    </section>
  );
}

export default Contact;