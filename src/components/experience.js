import React from 'react';
import Job from './common/job';
import './common/section.css';
import './experience.css';

const Experience = () => (
  <section className="dark">
    <div className="section-content">
      <h2>Experience</h2>
      <div className="divider"></div>
      <div className="content">
        <div className="job-wrapper">
          <Job company="Corrections Software Solutions" time="Aug 2018 - Present" title="Software Engineer" />
          <div className="job-divider"></div>
          <Job company="Junior.Golf" time="Mar 2015 - Aug 2018" title="Lead Front-End Web Developer, Project Manager, Product Designer" />
          <div className="job-divider"></div>
          <Job company="Clarity Ventures" time="Jun 2014 - Mar 2015" title="Back-End Web Developer" />
          <div className="job-divider"></div>
          <Job company="OroSolutions" time="Jun 2009 - Jun 2014" title="Development Team Manager, Web Developer" />
          <div className="job-divider"></div>
          <Job company="IBM" time="Jun 2007 - Dec 2008" title="Pre-Professional Programmer" />
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
