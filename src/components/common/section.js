import React from 'react';
import './section.css';

const Section = ({ title, background, content }) => (
  <section className={background}>
    <div className="section-content">
      <h2>{ title }</h2>
      <div className="divider"></div>
      <div className="content">
        { content }
      </div>
    </div>
  </section>
);

export default Section;
