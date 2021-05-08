import React from "react";

const Resume = ({ skillmessage, education, work, skills,certifications }) => {
  const educationHistory = education.map((ed) => {
    return (
      <div key={ed.school}>
        <h3>{ed.school}</h3>
        <p className="info">
          {ed.degree} <span>&bull;</span>
          <em className="date">{ed.graduated}</em>
        </p>
        <p>{ed.description}</p>
      </div>
    );
  });
  const workHistory = work.map((work) => {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });
  const skillSet = skills.map((skills) => {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });
  const certificationList = certifications.map((certs) => {
    return (
      <div key={certs.name}>
      <h3>{certs.name}</h3>
      <p className="info">
        {work.issuer}
        <span>expires:</span> <em className="date">{certs.expires}</em>
      </p>
      <a href={certs.link}>Verify</a>
    </div>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationHistory}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workHistory}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skillSet}</ul>
          </div>
        </div>
      </div>
      <div className="row certs">
        <div className="three columns header-col">
          <h1>
            <span>Certifications</span>
          </h1>
        </div>

        <div className="nine columns main-col">{certificationList}</div>
      </div>

    </section>
  );
};
export default Resume;
