import React from 'react';
// import Section from './common/section';
import './common/section.css';
import './about-me.css';

  // <Section
  //   title="About Me"
  //   background="white"
  //   content="My name is Mario Portillo and I have been working as a professional web developer for the past 9 years. I have experience with a wide range of technologies but enjoy JavaScript the most. When I'm not coding, I enjoy spending time with my family and playing Magic the Gathering or reading a book."
  // />

const AboutMe = () => (
  <section id="about-me" className="about-me white">
    <div className="section-content">
      <h2>About Me</h2>
      <div className="divider"></div>
      <div className="content">
        My name is Mario Portillo and I have been working as a professional web developer for the past 9 years. I have experience with a wide range of technologies but enjoy JavaScript the most. When I'm not coding, I enjoy spending time with my family and playing Magic the Gathering or reading a book.
        <div className="signature">
          Mario Portillo
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
