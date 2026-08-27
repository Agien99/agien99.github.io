import './Education.css';

const educationData = [
  {
    period: 'October 2021 — November 2025',
    qualification:
      'Bachelor Degree of Software Engineering (Educational Software) with Honours',
    institution: 'Universiti Pendidikan Sultan Idris (UPSI)',
    level: "Bachelor's Degree",
    cgpa: '3.30',
    description:
      'Focused on software engineering, full-stack application development, system design, educational technology, and software development practices.',
    highlights: [
      'Software Engineering',
      'Full-Stack Development',
      'System Design',
      'Educational Technology',
    ],
  },
  {
    period: 'December 2017 — December 2020',
    qualification:
      'Diploma in Information Technology (Digital Technology)',
    institution: 'Politeknik Kuching Sarawak',
    level: 'Diploma',
    cgpa: '3.24',
    description:
      'Built a foundation in information technology, programming, system development, databases, and digital technologies.',
    highlights: [
      'Information Technology',
      'Programming',
      'Database',
      'Digital Technology',
    ],
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        <div className="education-heading">
          <p className="section-label">Education</p>

          <h2>
            Academic background
            <span> and foundation.</span>
          </h2>

          <p className="education-intro">
            My academic journey established my foundation in information
            technology before progressing into software engineering,
            application development, and system design.
          </p>
        </div>

        <div className="education-list">

          {educationData.map((education) => (
            <article
              className="education-card"
              key={education.qualification}
            >

              <div className="education-card-top">

                <div className="education-period">
                  {education.period}
                </div>

                <span className="education-level">
                  {education.level}
                </span>

              </div>

              <div className="education-card-content">

                <div className="education-main">

                  <h3>{education.qualification}</h3>

                  <p className="education-institution">
                    {education.institution}
                  </p>

                  <p className="education-description">
                    {education.description}
                  </p>

                  <div className="education-highlights">
                    {education.highlights.map((highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="education-cgpa">
                  <span className="cgpa-label">CGPA</span>

                  <strong>
                    {education.cgpa}
                  </strong>

                  <span className="cgpa-total">
                    / 4.00
                  </span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;