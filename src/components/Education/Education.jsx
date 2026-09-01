import './Education.css';

const educationData = [
  {
    number: '01',
    period: 'October 2021 — November 2025',
    qualification:
      'Bachelor Degree of Software Engineering (Educational Software) with Honours',
    institution:
      'Universiti Pendidikan Sultan Idris (UPSI)',
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
    number: '02',
    period: 'December 2017 — December 2020',
    qualification:
      'Diploma in Information Technology (Digital Technology)',
    institution:
      'Politeknik Kuching Sarawak',
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
    <section
      id="education"
      className="education"
    >
      <div className="education-container">

        {/* HEADER */}

        <div className="education-header">

          <div className="education-section-label">
            <span className="education-label-icon">
              {'//'}
            </span>

            <span>
              Education
            </span>
          </div>

          <h2>
            Academic background
            <span>
              {' '}and foundation.
            </span>
          </h2>

          <p className="education-intro">
            My academic journey established my foundation in
            information technology before progressing into software
            engineering, application development, and system design.
          </p>

        </div>


        {/* EDUCATION RECORDS */}

        <div className="education-list">

          {educationData.map((education) => (
            <article
              className="education-card"
              key={education.qualification}
            >

              {/* INDEX */}

              <div className="education-index-column">

                <span className="education-index">
                  {education.number}
                </span>

                <div className="education-index-line"></div>

              </div>


              {/* MAIN */}

              <div className="education-main">

                <div className="education-meta">

                  <span className="education-period">
                    {education.period}
                  </span>

                  <span className="education-level">
                    {education.level}
                  </span>

                </div>


                <h3>
                  {education.qualification}
                </h3>


                <div className="education-institution">
                  <span className="education-institution-icon">
                    ◈
                  </span>

                  <span>
                    {education.institution}
                  </span>
                </div>


                <p className="education-description">
                  {education.description}
                </p>


                <div className="education-highlights">

                  {education.highlights.map(
                    (highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    )
                  )}

                </div>

              </div>


              {/* CGPA */}

              <div className="education-cgpa">

                <span className="cgpa-label">
                  CGPA
                </span>

                <div className="cgpa-value">
                  <strong>
                    {education.cgpa}
                  </strong>

                  <span>
                    / 4.00
                  </span>
                </div>

                <div className="cgpa-bar">
                  <div
                    className="cgpa-progress"
                    style={{
                      width: `${
                        (parseFloat(education.cgpa) / 4) *
                        100
                      }%`,
                    }}
                  ></div>
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