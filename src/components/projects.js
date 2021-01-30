import React from 'react';

import Card from '../components/common/Card';

import './common/section.css';

const Projects = () => (
  <section id="projects" className="about-me white">
    <div className="section-content">
      <h2>Projects</h2>
      <div className="divider"></div>
      <div className="content content-cards">
        <Card title="NBA Tweetboard" />
        <Card title="Movie Site" />
        <Card title="Quiz Time" />
        <Card title="Nostradamus" />
      </div>
    </div>
  </section>
);

export default Projects;
